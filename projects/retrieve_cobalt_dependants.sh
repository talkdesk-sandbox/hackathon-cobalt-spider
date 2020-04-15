UPDATE=0
MAN="usage: retrieve_cobalt_dependants [options]

Options:
-h, --help       help
-u, --update     fetches the latest version of all repositories"

for arg in "$@"
  do
    case $arg in
      -u|--update)
      UPDATE=1
      shift
      ;;
      -h|--help)
      echo "$MAN"
      exit 0
      ;;
      *)
      echo "Unknown option: $1"
      echo "$MAN"
      exit 0
      ;;
    esac
  done

rm -f spider_tool.csv

if [ ! -d "repositories" ]; then
  echo "No repositories folder found"
  echo "Cloning..."
  ./clone_repos.sh projects.txt
fi
cd repositories 

for d in ./*/ ;
  do
    cd "$d" && echo ${PWD##*/}
    branch=$(git rev-parse --abbrev-ref HEAD)
    if test $UPDATE -eq 1; then
      echo "Updating ${PWD##*/}"
      git fetch --quiet
      git pull --rebase --quiet
    fi
    for packageFile in $(git ls-files "*package.json")
      do
          gitvar=$(git grep -E 'cobalt-react-components[\.]*[0-9.-]*\"' $packageFile)
          if test "$gitvar" != '' ; then
            packageName=$(git grep -E -h -o '.*"name": "(.*)"' $packageFile | sed -n '1 s/^.*"name": "\(.*\)".*/\1/p')
            date=$(git log --date=format:"%d/%m/%Y" -s --pretty=format:"%ad" -n 1 $packageFile)
            version=$(echo $gitvar | sed -n "s/^.*#[v]*\([0-9.-]*\).*/\1/p")
            url=$(git remote get-url origin)
            organization=$(echo $url | sed -n "s,git@github.com:\(.*\)\/.*,\1,p")
            [[ ! -z "$version" ]] && echo ${PWD##*/}","$packageName","$version","$date","$packageFile","$organization","$url | tail -r | awk -F',' '!seen[$0]++' >> ../../spider_tool.csv
          fi
       done
     cd ..
  done

cd ..
node generateJSON.js
rm spider_tool.csv

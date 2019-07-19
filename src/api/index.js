import GitHub from 'github-api';

// const CO_REACT_VERSION_REPO = 'cobalt-react-components';
// const GITHUB_OAUTH_TOKEN = '80bb6ce8fd5768401637ad491fae34cfee65c2bd';
const GITHUB_OAUTH_TOKEN = '05ffe0735201480f20dc973b74e968f8dbc2043d';
// const defaultPlaceholderVersions = {
//   cobaltReactLatestVersion: '27.0.0'
// };

// basic auth
const gh = new GitHub({
  token: GITHUB_OAUTH_TOKEN
});

const talkdesk = gh.getOrganization('talkdesk');

const projectAPI = talkdesk.getRepos().then(async ({ data }) => await data)

const repoAPI = (user, repo) => {
  return gh.getRepo(user, repo);
}

export { projectAPI, repoAPI }

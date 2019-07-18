import components from './components';
import projects from './projects';

const API_URL = 'https://api.github.com/';
const CO_REACT_VERSION_REPO = 'cobalt-react-components';
const GITHUB_OAUTH_TOKEN = 'e68416cb10d3e6b847d331940f6636ae2a0abb43';
const defaultPlaceholderVersions = {
  cobaltReactLatestVersion: '27.0.0'
};

const repoURLGenerator = (repo) => {
  return `${API_URL}repos/Talkdesk/${repo}/releases/latest?access_token=${GITHUB_OAUTH_TOKEN}`;
};

const fetchVersion = async () => {
  try {
    const co_react_api_call = await fetch(repoURLGenerator(CO_REACT_VERSION_REPO));
    const co_react_data = await co_react_api_call.json();

    return {
      cobaltReactLatestVersion: co_react_data.tag_name.replace('v', '')
    };
  } catch (error) {
    console.log(error);

    return defaultPlaceholderVersions;
  }
};

const fetchFile = async (path, repo = CO_REACT_VERSION_REPO) => {
  const data = await fetch(`${API_URL}repos/Talkdesk/${repo}/contents/${path}?access_token=${GITHUB_OAUTH_TOKEN}&type=string`);

  return data;
};


export { components, fetchFile, fetchVersion, projects };

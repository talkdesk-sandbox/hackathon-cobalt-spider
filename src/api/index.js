import GitHub from 'github-api';
import { GITHUB_TOKEN } from './github_token'

// const CO_REACT_VERSION_REPO = 'cobalt-react-components';
const GITHUB_OAUTH_TOKEN = GITHUB_TOKEN;
// const defaultPlaceholderVersions = {
//   cobaltReactLatestVersion: '27.0.0'
// };
window.COBALT_VERSION = '27.0.0';

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

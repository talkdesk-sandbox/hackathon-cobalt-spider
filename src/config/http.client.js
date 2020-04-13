import axios from 'axios'
import TokenGenerator from './token.generator'
import getEnv from './env'

const baseURL = getEnv('TALKDESK_API_URL');

async function tokenInterceptor(config) {
  const accessToken = await TokenGenerator.get();

  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${accessToken}`
    }
  }
}

const axiosInstance = axios.create({
  baseURL,
  timeout: 5000
});

axiosInstance.interceptors.request.use(tokenInterceptor);

export default () => axiosInstance;

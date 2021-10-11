const config = {
  isDev: process.env.NODE_ENV === 'development',
  isProd: process.env.NODE_ENV === 'production',
  ApplicationId: process.env.REACT_APP_MORALIS_APPLICATION_ID,
  APIURL: process.env.REACT_APP_MORALIS_API_URL,
};

export default config;

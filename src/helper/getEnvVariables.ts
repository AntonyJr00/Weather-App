export const getEnvVariables = () => {
  import.meta.env;

  return {
    API_KEY: import.meta.env.VITE_API_KEY,
    API_URL: import.meta.env.VITE_API_URL,
  };
};

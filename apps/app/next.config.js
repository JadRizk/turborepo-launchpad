const getEnv = (key) => {
  const value = process.env[key];
  if (!value) throw Error(`Missing environment variable: ${key}`);
  return value;
};

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui", "tailwind-config"],
  publicRuntimeConfig: {
    supaBaseUrl: getEnv("SUPABASE_URL"),
    supaKey: getEnv("SUPABASE_ANON_KEY"),
  },
};

export const getEnv = (name: string, defaultValue: string = ''): string => {
  const viteVar = import.meta.env[`VITE_${name}`];
  if (viteVar !== undefined) {
    return viteVar as string;
  }
  
  // Fall back to CRA format if needed (legacy support)
  // @ts-ignore - process.env may not be defined in Vite
  const craVar = process?.env?.[`REACT_APP_${name}`];
  if (craVar !== undefined) {
    console.warn(`Using legacy REACT_APP_ environment variable. Please migrate to VITE_ prefix.`);
    return craVar;
  }
  
  return defaultValue;
};

export const isDev = (): boolean => {
  return import.meta.env.DEV === true;
};

export const isProd = (): boolean => {
  return import.meta.env.PROD === true;
};
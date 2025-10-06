export const getAssetPath = (path: string) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/panorama-forum-redesign' : '';
  return `${basePath}${path}`;
};

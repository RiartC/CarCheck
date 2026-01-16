/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',  // Für statischen Export
  basePath: '/CarCheck',  // Ihr GitHub Repo-Name
  images: {
    unoptimized: true,  // GitHub Pages unterstützt keine Image Optimization
  },
};

export default nextConfig;

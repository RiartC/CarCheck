/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',  // Für statischen Export (GitHub Pages)
  images: {
    unoptimized: true,  // GitHub Pages unterstützt keine Image Optimization
  },
};

export default nextConfig;

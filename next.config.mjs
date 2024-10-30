/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./src/app/styles'],
    prependData: `@use "@/app/styles/var" as *;`
  }
};

export default nextConfig;

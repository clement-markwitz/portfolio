/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // Obligatoire pour 'output: export' si on utilise <Image>
    },
};

export default nextConfig;

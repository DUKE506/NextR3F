/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    async rewrites() {    // 추가
    return [
        {
        source: '/:title',
        destination: '/[title]',
        },
    ]
    },
    webpack: (config) => {
    config.externals.push({
        'sharp': 'commonjs sharp',
        'canvas': 'commonjs canvas'
    })
    return config
    }
};

export default nextConfig;

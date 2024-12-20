/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    async headers() {
        return [
            {
                source: '/models/:path*',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'model/gltf-binary'
                    }
                ],
            },
        ]
    },
    webpack: (config) => {
        config.externals.push({
            'sharp': 'commonjs sharp',
            'canvas': 'commonjs canvas'
        })

        config.module.rules.push({
            test: /\.(glb|gltf)$/,
            type: 'asset/resource',
            generator: {
                filename: 'models/[name][ext]'
            }
        })
        return config
    }
};

export default nextConfig;
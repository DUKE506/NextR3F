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
                // public 폴더에 직접 저장
                filename: 'static/models/[name][ext]'
            }
        })
        return config
    },
     // 정적 파일 처리를 위한 설정 추가
     async rewrites() {
        return [
            {
                source: '/static/models/:path*',
                destination: '/models/:path*'
            }
        ]
    }
};

export default nextConfig;
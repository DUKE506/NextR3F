/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    // 정적 자산에 대한 헤더 추가
    async headers() {
        return [
            {
                source: '/:path*.glb',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'model/gltf-binary'
                    }
                ]
            }
        ]
    },
    webpack: (config) => {
        config.externals.push({
            'sharp': 'commonjs sharp',
            'canvas': 'commonjs canvas'
        })

        // GLB 파일 처리 규칙 단순화
        config.module.rules.push({
            test: /\.(glb|gltf)$/,
            type: 'asset/resource'
        })
        return config
    },
    
};

export default nextConfig;
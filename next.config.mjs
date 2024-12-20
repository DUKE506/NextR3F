/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    async rewrites() {
        return [
            {
                source: '/models/:path*',
                destination: '/public/models/:path*',  // public 폴더의 models 디렉토리로 연결
            }
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
            // public 폴더 내의 models 디렉토리에 있는 파일들을 처리
            filename: 'static/models/[name][ext]'  // [hash] 제거하고 원본 파일명 유지
        }
    })
    return config
    }
};

export default nextConfig;

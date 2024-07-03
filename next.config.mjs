/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        domains: ['massage.neo-lines.com'],
    },
    webpack(config, { isServer }) {
        // Пример настройки splitChunks для клиентских и серверных бандлов
        config.optimization.splitChunks = {
            chunks: 'all',
            minSize: 20000,
            maxSize: 70000,
        };

        if (!isServer) {
            config.optimization.minimize = true;
        }

        return config;
    },
};

export default nextConfig;



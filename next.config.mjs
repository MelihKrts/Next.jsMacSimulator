import withPWA from "next-pwa";
import withBundleAnalyzer from '@next/bundle-analyzer';

const isDev = process.env.NODE_ENV === "development";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config) => {
        config.cache = {
            type: 'filesystem',
            buildDependencies: {
                config: [__filename],
            },
        };
        return config;
    },
};

export default withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
})(withPWA({
    dest: "public",
    disable: isDev,
    ...nextConfig,
}));

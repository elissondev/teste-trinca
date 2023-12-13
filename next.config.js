/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    env: {
        API_URL: process.env.API_URL,
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/auth/login',
                permanent: true,
            },
        ]
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/styles')],
    }
}

module.exports = nextConfig

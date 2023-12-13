/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
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
    },
}

module.exports = nextConfig

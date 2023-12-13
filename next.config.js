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
    async headers() {
        return [
            {
                source: '/path/(.*)',
                "headers": [
                    { "key": "Access-Control-Allow-Credentials", "value": "true" },
                    { "key": "Access-Control-Allow-Origin", "value": "*" }, // Change this to specific domain for better security
                    {
                        "key": "Access-Control-Allow-Methods",
                        "value": "GET,OPTIONS,PATCH,DELETE,POST,PUT"
                    },
                    {
                        "key": "Access-Control-Allow-Headers",
                        "value": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
                    }
                ],
            },
        ];
    },
}

module.exports = nextConfig

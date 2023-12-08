const nextJest = require('next/jest')

const createJestConfig = nextJest({
    // Caminho do app Next.js para carregar os arquivos next.config.js e .env em seu ambiente de teste
    dir: './',
})

// Configurações personalizadas do Jest
const customJestConfig = {
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
    setupFilesAfterEnv: ['./jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
}

// createJestConfig é exportado desta forma para garantir que next/jest possa carregar a configuração Next.js que é assíncrona
module.exports = createJestConfig(customJestConfig)
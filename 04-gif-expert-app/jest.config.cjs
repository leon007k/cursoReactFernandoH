// eslint-disable-next-line no-undef
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  moduleNameMapper: {  // <--- esta configuracion permite que jest pueda importar archivos css y less, y los ignora
    '^.+\\.(css|less)$': '<rootDir>/config/CSSStub.js',
    "^react$": "<rootDir>/node_modules/react"
  }
}
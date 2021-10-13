module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    ['@babel/preset-react', { runtime: 'automatic' }]
  ]
};

// https://babeljs.io/docs/en/babel-preset-react/#react-automatic-runtime

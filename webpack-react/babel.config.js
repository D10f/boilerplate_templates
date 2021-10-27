module.exports = {
  presets: [
    '@babel/preset-env',
    [ '@babel/preset-react', { automatic: true } ],
    '@babel/preset-typescript',
  ],
  plugins: [
    'react-refresh/babel'
  ]
};

// https://babeljs.io/docs/en/babel-preset-react/#react-automatic-runtime

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    es6: true
  },
  plugins: [
    'html',
    'bes'
  ],
  rules: {
    'indent': ['warn', 2], //warn error
    'no-unused-vars': [0, {"vars": "all", "args": "none"}],
    "quotes": [0],//引号类型 `` "" ''
    "bes/disabled-jQuery-proto": ['error'],
    // allow async-await
    'generator-star-spacing': 'off',
    //不检查句尾分号
    'semi': [1,"always"],
    //总是检查句尾分号，并给出错误提示。
    //'semi': ["error", "always"]
  }
};
 
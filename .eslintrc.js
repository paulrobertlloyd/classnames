module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["xo", "prettier"],
  ignorePatterns: ["_site"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error"],
  },
};

module.exports = {
  extends: ['eslint-config-airbnb-base'].map(require.resolve),
  plugins: ['qunar'],
  rules: {
    // 函数复杂度
    complexity: 'off',
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'class-methods-use-this': 'off',
    // 强制对象的最后一项不能有逗号
    'comma-dangle': ['error', 'never'],
    'no-alert': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    // 允许在 for 循环中使用自增/自减
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    // 强制 eslint-disable 后必须跟具体规则名称
    'qunar/no-abusive-eslint-disable': 'error',
    // 强制要求数组长度做比较运算
    'qunar/explicit-length-check': 'error'
  }
};

module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  rules: {
    // 要求或禁止使用分号代替 ASI
    semi: [2, 'always'],
    // 强制使用一致的反勾号、双引号或单引号
    quotes: [1, 'single'],
    // 如果一个变量从未被重新赋值，使用 const 声明会更好
    'prefer-const': 'error',
    // 强制在对象字面量的键和值之间使用一致的空格
    'key-spacing': [0, { beforeColon: false, afterColon: true }],
    // 强制 typeof 表达式与有效的字符串进行比较
    'valid-typeof': 2,
    // 这个规则可以强制或不允许在箭头函数体周围使用大括号
    'arrow-body-style': 0,
    // 将被解析为模块并检查exports的文件扩展名列表
    'import/extensions': 0,
    // ignore配置webpack配置的别名
    'import/no-unresolved': [
      0,
      {
        ignore: ['antd'],
      },
    ],
    // 不导入无关的依赖项
    'import/no-extraneous-dependencies': 0,
    // 导入首选默认导出
    'import/prefer-default-export': 0,
    // 禁止console
    'no-console': ['error', { allow: ['warn', 'info', 'error'] }],
    // 防止因修改或重新分配函数参数而引起的非预期行为
    'no-param-reassign': 'warn',
    // 消除未使用的变量，函数和函数的参数
    'no-unused-vars': 0,
    // 不允许将指定的名称作为导出的名称使用
    'no-restricted-exports': 0,
    // 禁止在 case 或 default 子句中出现词法声明
    'no-case-declarations': 0,
    // prettier格式化
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        usePrettierrc: false,
        fileInfoOptions: {
          withNodeModules: true,
        },
      },
    ],
    // 使用函数式组件的写法、所以需要配置该选项，并且使用箭头函数
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    // 防止使用危险的JSX属性
    'react/no-danger': 'warn',
    // 限制哪些文件可以使用 JSX 语法
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.ts', '.tsx'],
      },
    ],
    // 在JSX中启用或者禁用不必要的大括号
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    // 防止没有children的组件的额外结束标签
    'react/self-closing-comp': 'error',
    // 防止在数组中遍历中使用数组key做索引
    'react/no-array-index-key': 'error',
    // 强制禁止使用展开运算符（spread operator）来传递props
    'react/jsx-props-no-spreading': 0,
    // 使用JSX时防止丢失React
    'react/react-in-jsx-scope': 0,
    // 当启用这个规则后，如果组件定义了属性但是没有为该属性设置默认值，就会产生 ESLint 的警告
    'react/require-default-props': 0,
    // 禁止将 children 作为一个 prop
    'react/no-children-prop': 'error',
    // 道具类型验证
    'react/prop-types': 0,
    // any类型的警告
    '@typescript-eslint/no-explicit-any': 'warn',
    // 禁止定义空的接口
    '@typescript-eslint/no-empty-interface': 'warn',
    // 类型推断
    '@typescript-eslint/no-inferrable-types': 0,
    // 无变量要求
    '@typescript-eslint/no-var-requires': 0,
    // 没被引用的变量
    '@typescript-eslint/no-unused-vars': 'error',
    // import 排序
    'import/order': [
      'error',
      {
        groups: ['external', 'builtin', ['parent', 'sibling', 'index'], 'type'],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'next/**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@mui/**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@turbo/**',
            group: 'builtin',
            position: 'after',
          },
          {
            pattern: '@components/**',
            group: 'builtin',
            position: 'after',
          },
          {
            pattern: '@*',
            group: 'builtin',
            position: 'after',
          },
          {
            pattern: '*.css',
            group: 'builtin',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    // 检查 Hook 的规则
    'react-hooks/rules-of-hooks': 'warn',
    // 检查 effect 的依赖
    'react-hooks/exhaustive-deps': 'warn',
    // 禁止项目导入特定模块
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: '@mui/material/styles',
            message: '不要使用@mui的styled，请使用@emotion/styled作为替代',
          },
          {
            name: '@mui/icons-material',
            message: '请改为@mui/icons-material/xxx的方式',
          },
          {
            name: 'next/link',
            message: '请使用@turbo/ui/NextLink',
          },
        ],
      },
    ],
  },
  globals: {
    Kakao: true,
  },
};

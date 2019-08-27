# 敏捷开发实战营


## 配置说明

此项目使用:

- 语言: TypeScript
- 测试框架: Jest
- 代码格式化工具: Prettier  # Prettier 只负责格式化代码
- 代码检查工具: ESLint      # 其他如“存在未使用的变量”、“没有用全等符号”等提示都由 ESLint 给出

### TypeScript

```bash
$ npm i -D typescript ts-node

# generate the config file
$ tsc --init
```

```bash
# run .ts file directly
$ ts-node index.ts
```

### Jest

```bash
$ npm i -D jest ts-jest @types/jest

# generate the config file
$ npx ts-jest config:init
```

```bash
$ npx jest
```

VS Code Jest plugin

```bash
$ ext install orta.vscode-jest
```

### Prettier

```bash
$ npm i -D prettier
```

Add _.prettierrc.js_

```js
module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
}
```

VS Code Prettier plugin

```bash
$ ext install esbenp.prettier-vscode
```

Add _.vscode/settings.json_

```json
{
  "editor.formatOnSave": true,
  "prettier.eslintIntegration": false
}
```

PS: 如果保存时不会自动格式化文件，尝试手动运行一次格式化命令，在跳出的格式化工具选择弹窗中选择 Prettier 后，以后就正常了。

### ESLint

```bash
$ npm i -D eslint
$ npm i -D eslint-config-standard eslint-plugin-standard
           eslint-plugin-node eslint-plugin-import eslint-plugin-promise
$ npm i -D eslint-config-prettier
$ npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin

# generate the config file
$ npx eslint --init
```

Modify the ESLint config file _.eslintrc.js_ as follows:

```js
module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  // we use "Standard" style guide, but hide the rules conflict with prettier
  extends: [
    'plugin:@typescript-eslint/recommended',
    'standard',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  rules: {},
}
```

And then _.vscode/settings.json_ add one line (as follows) to enable TypeScript validation.

```json
{
  "eslint.validate": ["javascript", "typescript"]
}
```

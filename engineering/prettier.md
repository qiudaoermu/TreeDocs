## prettier

1.  vscode 安装 **prettier**
2.  打开 vscode formatSave
```json
"editor.formatOnSave": false
```
3.  配置 vscode settings 默认 formatter

```json
 "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
```

4.  工程根目录新建 **.prettierrc.js**

```js
module.exports = {
  //重点✨
  arrowParens: "avoid",
  trailingComma: "none",
  //禁止默认末尾自动添加逗号
  semi: true,
  //对内容使用单引号
  //对象属性添加空格
  bracketSpacing: true
};
```

## 原理

1. vscode 保存钩子，调用 prettier 插件读取 prettierrc.js 属性

2. 针对当前文件类型，调用对应的 parser

3. 对当前文件进行语法分析，对应的格式化

优点：可 lint 多种文件

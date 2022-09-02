## eslint 配合vscode 不仅可以检测代码，还可以格式化代码。
1. npm 全局安装 eslint
```shell
npm i eslint -g
```
2. vscode 安装 eslint
3. 添加以下配置,使编辑器在保存时自动根据eslint规则格式化，不需要再配置prettier。
```json
"editor.codeActionsOnSave": {
    "source.fixAll": true
},
/* 关闭编辑器自带保存格式化功能，此功能会用Vetur进行格式化。*/
"editor.formatOnSave": false
```

缺点：只针对特定文件，css markdown无法lint；
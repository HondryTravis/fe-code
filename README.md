# 🤖 前端代码生成器 🌈

很多前端同学，每日不仅要忙于内卷，还要忙于奔波在重复的业务逻辑期间，所以我们索性开发了这样一款工具，帮助大家可以直接根据接口生成 CURD 的全部代码，让大家生活多些快了，功能 todolist：

> - 根据接口生成 ts 的接口声明文档
> - 根据接口直接生成 Vue+TS(js 代码)
> - 根据接口直接生成 React+TS(js 代码)
> - 定制选择指定 UI 组件库，直接根据接口生成
> - 将 JavaScript 代码直接生成 TypeScript 代码

<img src="./assets/logo.png" alt="logo" style="zoom:20%;" />

---

## ① 基础命令

```shell
#查看版本号
fe-code -V
#查看帮助文档
fe-ccode --help
#利用配置文件生成代码
fe-code -c 配置文件 api2code ts -u http://api地址 -o 生成文档地址
#接口生成TS代码帮助文档
fe-code api2code --help
```

<img src="./assets/hello.png" alt="logo" style="zoom:38%;" />

# Vue3.0 Practicing

## Monorepo 管理包

monorepo 是一种将多个 package 放在一个 repo 中的代码管理模式

Vue3中 使用 yarn workspace + lerna 来管理项目

```js
"workspaces": [
    "packages/*"
]
```

> 通过 workspaces 来指定需要管理的模块

## 基于 Lerna 

lerna 是在js项目中用来管理多个 package 的工具

全局安装

```bash
npm install lerna -g
lerna init
```

常用命令

```bash
# 安装依赖生成软链接
lerna bootstrap
# 查看所有包
lerna ls
# 发布
lerna publish
```

## 项目结构

* reactivity:响应式系统
* runtime-core:与平台无关的运行时核心 (可以创建针对特定平台的运行时 - 自定义渲染器)
* runtime-dom: 针对浏览器的运行时。包括DOM API，属性，事件处理等
* runtime-test:用于测试
* server-renderer:用于服务器端渲染
* compiler-core:与平台无关的编译器核心
* compiler-dom: 针对浏览器的编译模块
* compiler-ssr: 针对服务端渲染的编译模块
* template-explorer：用于调试编译器输出的开发工具
* shared：多个包之间共享的内容
* vue:完整版本,包括运行时和编译器

```shell
                                    +---------------------+
                                    |                     |
                                    |  @vue/compiler-sfc  |
                                    |                     |
                                    +-----+--------+------+
                                          |        |
                                          v        v
                      +---------------------+    +----------------------+
                      |                     |    |                      |
        +------------>|  @vue/compiler-dom  +--->|  @vue/compiler-core  |
        |             |                     |    |                      |
   +----+----+        +---------------------+    +----------------------+
   |         |
   |   vue   |
   |         |
   +----+----+        +---------------------+    +----------------------+    +-------------------+
        |             |                     |    |                      |    |                   |
        +------------>|  @vue/runtime-dom   +--->|  @vue/runtime-core   +--->|  @vue/reactivity  |
                      |                     |    |                      |    |                   |
                      +---------------------+    +----------------------+    +-------------------+
```
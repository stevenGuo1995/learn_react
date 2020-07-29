这是一个包含React基本知识的 React项目。

开始之前，默认您已经掌握JavaScript + html + css 了哦，让我们开始吧。
# 01 React 安装
## 1.1 通过 npm 使用 React
通过npm安装react需要先安装nodejs，去官网安装就行，不再赘述。

国内使用 npm 速度很慢，你可以使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:

### 1.1.1 配置cnpm (国外的同学请忽略)

#### 安装cnpm

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

#### 配置npm 淘宝源

```bash
npm config set registry https://registry.npm.taobao.org
```

这样就可以使用 cnpm 命令来安装模块了：
```bash
cnpm install [name]
```
更多信息可以查阅：http://npm.taobao.org/

### 1.1.2 使用 create-react-app 快速构建 React 开发环境
create-react-app 是来自于 Facebook，通过该命令我们无需配置就能快速构建 React 开发环境。

create-react-app 自动创建的项目是基于 Webpack + ES6 。

执行以下命令创建项目：

```bash
$ npx create-react-app my-app
$ cd my-app/
$ npm start
```

### 新建 ts 格式的 react app

```bash
npx --ignore-existing create-react-app . --template typescript
```

### git 报错
如果遇到 git commit时报如下错误

```bash
× npm run lint-staged:js:
npm ERR! code ELIFECYCLE
npm ERR! errno 1
```
安装这个东东就可以了
```bash
npm install --save-dev pre-commit
```

# 02 React 使用
安装完成后，会发现在 [my-app]文件夹里生成了一个react项目，目录结构如下：
```bash
my-app/
  README.md
  node_modules/     # 包含一些依赖，贼大，慎点
  package.json      # 包含依赖包的版本信息
  .gitignore        # git 忽略文件
  public/           # 一些资源文件
    favicon.ico
    index.html
    manifest.json
  src/              # 源码，主要在这里开发
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```
我们先把src中的内容删掉，从头开始构建一个React项目。

## 2.1 JSX语法
JSX 是一个看起来很像 XML 的 JavaScript 语法扩展，相当于 js + xml。

我们不需要一定使用 JSX，但它有以下优点：
* JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化。
* 它是类型安全的，在编译过程中就能发现错误。
* 使用 JSX 编写模板更加简单快速。

在 JSX 语法中，在大括号内写 js 表达式，<>对里写xml，如果存在标签结构，并且标签结构有多行，则需要用小括号括起来。

## 2.2 元素渲染

## 2.3 组件
组件，从概念上类似于 JavaScript 函数。它接受任意的入参（即 “props”），并返回用于描述页面展示内容的 React 元素。 
React 是由成千上万的组件构成的。
组件的后缀可以是js/ts, 也可以是jsx/tsx。

## 2.4 props属性
props 不可被修改

## 2.5 state

## 2.6 生命周期函数
函数列表:
* componentWillMount: 在组件渲染之前执行 
* componentDidMount: 在组件渲染之后执行
* shouldComponentUpdate: 返回true/false, true代表允许改变，false代表不允许改变
* componentWillUpdate: 在数据改变之前执行
* componentDidUpdate: 数据修改完成
* componentWillReceiveProps: props发生改变（爸爸改了它）
* componentWillUnmount: 组件卸载前执行
# learn_react
学习react的使用

# 01 React 安装
## 1.1 通过 npm 使用 React

国内使用 npm 速度很慢，你可以使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:

### 1.1.1 配置cnpm

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
$ cnpm install -g create-react-app
$ create-react-app my-app
$ cd my-app/
$ npm start
```

### 新建 ts 格式的 react app

```bash
npx --ignore-existing create-react-app . --template typescript
```

### git 报错
git commit时报错

```bash
× npm run lint-staged:js:
npm ERR! code ELIFECYCLE
npm ERR! errno 1
```
安装这个东东就可以了
```bash
npm install --save-dev pre-commit
```

# learn_react
学习react的使用

### 配置cnpm

#### 安装cnpm

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

#### 配置npm 淘宝源

```bash
npm config set registry https://registry.npm.taobao.org
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

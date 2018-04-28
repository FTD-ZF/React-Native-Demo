#### 涉及主要技术
```
项目主架构:

  react-native,
  redux,
  redux-saga,
  react-navigation,

```

#### 项目初始化

```
git clone git@github.com:zhaokera/React-Native-Demo.git

cd React-Native-Demo-master

yarn install

react-native run-ios (android) 

```


**项目结构**

```
src                         // Ract Native
├── commons                 // 公共模块
│    ├── assets             // 资源文件(图片等)
│    └── styles             // 公共样式和颜色
├── components              // 组件库
│    ├── Icon               // 图标库
│    ├── Navigation         // 导航栏
│    └── NavigationButton   // 导航栏按钮
├── infrastructure          // redux部分
│    ├── actions            // action
│    ├── constants          // constants
│    ├── reducers           // reducer
│    ├── sagas              // redux saga
│    ├── selectors          // 过滤以及准备view层需要的数据
│    └── store              // store
├── pages                   // 具体业务模块             
├── routers                 // 路由部分
│    ├── index.js           // page模块聚合页
│    └── app.js             // 导航注册
└── root.js                 // 入口页
```



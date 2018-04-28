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

**关于Redux的理解** <br>
前提:React有props和state: props意味着父级分发下来的属性，state意味着组件内部可以自行管理的状态，并且整个React没有数据向上回溯的能力，也就是说数据只能单向向下分发，或者自行内部消化。

Redux三个要素：
a. action是纯声明式的数据结构，只提供事件的所有要素，不提供逻辑。
b. reducer是一个匹配函数，action的发送是全局的：所有的reducer都可以捕捉到并匹配与自己相关与否，相关就拿走action中的要素进行逻辑处理，修改store中的状态，不相关就不对state做处理原样返回。
c. store负责存储状态并可以被react api回调，发布action.

做好以上流程Redux和React就可以工作了。简单地说就是：
1.顶层分发状态，让React组件被动地渲染。
2.监听事件，事件有权利回到所有状态顶层影响状态。


**关于Redux-Saga的理解**

# myRedux
手动实现redux状态管理

Index.js声明全局变量context（store）

子组件Content.js,Header.js,ThemeSwitch.js中
获取context，支持继承颜色或者更改颜色

## 细节
sotre中暴露了三个变量（getStates, dispath, subscribe）
分别为返回实例
修改sotre
观察者模式更新view的函数

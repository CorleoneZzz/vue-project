## 组件化思维与技巧之京东金融实战

本项目使用的是Vue(2.5.9)实现的组件化课程，侧重思维与方法的训练。在模块化方面不仅涉及常规的JS还有CSS，CSS的模块化使用Sass组织代码，将模块化设计做到极致。在构建部分采用webpack（3.10.0） 和 npm scripts独立完成，不依赖任何第三方的脚手架。

**体验地址**

<img src="./static/enter.png" alt="体验地址" width="160" height="160">

请使用手机扫码体验，微信或者浏览器的扫一扫都可以的。

### 安装

```shell
git clone https://github.com/Guobinze/vue-project/tree/master/JDFinance.git
cd JDFinance
npm install
```

### 项目结构


<table>
  <thead>
    <tr>
      <th>文件名称</th>
      <th>功能名称</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>router</td>
      <td>vue-router部分</td>
    </tr>
    <tr>
      <td>home</td>
      <td>首页</td>
    </tr>
    <tr>
      <td>money</td>
      <td>理财</td>
    </tr>
    <tr>
      <td>ious</td>
      <td>白条</td>
    </tr>
    <tr>
      <td>raise</td>
      <td>众筹</td>
    </tr>
    <tr>
      <td>special</td>
      <td>活动页</td>
    </tr>
  </tbody>
</table>


export default `/* 自定义样式，实时生效，浏览器实时缓存 */

/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
.layout {
  
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
p {
    line-height: 1.9em !important;
    color: #34495e !important;
    -webkit-font-smoothing: unset !important;
    font-family: -apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Helvetica Neue","PingFang SC","Hiragino Sans GB","Microsoft YaHei",Arial !important;
}

/* 一级标题 */
h1 {
}

/* 一级标题内容 */
h1 span {
}

/* 一级标题修饰 请参考有实例的主题 */
h1:after {
}

/* 二级标题 */
h2 {
  border-bottom: 2px solid #42b983;
  font-size: 1.3em;
}

/* 二级标题内容 */
h2 span {
  display: inline-block;
  font-weight: bold;
  background: #42b983;
  color: #ffffff;
  padding: 3px 0px 1px;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}

h2 span.content {
    padding-left: 10px;
    padding-right: 10px;
}

/* 二级标题修饰 请参考有实例的主题 */
h2:after {
  display: inline-block;
  content: " ";
  vertical-align: bottom;
  border-bottom: 36px solid #efebe9;
  border-right: 20px solid transparent;
}

/* 三级标题 */
h3 {
  
  display: inline;
  border-bottom: 2px solid #42b983;
    background: linear-gradient(to bottom,transparent 60%,rgba(66,1185,131,.3) 0) no-repeat;
}

/* 三级标题内容 */
h3 span {
  color: #1a1a1a;
 padding-right: 10px;
}

/* 三级标题修饰 请参考有实例的主题 */
h3:after {
}

/* 列表内容 */
li {
}

/* 引用
 * 左边缘颜色 border-left-color: black;
 * 背景色 background: gray;
 */
blockquote {
    border-left-color: #42b983 !important;
    color: #858585;
    background: #fcfcfc !important;
}

/* 引用文字 */
blockquote p {
}

/* 链接 */
a {
  color: #42b983 !important;
  border-bottom: none !important;
}

/* 加粗 */
strong {
}

/* 斜体 */
em {
}

/* 加粗斜体 */
strong em {
}

/* 删除线 */
del {
}

/* 分隔线
 * 粗细、样式和颜色
 * border-top: 1px solid #3e3e3e;
 */
hr {
}

/* 图片
 * 宽度 width: 80%;
 * 居中 margin: 0 auto;
 * 居左 margin: 0 0;
 */
img {
}

/* 图片描述文字 */
figcaption {
}

/* 行内代码 */
p code, li code {
  color: rgb(239, 112, 96) !important;
}

/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
pre code {
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
table tr th,
table tr td {
}

/* 脚注文字 */
.footnote-word {
  color: #ff3502 !important;
}

/* 脚注上标 */
.footnote-ref {
  color: rgb(239, 112, 96) !important;
}

/* "参考资料"四个字 */
.footnotes-sep {
}

/* 参考资料编号 */
.footnote-num {
}

/* 参考资料文字 */
.footnote-item p { 
}

/* 参考资料解释 */
.footnote-item p em {
}`;

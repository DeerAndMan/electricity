<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style>
#app{
  font-family: 'fira code';
  box-sizing: border-box;
  /* padding: 0px 14px; */
  color: #1d1d1f;
  min-width: 419px;
  background: #fbfbfd;
}
div::selection,
p::selection,
span::selection {
  background: #e9573f;
  border-color: #e9573f;
  color: #FFFFFF;
}
#nprogress .bar {
  background: red !important;
}
button{
  outline: none;
}
/* 表格表头 超出部分隐藏 */
.el-table__my-header-ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* 黑暗模式 */
/* @media (prefers-color-scheme: light) {
  html {
    filter: invert(100%);
  }
} */
</style>
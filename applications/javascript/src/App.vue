<!--
 * @Description: In User Settings Edit
 * @Author: pangyu
 * @Date: 2019-10-16 16:50:20
 * @LastEditors: pangyu
 * @LastEditTime: 2019-10-21 16:57:46
 -->
<template>
  <div id="javascript">
    <div id="javascript-nav">
      <router-link to="/javascript/home">Home</router-link> |
      <router-link to="/javascript/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#javascript {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#javascript-nav {
  padding: 30px;
}

#javascript-nav a {
  font-weight: bold;
  color: #2c3e50;
}

#javascript-nav a.router-link-exact-active {
  color: #42b983;
}
</style>

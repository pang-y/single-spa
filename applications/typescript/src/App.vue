<!--
 * @Description: In User Settings Edit
 * @Author: pangyu
 * @Date: 2019-10-16 16:50:20
 * @LastEditors: pangyu
 * @LastEditTime: 2019-10-21 17:09:34
 -->
<template>
  <div id="typescript">
    <div id="typescript-nav">
      <router-link to="/typescript/home">Home</router-link> |
      <router-link to="/typescript/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#typescript {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#typescript-nav {
  padding: 30px;
}

#typescript-nav a {
  font-weight: bold;
  color: #2c3e50;
}

#typescript-nav a.router-link-exact-active {
  color: #42b983;
}
</style>

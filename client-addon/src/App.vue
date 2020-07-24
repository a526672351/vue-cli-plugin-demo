<template>
  <div id="app">
    <VueTabs :tab-id.sync="tabId" style="height: 100%;position: relative;">
      <VueTab id="home" label="首页">
        <div class="tab-content">
          <Home ></Home>
        </div>
      </VueTab>
      <VueTab id="about" label="关于我们">
        <div class="tab-content">
          <About ></About>
        </div>
      </VueTab>
    </VueTabs>
  </div>
</template>

<script>
import About from "@/views/About";
import Home from "@/views/Home";

export default {
  name: "app",
  components: {
    About,
    Home
  },
  data() {
    return {
      tabId: "home",
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

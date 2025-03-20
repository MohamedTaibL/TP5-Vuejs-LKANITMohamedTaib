<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/addjob" >Add Job</router-link> |
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f0f2f5;
  padding: 20px;
}

nav {
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  border-radius: 5px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
  text-decoration: none;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #42b983;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
  import Home from './views/Home.vue'; // Import the Home component
  import FilterNav from './components/FilterNav.vue';

  export default {
    components: {
    },
    data() {
      return {
      }
    },
    
  }
</script>

<template>
  <header>
    <router-link to="/">
      <h1><span>Vue</span>Movie</h1>
    </router-link>
  </header>
  <main>
    <router-view/>
  </main>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira sans', sans-serif;
}

body{
  background-color: #35495E;
}

main{
  padding: 0 20px;
}

header{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  background-color: #35495E;
  box-shadow: 5px 6px 10px rgba(0,0,0,0.25);
}
a{
  text-decoration: none;
}
h1{
  color: #FFF;
  font-size: 27px;
}
span{
  color:#42B883
}
</style>

<template>
  <div id="app">
    <h1 style="margin: 0px;">2020 coroutines Friendship Meter</h1>
    <button class="submit-button">
                  <a class="create-link" href="https://naresh-khatri.github.io/quiz-game/#/">Create a Dare!</a>  
    </button>
    <router-view/>
  </div>
</template>

<script>
export default {
}
</script>


<style scoped>
h1{
  color: blueviolet;
}
</style>
<style >
.submit-button {
    outline: none;
    background: blueviolet;
    color: white;
    width: 200px;
    height: 40px;
    border-radius: 5px;
    border: none;
}
body {
  margin: 0px;
}
.submit-button:hover {
    transition: 0.2s;
    background: violet;
}
.create-link {
    color: white;
    font-size: 20px;
    text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  height: 99vh;
  margin-top: 0px;
  background: url('./assets/background-img.png')no-repeat;
  background-size: contain; background-size: 100%; background-size: 100vw 100vh;
}

</style>


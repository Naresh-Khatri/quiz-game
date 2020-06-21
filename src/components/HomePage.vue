<template>
  <div class="hello">
    <div>
      {{this.name}}xsszszszsz
    </div>
    <StartComponent
      v-on:getname="name=>this.name = name"/>
  </div>
</template>

<script>
import StartComponent from './start-component.vue'

export default {
  data() {
    return{
      name: '',
    }
  },
  components: {
    StartComponent,
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

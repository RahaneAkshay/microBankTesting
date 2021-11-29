<template>

  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div>
          <div>
          </div>
        </div>
        <div><router-view></router-view></div>
      </div>

    </div>
       
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CreateAccount from './components/CreateAccount.vue'
import UserDashboard from './components/UserDashboard.vue'
@Component({
  components: {
    CreateAccount,
    UserDashboard
  },
})
export default class App extends Vue {
  title = 'Micro Bank App'
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
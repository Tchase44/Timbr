<template>
  <main class="listing">

    <div class="business" v-for="shop in list">
      <h3>{{shop.name}}</h3>
      <p>{{shop.phone1}}</p>
      <p>{{shop.email}}</p>
      <p>{{shop.addressLine1}}</p>
      <p>{{shop.addressLine2}}</p>
      <p>{{shop.city}}, {{shop.state}} {{shop.zipcode}}</p>
      <table>
          <tr v-for="(hours, days) in shop.weekHours">
            <td>{{days}}</td>
            <td>{{hours}}</td>
          </tr>
      </table>
    </div>

  </main>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
      errors:[],
      list: null
    }
  },
  // methods:{},
  // components: {}
  // beforeCreate(){},
  created(){
    axios.get(`http://localhost:8000/shops`)
         .then( response => {this.list = response.data})
         .catch(e => {this.errors.push(e)})
  },
  // beforeMount(){},
  // mounted(){},
  // beforeDestroy(){},
  // destroyed(){},
}

</script>

<style scoped>
  .business{
    box-sizing: border-box;
    margin: 10px auto;
    box-shadow: 0px 0px 5px #000;
    border-radius: 5px;
    padding: 10px 0;
    text-align: center;
    min-width: 240px;
    max-width: 450px;
    font-size: 1em;
  }
  .business>table{
    margin: 0 auto;
    font-size: 1em;
  }
</style>

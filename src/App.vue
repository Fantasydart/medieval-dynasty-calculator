<template>
  <div id="app">
    <h1>{{locale.headerText}}</h1>
    <div class="langs">
      {{locale.languages}}
      <select
       name="langs" id="langs"
       @change="changeLanguage">
        <option
         v-for="lang in langs"
          :value="lang">{{locale[lang]}}</option>
      </select>
    </div>
    <div class="app-wrapper">
 <div class="product" v-for="product in products">
      <div class="product-img">
        <img :src="require(`@/assets/images/products/${product.img}`)" alt="">
      </div>
      <div class="product-desc">
        <div class="product-title">{{locale[product.name]}}</div>
        <div class="product-igredient">
          <div class="_title">{{locale.ingredients}}: </div>
          <div 
          class="product-igredient__item"
          v-for="(count ,resourse) in product.ingredient
          ">
            <span class="resoureces-icon">
              <img :src="require(`@/assets/images/icons/${resourse}.svg`)" alt="">
            </span>
            <span class="resoureces-info">{{locale[resourse]}} - {{count}}</span>
              
          </div>
        </div>
        <div class="product-price">
          Стоимость производства: {{getCost(product.ingredient)}}<br>
          Цена продажи: x
        </div>
      </div>
        
    </div>
    </div>
   
  </div>
</template>

<script>
import languages from '@/languages/index.js'
export default {
  name: 'App',
  data() {
    return {
      languages: languages,
      language: 'ru',
      langs:  this.$store.state.languages,
      products: this.$store.state.products,
      resoures: this.$store.state.resoures
    }
  },
  computed: {
    locale(){
      return this.languages[this.language]
    }
  },
  methods: {
    getCost(ingredients){
      let cost = 0;
      for(let ingredient in ingredients){
        let buyCost = this.$store.state.resources[ingredient].cost.buy
        cost = cost + buyCost*ingredients[ingredient]
      }
      return cost
    },
    changeLanguage(lang){
      this.language = lang.target.value
    }
  }
}
</script>

<style lang="scss">
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: url('../src/assets/main_bg.jpg');
  background-position:  center center;
  background-repeat: no-repeat;
  min-height: 100vh;
}
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 20px;
  color: #fff;
}
h1{
  text-align: center;
}
.app-wrapper{
display: grid;
  grid-gap: 20px;
  font-size: 15px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.product {
  display: grid;
  grid-template-columns: 3fr 7fr;
  border: 1px solid rgb(226, 226, 226);
  border-radius: 4px;
  color: #2c3e50;
  background-color: #ffffffbf;
}
.product-img {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  border: 1px solid #f0f0f0;
}
.product-img img {
 max-width: 150px;
  width: 100%;
}
.product-title {
  padding: 10px 0;
  font-size: 18px;
  text-align: center;
  text-transform: capitalize;
  font-weight: 600;
}
.product-desc {
  padding: 0 20px;
}
._title {
  font-weight: 600;
}
.product-igredient__item {
  display: flex;
  align-items: center;
  column-gap: 10px;
}
.resoureces-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
}
.resoureces-icon img{
  width: 100%;
  height: 100%;
  max-width: 20px;
  max-height: 20px;
}
</style>

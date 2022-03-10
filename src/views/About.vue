<template>
  <Header />
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from "../components/Header/Header.vue"
import Slider from "../components/Slider/Slider.vue"
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Header,
    Slider
  },
  mounted(){
    console.log('About mounted')
    
  }
}
</script>

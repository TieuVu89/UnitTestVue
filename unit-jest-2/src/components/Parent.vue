<template>
  <div>
    <Child @show='show'></Child>
    <div id='content' v-if='isShow'>Content</div>
  </div>
</template>
<script>
import Child from './Child.vue';
  export default {
    data (){
      return {isShow: false}
    },

    methods: {
      show () {
        this.isShow = true;
      }
    },

    components: {
      Child,
    }
  }
</script>
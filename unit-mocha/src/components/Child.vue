<template>
  <div>
   Click de hien thi 
   <button @click='clickMe'>click</button>
  </div>
</template>
<script>
  export default {
    props: {
      fn:{}
    },

    methods:{
      clickMe() {
        this.fn('123');
        this.fn();
      }
    }
  }
</script>
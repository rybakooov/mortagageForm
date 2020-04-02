<template>
  <!-- TITLEBLOCK -->
  <div @click="this.getShowBlock = !this.getShowBlock" class="mortWrap__titleBlock">
    {{ head }}
    <pre>
      {{ this.getShowBlock }}
    </pre>
    <svg :class="{'rotate': show}" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L9 9L17 1" stroke="#FD7800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>

  <!-- TITLEBLOCK END -->
</template>

<script>
export default {
  inject: ['getShowBlock'],
  props: [
    'head',
  ],
  data: function(){
    return {
      
    }
  },
  computed: {
    
  },
}
</script>

<style scoped lang="scss">
    .mortWrap__titleBlock{
      display: flex;
      padding: 0 30px;
      height: 80px;
      align-items: center;
      justify-content: space-between;
      background: #FFFFFF;
      overflow: hidden;
      border-radius: 10px 10px 0px 0px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      cursor: pointer;
      font-size: 24px;
      line-height: 29px;
      color: #010101;
      &:last-child:first-child{
        border-radius: 10px;
      }
      svg{
        transition: .5s;
        &.rotate{
          transform: rotate(180deg);
        }
      }
    }
</style>
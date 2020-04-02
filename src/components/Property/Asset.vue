<template>
  <div class="mortWrap-block"> 
    <div class="mortWrap-block-inside">

      <!-- DELETE ASSET -->

      <button @click.prevent="" class="delete__asset">
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.07107 1L4.53553 4.53553M4.53553 4.53553L1 8.07107M4.53553 4.53553L8.07107 8.07107M4.53553 4.53553L1 1" stroke="#EB5757" stroke-linecap="round"/>
        </svg>
        Удалить
      </button>

      <!-- DELETE ASSET END -->  

      <!-- INPUTS -->
      <div class="mortWrap-block-inside-inputMargin">
        <defaultInput :key="input.inputName" v-for="input in assetInfo.assetInputs" :inputData="input"/>
      </div>
      <div class="mortWrap-block-inside-inputMargin" v-if="assetInfo.assetInputs.assetsType.inputValue == 'Недвижимость'">
        <defaultInput :key="input.inputName" v-for="input in assetInfo.assetRealty" :inputData="input"/>
      </div>
      <div class="mortWrap-block-inside-inputMargin" v-else>
        <defaultInput :key="input.inputName" v-for="input in assetInfo.assetCar" :inputData="input"/>
      </div>
      <!-- INPUTS END -->
    </div>
  </div>
</template>

<script>

import defaultInput from '@/components/defaultInput.vue'
//import defaultHeaderStage from '@/components/defaultHeaderStage.vue'

export default {

  components: {
    defaultInput,
    //defaultHeaderStage
  },
  props: [
    'assetInfo'
  ],
  data: function() {
    return {
      
    }
  },
}
</script>

<style lang="scss">
  .delete__asset{
    display: flex;
    font-size: 14px;
    line-height: 18px;
    color: #EB5757;
    align-items: center;
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    svg{
      margin-right: 10px;
    }
  }
</style>
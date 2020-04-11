<template>
  <defaultStage :stageInfo="infoStage">
    <template v-slot:Asset>
      <Asset v-for="asset in getAssetsList" :key="asset.id" :assetInfo="asset"/>
    </template>
    <template v-slot:AssetAdd>
      <button @click.prevent="addAsset" class="asset__add">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 1V6M6 11V6M6 6H11M6 6H1" stroke="#FD7800" stroke-linecap="round"/>
        </svg>
        Добавить актив
      </button>
    </template>
  </defaultStage>
</template>

<script>

import Asset from './Asset.vue'
import defaultStage from '@/components/defaultStage.vue'

export default {
  components: {
    Asset,
    defaultStage,
  },
  computed: {
    getAssetsList(){
      return this.$store.getters.getAssetsList;
    },
  },
  methods: {
    addAsset(){
      this.$store.commit('addAsset');
    }
  },
  data: function(){
    return {
      infoStage: {
        mortWrapName: 'Активы заемщика',
        mortWrapActive: false,
        mortWrapID: 'assets',
      }
    }
  }
}
</script>

<style lang="scss">
  .asset__add{
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    border: 1px solid #FD7800;
    border-radius: 5px;
    font-size: 14px;
    line-height: 18px;
    color: #333333;
    width: 100%;
    cursor: pointer;
    transition: .3s;
    &:hover{
      background: rgba(253, 120, 0, 0.1);
    }
    svg{
      margin-right: 10px;
    }
  }
</style>
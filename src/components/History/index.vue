<template>
  <defaultStage :stageInfo="infoStage">
    <template v-slot:Asset>
      <Record :key="record.id" v-for="record in getCreditList" :recordInfo="record"/>
    </template>
    <template v-slot:AssetAdd>
      <button @click.prevent="addCredit" class="asset__add">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 1V6M6 11V6M6 6H11M6 6H1" stroke="#FD7800" stroke-linecap="round"/>
        </svg>
        Добавить кредит
      </button>
    </template>
  </defaultStage>
</template>

<script>

import defaultStage from '@/components/defaultStage.vue'
import Record from './Record.vue'

export default {
  components: {
     defaultStage,
     Record
  },
  computed: {
    getCreditList(){
      return this.$store.getters.getCreditList;
    },
  },
  methods: {
    addCredit(){
      this.$store.commit('addCredit');
    }
  },
  data: function() {
    return {
      infoStage: {
        mortWrapName: 'Данные о кредитной истории заемщика',
        mortWrapActive: false,
        mortWrapID: 'creditHistory',
      }
    }
  }
}
</script>

<style>

</style>
<template>
  <defaultStage :stageInfo="infoStage"/>
</template>

<script>

import defaultStage from '@/components/defaultStage.vue'

export default {
  components: {
    defaultStage
  },
  data: function() {
    return {
      infoStage: {
        mortWrapName: 'Дополнительная информация',
        mortWrapID: 'dopInfo',
        mortWrapInputs: {
          comment: {
            inputName: 'comment',
            inputTitle: 'Комментарий',
            inputValue: '',
            inputPlaceholder: 'Ваши личные пожелания в какие банки отправить заявку на ипотеку и любая другая полезная информация)',
            inputType: 'textarea',
            filter: 'localeRU',
          }
        }
      }
    }
  }
}
</script>

<style>

</style>
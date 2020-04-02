<template>
  <defaultStage :stageInfo="infoStage"/>
</template>

<script>

import defaultStage from '@/components/defaultStage.vue'

export default {
  components: {
    defaultStage
  },
  methods: {

  },
  data: function() {
    return {
      infoStage: {
        mortWrapName: 'Условия кредитования',
        mortWrapInputs: {
          creditPurpose: {
            inputName: 'creditPurpose',
            inputTitle: 'Цель кредита',
            inputValue: 'Квартира в готовой недвижимости',
            inputWidth: 'oneThird',
            inputType: 'select',
            inputSelectCond: false,
            inputSelectOptions: [
              'Квартира в готовой недвижимости',
              'Квартира в готовой недвижимости 2',
              'Квартира в готовой недвижимости 3',
              'Квартира в готовой недвижимости 4'
            ]
          },
          housePrice: {
            inputName: 'housePrice',
            inputTitle: 'Стоимость квартиры',
            inputValue: '',
            inputPlaceholder: '0',
            inputWidth: 'oneThird',
            inputType: 'text',
            filter: 'localeRU',
          },
          creditSum: {
            inputName: 'creditSum',
            inputTitle: 'Сумма кредита',
            inputValue: '',
            inputPlaceholder: '0',
            inputWidth: 'oneThird',
            inputType: 'text',
            filter: 'localeRU',
          },
          firstPayment: {
            inputName: 'firstPayment',
            inputTitle: 'Первоначальный взнос',
            inputValue: '',
            inputPlaceholder: '0',
            inputWidth: 'oneThird',
            inputType: 'text',
            filter: 'localeRU',
          },
          creditTerm: {
            inputName: 'creditTerm',
            inputTitle: 'Срок кредита',
            inputValue: '',
            inputPlaceholder: '0',
            inputWidth: 'oneThird',
            inputType: 'text',
            filter: 'localeRU',
          },
          insurance: {
            inputName: 'insurance',
            inputTitle: 'Страхование жизни и здоровья',
            inputValue: 'Да',
            inputWidth: 'oneThird',
            inputType: 'select',
            inputSelectCond: false,
            inputSelectOptions: [
              'Да',
              'Нет',
            ]
          },
        },
      }
    }
  }
}

</script>


<style scoped lang="scss">

</style>

<template>
  <div class="mortWrap-block"> 
    <div class="mortWrap-block-inside">

      <!-- DELETE ASSET -->
      <button @click.prevent="deleteCredit" class="delete__asset">
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.07107 1L4.53553 4.53553M4.53553 4.53553L1 8.07107M4.53553 4.53553L8.07107 8.07107M4.53553 4.53553L1 1" stroke="#EB5757" stroke-linecap="round"/>
        </svg>
        Удалить
      </button>
      <!-- DELETE ASSET END -->  



      <!-- INPUTS -->
      <div class="mortWrap-block-inside-inputMargin">
        <defaultInput :key="input.inputName" v-for="input in this.recordInputs" :inputData="input"/>
      </div>
      <!-- INPUTS END -->
    </div>
  </div>
</template>

<script>

import defaultInput from '@/components/defaultInput.vue'

export default {
  components: {
    defaultInput,
  },
  props: [
    'recordInfo'
  ],
  mounted: function(){
    this.insertCredit();
  },
  beforeDestroy: function(){
    if(this.delete == false){
      this.saveCredit();
    }
  },
  methods: {
    deleteCredit(){
      this.delete = true;
      this.$store.commit('deleteCredit', this.recordInfo.id);
    },
    saveCredit(){
      var creditObj = {
        creditID: this.recordInfo.id,
        userID: this.activeId,
        inp: {}
      }
      for(let input in this.recordInputs){
        creditObj.inp[input] = this.recordInputs[input].inputValue;
      }


      this.$store.commit('saveCredit', creditObj);
    },
    insertCredit(){
      let activeUser = this.$store.getters.getActiveUser;
      if('credit' in activeUser){
        if ('list' in activeUser.credit){
          if('inp' in activeUser.credit.list['item' + this.recordInfo.id]){
            let _thisItemInp = activeUser.credit.list['item' + this.recordInfo.id].inp
            for(let input in activeUser.credit.list['item' + this.recordInfo.id].inp){
              this.recordInputs[input].inputValue = _thisItemInp[input];
            }
            
          }
        }
      }
    },
  },
  data: function() {
    return {
      delete: false,
      recordInputs: {
        creditType: {
          inputName: 'creditType',
          inputTitle: 'Вид кредита',
          inputValue: 'Ипотечный',
          inputWidth: 'oneThird',
          inputType: 'select',
          inputPos: 'solo',
          inputSelectCond: false,
          inputSelectOptions: [
            'Недвижимость',
            'Транспорт',
          ]
        },
        creditBank: {
          inputName: 'creditBank',
          inputTitle: 'Банк',
          inputPlaceholder: 'Сбербанк',
          inputValue: '',
          inputWidth: 'oneThird',
          inputType: 'text',
          inputValidate: {
            required: true,
          },
        },
        creditCurrency: {
          inputName: 'creditCurrency',
          inputTitle: 'Вид кредита',
          inputValue: '$ Доллары США',
          inputWidth: 'oneThird',
          inputType: 'select',
          inputSelectCond: false,
          inputSelectOptions: [
            '$ Доллары США',
            'E Евро Европа',
            'Р Рубли РФ',
          ]
        },
        creditSum: {
          inputName: 'creditSum',
          inputTitle: 'Сумма кредита',
          inputPlaceholder: '10000',
          inputValue: '',
          inputWidth: 'oneThird',
          inputType: 'number',
          inputValidate: {
            required: true,
          },
        },
        monthSum: {
          inputName: 'monthSum',
          inputTitle: 'Ежемесячная сумма к погашению',
          inputPlaceholder: '10000',
          inputValue: '',
          inputWidth: 'oneThird',
          inputType: 'number',
          inputValidate: {
            required: true,
          },
        },
        remains: {
          inputName: 'remains',
          inputTitle: 'Остаток непогашенной задолженности',
          inputPlaceholder: '10000',
          inputValue: '',
          inputWidth: 'oneThird',
          inputType: 'number',
          inputValidate: {
            required: true,
          },
        },
        term: {
          inputName: 'term',
          inputTitle: 'Срок погашения',
          inputPlaceholder: '2',
          inputValue: '',
          inputWidth: 'oneThird',
          inputType: 'number',
          inputValidate: {
            required: true,
          },
        },
      },
      activeId: this.$store.getters.getActiveID,
    }
  },
}
</script>

<style>

</style>
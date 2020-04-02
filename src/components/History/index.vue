<template>
  <div>
    <defaultStage :stageInfo="infoStage">
      <template v-slot:Asset>
        <Record :key="record.recordID" v-for="record in infoStage.records" :recordInfo="record"/>
      </template>
      <template v-slot:AssetAdd>
        <button @click.prevent="" class="asset__add">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 1V6M6 11V6M6 6H11M6 6H1" stroke="#FD7800" stroke-linecap="round"/>
          </svg>
          Добавить кредит
        </button>
      </template>
    </defaultStage>
  </div>
</template>

<script>

import defaultStage from '@/components/defaultStage.vue'
import Record from './Record.vue'

export default {
  components: {
     defaultStage,
     Record
  },
  data: function() {
    return {
      infoStage: {
        mortWrapName: 'Данные о кредитной истории заемщика',
        mortWrapActive: false,
        records: {
          record: {
            recordID: '1',
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
              },
              monthSum: {
                inputName: 'monthSum',
                inputTitle: 'Ежемесячная сумма к погашению',
                inputPlaceholder: '10000',
                inputValue: '',
                inputWidth: 'oneThird',
                inputType: 'number',
              },
              remains: {
                inputName: 'remains',
                inputTitle: 'Остаток непогашенной задолженности',
                inputPlaceholder: '10000',
                inputValue: '',
                inputWidth: 'oneThird',
                inputType: 'number',
              },
              term: {
                inputName: 'term',
                inputTitle: 'Срок погашения',
                inputPlaceholder: '2',
                inputValue: '',
                inputWidth: 'oneThird',
                inputType: 'number',
              },

            }
          }
        }
      }
    }
  }
}
</script>

<style>

</style>
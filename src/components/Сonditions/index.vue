<template>
  <defaultStage :stageInfo="infoStage" :subs="subsidies"/>
</template>

<script>

import defaultStage from '@/components/defaultStage.vue'
import mask from '@/JSModules/mask.js'

export default {
  components: {
    defaultStage
  },
  watch: {
    'infoStage.mortWrapInputs.housePrice.inputValue': {
      handler: function (newVal) {
        this.infoStage.mortWrapInputs.creditSum.inputValidate.maxVal = newVal;
        // ************************ МАКСИМЛЬНАЯ СУБСИДИЯ *****************************//
        //this.maxSubs = this.infoStage.mortWrapInputs.creditSum
      }
    },
    'infoStage.mortWrapInputs.creditSum.inputValue': {
      handler: function (newVal) {
        this.infoStage.mortWrapInputs.firstPayment.inputValidate.maxVal = newVal;
        // ************************ МАКСИМЛЬНАЯ СУБСИДИЯ *****************************//
        //this.maxSubs = 
        
      }
    }
  },
  mounted: function() {
    
  },
  data: function() {
    return {
      infoStage: {
        mortWrapName: 'Условия кредитования',
        mortWrapID: 'condition',
        mortWrapInputs: {
          creditPurpose: {
            inputName: 'creditPurpose',
            inputTitle: 'Цель кредита',
            inputValue: 'Квартира в готовой недвижимости',
            inputWidth: 'oneThird',
            inputType: 'select',
            inputHint: 'HINTHINT',
            inputSelectCond: false,
            inputSelectOptions: [
              'Покупка квартиры в новостройке',
              'Покупка квартиры в готовой недвижимости',
              'Покупка коммерческой недвижимости',
            ]
          },
          housePrice: {
            inputName: 'housePrice',
            inputTitle: 'Стоимость квартиры',
            inputValue: '',
            inputPlaceholder: '0 Руб',
            inputWidth: 'oneThird',
            inputType: 'rubles',
            mask: mask.rub,
            postfix: ' Руб',
            inputValidate: {
              required: true,
            }
          },
          creditSum: {
            inputName: 'creditSum',
            inputTitle: 'Сумма кредита',
            inputValue: '',
            inputPlaceholder: '0 Руб',
            inputWidth: 'oneThird',
            inputType: 'rubles',
            mask: mask.rub,
            postfix: ' Руб',
            inputValidate: {
              required: true,
              maxVal: 0
            }
          },
          firstPayment: {
            inputName: 'firstPayment',
            inputTitle: 'Первоначальный взнос',
            inputValue: '',
            inputPlaceholder: '0 Руб',
            inputWidth: 'oneThird',
            inputType: 'rubles',
            mask: mask.rub,
            hint: 'Только собственные денежные средства',
            postfix: ' Руб',
            inputValidate: {
              required: true,
              maxVal: 0
            }
          },
          creditTerm: {
            inputName: 'creditTerm',
            inputTitle: 'Срок кредита',
            inputValue: '',
            inputPlaceholder: '0 Лет',
            inputWidth: 'oneThird',
            inputType: 'years',
            postfix: ' лет',
            inputValidate: {
              required: true,
              maxLength: 2
            }
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
      },
      subsidies: {
        maternalSub: {
          subsidiesID: 1,
          width: '100',
          subsidiesTitle: 'Материнский капитал',
          notDisabled: false,
          inputs: {
            maternalSum: {
              inputName: 'maternalSum',
              inputTitle: 'Размер материнского капитала',
              inputValue: '',
              inputPlaceholder: '0 Руб',
              inputWidth: 'oneThird',
              inputType: 'rubles',
              mask: mask.rub,
              postfix: ' Руб',
              inputValidate: {
                required: true,
              }
            },
            howToUse: {
              inputName: 'howToUse',
              inputTitle: 'Использовать как',
              inputValue: 'Досрочное погашение по кредиту',
              inputWidth: 'oneThird',
              inputType: 'select',
              inputSelectCond: false,
              inputSelectOptions: [
                'Досрочное погашение по кредиту',
                'Первоначальный взнос',
              ]
            },
            maternalProc: {
              inputName: 'maternalProc',
              inputTitle: 'В процентах',
              inputValue: '',
              inputPlaceholder: '0 %',
              inputWidth: 'oneThird',
              inputType: 'text',
              postfix: ' %',
              inputValidate: {
                required: true,
              }
            },
          }
        },
        simplySub: {
          width: 'half',
          subsidiesID: 2,
          notDisabled: false,
          subsidiesTitle: 'Субсидия',
          inputs: {
            simplySum: {
              inputName: 'simplySum',
              inputTitle: 'Размер субсидии',
              inputValue: '',
              inputPlaceholder: '0 Руб',
              inputWidth: 'half',
              inputType: 'rubles',
              mask: mask.rub,
              postfix: ' Руб',
              inputValidate: {
                required: true,
              }
            },
            subsidyType: {
              inputName: 'subsidyType',
              inputTitle: 'Вид субсидии',
              inputValue: 'Молодёжи – доступное жильё',
              inputWidth: 'half',
              inputType: 'select',
              inputSelectCond: false,
              inputSelectOptions: [
                'Молодёжи – доступное жильё',
                'Соц. выплата «Развитие долгосрочного жилищного кредитования в СПБ»',
                'Соц. выплата «Расселение коммунальных квартир»',
                'Соц. выплата «Обеспечение жильём молодых семей»',
                'Субсидия на приобретение строительство (312)',
                'Другое',
              ]
            },
          }
        },
        militarySub: {
          width: 'half',
          subsidiesID: 3,
          notDisabled: false,
          subsidiesTitle: 'Военная ипотека',
          inputs: {
            militarySum: {
              inputName: 'militarySum',
              inputTitle: 'Размер НИС',
              inputValue: '',
              inputPlaceholder: '0 Руб',
              inputWidth: 'half',
              inputType: 'rubles',
              mask: mask.rub,
              postfix: ' Руб',
              hint: 'НИС - накопительная ипотечная система',
              inputValidate: {
                required: true,
              }
            },
            militaryDate: {
              inputName: 'militaryDate',
              inputTitle: 'Дата выдачи НИС',
              inputPlaceholder: '01.01.2000',
              inputValue: '',
              inputWidth: 'half',
              inputType: 'date',
              mask: mask.date,
              inputValidate: {
                required: true,
              }
            },
          }
        },
      }
    }
  }
}

</script>


<style scoped lang="scss">

</style>

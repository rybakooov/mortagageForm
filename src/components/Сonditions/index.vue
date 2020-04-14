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
      }
    },
    'infoStage.mortWrapInputs.creditSum.inputValue': {
      handler: function (newVal) {
        this.infoStage.mortWrapInputs.firstPayment.inputValidate.maxVal = newVal;
        // ************************ МАКСИМЛЬНАЯ СУБСИДИЯ *****************************//
        var creditSum = 0;
        var firstPayment = 0;
        if(newVal != ''){
          creditSum = parseInt(newVal);
        }
        if(this.infoStage.mortWrapInputs.firstPayment.inputValue != ''){
          firstPayment = parseInt(this.infoStage.mortWrapInputs.firstPayment.inputValue);
        }
        let maxSubs = creditSum - firstPayment;
        if(maxSubs < 0){
          maxSubs = 0
        }
        
        if (maxSubs > 616617){
          this.subsidies.maternalSub.inputs.maternalSum.inputValidate.maxVal = 616617;
        } else {
          this.subsidies.maternalSub.inputs.maternalSum.inputValidate.maxVal = maxSubs;
        }
        this.subsidies.simplySub.inputs.simplySum.inputValidate.maxVal = maxSubs;
        this.subsidies.militarySub.inputs.militarySum.inputValidate.maxVal = maxSubs;
      }
    },
    'infoStage.mortWrapInputs.firstPayment.inputValue': {
      handler: function (newVal) {
        // ************************ МАКСИМЛЬНАЯ СУБСИДИЯ *****************************//
        var creditSum = 0;
        var firstPayment = 0;
        if(this.infoStage.mortWrapInputs.creditSum.inputValue != ''){
          creditSum = parseInt(this.infoStage.mortWrapInputs.creditSum.inputValue);
        }
        if(newVal != ''){
          firstPayment = parseInt(newVal);
        }
        let maxSubs = creditSum - firstPayment;
        if(maxSubs < 0){
          maxSubs = 0
        }
        
        if (maxSubs > 616617){
          this.subsidies.maternalSub.inputs.maternalSum.inputValidate.maxVal = 616617;
        } else {
          this.subsidies.maternalSub.inputs.maternalSum.inputValidate.maxVal = maxSubs;
        }
        this.subsidies.simplySub.inputs.simplySum.inputValidate.maxVal = maxSubs;
        this.subsidies.militarySub.inputs.militarySum.inputValidate.maxVal = maxSubs;
        
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
        maxSubs: 0,
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
                maxVal: 0
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
                maxVal: 0
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
                maxVal: 0
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
                maxVal: 0
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

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
  watch: {
    'infoStage.mortWrapDopsBlocks.urAdress.mortWrapInputs.registrationIsFactResidence.inputValue': {
      handler: function (newVal) {
        if(newVal == 'Да') {
          this.infoStage.mortWrapDopsBlocks.factAdress.userFactResidence = false;
        } else {
          this.infoStage.mortWrapDopsBlocks.factAdress.userFactResidence = true;
        }
      }
    }
  },
  data: function() {
    return {
      infoStage: {
        mortWrapName: 'Сведения о работе',
        mortWrapActive: false,
        mortWrapJobs: {
          job1: {
            jobTitle: 'Основное место работы'
          }
        },
        mortWrapInputs: {
          jobType: {
            inputName: 'jobType',
            inputTitle: 'Тип занятости',
            inputValue: 'Работник по найму',
            inputWidth: 'oneThird',
            inputType: 'select',
            inputSelectCond: false,
            inputPos: 'solo',
            inputSelectOptions: [
              'Работник по найму',
              'Работник по найму 2',
            ]
          },
          jobName: {
            inputName: 'jobName',
            inputTitle: 'Наименование',
            inputPlaceholder: 'ООО “РА-Студио”',
            inputValue: '',
            inputWidth: 'quarter',
            inputType: 'text',
          },
          INN: {
            inputName: 'INN',
            inputTitle: 'ИНН',
            inputPlaceholder: '123456789012',
            inputValue: '',
            inputWidth: 'quarter',
            inputType: 'number',
          },
          phone: {
            inputName: 'phone',
            inputTitle: 'Телефон',
            inputPlaceholder: '+7 (999) 999-99-99',
            inputValue: '',
            inputWidth: 'quarter',
            inputType: 'phone',
          },
          site: {
            inputName: 'site',
            inputTitle: 'Сайт',
            inputPlaceholder: 'ra-studio.ru',
            inputValue: '',
            inputWidth: 'quarter',
            inputType: 'text',
          },
        },
        mortWrapDopsBlocks: {
          urAdress: {
            subTitle: 'Юридический адрес',
            mortWrapInputs: {
              registrationIsFactResidence: {
                inputName: 'registrationIsFactResidence',
                inputTitle: 'Адрес фактического проживания совпадает с адресом регистрации?',
                inputValue: 'Нет',
                inputWidth: 'half',
                inputPos: 'solo',
                inputType: 'select',
                inputSelectCond: false,
                inputSelectOptions: [
                  'Нет',
                  'Да',
                ]
              },
              indexHouse: {
                inputName: 'indexHouse',
                inputTitle: 'Индекс',
                inputPlaceholder: '197198',
                inputValue: '',
                inputWidth: 'quarter',
                inputType: 'number',
              },
              areaHouse: {
                inputName: 'areaHouse',
                inputTitle: 'Республика/Край/Область',
                inputPlaceholder: 'Московская область',
                inputValue: '',
                inputWidth: 'quarter-2',
                inputType: 'text',
              },
              cityHouse: {
                inputName: 'cityHouse',
                inputTitle: 'Город',
                inputPlaceholder: 'Москва',
                inputValue: '',
                inputWidth: 'quarter-2',
                inputType: 'text',
              },
              streetHouse: {
                inputName: 'streetHouse',
                inputTitle: 'Улица',
                inputPlaceholder: 'Пушкина',
                inputValue: '',
                inputWidth: 'half',
                inputType: 'text',
              },
              numHouse: {
                inputName: 'numHouse',
                inputTitle: 'Дом',
                inputPlaceholder: '1',
                inputValue: '',
                inputWidth: 'one-6',
                inputType: 'text',
              },
              corpusHouse: {
                inputName: 'corpusHouse',
                inputTitle: 'Корпус',
                inputPlaceholder: '1',
                inputValue: '',
                inputWidth: 'one-6',
                inputType: 'text',
              },
              flatHouse: {
                inputName: 'flatHouse',
                inputTitle: 'Квартира',
                inputPlaceholder: '1',
                inputValue: '',
                inputWidth: 'one-6',
                inputType: 'text',
              },
            }
          },
          factAdress: {
            subTitle: 'Фактический адрес адрес',
            userFactResidence: true,
            mortWrapInputs: {
              indexHouse: {
                inputName: 'indexHouse',
                inputTitle: 'Индекс',
                inputPlaceholder: '197198',
                inputValue: '',
                inputWidth: 'quarter',
                inputType: 'number',
              },
              areaHouse: {
                inputName: 'areaHouse',
                inputTitle: 'Республика/Край/Область',
                inputPlaceholder: 'Московская область',
                inputValue: '',
                inputWidth: 'quarter-2',
                inputType: 'text',
              },
              cityHouse: {
                inputName: 'cityHouse',
                inputTitle: 'Город',
                inputPlaceholder: 'Москва',
                inputValue: '',
                inputWidth: 'quarter-2',
                inputType: 'text',
              },
              streetHouse: {
                inputName: 'streetHouse',
                inputTitle: 'Улица',
                inputPlaceholder: 'Пушкина',
                inputValue: '',
                inputWidth: 'half',
                inputType: 'text',
              },
              numHouse: {
                inputName: 'numHouse',
                inputTitle: 'Дом',
                inputPlaceholder: '1',
                inputValue: '',
                inputWidth: 'one-6',
                inputType: 'text',
              },
              corpusHouse: {
                inputName: 'corpusHouse',
                inputTitle: 'Корпус',
                inputPlaceholder: '1',
                inputValue: '',
                inputWidth: 'one-6',
                inputType: 'text',
              },
              flatHouse: {
                inputName: 'flatHouse',
                inputTitle: 'Квартира',
                inputPlaceholder: '1',
                inputValue: '',
                inputWidth: 'one-6',
                inputType: 'text',
              },
            }
          },
          aboutJob: {
            
            mortWrapInputs: {
              sphere: {
                inputName: 'sphere',
                inputTitle: 'Сфера деятельности организации',
                inputValue: 'Финансы / Банки / Страхование',
                inputWidth: 'oneThird',
                inputType: 'select',
                inputSelectCond: false,
                inputSelectOptions: [
                  'Финансы / Банки / Страхование',
                  'Финансы / Банки / Страхование 2',
                ]
              },
              size: {
                inputName: 'size',
                inputTitle: 'Численность персонала',
                inputValue: 'До 10',
                inputWidth: 'oneThird',
                inputType: 'select',
                inputSelectCond: false,
                inputSelectOptions: [
                  'До 10',
                  'от 10 до 50',
                  'от 50 до 100',
                ]
              },
              termOfExistence: {
                inputName: 'termOfExistence',
                inputTitle: 'Срок существования организации',
                inputValue: 'До 1 года',
                inputWidth: 'oneThird',
                inputType: 'select',
                inputSelectCond: false,
                inputSelectOptions: [
                  'До 1 года',
                  'До 3 лет',
                  'До 5 лет',
                  'До 10 лет',
                ]
              },

              quantityJobs: {
                inputName: 'quantityJobs',
                inputTitle: 'Количество мест работы за последние 3 года',
                inputValue: '',
                inputWidth: 'oneThird',
                inputPlaceholder: '2',
                inputType: 'text',
              },
              withoutConfirm: {
                inputName: 'withoutConfirm',
                inputTitle: 'Подтверждение дохода',
                inputWidth: 'oneThird',
                inputValue: 'Без подтверждения дохода - по двум...',
                inputType: 'select',
                inputSelectCond: false,
                inputSelectOptions: [
                  'Без подтверждения дохода - по двум...',
                  'Без подтверждения дохода - по двум... 2',
                  'Без подтверждения дохода - по двум... 3',
                  'Без подтверждения дохода - по двум... 4',
                ]
              },
              income: {
                inputName: 'income',
                inputTitle: 'Среднемесячный доход',
                inputPlaceholder: '0',
                inputValue: '',
                inputWidth: 'oneThird',
                inputType: 'number',
              },
            },
            checkboxBlock: {
              title: 'Сбербанк',
              chekboxs: {
                salary: {
                  checkTitle: 'salary',
                  checkValue: 'Получаю заработную плату на карту Сбербанка'
                },
                pension: {
                  checkTitle: 'pension',
                  checkValue: 'Получаю пенсию на карту Сбербанка'
                }
              }
            }
          },
          dopIncome: {
            mortWrapInputs: {
              dopIncome: {
                inputName: 'dopIncome',
                inputTitle: 'Дополнительный доход',
                inputPlaceholder: '0',
                inputValue: '',
                inputWidth: 'oneThird',
                inputType: 'number',
                filter: 'localeRU',
              },
              sourseIncome: {
                inputName: 'sourseIncome',
                inputTitle: 'Источник дохода',
                inputPlaceholder: 'Пенсия',
                inputValue: '',
                inputWidth: '2-3',
                inputType: 'text',
              },
            }
          }
        },
      }
    }
  }
}

</script>


<style scoped lang="scss">

</style>

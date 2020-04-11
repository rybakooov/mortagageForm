<template>
  <defaultStage :stageInfo="infoStage"/>
</template>

<script>

import defaultStage from '@/components/defaultStage.vue'
import mask from '@/JSModules/mask.js'

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
          this.infoStage.mortWrapDopsBlocks.factAdress.visible = false;
        } else {
          this.infoStage.mortWrapDopsBlocks.factAdress.visible = true;
        }
      }
    }
  },
  data: function() {
    return {
      infoStage: {
        mortWrapName: 'Сведения о работе',
        mortWrapActive: false,
        mortWrapID: 'job',
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
              'Собственник бизнеса',
              'ИП',
              'Другое',
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
            mask: mask.inn,
          },
          phone: {
            inputName: 'phone',
            inputTitle: 'Телефон',
            inputPlaceholder: '+7 (999) 999-99-99',
            inputValue: '',
            mask: mask.phone,
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
                inputTitle: 'Юридический адрес совпадает с фактическим?',
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
                mask: mask.index,
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
            visible: true,
            mortWrapInputs: {
              indexHouse: {
                inputName: 'indexHouse',
                inputTitle: 'Индекс',
                inputPlaceholder: '197198',
                inputValue: '',
                mask: mask.index,
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
                  'Правоохранительные органы',
                  'Образование',
                  'Сельское хозяйство',
                  'Культура и искусство',
                  'Охранная деятельность',
                  'Органы власти и управления',
                  'Информационные технологии',
                  'Оптовая и розничная торговля',
                  'Медицина',
                  'Производство',
                  'Транспорт',
                  'Промышленность',
                  'Юриспруденция',
                  'Строительство',
                  'Наука',
                  'Услуги',
                  'Туризм',
                  'Иное',
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
                  '11-30',
                  '31-50',
                  '51-100',
                  '101-500',
                  '501-1000',
                  'более 1000',
                ]
              },
              termOfExistence: {
                inputName: 'termOfExistence',
                inputTitle: 'Срок существования организации',
                inputValue: 'до 2-х лет',
                inputWidth: 'oneThird',
                inputType: 'select',
                inputSelectCond: false,
                inputSelectOptions: [
                  'до 2-х лет',
                  'от 2-5 лет',
                  'более 5 лет',
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
                inputValue: '2-НДФЛ',
                inputType: 'select',
                inputSelectCond: false,
                inputSelectOptions: [
                  '2-НДФЛ',
                  'Справка по форме банка',
                  'Без подтверждения дохода - по двум документам',
                ]
              },
              income: {
                inputName: 'income',
                inputTitle: 'Среднемесячный доход',
                inputPlaceholder: '0 Руб',
                inputValue: '',
                inputWidth: 'oneThird',
                inputType: 'number',
                postfix: ' Руб',
                mask: mask.rub,
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
                inputPlaceholder: '0 Руб',
                inputValue: '',
                inputWidth: 'oneThird',
                inputType: 'number',
                postfix: ' Руб',
                mask: mask.rub,
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

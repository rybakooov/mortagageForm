<template>
  <defaultStage :stageInfo="infoStage">
    <template v-slot:jobTabs>
      <div class="job-tabs">
        <div 
        class="job-tabs__item" 
        v-for="job in getJobs" 
        :key="job.jobTitle"
        @click="changeActiveJob(job.jobID)"
        :class="{'job-tabs__item_active': (job.jobID == activeJob.jobID)}"
        >
          {{job.jobTitle}}
          <svg @click.stop="deleteJob(job.jobID)" class="job-tabs__item__close" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.07107 1L4.53553 4.53553M4.53553 4.53553L1 8.07107M4.53553 4.53553L8.07107 8.07107M4.53553 4.53553L1 1" stroke="#EB5757" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="job-tabs__item" @click="addJob">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 1V6M6 11V6M6 6H11M6 6H1" stroke="#FD7800" stroke-linecap="round"/>
          </svg>
          Добавить
        </div>
      </div>
    </template>
  </defaultStage>
</template>

<script>

import defaultStage from '@/components/defaultStage.vue'
import mask from '@/JSModules/mask.js'

export default {
  components: {
    defaultStage
  },
  mounted: function(){

  },
  methods: {
    addJob(){
      this.$store.dispatch('createDopJob');
    },
    changeActiveJob(n){
      this.$store.commit('changeActiveJob', n);
    },
    deleteJob(n){
      this.$store.commit('deleteJob', n);
    },
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
    },




    //**** KLADR ****//

    'infoStage.mortWrapDopsBlocks.urAdress.mortWrapInputs.areaHouse.kladrData': {
      handler: function(){
        this.infoStage.mortWrapDopsBlocks.urAdress.mortWrapInputs.cityHouse.kladr.regionId = this.infoStage.mortWrapDopsBlocks.urAdress.mortWrapInputs.areaHouse.kladrData.id
      }
    },
    'infoStage.mortWrapDopsBlocks.urAdress.mortWrapInputs.cityHouse.kladrData': {
      handler: function(){
        this.infoStage.mortWrapDopsBlocks.urAdress.mortWrapInputs.streetHouse.kladr.cityId = this.infoStage.mortWrapDopsBlocks.urAdress.mortWrapInputs.cityHouse.kladrData.id
      }
    },
    'infoStage.mortWrapDopsBlocks.urAdress.mortWrapInputs.streetHouse.kladrData': {
      handler: function(){
        this.infoStage.mortWrapDopsBlocks.urAdress.mortWrapInputs.numHouse.kladr.cityId = this.infoStage.mortWrapDopsBlocks.urAdress.mortWrapInputs.streetHouse.kladrData.id
      }
    },

    'infoStage.mortWrapDopsBlocks.factAdress.mortWrapInputs.areaHouse.kladrData': {
      handler: function(){
        this.infoStage.mortWrapDopsBlocks.factAdress.mortWrapInputs.cityHouse.kladr.regionId = this.infoStage.mortWrapDopsBlocks.factAdress.mortWrapInputs.areaHouse.kladrData.id
      }
    },
    'infoStage.mortWrapDopsBlocks.factAdress.mortWrapInputs.cityHouse.kladrData': {
      handler: function(){
        this.infoStage.mortWrapDopsBlocks.factAdress.mortWrapInputs.streetHouse.kladr.cityId = this.infoStage.mortWrapDopsBlocks.factAdress.mortWrapInputs.cityHouse.kladrData.id
      }
    },
    'infoStage.mortWrapDopsBlocks.factAdress.mortWrapInputs.streetHouse.kladrData': {
      handler: function(){
        this.infoStage.mortWrapDopsBlocks.factAdress.mortWrapInputs.numHouse.kladr.cityId = this.infoStage.mortWrapDopsBlocks.factAdress.mortWrapInputs.streetHouse.kladrData.id
      }
    },

    //**** KLADR ****//




  },
  computed: {
    getAc(){
      return this.$store.getters.getActiveJob;
    },
    getJobs(){
      return this.$store.getters.getJobs
    },
    activeJob(){
      return this.$store.getters.getActiveJob;
    }
  },
  data: function() {
    return {
      infoStage: {
        mortWrapName: 'Сведения о работе',
        mortWrapActive: false,
        mortWrapID: 'job',
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
            inputValidate: {
              required: true,
              minLength: 2,
            },
          },
          INN: {
            inputName: 'INN',
            inputTitle: 'ИНН',
            inputPlaceholder: '123456789012',
            inputValue: '',
            inputWidth: 'quarter',
            inputType: 'number',
            mask: mask.inn,
            inputValidate: {
              required: true,
              minLength: 12,
            },
          },
          phone: {
            inputName: 'phone',
            inputTitle: 'Телефон',
            inputPlaceholder: '+7 (999) 999-99-99',
            inputValue: '',
            mask: mask.phone,
            inputWidth: 'quarter',
            inputType: 'phone',
            inputValidate: {
              required: true,
              minLength: 18,
            },
          },
          site: {
            inputName: 'site',
            inputTitle: 'Сайт',
            inputPlaceholder: 'ra-studio.ru',
            inputValue: '',
            inputWidth: 'quarter',
            inputType: 'text',
            inputValidate: {
              required: true,
              minLength: 2,
            },
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
              /* copy down */
              indexHouse: {
                inputName: 'indexHouse',
                inputTitle: 'Индекс',
                inputPlaceholder: '197198',
                inputValue: '',
                inputWidth: 'quarter',
                inputType: 'number',
                mask: mask.index,
                inputValidate: {
                  required: true,
                  minLength: 6,
                },
              },
              areaHouse: {
                inputName: 'areaHouse',
                inputTitle: 'Республика/Край/Область',
                inputPlaceholder: 'Московская область',
                inputValue: '',
                inputWidth: 'quarter-2',
                inputType: 'text',
                inputValidate: {
                  required: true,
                  minLength: 2,
                },
                kladrData: {},
                kladr: {
                  contentType: 'region'
                }
              },
              cityHouse: {
                inputName: 'cityHouse',
                inputTitle: 'Город',
                inputPlaceholder: 'Москва',
                inputValue: '',
                inputWidth: 'quarter-2',
                inputType: 'text',
                inputValidate: {
                  required: true,
                  minLength: 2,
                },
                kladrData: {},
                kladr: {
                  regionId: '',
                  contentType: 'city'
                }
              },
              streetHouse: {
                inputName: 'streetHouse',
                inputTitle: 'Улица',
                inputPlaceholder: 'Пушкина',
                inputValue: '',
                inputWidth: 'half',
                inputType: 'text',
                inputValidate: {
                  required: true,
                  minLength: 2,
                },
                kladrData: {},
                kladr: {
                  cityId: '',
                  contentType: 'street'
                }
              },
              numHouse: {
                inputName: 'numHouse',
                inputTitle: 'Дом',
                inputPlaceholder: '1',
                inputValue: '',
                inputWidth: 'one-6',
                inputType: 'text',
                inputValidate: {
                  required: true,
                },
                kladrData: {},
                kladr: {
                  streetId: '',
                  contentType: 'building'
                }
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
                inputValidate: {
                }
              },
              
              /* copy down end */
            }
          },
          factAdress: {
            subTitle: 'Фактический адрес адрес',
            visible: true,
            mortWrapInputs: {
              /* copy down */
              indexHouse: {
                inputName: 'indexHouse',
                inputTitle: 'Индекс',
                inputPlaceholder: '197198',
                inputValue: '',
                inputWidth: 'quarter',
                inputType: 'number',
                mask: mask.index,
                inputValidate: {
                  required: true,
                  minLength: 6,
                },
              },
              areaHouse: {
                inputName: 'areaHouse',
                inputTitle: 'Республика/Край/Область',
                inputPlaceholder: 'Московская область',
                inputValue: '',
                inputWidth: 'quarter-2',
                inputType: 'text',
                inputValidate: {
                  required: true,
                  minLength: 2,
                },
                kladrData: {},
                kladr: {
                  contentType: 'region'
                }
              },
              cityHouse: {
                inputName: 'cityHouse',
                inputTitle: 'Город',
                inputPlaceholder: 'Москва',
                inputValue: '',
                inputWidth: 'quarter-2',
                inputType: 'text',
                inputValidate: {
                  required: true,
                  minLength: 2,
                },
                kladrData: {},
                kladr: {
                  regionId: '',
                  contentType: 'city'
                }
              },
              streetHouse: {
                inputName: 'streetHouse',
                inputTitle: 'Улица',
                inputPlaceholder: 'Пушкина',
                inputValue: '',
                inputWidth: 'half',
                inputType: 'text',
                inputValidate: {
                  required: true,
                  minLength: 2,
                },
                kladrData: {},
                kladr: {
                  cityId: '',
                  contentType: 'street'
                }
              },
              numHouse: {
                inputName: 'numHouse',
                inputTitle: 'Дом',
                inputPlaceholder: '1',
                inputValue: '',
                inputWidth: 'one-6',
                inputType: 'text',
                inputValidate: {
                  required: true,
                },
                kladrData: {},
                kladr: {
                  streetId: '',
                  contentType: 'building'
                }
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
                inputValidate: {
                }
              },
              
              /* copy down end */
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
                inputValidate: {
                  required: true,
                },
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
                inputValidate: {
                  required: true,
                },
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
      },
    }
  }
}

</script>


<style scoped lang="scss">

  .job-tabs{
    display: flex;
    flex-wrap: wrap;
    margin: -10px -10px 20px;
    &__item{
      margin: 10px;
      display: flex;
      align-items: center;
      font-weight: 600;
      font-size: 14px;
      cursor: pointer;
      line-height: 17px;
      text-align: center;
      color: #333333;
      justify-content: center;
      width: calc(25% - 20px);
      position: relative;
      height: 60px;
      background: #FFFFFF;
      border: 2px solid rgba(51, 51, 51, 0.3);
      box-sizing: border-box;
      border-radius: 5px;
      
      &:not(:last-child):not(:first-child){
        .job-tabs__item__close{
          display: block;
        }
      }
      &__close{
        display: none;
        position: absolute;
        top: 5px;
        right: 5px;
        cursor: pointer;
        transform-origin: center center;
        transition: .2s;
        &:hover{
          transform: scale(1.5);
        }
      }
      &_active{
        border-color: #FD7800 !important;
      }
      &:last-child{
        svg{
          margin-right: 10px;
        }
        font-size: 14px;
        line-height: 17px;
        font-weight: normal;
        color: #333333;
        border: 1px solid rgba(51, 51, 51, 0.3);
        box-sizing: border-box;
        transition: .3s;
        cursor: pointer;
        &:hover{
          background-color: rgba(253, 120, 0, 0.05);
        }
      }
    }
  }
</style>

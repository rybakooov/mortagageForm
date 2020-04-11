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
    'infoStage.mortWrapDopsBlocks.userRegistration.mortWrapInputs.registrationIsFactResidence.inputValue': {
      handler: function (newVal) {
        if(newVal == 'Да') {
          this.infoStage.mortWrapDopsBlocks.userFactResidence.visible = false;
        } else {
          this.infoStage.mortWrapDopsBlocks.userFactResidence.visible = true;
        }
      }
    }
  },
  data: function() {
    return {
      infoStage: {
        mortWrapName: 'Личная информация',
        mortWrapID: 'persInfo', 
        mortWrapInputs: {
          userSecondName: {
            inputName: 'userSecondName',
            inputTitle: 'Фамилия',
            inputValue: '',
            inputPlaceholder: 'Иванов',
            inputWidth: 'oneThird',
            inputType: 'text',
            inputValidate: {
              required: true,
              minLength: 2,
            }
          },
          userFirstName: {
            inputName: 'userFirstName',
            inputTitle: 'Имя',
            inputValue: '',
            inputPlaceholder: 'Иван',
            inputWidth: 'oneThird',
            inputType: 'text',
            inputValidate: {
            }
          },
          userPatronymicName: {
            inputName: 'userPatronymicName',
            inputTitle: 'Отчество',
            inputValue: '',
            inputPlaceholder: 'Иванович',
            inputWidth: 'oneThird',
            inputType: 'text',
            inputValidate: {
            }
          },
          userPlaceOfBirth: {
            inputName: 'userPlaceOfBirth',
            inputTitle: 'Место рождения',
            inputValue: '',
            inputPlaceholder: 'Иваново',
            inputWidth: 'oneThird',
            inputType: 'text',
            inputValidate: {
            }
          },
          userDateOfBirth: {
            inputName: 'userDateOfBirth',
            inputTitle: 'Дата рождения',
            inputValue: '',
            inputPlaceholder: '10.10.1999',
            inputWidth: 'oneThird',
            inputType: 'date',
            mask: mask.date,
            inputValidate: {
            }
          },
          userSex: {
            inputName: 'userSex',
            inputTitle: 'Пол',
            inputValue: 'Мужской',
            inputWidth: 'oneThird',
            inputType: 'select',
            inputSelectCond: false,
            inputSelectOptions: [
              'Мужской',
              'Женский',
            ]
          },
        },
        mortWrapDopsBlocks: {
          userPass: {
            mortWrapInputs: {
              citizenship: {
                inputName: 'citizenship',
                inputTitle: 'Гражданство',
                inputPlaceholder: 'Россия',
                inputValue: '',
                inputWidth: 'oneThird',
                inputType: 'text',
                inputPos: 'solo',
                inputValidate: {
                }
              },
              series: {
                inputName: 'series',
                inputTitle: 'Серия',
                inputPlaceholder: '9999',
                inputValue: '',
                inputWidth: 'quarter',
                inputType: 'number',
                mask: mask.passSeria,
                inputValidate: {
                }
              },
              number: {
                inputName: 'number',
                inputTitle: 'Номер',
                inputPlaceholder: '999999',
                inputValue: '',
                inputWidth: 'quarter',
                inputType: 'number',
                mask: mask.passNumber,
                inputValidate: {
                }
              },
              divisionСode: {
                inputName: 'divisionСode',
                inputTitle: 'Код подразделения',
                inputPlaceholder: '999-999',
                inputValue: '',
                inputWidth: 'quarter',
                inputType: 'number',
                mask: mask.passCode,
                inputValidate: {
                }
              },
              dateOfIssue: {
                inputName: 'dateOfIssue',
                inputTitle: 'Дата выдачи паспорта',
                inputPlaceholder: '10.10.2018',
                inputValue: '',
                inputWidth: 'quarter',
                inputType: 'date',
                mask: mask.date,
                inputValidate: {
                }
              },
              whoIssued: {
                inputName: 'whoIssued',
                inputTitle: 'Кем выдан паспорт',
                inputPlaceholder: 'ГУ МВД России по г. Санкт-Петербургу и Ленинградской области',
                inputValue: '',
                inputWidth: 'half',
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
                inputValidate: {
                }
              },
              snils: {
                inputName: 'snils',
                inputTitle: 'Снилс',
                inputPlaceholder: '000-000-000 00',
                inputValue: '',
                inputWidth: 'quarter',
                inputType: 'number',
                mask: mask.snils,
                inputValidate: {
                }
              },
            },
          },
          userEducation: {
            mortWrapInputs: {
              education: {
                inputName: 'education',
                inputTitle: 'Образование',
                inputValue: 'Среднее / неполное среднее',
                inputWidth: 'quarter',
                inputType: 'select',
                inputSelectCond: false,
                inputSelectOptions: [
                  'Среднее / неполное среднее',
                  'Cреднее специальное',
                  'Незаконченное высшее',
                  'Высшее',
                ]
              },
              institution: {
                inputName: 'institution',
                inputTitle: 'Наименование учебного заведения',
                inputPlaceholder: 'СПБГУ',
                inputValue: '',
                inputWidth: 'quarter',
                inputType: 'text',
              },
              status: {
                inputName: 'status',
                inputTitle: 'Семейное положения',
                inputValue: 'Женат / Замужем',
                inputWidth: 'quarter',
                inputType: 'select',
                inputSelectCond: false,
                inputSelectOptions: [
                  'Женат / Замужем',
                  'Гражданский брак',
                  'Холост / Не замужем',
                  'В разводе',
                  'Вдовец / Вдова',
                ]
              },
              kids: {
                inputName: 'kids',
                inputTitle: 'Кол-во несовершеннолетних детей',
                inputPlaceholder: '0',
                inputValue: '',
                inputWidth: 'quarter',
                inputType: 'number',
              },
            }
          },
          userRegistration: {
            subTitle: 'Адрес регистрации',
            mortWrapInputs: {
              typeOfRegistration: {
                inputName: 'typeOfRegistration',
                inputTitle: 'Вид регистрации',
                inputValue: 'Постоянная',
                inputWidth: 'quarter',
                inputType: 'select',
                inputSelectCond: false,
                inputSelectOptions: [
                  'Постоянная',
                  'Временная',
                ]
              },
              typeOfHouse: {
                inputName: 'typeOfHouse',
                inputTitle: 'Вид жилья',
                inputValue: 'Собственное жилье',
                inputWidth: 'quarter',
                inputType: 'select',
                inputSelectCond: false,
                inputSelectOptions: [
                  'Собственное жилье',
                  'Жилье родственников',
                  'Социальный найм',
                  'Аренда',
                  'Другое',
                ]
              },
              registrationIsFactResidence: {
                inputName: 'registrationIsFactResidence',
                inputTitle: 'Адрес фактического проживания совпадает с адресом регистрации?',
                inputValue: 'Нет',
                inputWidth: 'half',
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
              },
              areaHouse: {
                inputName: 'areaHouse',
                inputTitle: 'Республика/Край/Область',
                inputPlaceholder: 'Московская область',
                inputValue: '',
                inputWidth: 'quarter-2',
                inputType: 'text',
                inputValidate: {
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
          userFactResidence: {
            subTitle: 'Адрес фактического проживания',
            visible: true,
            mortWrapInputs: {
              
              typeOfHouse: {
                inputName: 'typeOfHouseFact',
                inputTitle: 'Вид жилья',
                inputValue: 'Собственное жилье',
                inputWidth: 'quarter',
                inputType: 'select',
                inputPos: 'solo',
                inputSelectCond: false,
                inputSelectOptions: [
                  'Собственное жилье',
                  'Жилье родственников',
                  'Социальный найм',
                  'Аренда',
                  'Другое',
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
              },
              areaHouse: {
                inputName: 'areaHouse',
                inputTitle: 'Республика/Край/Область',
                inputPlaceholder: 'Московская область',
                inputValue: '',
                inputWidth: 'quarter-2',
                inputType: 'text',
                inputValidate: {
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

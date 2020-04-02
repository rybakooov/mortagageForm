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
    'infoStage.mortWrapDopsBlocks.userRegistration.mortWrapInputs.registrationIsFactResidence.inputValue': {
      handler: function (newVal) {
        if(newVal == 'Да') {
          this.infoStage.mortWrapDopsBlocks.userFactResidence.userFactResidence = false;
        } else {
          this.infoStage.mortWrapDopsBlocks.userFactResidence.userFactResidence = true;
        }
      }
    }
  },
  data: function() {
    return {
      infoStage: {
        mortWrapName: 'Личная информация',
        mortWrapInputs: {
          userSecondName: {
            inputName: 'userSecondName',
            inputTitle: 'Фамилия',
            inputValue: '',
            inputPlaceholder: 'Иванов',
            inputWidth: 'oneThird',
            inputType: 'text',
          },
          userFirstName: {
            inputName: 'userFirstName',
            inputTitle: 'Имя',
            inputValue: '',
            inputPlaceholder: 'Иван',
            inputWidth: 'oneThird',
            inputType: 'text',
          },
          userPatronymicName: {
            inputName: 'userPatronymicName',
            inputTitle: 'Отчество',
            inputValue: '',
            inputPlaceholder: 'Иванович',
            inputWidth: 'oneThird',
            inputType: 'text',
          },
          userPlaceOfBirth: {
            inputName: 'userPlaceOfBirth',
            inputTitle: 'Место рождения',
            inputValue: '',
            inputPlaceholder: 'Иваново',
            inputWidth: 'oneThird',
            inputType: 'text',
          },
          userDateOfBirth: {
            inputName: 'userDateOfBirth',
            inputTitle: 'Дата рождения',
            inputValue: '',
            inputPlaceholder: '10.10.1999',
            inputWidth: 'oneThird',
            inputType: 'date',
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
                inputPos: 'solo'
              },
              series: {
                inputName: 'series',
                inputTitle: 'Серия',
                inputPlaceholder: '9999',
                inputValue: '',
                inputWidth: 'quarter',
                inputType: 'number',
              },
              number: {
                inputName: 'number',
                inputTitle: 'Номер',
                inputPlaceholder: '999999',
                inputValue: '',
                inputWidth: 'quarter',
                inputType: 'number',
              },
              divisionСode: {
                inputName: 'divisionСode',
                inputTitle: 'Код подразделения',
                inputPlaceholder: '999-999',
                inputValue: '',
                inputWidth: 'quarter',
                inputType: 'number',
              },
              dateOfIssue: {
                inputName: 'dateOfIssue',
                inputTitle: 'Дата выдачи паспорта',
                inputPlaceholder: '10.10.2018',
                inputValue: '',
                inputWidth: 'quarter',
                inputType: 'date',
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
              },
              snils: {
                inputName: 'dateOfIssue',
                inputTitle: 'Снилс',
                inputPlaceholder: '123456789012',
                inputValue: '',
                inputWidth: 'quarter',
                inputType: 'number',
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
                  'Среднее / неполное среднее 2',
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
                inputValue: 'Холост / Не замужем',
                inputWidth: 'quarter',
                inputType: 'select',
                inputSelectCond: false,
                inputSelectOptions: [
                  'Холост / Не замужем',
                  'Холост / Не замужем 2',
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
                inputValue: 'Жилье родственников',
                inputWidth: 'quarter',
                inputType: 'select',
                inputSelectCond: false,
                inputSelectOptions: [
                  'Жилье родственников',
                  'Жилье мое',
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
              
              /* copy down end */
            }
          },
          userFactResidence: {
            subTitle: 'Адрес фактического проживания',
            userFactResidence: true,
            mortWrapInputs: {
              
              typeOfHouse: {
                inputName: 'typeOfHouse',
                inputTitle: 'Вид жилья',
                inputValue: 'Жилье родственников',
                inputWidth: 'quarter',
                inputType: 'select',
                inputPos: 'solo',
                inputSelectCond: false,
                inputSelectOptions: [
                  'Жилье родственников',
                  'Жилье мое',
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
          }
        },
      }
    }
  }
}

</script>


<style scoped lang="scss">

</style>

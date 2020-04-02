<template>
  <div>
    <defaultStage :stageInfo="infoStage">
      <template v-slot:Asset>
        <Asset :key="asset.assetName" v-for="asset in infoStage.assets" :assetInfo="asset"/>
      </template>
      <template v-slot:AssetAdd>
        <button @click.prevent="" class="asset__add">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 1V6M6 11V6M6 6H11M6 6H1" stroke="#FD7800" stroke-linecap="round"/>
          </svg>
          Добавить актив
        </button>
      </template>
    </defaultStage>
    
  </div>
</template>

<script>

import Asset from './Asset.vue'
import defaultStage from '@/components/defaultStage.vue'

export default {
  components: {
    Asset,
    defaultStage,
  },
  data: function(){
    return {
      infoStage: {
        mortWrapName: 'Активы заемщика',
        mortWrapActive: false,
        assets: {
          item1: {
            assetName: 'Hata',
            assetInputs: {
              assetsType: {
                inputName: 'assetsType',
                inputTitle: 'Вид актива',
                inputValue: 'Недвижимость',
                inputWidth: 'quarter',
                inputType: 'select',
                inputPos: 'solo',
                inputSelectCond: false,
                inputSelectOptions: [
                  'Недвижимость',
                  'Транспорт',
                ]
              }
            },
            assetRealty: {
              
              address: {
                inputName: 'address',
                inputTitle: 'Адрес',
                inputPlaceholder: 'Пушкина',
                inputValue: '',
                inputWidth: 'half',
                inputType: 'text',
              },
              typeOfProperty: {
                inputName: 'typeOfProperty',
                inputTitle: 'Вид собственности',
                inputValue: 'Долевая собственность',
                inputWidth: 'oneThird',
                inputType: 'select',
                inputSelectCond: false,
                inputSelectOptions: [
                  'Долевая собственность',
                  'Не долевая собственность',
                ]
              },
              shareSize: {
                inputName: 'shareSize',
                inputTitle: 'Размер доли',
                inputPlaceholder: '1',
                inputValue: '',
                inputWidth: 'one-6',
                inputType: 'text',
              }
            },
            assetCar: {
              mark: {
                inputName: 'mark',
                inputTitle: 'Марка/модель',
                inputPlaceholder: 'Ford Focus 2.0',
                inputValue: '',
                inputWidth: 'half',
                inputType: 'text',
              },
              carYear: {
                inputName: 'carYear',
                inputTitle: 'Год выпуска',
                inputPlaceholder: '1998',
                inputValue: '',
                inputWidth: 'oneThird',
                inputType: 'text',
              }
            }
          },
          item2: {
            assetName: 'Car',
            assetInputs: {
              assetsType: {
                inputName: 'assetsType',
                inputTitle: 'Вид актива',
                inputValue: 'Транспорт',
                inputWidth: 'quarter',
                inputType: 'select',
                inputPos: 'solo',
                inputSelectCond: false,
                inputSelectOptions: [
                  'Недвижимость',
                  'Транспорт',
                ]
              }
            },
            assetRealty: {
              
              address: {
                inputName: 'address',
                inputTitle: 'Адрес',
                inputPlaceholder: 'Пушкина',
                inputValue: '',
                inputWidth: 'half',
                inputType: 'text',
              },
              typeOfProperty: {
                inputName: 'typeOfProperty',
                inputTitle: 'Вид собственности',
                inputValue: 'Долевая собственность',
                inputWidth: 'oneThird',
                inputType: 'select',
                inputSelectCond: false,
                inputSelectOptions: [
                  'Долевая собственность',
                  'Не долевая собственность',
                ]
              },
              shareSize: {
                inputName: 'shareSize',
                inputTitle: 'Размер доли',
                inputPlaceholder: '1',
                inputValue: '',
                inputWidth: 'one-6',
                inputType: 'text',
              }
            },
            assetCar: {
              mark: {
                inputName: 'mark',
                inputTitle: 'Марка/модель',
                inputPlaceholder: 'Ford Focus 2.0',
                inputValue: '',
                inputWidth: 'half',
                inputType: 'text',
              },
              carYear: {
                inputName: 'carYear',
                inputTitle: 'Год выпуска',
                inputPlaceholder: '1998',
                inputValue: '',
                inputWidth: 'oneThird',
                inputType: 'text',
              }
            }
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">
  .asset__add{
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    border: 1px solid #FD7800;
    border-radius: 5px;
    font-size: 14px;
    line-height: 18px;
    color: #333333;
    width: 100%;
    cursor: pointer;
    transition: .3s;
    &:hover{
      background: rgba(253, 120, 0, 0.1);
    }
    svg{
      margin-right: 10px;
    }
  }
</style>
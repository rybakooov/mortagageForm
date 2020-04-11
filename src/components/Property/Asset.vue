<template>
  <div class="mortWrap-block"> 
    <div class="mortWrap-block-inside">
      <!-- DELETE ASSET -->
      <button @click.prevent="deleteAsset" class="delete__asset">
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.07107 1L4.53553 4.53553M4.53553 4.53553L1 8.07107M4.53553 4.53553L8.07107 8.07107M4.53553 4.53553L1 1" stroke="#EB5757" stroke-linecap="round"/>
        </svg>
        Удалить
      </button>

      <!-- DELETE ASSET END -->  

      <!-- INPUTS -->
      <div class="mortWrap-block-inside-inputMargin">
        <defaultInput :key="input.inputName" v-for="input in this.assetInputs" :inputData="input"/>
      </div>
      <div class="mortWrap-block-inside-inputMargin" v-if="this.assetInputs.assetsType.inputValue == 'Недвижимость'">
        <defaultInput :key="input.inputName" v-for="input in this.assetRealty" :inputData="input"/>
      </div>
      <div class="mortWrap-block-inside-inputMargin" v-else>
        <defaultInput :key="input.inputName" v-for="input in this.assetCar" :inputData="input"/>
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
    'assetInfo'
  ],
  mounted: function () {
    this.insertAsset();
  },
  beforeDestroy: function(){
    if(this.delete == false){
      this.saveAsset();
    }
  },
  methods: {
    saveAsset(){
      
      var assetObj = {
        assetID: this.assetInfo.id,
        userID: this.activeId,
        inp: {
          assetRealty: {},
          assetCar: {},
        }
      };
      for(let field in this.assetInputs){
        assetObj.inp[field] = this.assetInputs[field].inputValue;
      }
      assetObj.inp.assetRealty = {};
      for(let field1 in this.assetRealty){
        assetObj.inp.assetRealty[field1] = this.assetRealty[field1].inputValue;
      }
      assetObj.inp.assetCar = {};
      for(let field2 in this.assetCar){
        assetObj.inp.assetCar[field2] = this.assetCar[field2].inputValue;
      }
      
      this.$store.commit('saveAsset', assetObj);
    },


    insertAsset(){
      let activeUser = this.$store.getters.getActiveUser;
      if('assets' in activeUser){
        if ('list' in activeUser.assets){
          if('inp' in activeUser.assets.list['item' + this.assetInfo.id]){
            let _thisItemInp = activeUser.assets.list['item' + this.assetInfo.id].inp
            if('assetsType' in _thisItemInp){
              if(_thisItemInp.assetsType == 'Недвижимость'){
                for(let input in _thisItemInp.assetRealty){
                  this.assetRealty[input].inputValue = _thisItemInp.assetRealty[input];
                }
              } else {
                for(let input1 in _thisItemInp.assetCar){
                  this.assetCar[input1].inputValue = _thisItemInp.assetCar[input1];
                }
              }
              this.assetInputs.assetsType.inputValue = _thisItemInp.assetsType;
            }
          }
        }
      }
    },

    deleteAsset(){
      this.delete = true;
      this.$store.commit('deleteAsset', this.assetInfo.id);
    }
  },
  data: function() {
    return {
      delete: false,
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
      },
      activeId: this.$store.getters.getActiveID,
    }
  },
}
</script>

<style lang="scss">
  .delete__asset{
    display: flex;
    font-size: 14px;
    line-height: 18px;
    color: #EB5757;
    align-items: center;
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    svg{
      margin-right: 10px;
    }
  }
</style>
<template>
  <div class="subsidies">
    <div class="subsidies-block" :class="'subsidies-block_' + subs.width" :key="subs.subsidiesTitle" v-for="subs in subsidies">

      <label class="subsidies-block-label">
        <input @change="cleanDops(subs)" :id="subs.subsidiesID" type="checkbox" v-model="subs.notDisabled">
        <div class="custom-checkbox"></div>
        {{subs.subsidiesTitle}}  
      </label>
      <div class="subsidies-block-inside" :class="{'subsidies-block-inside_active': subs.notDisabled}">
        <defaultInput :disabled="!subs.notDisabled" :inputData="input" v-for="input in subs.inputs" :key="input.inputName"/>
      </div>
    </div>
  </div>
</template>

<script>
import defaultInput from '@/components/defaultInput.vue'

export default {
  components: {
    defaultInput
  }, 
  props: [
    'subsidies',
  ],
  methods: {
    cleanDops(item) {
      for(let subs in this.subsidies){
        if (this.subsidies[subs].subsidiesID == item.subsidiesID){
          continue;
        } else {
          this.subsidies[subs].notDisabled = false;
        }
        
      }
    },
  },
  watch: {
    
  },
  data: function () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
  .subsidies{
    display: flex;
    flex-wrap: wrap;
    margin: 15px -10px -15px;
    &-block{
      margin: 15px 10px;
      &_100{
        width: 100%;
        width: calc(100% - 20px);
      }
      &_half{
        width: calc(50% - 20px);
      }
      &-inside{
        display: flex;
        padding: 5px 10px;
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        background-color: rgba(0, 0, 0, 0.05);
        transition: .3s;
        &_active{
        background-color: rgba(0, 0, 0, 0);
        }
      }
      &-label{
        cursor: pointer;
        font-size: 14px;
        line-height: 17px;
        color: rgba(51, 51, 51, 0.7);
        display: flex;
        margin-bottom: 5px;
        input{
          display: none;
        }
        &:hover{
          .custom-checkbox{
            &:after{
              background-color: rgba(253, 120, 0, 0.1);
            }
          }
        }
        input:checked{
          & + .custom-checkbox{
            &:after{
              background-color: #FD7800;
            }
          }
        }
      }
    }
  }
  .custom-checkbox{
    width: 10px;
    height: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(51, 51, 51, 0.3);
    border-radius: 1px;
    margin-right: 10px;
    margin-top: 3px;
    &:after{
      content: '';
      display: block;
      transition: .3s;
      top: 0;
      left: 0;
      width: 6px;
      height: 6px;
      border-radius: 2px;
      background-color: rgba(253, 120, 0, 0);
    }
  }
</style>
<template>
  <div 
    class="defaultInput" 
    :class="[
      'defaultInput_' + inputData.inputWidth, 
      inputData.inputPos 
        ? 'defaultInput_' + inputData.inputWidth + '_' + inputData.inputPos 
        : ''
    ]">
    <label 
      class="defaultInput__label" 
      :for="inputData.inputName">
      {{ inputData.inputTitle }}
    </label>

    <textarea 
      v-if="inputData.inputType == 'textarea'"
      class="defaultInput__input defaultInput__input_textarea" 
      ></textarea>
    <input 
      v-else
      class="defaultInput__input" 
      type="text" 
      :id="inputData.inputName" 
      :name="inputData.inputName" 
      :data-inputType="inputData.inputType" 
      :placeholder="inputData.inputPlaceholder" 
      :disabled="disabled == false"
      v-model="inputData.inputValue"
    >
    
    <!-- select -->
    <div v-if="inputData.inputType == 'select'" @click="openSelect" class="defaultInput__select">
      {{ inputData.inputValue }}
      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.29406 0.182813L4.68031 3.79656L1.06656 0.182813C0.822813 -0.0609375 0.426563 -0.0609375 0.182813 0.182813C-0.0609375 0.426563 -0.0609375 0.822813 0.182813 1.06656L4.23656 5.12031C4.35906 5.24281 4.52031 5.30406 4.68031 5.30281C4.84156 5.30281 5.00156 5.24281 5.12406 5.12031L9.17781 1.06656C9.42156 0.822813 9.42156 0.426563 9.17781 0.182813C8.93406 -0.0609375 8.53781 -0.0609375 8.29406 0.182813Z" fill="#333333"/>
      </svg>
    </div>
    <div 
      v-if="inputData.inputType == 'select'" 
      class="defaultInput-options" 
      :class="{'defaultInput-options_show': this.inputData.inputSelectCond}">
      <div @click="changeSelect(option)" 
        v-for="option in inputData.inputSelectOptions" 
        :key="option" 
        class="defaultInput-options__item">
        {{ option }}
      </div>
    </div>
    <!-- select end -->

  </div>
</template>

<script>

export default {
  props: {
    inputData: Object,
    disabled: {
      type: Boolean,
      default: function () {
        return true
      }
    }
  },
  mounted: function(){

  },
  data: function() {
    return {
      newInputData: this.inputData,
    }
  },
  methods: {
    localeRU (val) {
      return val.toLocaleString();
    },
    openSelect () {
      if (!this.disabled) return
      this.inputData.inputSelectCond = !this.inputData.inputSelectCond;
    },
    changeSelect(option) {
      this.inputData.inputValue = option;
      this.inputData.inputSelectCond = !this.inputData.inputSelectCond;
    }
  },
  watch: {
    'inputData.inputValue': {
      handler: function () {
        if(this.newInputData.inputValue && this.newInputData.filter == 'localeRU'){
          this.newInputData.inputValue = this.localeRU(parseInt(this.newInputData.inputValue.replace(/[^+\d]/g, '')));
        }
      }
    },
  },
}

</script>


<style scoped lang="scss">
  .defaultInput{
    margin: 15px 10px;
    position: relative;
    width: calc(100% - 20px);
    &_half{
      width: calc(50% - 20px);
      &_solo{
        margin-right: 50%;
      }
    }
    &_oneThird{
      width: calc(100% / 3 - 20px);
      &_solo{
        margin-right: calc(100% / 3 * 2);
      } 
    }
    &_one-6{
      width: calc(100% / 6 - 20px);
    }
    &_2-3{
      width: calc(100% / 3 * 2 - 20px);
    }
    &_quarter{
      width: calc(25% - 20px);
      &-2{
        width: calc(75% / 2 - 20px);
      }
      &_solo{
        margin-right: 75%;
      }
    }
    &__label{
      display: block;
      margin-bottom: 5px;
      font-size: 14px;
      line-height: 17px;
      color: rgba(51, 51, 51, 0.7);
    }
    &__input:disabled{
      background-color: #fff;
      & + .defaultInput__select{
        cursor: default;
      }
    }
    &__input:focus{
      border-color: #FD7800;
    }
    &__input, &__select{
      height: 50px;
      width: 100%;
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      padding: 0 16px;
      color: #333333;
      font-size: 14px;
      line-height: 17px;
      transition: .3s;
      &:hover{
        background-color: rgba(253, 120, 0, 0.05);
      }
      &[data-inputtype="text"]{
        
      }
      &[data-inputtype="select"]{
        display: none;
      }
    }
    &__input{
      &_textarea{
        width: 100%;
        height: 100px;
        resize: none;
        padding: 17px 20px;
      }
    }
    &__select{
      cursor: pointer;
      display: flex; 
      align-items: center;
      background-color: #fff;
      justify-content: space-between;
      svg{
        flex-shrink: 0;
      }
      &:focus{
        border-color: #FD7800;
      }
      &:focus + .defaultInput-options{
        display: block;
      }
    }
    &-options{
      display: none;
      position: absolute;
      bottom: 5px;
      transform: translateY(100%);
      padding: 10px 20px;
      font-size: 14px;
      line-height: 17px;
      background-color: #fff;
      width: 100%;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 0 0 5px 5px;
      z-index: 3;
      &__item{
        cursor: pointer;
        color: #333333;
        &:hover{
          color: #FD7800;
        }
        &:not(:last-child){
          margin-bottom: 15px;
        }
      }
      &_show{
        display: block;
      }
    }
  }
</style>

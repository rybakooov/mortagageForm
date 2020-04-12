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
      :for="inputData.inputName"
      ref="label">
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
      :disabled="disabled"
      v-model="inputData.inputValue"
      v-imask="inputData.mask"
      
      @input="messageError"
      ref="input"
      :class="{'error-inp': (('inputValidate' in this.inputData) && this.changed && this.$v.inputData.inputValue.$invalid)}"
    >

    <p class="postfix" v-if="inputData.postfix">
      {{ inputData.postfix }}
    </p>
    <!-- ERROR MESSAGE -->
    <p v-if="this.error != '' && this.changed && this.$v.inputData.inputValue.$invalid" class="error-message">
      {{ error }}
    </p>
    
    <!-- ERROR MESSAGE END -->

    <!-- HINT -->
    <div v-if="inputData.hint" class="hint">
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7.5" cy="7.5" r="7" stroke="#333333" stroke-opacity="0.3"/>
        <path d="M7.68914 9.672H6.70514L6.68114 9.312C6.61714 8.656 6.88914 7.988 7.49714 7.308C8.08914 6.676 8.38514 6.144 8.38514 5.712C8.38514 5.4 8.28114 5.148 8.07314 4.956C7.87314 4.764 7.57314 4.664 7.17314 4.656C6.63714 4.656 6.18514 4.796 5.81714 5.076L5.50514 4.308C6.01714 3.948 6.64914 3.768 7.40114 3.768C8.08114 3.768 8.60114 3.944 8.96114 4.296C9.32914 4.64 9.51314 5.068 9.51314 5.58C9.51314 5.94 9.42514 6.272 9.24914 6.576C9.07314 6.88 8.80114 7.224 8.43314 7.608C7.89714 8.2 7.64114 8.776 7.66514 9.336L7.68914 9.672ZM7.18514 12.144H7.17314C6.95714 12.144 6.77714 12.072 6.63314 11.928C6.49714 11.776 6.43314 11.592 6.44114 11.376C6.44114 11.144 6.50914 10.956 6.64514 10.812C6.78114 10.668 6.96114 10.596 7.18514 10.596C7.40914 10.596 7.58914 10.668 7.72514 10.812C7.86114 10.956 7.92914 11.144 7.92914 11.376C7.92914 11.592 7.85714 11.776 7.71314 11.928C7.57714 12.072 7.40114 12.144 7.18514 12.144Z" fill="#333333" fill-opacity="0.3"/>
      </svg>
      <div class="hint__text">
        {{ inputData.hint }}
        <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 0.5C11.5 1 8.5 3 7 6C4.5 2.5 3 1 0 0.5H14Z" fill="white"/>
        </svg>
      </div>
    </div>
    <!-- HINT END -->
    
    <!-- select -->
    <div v-click-outside="hideSelect">
      <div v-if="inputData.inputType == 'select'" @click="openSelect" class="defaultInput__select">
        <span>{{ inputData.inputValue }}</span>
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
    </div>
    <!-- select end -->

  </div>
</template>

<script>

import ClickOutside from 'vue-click-outside'
import {IMaskDirective} from 'vue-imask';
import Postfix from '@/Directives/Postfix';
import { required, maxValue, maxLength, minLength } from 'vuelidate/lib/validators'


export default {
  props: {
    inputData: Object,
    disabled: {
      type: Boolean,
    }
  },
  data: function() {
    return {
      newInputData: this.inputData,
      error: '',
      changed: false,
    }
  },
  mounted: function () {
    
  },
  methods: {
    messageError() {
      this.changed = true;
      if ('inputValidate' in this.inputData){
        if(this.$v.inputData.inputValue.required == false) {
          this.error = 'Это обязательное поле';
          return false;
        } 
        if(this.$v.inputData.inputValue.maxValue == false) {
          this.error = 'Превышено максимально значение';
          return false;
        }
        if(this.$v.inputData.inputValue.maxLength == false) {
          this.error = 'Превышена максимальная длина поля';
          return false;
        }
        if(this.$v.inputData.inputValue.minLength == false) {
          this.error = 'Недостаточно символов';
          return false;
        }
      }
    },
    hideSelect () {
      this.inputData.inputSelectCond = false;
    },
    localeRU (val) {
      return val.toLocaleString();
    },
    openSelect () {
      if (this.disabled) return
      this.inputData.inputSelectCond = !this.inputData.inputSelectCond;
    },
    changeSelect(option) {
      this.inputData.inputValue = option;
      this.inputData.inputSelectCond = !this.inputData.inputSelectCond;
    },
    /*updateMask() {
      this.$refs.input.maskRef.updateValue();
    }*/
  },
  watch: {
    /*'inputData.inputValue': {
      handler: function () {

      }
    },*/
  },
  directives: {
    ClickOutside,
    imask: IMaskDirective,
    postfix: Postfix,
  },
  
  validations() {
    


    if ('inputValidate' in this.inputData) {
      var inputData = {inputValue: {}};
      if('required' in this.inputData.inputValidate){
        if (this.inputData.inputValidate.required){
          inputData.inputValue.required = required
        }
      }
      
      if('maxVal' in this.inputData.inputValidate){
        if (this.inputData.inputValidate.required){
          inputData.inputValue.maxValue = maxValue(this.inputData.inputValidate.maxVal);
        }
      }
      
      if('maxLength' in this.inputData.inputValidate){
        inputData.inputValue.maxLength = maxLength(this.inputData.inputValidate.maxLength);
      }

      if('minLength' in this.inputData.inputValidate){
        inputData.inputValue.minLength = minLength(this.inputData.inputValidate.minLength);
      }

      return { 
        inputData
      }

    } else {
      return false
    }
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
      span{
        max-width: calc(100% - 14px);
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
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
  .hint{
    position: absolute;
    top: 0;
    right: 0;
    &:hover{
      svg{
        circle{
          fill: rgba(253, 120, 0, 0.05);
        }
      }
      .hint__text{
        display: block;
      }
    }
    & > svg{
      display: block;
      circle{
        transition: .3s;
      }
    }
    &__text{
      position: absolute;
      background: #FFFFFF;
      box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      display: none;
      max-width: 182px;
      font-size: 14px;
      line-height: 17px;
      color: rgba(51, 51, 51, 0.7);
      padding: 10px;
      z-index: 3;
      bottom: calc(100% + 10px);
      left: -9px;
      svg{
        position: absolute;
        top: 100%;
        left: 10px;
      }
    }
  }
  .postfix{
    
      color: #333333;
      font-size: 14px;
      line-height: 17px;
      position: absolute;
      right: 16px;
      bottom: 16px;
  }

  .error-message{
    font-size: 12px;
    line-height: 14px;
    position: absolute;
    top: calc(100% + 5px);
    color: #FD0000;
  }
  .error-inp{
    border-color: #FD0000 !important;
  }
</style>

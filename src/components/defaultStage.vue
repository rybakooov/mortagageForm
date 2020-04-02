<template>
  <div class="mortWrap">
    <!-- FIRST LEVEL -->
    <div class="mortWrap-block">
      
      <!-- TITLEBLOCK -->
      <div @click="showBlocks = !showBlocks" class="mortWrap__titleBlock">
        {{ stageInfo.mortWrapName }}
        <svg :class="{'rotate': showBlocks}" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L9 9L17 1" stroke="#FD7800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <!-- TITLEBLOCK END -->

      <!-- PASSPORT AND SIGNATURE -->
      <div v-if="showBlocks && stageInfo.mortWrapSolo" class="mortWrap-block-inside">
        <slot name="Passport"></slot>
        <slot name="Signature"></slot>
      </div>

      <!-- PASSPORT AND SIGNATURE END -->


      <div v-if="showBlocks && stageInfo.mortWrapInputs" class="mortWrap-block-inside">

        <!-- JOB TABS -->
        <div v-if="stageInfo.mortWrapJobs" class="job-tabs">
          <div class="job-tabs__item" v-for="job in stageInfo.mortWrapJobs" :key="job.jobTitle">{{job.jobTitle}}</div>
          <div class="job-tabs__item">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 1V6M6 11V6M6 6H11M6 6H1" stroke="#FD7800" stroke-linecap="round"/>
            </svg>
            Добавить
          </div>
        </div>
        <!-- JOB TABS END -->

        <!-- INPUTS FIRST -->
        <div class="mortWrap-block-inside-inputMargin">
          <defaultInput :key="input.inputName" v-for="input in stageInfo.mortWrapInputs" :inputData="input"/>
        </div>
        <!-- INPUTS FIRST END -->


        <!-- SUBSIDIES -->
        <div v-if="stageInfo.mortWrapName == 'Условия кредитования'">
          <defaultSubsidies/>
        </div>
        <!-- SUBSIDIES END -->
      </div>
    </div>
    <!-- FIRST LEVEL END -->


    <!-- SECOND LEVEL -->
    <div v-if="showBlocks">
      <div :key="Object.keys(block)[0]" v-for="block in stageInfo.mortWrapDopsBlocks" class="mortWrap-block">
        <div class="mortWrap-block-inside">


          <!-- SUBTITLE SECOND LEVEL -->
          <p v-if="block.subTitle" class="mortWrap-block-inside__subtitle">
            {{ block.subTitle }}
          </p>
          <!-- SUBTITLE SECOND LEVEL END -->


          <div class="mortWrap-block-inside-inputMargin">
            <defaultInput :key="inputDown.inputName" v-for="inputDown in block.mortWrapInputs" :inputData="inputDown"/>


            <!-- CHECKBOX (SBERBANK) -->
            <div class="checkboxBlock" v-if="block.checkboxBlock">
              <p class="checkboxBlock__title">
                {{ block.checkboxBlock.title }}
              </p>
              <label class="checkboxBlock-item" :key="inp.checkTitle" v-for="inp in block.checkboxBlock.chekboxs">
                <input type="checkbox" :value="inp.checkValue">
                <div class="checkboxBlock__inp"></div>
                {{ inp.checkValue }}
              </label>
            </div>
            <!-- CHECKBOX (SBERBANK) END -->
          </div>
        </div>
      </div>
    </div>
    <!-- SECOND LEVEL END -->



    <!-- ASSETS AND HISTORY -->
    <slot v-if="showBlocks" name="Asset"></slot>
    <slot v-if="showBlocks" name="AssetAdd"></slot>
    <!-- ASSETS AND HISTORY END -->
  </div>
</template>

<script>

import defaultInput from '@/components/defaultInput.vue'
import defaultSubsidies from '@/components/defaultSubsidies.vue'

export default {
  components: {
    defaultInput,
    defaultSubsidies,
  },
  props: [
    'stageInfo'
  ],
  data: function() {
    return {
      showBlocks: false
    }
  },
  computed: {
  },
}

</script>


<style lang="scss">
  .mortWrap{
    margin: 30px 0;
    
    &__titleBlock{
      display: flex;
      padding: 0 30px;
      height: 80px;
      align-items: center;
      justify-content: space-between;
      background: #FFFFFF;
      overflow: hidden;
      border-radius: 10px 10px 0px 0px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      cursor: pointer;
      font-size: 24px;
      line-height: 29px;
      color: #010101;
      &:last-child:first-child{
        border-radius: 10px;
      }
      svg{
        transition: .5s;
        &.rotate{
          transform: rotate(180deg);
        }
      }
    }
    &-block{
      position: relative;
      border-radius: 10px;
      box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1);
      margin: 10px 0;
      &-inside{
        padding: 30px;
        &__subtitle{
          margin-bottom: 30px;
          font-size: 18px;
          line-height: 22px;
        }
        &-inputMargin{
          margin: -15px -10px;
          display: flex;
          flex-wrap: wrap;
        }
      }
    }
  }
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
      line-height: 17px;
      text-align: center;
      color: #333333;
      justify-content: center;
      width: 185px;
      height: 60px;
      background: #FFFFFF;
      border: 2px solid #FD7800;
      box-sizing: border-box;
      border-radius: 5px;
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
  .checkboxBlock{
    margin: 15px 10px;
    input{
      display: none;
    }
    input:checked{
      & + .checkboxBlock__inp:after{
        background-color: #FD7800;
      }
    }
    &__inp{
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
    &__title{
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 10px;
      color: rgba(51, 51, 51, 0.7);
    }
    &-item{
      display: flex;
      font-size: 14px;
      line-height: 18px;
      color: rgba(51, 51, 51, 0.3);
      cursor: pointer;
      &:not(:last-child){
        margin-bottom: 6px;
      }
      &:hover{
        .checkboxBlock__inp:after{
          background-color: rgba(253, 120, 0, 0.1);
        }
      }
    }
  }
</style>

<template>
  <div class="mortWrap" :id="stageInfo.mortWrapID">
    <!-- FIRST LEVEL -->
    <div class="mortWrap-block">
      <!-- TITLEBLOCK -->
      <div @click="openPlz" class="mortWrap__titleBlock">
        {{ stageInfo.mortWrapName }}
        <svg :class="{'rotate': isOpen}" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L9 9L17 1" stroke="#FD7800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <!-- TITLEBLOCK END -->

      <!-- PASSPORT AND SIGNATURE -->
      <div v-if="isOpen && stageInfo.mortWrapID == 'sign'" class="mortWrap-block-inside">
        <slot name="Signature"></slot>
      </div>

      <!-- PASSPORT AND SIGNATURE END -->


      <div v-if="isOpen && stageInfo.mortWrapInputs" class="mortWrap-block-inside">

        <!-- JOB TABS -->
        <slot name="jobTabs"></slot>
        <!-- JOB TABS END -->

        <!-- INPUTS FIRST -->
        <div class="mortWrap-block-inside-inputMargin">
          <defaultInput :key="input.inputName" v-for="input in stageInfo.mortWrapInputs" :inputData="input"/>
        </div>
        <!-- INPUTS FIRST END -->


        <!-- SUBSIDIES -->
        <div v-if="stageInfo.mortWrapName == 'Условия кредитования'">
          <defaultSubsidies :subsidies="subs"/>
        </div>
        <!-- SUBSIDIES END -->
      </div>
    </div>
    <!-- FIRST LEVEL END -->


    <!-- SECOND LEVEL -->
    <div v-if="isOpen">
      <div :key="index" v-for="(block, index) in sortList" class="mortWrap-block">
        <div class="mortWrap-block-inside">


          <!-- SUBTITLE SECOND LEVEL -->
          <p v-if="block.subTitle" class="mortWrap-block-inside__subtitle">
            {{ block.subTitle }}
          </p>
          <!-- SUBTITLE SECOND LEVEL END -->

          <!-- files -->

          <div v-if="block.docs == true">
            <slot name="Passport"></slot>
          </div>

          <!-- files end -->
          
          <div v-if="block.docs != true" class="mortWrap-block-inside-inputMargin">
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
    <slot v-if="isOpen" name="Asset"></slot>
    <slot v-if="isOpen" name="AssetAdd"></slot>
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
  props: {
    stageInfo: {
      type: Object,
    },
    subs: {
      type: Object,
      default: null,
    },
  },
  mounted: function(){
    //! Бекап исходного состояния стейджа.
    /*for()
    this.backUpStageInfo = JSON.parse(JSON.stringify(this.stageInfo));*/
    
    this.openedStage = this.$store.state.openedStage;
    this.insertStage();
  },
  methods: {
    openPlz() {

      /*сохраняем, если закрывается хотя бы один блок */
      if(this.$store.state.openedStage == this.stageInfo.mortWrapID) {
        this.$store.commit('changeOpenedStage', false);
      } else {
        this.$store.commit('changeOpenedStage', this.stageInfo.mortWrapID);
      }
      /*сохраняем, если закрывается хотя бы один блок end */
    },
    saveStage() {
      let forSave = {};
      forSave.stageName = this.stageInfo.mortWrapID;

      forSave.fields = {};
      /* сохраняем данные первого уровня */
      if('mortWrapInputs' in this.stageInfo){
        forSave.fields.firstInputs = {}
        for(let firstInputs in this.stageInfo.mortWrapInputs) {
          forSave.fields.firstInputs[firstInputs] = this.stageInfo.mortWrapInputs[firstInputs].inputValue;
        }
      }
      /* сохраняем данные первого уровня */


      /* сохраняем данные по субсидиям */
      if(this.subs != null){
        forSave.fields.subsidies = {}
        for(let sub in this.subs) {
          forSave.fields.subsidies[sub] = {};
          forSave.fields.subsidies[sub].notDisabled = this.subs[sub].notDisabled;
          forSave.fields.subsidies[sub].inputs = {};
          for(let input in this.subs[sub].inputs){
            forSave.fields.subsidies[sub].inputs[input] = this.subs[sub].inputs[input].inputValue;
          }
        }
      }
      /* сохраняем данные по субсидиям */




      /* сохраняем данные по внутренним блокам */
      if('mortWrapDopsBlocks' in this.stageInfo){
        forSave.dopsBlocks = {};
        for(let block in this.stageInfo.mortWrapDopsBlocks) {
          forSave.dopsBlocks[block] = {};
          forSave.dopsBlocks[block].name = block;
          forSave.dopsBlocks[block].fields = {};
          for(let input in this.stageInfo.mortWrapDopsBlocks[block].mortWrapInputs){
            forSave.dopsBlocks[block].fields[input] = this.stageInfo.mortWrapDopsBlocks[block].mortWrapInputs[input].inputValue;
          }
        }
      }
      /* сохраняем данные по внутренним блокам */



      //**** JOB ****//
      if (this.stageInfo.mortWrapID == 'job'){
        //delete forSave.stageName;
        forSave.id = this.$store.getters.getActiveJob.jobID;
        this.$store.commit('saveJobStage', forSave);
        return false
      }
      //**** JOB END ****//



      this.$store.commit('saveUserStage', forSave);

      //console.log('сохранено в такого юзера ' + this.$store.getters.getActiveID);
    },

    insertStage() {
      if (this.stageInfo.mortWrapID == 'job'){
        //! Если !dirty то обнулять инпуты до исходного
        /*if (!this.$store.getters.getActiveJob.dirty) {
          console.log(this.backUpStageInfo);
          this.stageInfo = Object.assign({}, this.backUpStageInfo);
        }*/ 
        for(let field in this.$store.getters.getActiveJob.data.firstInputs){
          this.stageInfo.mortWrapInputs[field].inputValue = this.$store.getters.getActiveJob.data.firstInputs[field];
        }

        for(let block in this.$store.getters.getActiveJob.data){
          if(block == 'firstInputs') continue;
          for(let field in this.$store.getters.getActiveJob.data[block].fields){
            this.stageInfo.mortWrapDopsBlocks[block].mortWrapInputs[field].inputValue = this.$store.getters.getActiveJob.data[block].fields[field];
          }
        }
        return false
      }


      let activeUser = this.$store.getters.getActiveUser;

      //if(activeUser != undefined){
      let stateOfActiveUser = activeUser[this.stageInfo.mortWrapID];
      if(stateOfActiveUser){
        if(stateOfActiveUser.fields != undefined){
          for(let field in stateOfActiveUser.fields.firstInputs){
            this.stageInfo.mortWrapInputs[field].inputValue = stateOfActiveUser.fields.firstInputs[field];
          }
          if(stateOfActiveUser.fields.subsidies != undefined){
            for(let sub in stateOfActiveUser.fields.subsidies){
              this.subs[sub].notDisabled = stateOfActiveUser.fields.subsidies[sub].notDisabled;

              for(let input in stateOfActiveUser.fields.subsidies[sub].inputs){
                this.subs[sub].inputs[input].inputValue = stateOfActiveUser.fields.subsidies[sub].inputs[input];
              }
            }
          }
        }
        if(stateOfActiveUser.dopsBlocks != undefined){
          for(let block in stateOfActiveUser.dopsBlocks) {
            for(let field in stateOfActiveUser.dopsBlocks[block].fields){
              this.stageInfo.mortWrapDopsBlocks[block].mortWrapInputs[field].inputValue = stateOfActiveUser.dopsBlocks[block].fields[field]
            }
          }
        }
      }
      //}
    }
  },
  computed: {
    changeUsersHelper(){
      return this.$store.getters.getActiveID
    },
    changeJobHelper(){
      return this.$store.getters.getActiveJobId;
    },
    sortList() {
      var sortDopsBlock = {};
      if(this.stageInfo.mortWrapDopsBlocks != undefined){
        for (let block in this.stageInfo.mortWrapDopsBlocks) {
          if('visible' in this.stageInfo.mortWrapDopsBlocks[block] && this.stageInfo.mortWrapDopsBlocks[block].visible == false){
            continue;
          } else {
            sortDopsBlock[block] = this.stageInfo.mortWrapDopsBlocks[block];
          }
        }
      }
      return sortDopsBlock;
    },
    isOpen() {
      return this.$store.state.openedStage == this.stageInfo.mortWrapID;
    }
  },
  watch: {
    'isOpen': {
      handler: function(){
        if(this.isOpen == false){
          this.saveStage();
        } 
      }
    },
    'changeUsersHelper': {
      handler: function(){
        this.insertStage();
      }
    },
    'changeJobHelper': {
      handler: function(){
        this.insertStage();
      }
    }
  },
  data: function() {
    return {
      showBlocks: false,
      openedStage: '',
      backUpStageInfo: {},
      backUpSubs: {},
    }
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

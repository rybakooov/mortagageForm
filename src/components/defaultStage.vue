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

        

        <!-- INPUTS FIRST -->
        <div class="mortWrap-block-inside-inputMargin">
          <defaultInput @save-data="saveStage" :key="input.inputName" v-for="input in stageInfo.mortWrapInputs" :inputData="input"/>
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


          <!-- JOB TABS -->
            <slot v-if="block.subTitle == 'Работа по совместительству'" name="jobTabs"></slot>
          <!-- JOB TABS END -->


          <!-- files -->

          <div v-if="block.docs == true">
            <div class="pass">
              <label class="pass__Dragzone">
                <input type="file">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12.586L16.243 16.828L14.828 18.243L13 16.415V22H11V16.413L9.17199 18.243L7.75699 16.828L12 12.586ZM12 2C13.717 2.00008 15.3741 2.63111 16.6562 3.77312C17.9383 4.91512 18.7561 6.48846 18.954 8.194C20.1983 8.53332 21.2837 9.2991 22.0206 10.3575C22.7576 11.416 23.0991 12.6997 22.9856 13.9844C22.8721 15.2691 22.3107 16.473 21.3995 17.3858C20.4884 18.2986 19.2855 18.8622 18.001 18.978V16.964C18.4612 16.8983 18.9036 16.7416 19.3026 16.503C19.7015 16.2644 20.0489 15.9487 20.3246 15.5744C20.6002 15.2001 20.7985 14.7746 20.9079 14.3228C21.0173 13.8711 21.0356 13.402 20.9617 12.9431C20.8878 12.4841 20.7233 12.0445 20.4777 11.6498C20.2321 11.2552 19.9103 10.9134 19.5312 10.6445C19.1521 10.3755 18.7231 10.1848 18.2695 10.0834C17.8158 9.98203 17.3465 9.97203 16.889 10.054C17.0456 9.32489 17.0371 8.56997 16.8642 7.84455C16.6913 7.11913 16.3583 6.44158 15.8896 5.86153C15.4209 5.28147 14.8284 4.81361 14.1555 4.49219C13.4825 4.17078 12.7462 4.00397 12.0005 4.00397C11.2547 4.00397 10.5184 4.17078 9.84551 4.49219C9.17259 4.81361 8.58008 5.28147 8.11139 5.86153C7.6427 6.44158 7.30969 7.11913 7.13677 7.84455C6.96384 8.56997 6.95537 9.32489 7.11199 10.054C6.19964 9.88267 5.2566 10.0808 4.49033 10.6048C3.72406 11.1287 3.19732 11.9357 3.02599 12.848C2.85466 13.7603 3.05277 14.7034 3.57675 15.4697C4.10072 16.2359 4.90764 16.7627 5.81999 16.934L5.99999 16.964V18.978C4.71544 18.8623 3.51239 18.2989 2.60112 17.3862C1.68985 16.4735 1.12831 15.2696 1.01466 13.9848C0.901007 12.7001 1.24247 11.4163 1.97935 10.3578C2.71624 9.29926 3.80169 8.53339 5.04599 8.194C5.24369 6.48838 6.06139 4.91491 7.34357 3.77287C8.62574 2.63082 10.2829 1.99986 12 2Z" fill="#333333" fill-opacity="0.7"/>
                </svg>
                Перетащите сюда сканы документов
              </label>
              <div class="pass-desc">
                <p class="pass-desc__title">Как правильно загрузить паспорт?</p>
                <ul>
                  <li>Все развороты паспорта, даже если пустые</li>
                  <li>Видны края всех разворотов паспорта</li>
                  <li>Разворот виден полностью</li>
                  <li>Нет посторонних предметов и бликов</li>
                  <li>Данные не перекрыты пальцами</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- files end -->
          
          <div v-if="block.docs != true" class="mortWrap-block-inside-inputMargin">
            <defaultInput @save-data="saveStage" :key="inputDown.inputName" v-for="inputDown in block.mortWrapInputs" :inputData="inputDown"/>



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
    this.openedStage = this.$store.state.openedStage;

    this.backUp = JSON.parse(JSON.stringify(this.stageInfo));

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
        this.$store.commit('saveDopJob', forSave);
        return false
      }
      //**** JOB END ****//



      this.$store.commit('saveUserStage', forSave);

      
    },
    restartStage(){

      if('mortWrapInputs' in this.backUp){
        for(let field in this.backUp.mortWrapInputs){
          this.stageInfo.mortWrapInputs[field].inputValue = this.backUp.mortWrapInputs[field].inputValue;
        }
      }

      if('mortWrapDopsBlocks' in this.backUp){
        for(let block1 in this.backUp.mortWrapDopsBlocks){
          if ('mortWrapInputs' in this.backUp.mortWrapDopsBlocks){
            for(let field1 in this.backUp.mortWrapDopsBlocks[block1]){
              this.stageInfo.mortWrapDopsBlocks[block1].mortWrapInputs[field1].inputValue = this.backUp.mortWrapDopsBlocks[block1].mortWrapInputs[field1].inputValue;
            }
          }
        }
      }




    },
    insertStage() {

      this.restartStage();
      
      let activeUser = this.$store.getters.getActiveUser;
      


      //!~~ JOB ~~!//
      if (this.stageInfo.mortWrapID == 'job'){
        if(activeUser != undefined){
          let stateOfActiveUser = activeUser.job;
          if(stateOfActiveUser != undefined){

            if(stateOfActiveUser.list != undefined){

              for(let input in stateOfActiveUser.list.mainJob.data){
                this.stageInfo.mortWrapInputs[input].inputValue = stateOfActiveUser.list.mainJob.data[input];
              }
              for(let block in stateOfActiveUser.list.mainJob.dopBlockData){
                for(let input in stateOfActiveUser.list.mainJob.dopBlockData[block] ){
                  this.stageInfo.mortWrapDopsBlocks[block].mortWrapInputs[input].inputValue = stateOfActiveUser.list.mainJob.dopBlockData[block][input];
                }
              }
              for(let input in stateOfActiveUser.list.dopJobs[stateOfActiveUser.list.dopActiveJob].data){
                this.stageInfo.mortWrapDopsBlocks.dopJobs.mortWrapInputs[input].inputValue = stateOfActiveUser.list.dopJobs[stateOfActiveUser.list.dopActiveJob].data[input];
              }

            

            }
          }
        }
        return false
      }
      //!~~ JOB END ~~!//

      if(activeUser != undefined){
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
      }
    },
  },
  computed: {
    changeUsersHelper(){
      return this.$store.getters.getActiveID
    },
    changeJobHelper(){
      return this.$store.getters.getActiveJob.jobID;
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
  updated: function(){
  },
  watch: {
    'isOpen': {
      handler: function(){
        this.saveStage();
      }
    },
    'changeUsersHelper': {
      handler: function(){
        //this.restartStage();
        this.insertStage();
      }
    },
    'changeJobHelper': {
      handler: function(){
        //this.restartStage();
        this.insertStage();
      }
    },
  },
  data: function() {
    return {
      showBlocks: false,
      openedStage: '',
      backUp: {},
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

<template>
  <form class="mort" id="app">
    <h1 class="mort__title">Единая анкета</h1>
    <Borrowers/>
    <Condition/>
    <PersonalInfo/>
    <Job/>
    <Property/>
    <History/>
    <OtherInfo/>
    <Passport/>
    <Signature/>
    <button type="submit" class="submit">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="512" height="512"><g id="Froppy_disk" data-name="Froppy disk"><path d="M61.707,10.293l-8-8A1,1,0,0,0,53,2H7A5.006,5.006,0,0,0,2,7V57a5.006,5.006,0,0,0,5,5H57a5.006,5.006,0,0,0,5-5V11A1,1,0,0,0,61.707,10.293ZM48,4V20a1,1,0,0,1-1,1H17a1,1,0,0,1-1-1V4ZM10,60V35a3,3,0,0,1,3-3H51a3,3,0,0,1,3,3V60Zm50-3a3,3,0,0,1-3,3H56V35a5.006,5.006,0,0,0-5-5H13a5.006,5.006,0,0,0-5,5V60H7a3,3,0,0,1-3-3V7A3,3,0,0,1,7,4h7V20a3,3,0,0,0,3,3H47a3,3,0,0,0,3-3V4h2.586L60,11.414Z"/><path d="M39,19h6a1,1,0,0,0,1-1V7a1,1,0,0,0-1-1H39a1,1,0,0,0-1,1V18A1,1,0,0,0,39,19ZM40,8h4v9H40Z"/><path d="M47,45H17a1,1,0,0,0,0,2H47a1,1,0,0,0,0-2Z"/><path d="M47,39H17a1,1,0,0,0,0,2H47a1,1,0,0,0,0-2Z"/><path d="M47,51H17a1,1,0,0,0,0,2H47a1,1,0,0,0,0-2Z"/></g></svg>
    </button>
  </form>
</template>

<script>
import '@/assets/styles/main.scss';
import Borrowers from './components/Borrowers/';
import Condition from './components/Сonditions/';
import PersonalInfo from './components/PersonalInfo/';
import Job from './components/Job/';
import Property from './components/Property/';
import History from './components/History/';
import OtherInfo from './components/OtherInfo/';
import Passport from './components/Passport/';
import Signature from './components/Signature/';


export default {
  name: 'App',
  components: {
    Borrowers,
    Condition,
    PersonalInfo,
    Job,
    Property,
    History,
    OtherInfo,
    Passport,
    Signature,
  },
  data: function() {
    return {
      userID: 0,
    }
  },
  mounted: function(){
    
  },
  watch: {
    '$store.state.openedStage': {
      handler: function(e) {
        if (this.$store.state.openedStage != false){
          setTimeout(()=>{
            var scrolllll = document.getElementById(`${e}`).getBoundingClientRect().top - 50;
            window.scrollBy({
              top: scrolllll,
              left: 0,
              behavior: 'smooth'
            });
          }, 200)
        } else if (this.$store.state.openedStage == false) {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }
      }
    }
  }
}
</script>

<style lang="scss">
.mort {
  max-width: 1064px;
  padding: 0 20px;
  margin: 0 auto;
  font-family: 'Myriad Pro';
  &__title{
    font-weight: 600;
    padding: 40px 0;
    font-size: 36px;
    line-height: 43px;
    color: #010101;
  }
  .submit{
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    border-radius: 50%;
    background-color: #FD7800;
    box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg{
      path{
        fill: #fff;
      }
      width: 30px;
      height: 30px;
    }
  }
}
</style>

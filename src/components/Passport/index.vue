<template>
<div>
  <defaultStage :stageInfo="passport">
    <template v-slot:Passport>
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
    </template>
  </defaultStage>


  </div>
</template>

<script>
import defaultStage from '@/components/defaultStage.vue'

export default {
  components: {
    defaultStage
  },
  data: function() {
    return {
      passport: {
        mortWrapName: 'Документы',
        mortWrapID: 'passport',
        mortWrapSolo: true,
        mortWrapDopsBlocks: {
          passport: {
            docs: true, 
            subTitle: 'Паспорт',
            mortWrapID: 'passport',
            mortWrapSolo: true,
          },
          copyTrud: {
            docs: true,
            subTitle: 'Заверенная копия трудовой книжки',
            mortWrapID: 'copyTrud',
            mortWrapSolo: true,
          },
          snils: {
            docs: true,
            subTitle: 'СНИЛС',
            mortWrapID: 'snils',
            mortWrapSolo: true,
          },
          inn: {
            docs: true,
            subTitle: 'ИНН',
            mortWrapID: 'inn',
            mortWrapSolo: true,
          },
          income: {
            docs: true,
            subTitle: 'Документ, подтверждающий доход',
            mortWrapID: 'income',
            mortWrapSolo: true,
          },
          subs: {
            docs: true,
            subTitle: 'Накопительная Ипотечная Система, Материнский капитал, выписка со счета Материнского капитала, субсидии, памятки и прочие документы',
            mortWrapID: 'subs',
            mortWrapSolo: true,
          },
        }
      },
    }
  }
}
</script>

<style lang="scss">
  .pass{
    display: flex;
    &__Dragzone{
      margin-right: 20px;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px dashed rgba(0, 0, 0, 0.25);
      border-radius: 5px;
      font-size: 18px;
      line-height: 22px;
      color: rgba(51, 51, 51, 0.7);
      height: 195px;
      cursor: pointer;
      background-color: #fff;
      transition: .3s;
      &:hover{
        background-color: rgba(253, 120, 0, 0.05);
      }
      &:focus{
        border-color: #FD7800;
      }
      input{
        display: none;
      }
      svg{
        margin-right: 10px;
      }
    }
    &-desc{
      flex: 0 1 300px;
      &__title{
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 20px;
        color: #333333;
      } 
      ul{
        margin: 0;
        padding-left: 0px;
        list-style: none;
        li{
          font-size: 14px;
          line-height: 18px;
          color: rgba(51, 51, 51, 0.7);
          &:before{
            content: '• ';
            color: #FD7800;;
          }
          &:not(:last-child){
            margin-bottom: 10px;
          }
        }
      }
    }
  }
</style>
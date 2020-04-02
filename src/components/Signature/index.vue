<template>
  <defaultStage :stageInfo="infoStage">
    <template v-slot:Signature>
      <div class="pass">
        <div class="pass__Sign">
          Проверить наличие подписи
        </div>
        <div class="pass-desc">
          <button @click.prevent="">Отправить СМС</button>
          <p class="pass-desc__text">
            На указанный номер будет отправлена одноразовая ссылка, перейдя по ней, клиент сможет подписать документ
          </p>
        </div>
      </div>
    </template>
  </defaultStage>
</template>

<script>
import defaultStage from '@/components/defaultStage.vue'

export default {
  components: {
    defaultStage
  },
  data: function() {
    return {
      infoStage: {
        mortWrapName: 'Подпись',
        mortWrapSolo: true,
      }
    }
  }
}
</script>

<style lang="scss">
  .pass{
    &__Sign{
      flex: 1;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
      border-radius: 5px;
      margin-right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      height: 195px;
      line-height: 22px;
      color: rgba(51, 51, 51, 0.7);
      cursor: pointer;
      background-color: #fff;
      transition: .3s;
      &:hover{
        background-color: rgba(253, 120, 0, 0.05);
      }
      &:focus{
        border-color: #FD7800;
      }
    }
    &-desc{
      button{
        background: #FD7800;
        border: 1px solid #FD7800;
        border-radius: 5px;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
        margin-bottom: 20px;
      }
      &__text{
        font-size: 14px;
        line-height: 17px;
        color: rgba(51, 51, 51, 0.7);
      }
    }
  }
</style>
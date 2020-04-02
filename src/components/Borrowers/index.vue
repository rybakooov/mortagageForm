<template>
  <div class="borrowers">
    <div class="borrowers-item">
      <p class="borrowers-item__name">Инокентий Витькович</p>
      <p class="borrowers-item__zaem">Заемщик</p>
    </div>
    <div class="borrowers-item borrowers-item_add">
      <div class="borrowers-item__add">
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5 1V11.5M11.5 22V11.5M11.5 11.5H22M11.5 11.5H1" stroke="#FD7800" stroke-width="2" stroke-linecap="round"/>
        </svg>
        Добавить
      </div>
    </div>
  </div>
</template>

<script>

export default {
  
}
</script>


<style lang="scss">
  .borrowers{
    display: flex;
    margin: -10px;
    flex-wrap: wrap;
    &-item{
      margin: 10px;
      width: calc(25% - 20px);
      background: #FFFFFF;
      border: 2px solid #FD7800;
      border-radius: 5px;
      padding: 20px 10px;
      &__name{
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #333333;
      }
      &__zaem{
        margin-top: 5px;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        color: rgba(51, 51, 51, 0.7);
      }
      &_add{
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(51, 51, 51, 0.3);
        transition: .3s;
        cursor: pointer;  
        &:hover{
          background-color: rgba(253, 120, 0, 0.05);
        }
      }
      &__add{
        display: flex;
        align-items: center;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
        svg{
          margin-right: 22px;
        }
      }
    } 
  }
</style>

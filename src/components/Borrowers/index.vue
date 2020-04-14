<template>
  <div class="borrowers">
    <div 
      class="borrowers-item" 
      @click="change(user)" 
      :key="'userKey-' + user.id" 
      v-for="user in users"

      :class="{'borrowers-item_active': (user.id == activeUser),}"
    >
      <p class="borrowers-item__name">{{ user.name }}</p>
      <p class="borrowers-item__zaem">{{ user.status }}</p>
      <svg @click.stop="deleteUser(user.id)" class="borrowers-item__close" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.07107 1L4.53553 4.53553M4.53553 4.53553L1 8.07107M4.53553 4.53553L8.07107 8.07107M4.53553 4.53553L1 1" stroke="#EB5757" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="borrowers-item borrowers-item_add" @click="clickAdd">
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
  methods: {
    clickAdd(){
      this.$store.commit('addUser', {
        name: 'Новый пользователь' + this.$store.state.usersCount,
        status: 'Созаемщик',
        id: this.$store.state.usersCount
      });
    },
    change(item){
      this.$store.commit('changeUser', item.id);
    },
    deleteUser(id){
      this.$store.commit('deleteUser', id)
    },


  },
  computed: {
    users(){
      return this.$store.getters.getUsers
    },
    activeUser(){
      return this.$store.state.userActiveID;
    }
  },
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
      border: 2px solid rgba(51, 51, 51, 0.3);
      border-radius: 5px;
      padding: 20px 10px;
      cursor: pointer;
      position: relative;
      &:not(:last-child):not(:first-child){
        .borrowers-item__close{
          display: block;
        }
      }
      &_active{
        border-color: #FD7800 !important;
      }
      &:nth-child(5){
        display: none;
      }
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
      &__close{
        display: none;
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        transform-origin: center center;
        transition: .2s;
        &:hover{
          transform: scale(1.5);
        }
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

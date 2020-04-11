import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState()
  ],
  state: {
    openedStage: false,
    userActiveID: 0,
    usersCount: 1,
    users: {
      user0: {
        name: 'Инокентий Витькович',
        status: 'Заемщик',
        id: 0,
      }
    }
  },
  getters: {
    getActiveUser(state){
      return state.users['user' + state.userActiveID];
    },
    getActiveID(state){
      return state.userActiveID
    },
    getUsers(state){
      return state.users
    },
    getUsersCount(state){
      return state.usersCount
    },

    getAssetsList(state){
      let activeId = state.userActiveID;


      if (!('assets' in state.users['user' + state.userActiveID])){
        Vue.set(state.users['user' + activeId], 'assets', {});
        state.users['user' + activeId].assets.count = 0;
        if (!('list' in state.users['user' + activeId].assets)){
          Vue.set(state.users['user' + activeId].assets, 'list', {})
        }
      }
      return state.users['user' + activeId].assets.list
    },
    getCreditList(state){
      let activeId = state.userActiveID;


      if (!('credit' in state.users['user' + state.userActiveID])){
        Vue.set(state.users['user' + activeId], 'credit', {});
        state.users['user' + activeId].credit.count = 0;
        if (!('list' in state.users['user' + activeId].credit)){
          Vue.set(state.users['user' + activeId].credit, 'list', {})
        }
      }
      return state.users['user' + activeId].credit.list
    }
  },
  mutations: {
    changeOpenedStage(state, n) {
      this.state.openedStage = n;
    },
    //TODO По-хорошему надо декомпозировать store, но есть загвоздка, что state должен быть общим...

    //**** USER ****//
    addUser(state, obj){
      if(this.state.usersCount == 4) return false
      this.state.users = {
        ...this.state.users,
        ['user' + obj.id]: {
          name: obj.name,
          status: obj.status,
          id: obj.id
        }
      };
      this.state.userActiveID = this.state.usersCount;
      this.state.usersCount++;
    },

    deleteUser(state, obj){
      this.state.usersCount--;
      if (obj == this.state.usersCount) {
        delete this.state.users['user' + obj];
        this.state.userActiveID = (obj - 1);
        return false;
      }
      for (let i = obj; i < this.state.usersCount; i++) {
        this.state.users['user' + i] = this.state.users['user' + (i + 1)];
        this.state.users['user' + i].id = i;
        delete this.state.users['user' + (i + 1)];
      }
      this.state.userActiveID = this.state.usersCount - 1;
    },

    saveUserStage(state, obj){
      if(obj.stageName == 'assets') {
        
        return false
      }
      this.state.users['user' + this.state.userActiveID][obj.stageName] = obj;
    },

    changeUser(state, n){
      this.state.openedStage = false;
      this.state.userActiveID = n;
    },
    //**** USER END ****//


    //**** ASSETS ****//
    addAsset(){
      let activeId = this.state.userActiveID;


      this.state.users['user' + activeId].assets.list = {
        ...this.state.users['user' + activeId].assets.list,
        ['item' + this.state.users['user' + activeId].assets.count]: {
          id: this.state.users['user' + activeId].assets.count,
          inp: {}
        }
      }
      this.state.users['user' + activeId].assets.count++;
    },

    saveAsset(state, obj){
      
      this.state.users['user' + obj.userID].assets.list['item' + obj.assetID].inp = obj.inp;
    },

    deleteAsset(state, id){
      this.state.users['user' + state.userActiveID].assets.count--;
      Vue.delete(this.state.users['user' + state.userActiveID].assets.list, 'item' + id);

      for (let i = id; i < state.userActiveID; i++) {
        this.state.users['user' + state.userActiveID].assets.list['item' + i] = {
          ...this.state.users['user' + state.userActiveID].assets.list['item' + (i + 1)]
        }
        Vue.delete(this.state.users['user' + state.userActiveID].assets.list, 'item' + (i + 1));
        this.state.users['user' + state.userActiveID].assets.list['item' + i].id = i;
      }
    },
    //**** ASSETS END ****//


    //**** CREDIT ****//
    addCredit(){
      let activeId = this.state.userActiveID;


      this.state.users['user' + activeId].credit.list = {
        ...this.state.users['user' + activeId].credit.list,
        ['item' + this.state.users['user' + activeId].credit.count]: {
          id: this.state.users['user' + activeId].credit.count,
          inp: {}
        }
      }
      this.state.users['user' + activeId].credit.count++;
    },
    saveCredit(state, obj){
      this.state.users['user' + obj.userID].credit.list['item' + obj.creditID].inp = obj.inp;
    },
    deleteCredit(state, id){
      console.log(id);
      console.log(this.state.users['user' + state.userActiveID].credit.count);
      this.state.users['user' + state.userActiveID].credit.count--;
      console.log(this.state.users['user' + state.userActiveID].credit.count);
      Vue.delete(this.state.users['user' + state.userActiveID].credit.list, 'item' + id);

      for (let i = id; i < state.userActiveID; i++) {
        this.state.users['user' + state.userActiveID].credit.list['item' + i] = {
          ...this.state.users['user' + state.userActiveID].credit.list['item' + (i + 1)]
        }
        Vue.delete(this.state.users['user' + state.userActiveID].credit.list, 'item' + (i + 1));
        this.state.users['user' + state.userActiveID].credit.list['item' + i].id = i;
      }
    },
    //**** CREDIT END ****//

  },
})

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
        name: 'Новый пользователь 0',
        status: 'Заемщик',
        id: 0,
      }
    }
  },
  getters: {    
    
    //**** USER ****//

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
    //**** USER END ****//


    //**** ASSETS ****//
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
    },
    //**** ASSETS END ****//


    
    //**** JOB ****//
    getJobs(state){
      let activeId = state.userActiveID;
      if(!('job' in state.users['user' + activeId])){
        Vue.set(state.users['user' + activeId], 'job', {
          list: {
            'mainJob': {
              jobTitle: 'Основное место работы',
              data: {},
              dopBlockData: {},
            },
            dopActiveJob: -1,
            dopCountJob: 0,
            dopJobs: [],
          }
        })
      } 
      return state.users['user' + activeId].job.list.dopJobs;
    },
    getActiveJob(state){
      let activeId = state.userActiveID;
      if('job' in state.users['user' + activeId]){
        if('list' in state.users['user' + activeId].job){

          for(let dopJob in state.users['user' + activeId].job.list.dopJobs){
            if(state.users['user' + activeId].job.list.dopJobs[dopJob].jobID == state.users['user' + activeId].job.list.dopActiveJob){
              return state.users['user' + activeId].job.list.dopJobs[dopJob];
            }
          }
        }
      }
      return -1;
    },
    /*
    getActiveJobId(state){
      if(state.users['user' + state.userActiveID].job == undefined){
        return 0
      } else {
        return state.users['user' + state.userActiveID].job.activeJOB
      }
      
    },*/
    //**** JOB END ****//
  },
  mutations: {
    changeUserName(state, string){
      let activeId = this.state.userActiveID;
      if(string == '  '){
        this.state.users['user' + activeId].name = 'Новый пользователь ' + activeId;
      } else {
        this.state.users['user' + activeId].name = string;
      }
    },
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
        if(!this.state.users['user' + i].name.indexOf('Новый пользователь') == -1){
          this.state.users['user' + i].name = 'Новый пользователь ' +  i;
        }
        
        delete this.state.users['user' + (i + 1)];
      }
      this.state.userActiveID = this.state.usersCount - 1;
    },

    saveUserStage(state, obj){
      if(obj.stageName == 'assets' || obj.stageName =='creditHistory') {
        return false
      }
      
      this.state.users['user' + this.state.userActiveID][obj.stageName] = obj;
      this.state.users['user' + this.state.userActiveID][obj.stageName].dirty = true;
    },

    changeUser(state, n){
      this.state.openedStage = false;
        //? При смене юзера, у нас закрывается активный этап. 
        //? При закрытии этапа в defaultStage вызывается функция сохранения этапа

      setTimeout(() => {
        this.state.userActiveID = n;
      }, 200) 
        //? Если мгновенно(без сеттаймаута) после закрытия этапа менять значение обозначающее id активного юзера
        //? То функция сохранения, которая сохраняет данные в активного юзера
        //? Будет ссылаться на уже поменянный id выбранного юзера.
        //! Костыль 
        //TODO Эту проблему надо решить
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
      this.state.users['user' + state.userActiveID].credit.count--;
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



    //**** JOB ****//


    saveDopJob(state, obj){
      if('job' in this.state.users['user' + this.state.userActiveID]){
        this.state.users['user' + this.state.userActiveID].job.list.mainJob.data = obj.fields.firstInputs;
        if(this.state.users['user' + this.state.userActiveID].job.list.dopActiveJob == -1){
          return false
        }
        for(let block in obj.dopsBlocks){
          if(block == 'dopJobs'){
            if('dopJobs' in this.state.users['user' + this.state.userActiveID].job.list){
              this.state.users['user' + this.state.userActiveID].job.list.dopJobs[this.state.users['user' + this.state.userActiveID].job.list.dopActiveJob].data = obj.dopsBlocks.dopJobs.fields
              /*Vue.set(this.state.users['user' + this.state.userActiveID].job.list.dopJobs[this.state.users['user' + this.state.userActiveID].job.list.dopActiveJob], 'data', {
                ...obj.dopsBlocks.dopJobs.fields
              })*/
            }
          } else {
            if('dopBlockData' in this.state.users['user' + this.state.userActiveID].job.list.mainJob){
              Vue.set(this.state.users['user' + this.state.userActiveID].job.list.mainJob.dopBlockData, block, {
                ...obj.dopsBlocks[block].fields
              })
            }
          }
        }
      }
      
    },

    addJob(){
      let activeId = this.state.userActiveID;


      this.state.users['user' + activeId].job.list.dopJobs.push({
        jobTitle: 'Дополнительное место работы ' + this.state.users['user' + activeId].job.list.dopCountJob,
        jobID: this.state.users['user' + activeId].job.list.dopCountJob,
        data: {},
      })
      if(this.state.users['user' + activeId].job.list.dopActiveJob == -1){
        this.state.users['user' + activeId].job.list.dopActiveJob++;
      }
      this.state.users['user' + activeId].job.list.dopCountJob++;
    },
    changeActiveJob(state, n){
      let activeId = this.state.userActiveID;
      this.state.users['user' + activeId].job.list.dopActiveJob = n;
    },
    deleteJob(state, n){
      let activeId = this.state.userActiveID;
      this.state.users['user' + activeId].job.list.dopJobs.splice(n, 1);
      for(let i = n; i < this.state.users['user' + activeId].job.list.dopJobs.length; i++){
        this.state.users['user' + activeId].job.list.dopJobs[i].jobTitle = 'Дополнительное место работы ' + i;
        this.state.users['user' + activeId].job.list.dopJobs[i].jobID = i;
      }
      this.state.users['user' + activeId].job.list.dopActiveJob--;
      this.state.users['user' + activeId].job.list.dopCountJob--;
    },
    //**** JOB END ****//
  },
})

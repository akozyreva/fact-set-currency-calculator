<template>
  <div class="main-cur-calc-wrapper">
  <div class="main-sings-wrappers"> 
    <div v-if="(resultBaseRate || resultBaseRate === 0) && (resultSelectedRate || resultSelectedRate === 0)" class="sign-wrapper">
      <p class="sign-base-cur">{{ resultBaseRate }} {{ selectedBaseCur }} equals </p>
      <p class="sign-selected-cur"> {{resultSelectedRate }} {{ selectedTargetCur }}</p>
    </div>
    <div v-else class="sign-wrapper">
      <p class="sign-base-cur">1 {{ selectedBaseCur }} equals </p>
      <p class="sign-selected-cur">{{ rate }} {{ selectedTargetCur }}</p>
    </div>
    <p class="wrapper-date">{{currentDate}}</p>
  </div>
    <div class="main-cur-wrapper">
        <div class="cur-wrapper">
      <input type="number" v-model="resultBaseRate">
      <input type="number"  v-model="resultSelectedRate"> 
    </div>
    <div class="cur-wrapper">
      <select v-model="selectedBaseCur" @change="trigBaseCur($event)">
        <option v-for="cur in currencies" :value="cur.baseCur" :key="cur.id">{{ cur.baseCur}}</option>
      </select>
      <select  v-model="selectedTargetCur" @change="trigTargetCur($event)" >
        <option v-for="item in targetCurrencies" :value="item.name" :key="item.id" >{{ item.name }}
        </option>
      </select>  
      </div>   
    </div>  
  </div>
</template>

<script>
export default {
  name: 'CurCalculator',
  data: function() {
    return {
      currencies: [
      {
        id: 1,
        baseCur: "Euro",
        targetCur: [
          { 
            id: 11,
            name: 'US Dollar',
            val: 1.2897
          },
          {
            id: 12,
            name: 'Schweizer Franken',
            val: 1.3135
          },
          {
            id: 13,
            name: 'Britisch Pfund',
            val: 0.8631
          }
        ]
      },
      {
        id: 2,
        baseCur: "US Dollar",
        targetCur: [
          {
            id: 21,
            name: 'JPY',
            val: 109.6200
          }
        ]
      },
      {
        id: 3,
        baseCur: "Schweizer Franken",
        targetCur: [
          {
            id: 31,
            name: 'US Dollar',
            val: 0.9960
          }
        ]
      },
      {
        id: 4,
        baseCur: "Britisch Pfund",
        targetCur: [
          {
            id: 41,
            name: 'CAD',
            val: 1.7574
          }
        ]
      }
    
    ],  
    selectedBaseCur: '',
    selectedTargetCur: '',
    convBaseVal: 1,
    rate: 0,
    convTargVal: 0
    }
    
  }, 
  created() {
    this.selectedBaseCur = this.currencies[0].baseCur
    this.selectedTargetCur = this.currencies[0].targetCur[0].name
    this.rate = this.round(this.currencies[0].targetCur[0].val)
    this.convTargVal = this.rate
  },
  methods: {
    round(val) {
      return Number(Math.round(val + 'e2')+'e-2')
    },
    trigCalcCur(event) {
      this.selectedTargetCur = event.target.value
      this.rate = this.targetCurrencies.find(el => el.name === this.selectedTargetCur).val
      this.convTargVal  = this.round(this.convBaseVal * this.rate)
    },
    trigBaseCur:function(event){
      this.trigCalcCur(event)
    },
    trigTargetCur:function(event){
      this.trigCalcCur(event)
    },
    predefinedTargetCur: function(val) {
      this.selectedTargetCur = val
    }
  },
  computed: {
    targetCurrencies(){
      const baseCurObj = this.currencies.find( el => el.baseCur === this.selectedBaseCur )
      this.predefinedTargetCur(baseCurObj.targetCur[0].name)
      return baseCurObj.targetCur
    },
      resultBaseRate: {
        get(){
            return this.convBaseVal;
        },
        set(newVal){
            if (newVal === '' || newVal.charAt(0) === '-') {
              this.convTargVal =''
              this.convBaseVal =''
            } else if (newVal.charAt(0) === '0') {
               this.convTargVal = 0
               this.convBaseVal = 0
            } 
            else {
              this.convBaseVal = newVal
              this.convTargVal  = this.round(newVal * this.rate)
            }
            
        }
    },
     resultSelectedRate: {
        get(){
            return this.convTargVal;
        },
        set(newVal){
            if (newVal === '' ||  newVal.charAt(0) === '-') {
              this.convBaseVal =''
              this.convTargVal =''
            }  else if (newVal.charAt(0) === '0') {
               this.convTargVal = 0
               this.convBaseVal = 0
            } else {
              this.convTargVal = newVal 
              this.convBaseVal  =  this.round(this.convTargVal / this.rate)
            }
        }
    },
    currentDate() {
      const date = new Date();
      return `${date.getDate()} ${date.toLocaleString('en-us', { month: 'long' })} ${date.getHours()}:${date.getMinutes()} UTC`
    }
  }
  }
</script>

<style scoped>
  .main-cur-calc-wrapper {
    overflow: hidden;
    position: relative;
    display: block;
    width: max-content;
    margin: auto;
  }
  .main-cur-wrapper {
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
  }
  .cur-wrapper {
    margin-right: 3vh;
  }
  .cur-wrapper select,input {
    display: block;
    margin: 0 auto;
    margin-bottom: 2vh;
    height: 30px;
  }
  .sign-wrapper {
    display: table-footer-group
  }
  .sign-base-cur{
    font-size: 16px;
    color: #878787;
    float: left;
  }
  .sign-selected-cur {
    font-size: 36px;
    margin: 22px 0 0;
  }

  .wrapper-date {
    float: left;
    color: #757575;
    font-size: 12px;
  }

  .main-sings-wrappers {
    display: inline-block;
  }
</style>

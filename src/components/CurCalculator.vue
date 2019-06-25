<template>
  <div>
  <p>{{ selectedBaseCur }}</p>
  <p>{{ selectedTargetCur }}</p>
  <p>{{ secondInputOptions }}</p>
  
  <p>{{ resultRate }} {{ selectedBaseCur }} equals  {{resultRate1 }} {{ selectedTargetCur }}</p>
    <div class="main-cur-wrapper">
        <div class="cur-wrapper">
      <input type="number"  v-model="resultRate">
      <input type="number"  v-model="resultRate1"> 
    </div>
    <div class="cur-wrapper">
      <select v-model="selectedBaseCur" @change="onChange($event)">
        <option v-for="cur in currencies" :value="cur.baseCur" :key="cur.id">{{ cur.baseCur}}</option>
      </select>
      <select  v-model="selectedTargetCur" @change="onChange1($event)" >
        <option v-for="item in secondInputOptions" :value="item.name" :key="item.id" >{{ item.name }}
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
    convertedVal: 1,
    rate: 0,
    convertedVal1: 0
    }
    
  }, 
  created() {
    this.selectedBaseCur = this.currencies[0].baseCur
    this.selectedTargetCur = this.currencies[0].targetCur[0].name
    this.rate = this.round(this.currencies[0].targetCur[0].val)
    this.convertedVal1 = this.rate
    //console.log(this.selectedBaseCur)
  },
  methods: {
    round(val) {
      return Number(Math.round(val + 'e2')+'e-2')
    },
    onChangeCur(event) {
      this.selectedTargetCur = event.target.value
      this.rate = this.secondInputOptions.find(el => el.name === this.selectedTargetCur).val
      this.convertedVal1  = this.round(this.convertedVal * this.rate)
      //console.log(event.target.value);
    },
    onChange:function(event){
      this.onChangeCur(event)
    },
    onChange1:function(event){
      this.onChangeCur(event)
    }
  },
  computed: {
    secondInputOptions(){
      //console.log(this.selectedBaseCur)
      const baseCurObj = this.currencies.find( el => el.baseCur === this.selectedBaseCur )
      this.selectedTargetCur = baseCurObj.targetCur[0].name
      return baseCurObj.targetCur
    },
      resultRate: {
        get(){
            return this.convertedVal;
        },
        set(newVal){
            this.convertedVal = newVal;
            if (newVal ==='') {
              this.convertedVal1 =''
            } else {
              this.convertedVal1  = this.round(newVal * this.rate)
            }
            
        }
    },
     resultRate1: {
        get(){
            return this.convertedVal1;
        },
        set(newVal){
            this.convertedVal1 = newVal;
            if (newVal ==='') {
              this.convertedVal =''
            } else {
              this.convertedVal  =  this.round(this.convertedVal1 / this.rate)
            }
        }
    }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  }
</style>

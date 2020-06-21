<template>
    <div class="container">
            <!-- <div class="circles-top">
                '
                <div class="circle" v-for="i in 10" :key="i">
                    
                </div>
        </div> -->
     <div class="main-box">
            

         <div v-if="selectedOptions.length <questions.length-1 && !quizEnded">
             <h1 class="">{{questions[currentQuestion].description}}</h1>
            <div class="options">
            <div class="option-box" v-for="(op,index) in questions[currentQuestion].ops"  :key="index">
                <button class="option-button" @click="getInput(index)"><div class="option-text">{{op[0]}}</div></button>
                <!-- <div ><img class="option-img" :src="op[1]" alt=""></div> -->
            </div>
            </div>
            <button class="back-button" @click="goBack()">Back</button>
            <!-- <button class="submit-button"  @click="submit()">Submit</button> -->
           <!-- v-if="this.selectedOptions.length >=this.questions.length-1" -->
         </div>
        <div v-else-if="!showResult && showSubmit">
            <button class="submit-button"  @click="submit()">Submit</button>
            
        </div>
        <div v-if="showResult">
            <h1>Your score is {{takerscore}}</h1>
                <button class="submit-button">
                  <a class="restart-text" :href="restartlink">Retry?</a>  
                </button>
        </div>
        
            
        </div> 
    </div>
</template>

<script>
import questions from '../data/quiz-questions';
import db from './firebase-config'

export default {
    props: ['id', 'takername'],

    data() {
        return{
            makerOps:[],
            questions,
            takerinfo:{},
            takerscore:0,
            selectedOptions:[],
            quizid:0,
            currentQuestion:0,
            quizEnded:false,
            showResult:false,
            showSubmit:true,
            restartlink:''

        }
    },
    mounted(){ 
        //console.log(this.$route.path)
        //console.log(this.id + this.name)
        if(this.takername == undefined)
            this.$router.push({path: "/take-quiz-start/" + this.quizid});
       
    },
    created(){
        
        this.takerinfo = {takername: this.takername}
        this.quizid = this.$route.path.match(/\d+/)
        
        // db.collection("users").doc(String(this.quizid)).get().
        // then(function(doc) {
        //     if (doc.exists) {
        //         return doc.data()
        //     } else {
        //     // doc.data() will be undefined in this case
        //      console.log("No such document!");
        //     }
        //      })
        // .then(data => {
        //     var opsArray  = []
        //     for( let key in data){
        //         opsArray.push(data[key])
        //     }
        //     console.log(opsArray)
        // })
            //.catch(function(error) {
            //console.log("Error getting document:", error);
            // });

    },

        methods: {
        getInput(index){
            if(this.selectedOptions.length >=this.questions.length-1) return;
            this.selectedOptions.push(index)
            console.log("options = " + this.selectedOptions)
            this.currentQuestion++
        },
        goBack(){
            if(this.currentQuestion<=0) return;
            this.currentQuestion--;
            this.selectedOptions.pop()
        },
        submit (){
            this.quizEnded =true
            this.showResult = true
            this.showSubmit =false
            db.collection('users').doc(String(this.quizid)).get()
            .then(doc => 
            {
                    var opsArray  = []
                    for(let key in doc.data().selectedOptions){
                    opsArray.push(doc.data().selectedOptions[key])
                    }
                    console.log(opsArray)
                    let i=0
                    for(i=0;i<opsArray.length;i++){
                        if(this.selectedOptions[i] == opsArray[i])
                        {
                            console.log('correct')
                            this.takerscore++;
                        }    
                        else 
                            console.log('wrong')
                    }
                    console.log('your score is ', this.takername," = ", this.takerscore)
                    db.collection('users').doc(String(this.quizid)).set({Hiscores:{[this.takername]:this.takerscore}}, {merge: true})

            })
            console.log(this.selectedOptions)

            this.restartlink = 'https://naresh-khatri.github.io/quiz-game/#/take-quiz-start/' + this.quizid
        },
    }
}
</script>



<style scoped>
.intro {
    padding: 10px;
}
.submit-button {
    outline: none;
    background: blueviolet;
    color: white;
    width: 200px;
    height: 50px;
    border-radius: 5px;
    border: none;
}
.submit-button:hover {
    transition: 0.2s;
    background: violet;
}
.restart-text {
    color: white;
    text-decoration: none;
    font-size: 25px;
}
.back-button {
    background: none;
    outline: none;
    border: 2px solid blueviolet;
    border-radius: 10px;
    width: 60px;
    height: 40px;
   
   position: absolute;
   top: 0px;
   left: 0px;

}
.back-button:hover{
    transition: 0.2s;
    background: red;
    color: white;
}
.circle {
    background: orange;
    padding: 2px;
    border-radius: 15px;
    width: 15px;
    height: 15px;

    float: left;
}
.circles-top{
    width: 20px;
    height: 20px;
    float: left;
    margin: auto;
}
.main-box {
    backdrop-filter: blur(10px);
  background-color: white;
  background-color: rgba(256, 256, 256, 0.2);
    
    display: table;
    padding-top: 20px;
    padding-bottom: 50px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    box-shadow:  0px 2px 5px #9e9e9e, 
             2px 0px 5px #9e9e9e;   
    height: 700px;
    width: 400px;
}
.container {
    padding: 50px;
    padding-top: 0px;
    margin-top: 0px;
}
.options {
    padding: 0px 20px;

}
.option-img {
    width: 100px;
    border-radius: 10px;
}
.option-box {
    margin: 10px;
    float: left;
    width: 35%;
    height: 100px;
    border: 2px solid blueviolet;
    border-radius: 10px;
    font-size: 15px;
    cursor: pointer;
}
.option-box:hover {
    transition: 0.2s;
    background: rgb(155, 48, 255);
}
.option-button {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: none;
    border: none;
    outline: none;
    text-size-adjust: 100px;
    font-size: 15px;
    font-weight: 100px;
}
.option-text {
    font-size: 23px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
@media screen and (max-width: 576px) {
    .main-box {
        margin-left:auto ;
        margin-right:auto ;
        width: 100%;
    } 
    .container {
        padding-top: 50px;
        padding-right: 10px ;
        padding-left: 10px ;
        margin-left: auto;
        margin-right: auto;
    }
    .option-box:hover{
        background: none;
    }
}
</style>
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
                <button class="option-button" @click="getInput(index)"> <div class="option-text">{{op[0]}}</div></button>
            </div>
            </div>
            <button class="back-button" @click="goBack()">Back</button>
            <!-- <button class="submit-button"  @click="submit()">Submit</button> -->
         </div>
        <div v-else-if="!showLink && showSubmit">
            <button class="submit-button"  @click="submit()">Submit</button>
        </div>
        <div class='share' v-if="showLink">
            <a class="share-link" :href="shareURL"><h2 class="share-link">Share</h2></a>
            <a :href="shareURL"><h6>{{shareURL}}</h6></a>
            <div class="grid-container">
                <div class="a">
                    <a :href="shareLinkWhatsapp"  
                             title="Share on whatsapp">
                            <img class='icon' src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-01-512.png" alt="">
                            
                    </a>
                </div>
                <div class="b">
                    <a :href="shareLinkFacebook" 
                        onclick="javascript:window.open(this.href, '',
                         'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
                         return false;" target="_blank" title="Share on Facebook">
                         <img class="icon" src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png" alt="">
                    </a>
                </div>
                <div class="c" style="opacity: 0.3">

                    <img class="icon" src="https://cdn2.iconfinder.com/data/icons/instagram-new/512/instagram-logo-color-512.png" alt="">
                </div>
                <div class="d">
                    <a :href="shareLinkTwitter" onclick="javascript:window.open(this.href, '',
                     'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;"
                      target="_blank" title="Share on Twitter">
                    <img class="icon" src="https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png" alt="">
                    </a>
                </div>
            </div>
           
        </div>
            
        </div> 
    </div>
</template>

<script>
import questions from '../data/quiz-questions';

import db from './firebase-config'


export default {
    props: ['id', 'name'],
    components: {
    },
    data() {
        return{
            questions,
            quizEnded: false,
            selectedOptions:[],
            selectedOptionsObj:{},
            currentQuestion:0,
            userinfo:{},
            showLink:false,
            showSubmit:true,
            shareLinkWhatsapp:'',
            shareLinkFacebook:'',
            shareLinkInstagram:'',
            shareLinkTwitter:''
        }
    },
    mounted(){ 
        //console.log(this.$route.path)
        //console.log(this.id + this.name)
        if(this.name == undefined)
            this.$router.push({path: "/"});
        this.userinfo = {
            _userid: this.id,
            _username: this.name, 
        }
    },
    updated() {
        if(this.name == undefined)
            this.$router.push({path: "/"});
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
            var currentdate = new Date(); 
            var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

            this.quizEnded =true
            this.showLink = true
            this.showSubmit = false
            this.selectedOptionsObj = Object.assign({},this.selectedOptions)                //converting array into object
            Object.assign(this.userinfo, {selectedOptions: this.selectedOptionsObj}, {time: datetime})        //adding a nested object for selectedoption 
            console.log(this.userinfo._userid)                                                                                          //and current time      
            db.collection('users').doc(String(this.userinfo._userid)).set(this.userinfo)    //uploading data
            this.shareURL = 'https://naresh-khatri.github.io/quiz-game/#/take-quiz-start/' + this.userinfo._userid

            this.shareLinkWhatsapp = "whatsapp://send?text=" + this.shareURL
            this.shareLinkFacebook = 'https://www.facebook.com/sharer/sharer.php?u=' + this.shareURL + '&t=' + 'Are  you my close friend? Lets find out!!'
            this.shareLinkTwitter = 'https://twitter.com/share?url=' + this.shareURL + '&text=' + 'Are  you my close friend? Lets find out!!'
            console.log("whatsapp link is " + this.shareLinkWhatsapp)
        },
    }
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px 10px;
  grid-template-areas:  ". a b ." 
                        ". c d ." 
                        ". . . .";
}

.a { grid-area: a; }

.b { grid-area: b; }

.c { grid-area: c; }

.d { grid-area: d; }
.intro {
    padding: 10px;
}
.icon {
    border: 2px solid blueviolet;
    border-radius: 20px;
    float: left;
    padding: 10px;
    width: 80px;
    height: 80px;

}
.share-link {
    text-decoration: none;
    background-color: blueviolet;
    width: 40%;
    height: 30px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    color: white;
}
.share-link:hover {
    transition: .2s;
    background-color: violet;
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
    padding-top: 50px;
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
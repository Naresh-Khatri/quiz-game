<template>
    <div class="container">
     <div class="main">
            <img class="image-logo" src="../assets/start-logo.png" alt="">
            <h1 class="intro">This dare is made by</h1>
            <h1 style="color:blueviolet">{{makername}}</h1>
            <div class="input-field">
                <input class="name-input" type="text" placeholder="Enter your Name Here" v-model="username">
            </div>
            <router-link :to="{ name: 'TakeQuiz', params: { id: id, takername:username } }" class="routerlink">
            <!-- <router-link to="/take-quiz"> -->
                <button class="start-button" v-if="username!=''">
                    🤞Start Now!🤞
                </button>
            </router-link>
            <div class='highscores' v-if="hiscores!=undefined">
                <h2>High Scores:</h2> 
            <div >
                <div  v-for="(score, name,  index) in hiscores" :key="index">
                {{name}} : {{score}}
            </div>
            </div>
            </div>
            <div v-else>
                <h3>No one has tried this yet</h3>
            </div>
            
            
        </div> 

    </div>
</template>

<script>
import db from './firebase-config'
export default {
    props : ['id','name'],
    data(){
        return{
            userid:0,
            makername:'',
            quizid:0,
            username:'',
            hiscores:{}
        }
    },
    created(){
        this.takerinfo = {takername: this.takername}
        this.quizid = this.$route.path.match(/\d+/)

        db.collection('users').doc(String(this.quizid)).get()
            .then(function(doc) {
                 if (doc.exists) {
                    return doc.data()
                }
                else 
                    console.log("No such document!");
            })
            .then(
                data => {   this.makername = data._username
                            this.hiscores = data.Hiscores}
            )
            .then(()=>console.log(this.hiscores))
        //.catch(function(error) {
        //      console.log("Error getting document:", error);
        //})
          console.log("quiz id is " + this.quizid)
     },
    methods:{
    }
}
</script>

<style scoped>
h1{
    margin: 0px;
    padding: 0px;
}
.image-logo {
    width: 200px;
}
.intro {
    display: flexbox;
    padding: 10px;
}
.profile-img {
    max-width: 50px;
    position: relative;
    top: 5px;
    display: inline;
    margin-left: 0px;
}
.routerlink {
    text-decoration: none;
}
.name-input {
    background-image: url("https://www.iconninja.com/files/616/221/174/avatar-account-profile-user-person-face-emoji-icon.png");
    background-repeat: no-repeat;
    background-size: 60px ;
    text-align:center;
    border: 1px solid black;
    outline: none;
    font-size: 20px;
    text-decoration: none;
    width: 80%;
    height: 65px;
    border-radius: 10px;
     backdrop-filter: blur(10px);
  background-color: white;
  background-color: rgba(256, 256, 256, 0.5);
}
.name-input:hover {
    transition: ease-in 0.2s;
    border: 1px solid white;

}
.name-input:hover {
    transition: ease-in 0.2s;
    border: 1px solid white;

}
.start-button {
    margin-top: 20px;
    display: block;
    outline: none;
    color: white;
    font-size: 18px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    height: 40px;
    width: 40%;
    background: red;
    text-decoration: none;
    border: none;
}
.start-button:hover {
    transition: ease-out 0.2s;
    background: orange;
}
.main {
    backdrop-filter: blur(10px);
  background-color: white;
  background-color: rgba(256, 256, 256, 0.2);
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
}
@media screen and (max-width: 576px) {
    .main {
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
}
</style>
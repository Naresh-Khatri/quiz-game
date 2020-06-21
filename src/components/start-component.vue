<template>
    <div class="container">
     <div class="main">
            <img class="image-logo" src="../assets/start-logo.png" alt="">
            <h1 class="intro">Lets see who is your best friend!</h1>
            <div class="input-field">
                <input class="name-input" type="text" placeholder="Enter your Name Here" v-model="username" >
            </div>
            <router-link :to="{ name: 'MakeQuiz', params: { id: userid,name:username } }" class="routerlink">
                
                <button class="start-button" v-if="username!=''">
                    🤞Start Now!🤞
                </button>
            </router-link>
        </div> 

    </div>
</template>

<script>

export default {
    data(){
        return{
            userid:0,
            username:''
        }
    },
    created(){
        this.userid = Math.floor(Math.random() * 10000000 + 1000000)
        console.log("the rand number is " + this.userid)
    },
    methods:{
    }
}
</script>

<style scoped>
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
.input-field {
    
    margin: auto;
    width: 80%;
    height: 100px;
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
    width: 100%;
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
.start-button {
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
    /* filter: blur(8px);
  -webkit-filter: blur(8px); */
  backdrop-filter: blur(10px);
  background-color: white;
  background-color: rgba(256, 256, 256, 0.2);


    padding-bottom: 50px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    box-shadow:  0px 2px 5px #9e9e9e, 
             2px 0px 5px #9e9e9e;   
    height: 500px;
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
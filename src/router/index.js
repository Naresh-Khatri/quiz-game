import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../components/HomePage.vue';
import MakeQuiz from '../components/make-quiz.vue';
import TakeQuizStart from '../components/take-quiz-start.vue'
import TakeQuiz from '../components/take-quiz.vue';



Vue.use(Router);

export default new Router({
    //mode: "histroy",
    routes: [
        {
            path: "/",
            name: 'HomePage',
            component: HomePage
        },
        {
            path: "/make-quiz/:id",
            name: 'MakeQuiz',
            component: MakeQuiz,
            props: true
        },
        {
            path: "/take-quiz-start/:id",
            name: 'TakeQuizStart',
            component: TakeQuizStart,
            props: true
        },
        {
            path: "/take-quiz/:id",
            name: 'TakeQuiz',
            component: TakeQuiz,
            props: true
        },
    ],
})
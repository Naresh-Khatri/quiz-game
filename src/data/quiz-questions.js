// const images = require.context('./images', true, /\.png$/);

const questions= [
        {
            Qid: 1,
            description: 'Which sport do you like?',
            //ops :['Soccer\n⚽','Cricket\n🏏','Tennis\n🎾','Volleyball\n🏐','Table Tennis\n🏓',
            //    'BasketBall\n🏀','Wrestling\n🤼‍♂️','I dont like sports\n🤷'],
            ops : [['Soccer','0'],
                    ['Cricket','🏏'],
                    ['Tennis','🎾'],
                    ['Volleyball','🏐'],
                    ['Table Tennis','⚽'],
                    ['BasketBall','⚽'],
                    ['Wrestling','⚽'],
                    ['I dont like sports','⚽'],
            ]
            // op1: 'Soccer',
            // op1_img: '⚽',
            // op2: 'Cricket',
            // op2_img: '🏏',
            // op3: 'Tennis',
            // op3_img: '🎾',
            // op4: 'Volleyball',
            // op4_img: '🏐',
            // op5: 'Table Tennis',
            // op5_img: '🏓',
            // op6: 'BasketBall',
            // op6_img: '🏀',
            // op7: 'Wrestling',
            // op7_img: '🤼‍♂️',
            // op8: 'I dont like sports',
            // op8_img: '🤷',
        },
        {
            Qid: 2,
            description: 'What is one thing/activity that makes you relax?',
            // op1: 'Listing Music',
            // op1_img: '🎵',
            // op2: 'Dancing',
            // op2_img: '💃',
            // op3: 'Sleeping',
            // op3_img: '😴',
            // op4: 'Watching movies',
            // op4_img: '🍿',
            // op5: 'Playing Games',
            // op5_img: '🎮',
            ops : [['Listing Music','o'],
            ['Dancing','🏏'],
            ['Sleeping','🎾'],
            ['Watching movies','🏐'],
            ['Playing Games','⚽'],
            ]
            
        },
        {
            Qid: 3,
            description: 'Do you like veg or non-veg?',
            ops : [
                ['Veg','o'],
                ['Non-Veg','🏏'],
            ],
        },
        {
            Qid: 1,
            description: 'What was your favorite childhood television show?',
            ops : [
                ['Shaktimaan', '0'],
                ['Galli Galli Sim Sim', '0'],
                ['Shakalaka Boom Boom', '0'],
                ['im not a Millennial', '0'],
            ]
        },
        {
            Qid: 1,
            description: 'Are you a cat Person or a Dog person?',
            ops : [
                ['Dog', '0'],
                ['Cat', '0'],
                ['I dont like either', '0'],
            ]
        },   
        {
            Qid: 1,
            description: 'Do you wear glasses?',
            ops : [
                ['Yes', '0'],
                ['No', '0'],
            ]
        },     
        {
            Qid: 1,
            description: 'As a kid what was your dream career?',
            ops : [
                ['Engineer', '0'],
                ['Actor', '0'],
                ['Doctor', '0'],
                ['Teacher', '0'],
                ['Singer', '0'],
                ['Shaktimaan xD', '0'],

            ]
        },    
        {
            Qid: 1,
            description: 'Whats you favorite Season?',
            ops : [
                ['Autumn', '0'],
                ['Winter', '0'],
                ['Summer', '0'],
                ['Rainy', '0'],
            ]
        },
        {
            Qid: 1,
            description: 'Which drink you like most?',
            ops : [
                ['Tea', '0'],
                ['Cold Coffee', '0'],
                ['Cold Drink', '0'],
                ['Hot Coffee', '0'],
            ]
        },
        {
            Qid: 1,
            description: 'Whats your preferred music genre?',
            ops : [
                ['Rock', '0'],
                ['Folk', '0'],
                ['Heavy Metal', '0'],
                ['EDMs', '0'],
                ['Hip Hop', '0'],
                ['Pop', '0'],
                ['Carrytards', '0'],
            ]
        },
        {
            Qid: 1,
            description: 'What is your pick your vacation spot?',
            ops : [
                ['Manali', '0'],
                ['Ladakh', '0'],
                ['Shimla', '0'],
                ['Nainital', '0'],
                ['Shilong', '0'],
            ]
        },
        {
            Qid: 1,
            description: 'How do you prefer shopping?',
            ops : [
                ['Shops', '0'],
                ['Online', '0'],
            ]
        },
];      
export default questions;
window.onload = () => {

     setTimeout(() => {
         const splashScreen = document.querySelector('.splash-screen');
         splashScreen.style.display = 'none';
         document.body.style.overflowY = 'scroll';
         console.log("hello");
     }, 2500);


    // Global Elements

    const headerClose = document.querySelector('.header-close');
    const menuButton = document.querySelector('.menu');

    // Global Functions

    const hideMenu = () => {
        menuButton.style.display = 'none';
        headerClose.style.display = 'block';
    }

    const showMenu = () => {
        menuButton.style.display = 'flex';
        headerClose.style.display = 'none';
        document.documentElement.style.overflowY = 'scroll';
    }




    // Refer Friend - Show & Close
    const referContainer = document.querySelector('.refer-container');
    setTimeout(() => {
        referContainer.style.transform = 'translateX(0%)';
    }, 10000);

    const close = document.querySelector('.close-refer');
    close.onclick = () => {
        referContainer.style.transform = 'translateX(-100%)';
    }


    // Food Generator

    const shuffleBox = document.querySelector('.shuffle-box');

    const shuffleContainer = document.querySelector('.food-shuffle-container');


    shuffleBox.onclick = () => {
        shuffleContainer.style.display = 'flex';

        hideMenu();

        setTimeout(() => {
            shuffleContainer.style.transform = 'translateY(0%)';
        }, 10);

        headerClose.onclick = () => {
            shuffleContainer.style.transform = 'translateY(100%)';
            showMenu();

            document.body.style.overflowY = 'scroll';
        }

        document.body.style.overflowY = 'hidden';



    }




    // Resataurants Array 

    const resataurants = [

        nandos = {
            name: 'Nandos',
            star_rate: 4.4,
            text_rate: 'Very Good',
            category1: 'Chicken',
            category2: 'Burgers',
            filling: true
        },

        mcdonalds = {
            name: "McDonald's",
            star_rate: 3.8,
            text_rate: 'Good',
            category1: 'Chicken',
            category2: 'Burgers',
            filling: false
        },

        subway = {
            name: "McDonald's",
            star_rate: 3.8,
            text_rate: 'Good',
            category1: 'American',
            category2: 'Sandwiches',
            filling: false
        },

        enish = {
            name: 'Enish Nigerian',
            star: 5.0,
            text_rate: 'Excellent',
            category1: 'Chicken',
            category2: 'African',
            filling: true
        },

        som_saa = {
            name: 'Som Saa Thai',
            star: 4.0,
            text_rate: 'Very Good',
            category1: 'Noodles',
            category2: 'Thai',
            filling: false
        }


    ]





    // Quiz 

    const questionBoxOne = document.querySelector('#question-box-1');
    const questionBoxTwo = document.querySelector('#question-box-2');
    const questionBoxThree = document.querySelector('#question-box-3');

    const quizOptionOne = document.querySelectorAll('.quiz-option-1');
    const quizOptionTwo = document.querySelectorAll('.quiz-option-2');
    const quizOptionThree = document.querySelectorAll('.quiz-option-3');


    



    for (let index = 0; index < quizOptionOne.length; index++) {

        quizOptionOne[index].onclick = () => {

            questionBoxOne.style.transform = "translateX(-100%)";

            setTimeout(() => {
                questionBoxOne.style.opacity = "0";
            }, 20);


            questionBoxTwo.style.transform = "translateX(-100%)";

        var width = 10;

        const bar = document.querySelector(".progress");
        if (width < 100) {
            width += 30;
            bar.style.width = width + '%';

        }
        }

    }

    for (let index = 0; index < quizOptionTwo.length; index++) {

        quizOptionTwo[index].onclick = () => {

            questionBoxTwo.style.transform = "translateX(-200%)";

            setTimeout(() => {
                questionBoxTwo.style.opacity = "0";
            }, 20);

            questionBoxThree.style.transform = "translateX(-200%)";

            var width = 40;

        const bar = document.querySelector(".progress");
        if (width < 100) {
            width += 30;
            bar.style.width = width + '%';

        }
        }

    }

   























}
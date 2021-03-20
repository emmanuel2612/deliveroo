window.onload = () => {

    setTimeout(() => {
        const splashScreen = document.querySelector('.splash-screen');
        splashScreen.style.display = 'none';
        document.body.style.overflowY = 'scroll';
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


        headerClose.onclick = () => {
            showMenu();

            document.body.style.overflowY = 'scroll';

            shuffleContainer.style.display = 'none';

        }


        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

       


    }





    // Quiz 

    const questionBoxOne = document.querySelector('#question-box-1');
    const questionBoxTwo = document.querySelector('#question-box-2');
    const questionBoxThree = document.querySelector('#question-box-3');
    const questionBoxContainer = document.querySelector('.question-box-container');
    const foodShuffleContainer = document.querySelector('.food-shuffle-container');

    const quizOptionOne = document.querySelectorAll('.quiz-option-1');
    const quizOptionTwo = document.querySelectorAll('.quiz-option-2');
    const quizOptionThree = document.querySelectorAll('.quiz-option-3');

    const bar = document.querySelector(".progress");
    const barContainer = document.querySelector(".progress-container");
    const shuffleLoadingContainer = document.querySelector('.shuffle-loading-container');

    const foodShuffleHeader = document.querySelector('.food-shuffle-header');

    const restaurantPage = document.querySelector('.restaurant-page');






    const changeToSecondQuestion = () => {

        questionBoxOne.style.transform = "translateX(-100%)";

        setTimeout(() => {
            questionBoxOne.style.opacity = "0";
        }, 20);


        questionBoxTwo.style.transform = "translateX(-100%)";

        var width = 10;

        if (width < 100) {
            width += 30;
            bar.style.width = width + '%';

        }

    }

    const changeToThirdQuestion = () => {


        questionBoxTwo.style.transform = "translateX(-200%)";

        setTimeout(() => {
            questionBoxTwo.style.opacity = "0";
        }, 20);

        questionBoxThree.style.transform = "translateX(-200%)";

        var width = 40;

        if (width < 100) {
            width += 30;
            bar.style.width = width + '%';

        }

    }

    const changeToLoadingScreen = () => {

        questionBoxThree.style.transform = "translateX(-300%)";
        questionBoxContainer.style.transform = "translateX(-300%)";

        setTimeout(() => {
            questionBoxThree.style.opacity = "0";
        }, 20);


        setTimeout(() => {
            shuffleLoadingContainer.style.display = 'flex';
            shuffleLoadingContainer.style.height = '100%';
            shuffleLoadingContainer.style.flexDirection = 'column';
            shuffleLoadingContainer.style.alignItems = 'center';
            shuffleLoadingContainer.style.justifyContent = 'center';


        }, 500);

        setTimeout(() => {
            shuffleLoadingContainer.style.display = 'none';
            restaurantPage.style.display = 'block';
            randomRestaurant();
        }, 5000);


        setTimeout(() => {
            barContainer.style.opacity = '0';
            foodShuffleContainer.style.paddingBottom = '0';

        }, 20);

        setTimeout(() => {
            foodShuffleHeader.style.marginBottom = '0';
        }, 250);

        setTimeout(() => {
            barContainer.style.display = 'none';
        }, 300);


        var width = 70;

        if (width < 100) {
            width += 30;
            bar.style.width = width + '%';

        }



    }





    // Change loading text 

    const loadingText = ["'Ridin round town", "Checkin' out options", "Lookin' around"];
    let counter = 0;
    const loadingTextElement = document.querySelector('.loading-text');


    const change = () => {
        loadingTextElement.classList.add('hide');

        setTimeout(() => {
            loadingTextElement.innerHTML = loadingText[counter];
            loadingTextElement.classList.remove('hide');
            counter++;

            if (counter >= loadingText.length) {
                counter = 0;
            }

        }, 500);
    }

    setInterval(change, 2500);






    // Resataurants Array 

    const restaurants = [

        {
            name: 'Nandos',
            star_rate: 4.4,
            text_rate: 'Very Good',
            category1: 'Chicken',
            category2: 'Burgers',
            filling: 2,
            spice: 1,
            price: 2
        },

        {
            name: "McDonald's",
            star_rate: 3.8,
            text_rate: 'Good',
            category1: 'Chicken',
            category2: 'Burgers',
            filling: 1,
            spice: 1,
            price: 2
        },

        {
            name: "Subway",
            star_rate: 3.8,
            text_rate: 'Good',
            category1: 'American',
            category2: 'Sandwiches',
            filling: 1,
            spice: 1,
            price: 1
        },

        {
            name: 'Enish Nigerian',
            star: 5.0,
            text_rate: 'Excellent',
            category1: 'Chicken',
            category2: 'African',
            filling: 3,
            spice: 2,
            price: 3
        },

        {
            name: 'Som Saa Thai',
            star: 4.0,
            text_rate: 'Very Good',
            category1: 'Noodles',
            category2: 'Thai',
            filling: 1,
            spice: 1,
            price: 2
        },

        {
            name: 'Hakassan Mayfair',
            description: 'Founded in 2001, Hakkasan celebrates Cantonese cuisine using traditional techniques and the finest ingredients with a contemporary flair',
            star: 4.8,
            text_rate: 'Excellent',
            category1: 'Chinese',
            category2: 'Noodles',
            filling: 1,
            spice: 2,
            price: 2
        },

        {
            name: 'Joe & The Juice',
            description: "Joe & The Juice brings the best Scandi-inspired food to your table. Choose from a delish menu including fresh juices, flatbread sandwiches, healthy treats & salads. Remember life's too short for bad vibes or bad food.",
            star: 4.8,
            text_rate: 'Excellent',
            category1: 'Juices',
            category2: 'Breakfast',
            filling: 1,
            spice: 1,
            price: 1
        },

        {
            name: 'Costa Coffee',
            description: "",
            star: 4.7,
            text_rate: 'Excellent',
            category1: 'Breakfast',
            category2: 'Coffee',
            filling: 1,
            spice: 1,
            price: 1
        },

        {
            name: 'Pret A Manger - Walthamstow',
            description: "Freshly made food and 100% organic coffee delivered to your door. Order all your Pret favourites for delivery now.",
            star: 4.8,
            text_rate: 'Excellent',
            category1: 'Sandwiches',
            category2: 'Healthy',
            filling: 1,
            spice: 1,
            price: 1
        },

        {
            name: 'Star of India - Leyton',
            description: "ALLERGIES & INTOLERANCES Please be advised some of our dishes may contain the following Allergens: Please use this key to identify what allergens and ingredients can be found in ourdishes: Gluten (G), Egg (E), Dairy (D), Ghee (GH), Fish (F), Peanuts (P), Almonds (A), Sesame (S), Mustard (M), Sulphites (SU), and Crustaceans (C).Some dishes are suitable for Vegetarians (V) and Vegans (VE). Fish dishes may contain bones.",
            star: 4.8,
            text_rate: 'Excellent',
            category1: 'Curry',
            category2: 'Indian',
            filling: 3,
            spice: 3,
            price: 2
        }



    ]

    const notSoMuch = document.querySelector('#not-so-much');
    const hungry = document.querySelector('#hungry');
    const starving = document.querySelector('#starving');

    const mild = document.querySelector('#mild');
    const medium = document.querySelector('#medium');
    const hot = document.querySelector('#hot');

    const price_1 = document.querySelector('#£');
    const price_2 = document.querySelector('#££');
    const price_3 = document.querySelector('#£££');

    // Question 1

    notSoMuch.onclick = () => {
        newRestaurants = restaurants.filter(restaurant => restaurant.filling == 1);
        console.log(newRestaurants);

        changeToSecondQuestion();
    }

    hungry.onclick = () => {
        newRestaurants = restaurants.filter(restaurant => restaurant.filling == 2);
        console.log(newRestaurants);

        changeToSecondQuestion();
    }

    starving.onclick = () => {
        newRestaurants = restaurants.filter(restaurant => restaurant.filling == 3);
        console.log(newRestaurants);

        changeToSecondQuestion();
    }


    // Question 2 

    mild.onclick = () => {
        newRestaurants = newRestaurants.filter(restaurant => restaurant.spice == 1);
        console.log(newRestaurants);

        changeToThirdQuestion();
    }

    medium.onclick = () => {
        console.log('medium');

        newRestaurants = newRestaurants.filter(restaurant => restaurant.spice <= 2);
        console.log(newRestaurants);

        changeToThirdQuestion();
    }

    hot.onclick = () => {
        newRestaurants = newRestaurants.filter(restaurant => restaurant.spice <= 3);
        console.log(newRestaurants);

        changeToThirdQuestion();
    }

    // Question 3 

    price_1.onclick = () => {
        newRestaurants = newRestaurants.filter(restaurant => restaurant.price == '1');
        console.log(newRestaurants);

        changeToLoadingScreen();
    }

    price_2.onclick = () => {
        newRestaurants = newRestaurants.filter(restaurant => restaurant.spice == '2');
        console.log(newRestaurants);

        changeToLoadingScreen();
    }

    price_3.onclick = () => {
        newRestaurants = newRestaurants.filter(restaurant => restaurant.spice == '3');
        console.log(newRestaurants);

        changeToLoadingScreen();

        randomRestaurant();
    }




    const randomRestaurant = () => {

        let randomRestaurant = newRestaurants[Math.floor(Math.random() * newRestaurants.length)]; /* Gets a random Restaurant object */

        const randomRestaurantName = document.querySelector('.restaurant-name');
        const randomRestaurantDescription = document.querySelector('.restaurant-description');

        randomRestaurantName.innerHTML = randomRestaurant.name;
        randomRestaurantDescription.innerHTML = randomRestaurant.description;


        if (newRestaurants.length < 1) {
            console.log("sorry empty");
        }

        console.log(randomRestaurant);


    }










    // Table Booking


    const availableTables = document.querySelectorAll('.available');

    for (let index = 0; index < availableTables.length; index++) {
        availableTables[index].onclick = () => {

            if (availableTables[index].classList.contains('active')) {
                availableTables[index].classList.remove('active');
                return;
            }

            if (document.getElementsByClassName('active').length < 3) {
                availableTables[index].classList.add('active');
            }
        }
    }
















}
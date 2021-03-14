window.onload = () => {

   /* setTimeout(() => {
        const splashScreen = document.querySelector('.splash-screen');
        splashScreen.style.display = 'none';
        document.body.style.overflowY = 'scroll';
        console.log("hello");
    }, 2500);*/


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


    shuffleBox.onclick = () =>{
        shuffleContainer.style.display = 'flex';

        hideMenu();

        setTimeout(() => {
            shuffleContainer.style.transform = 'translateY(0%)';
        },10);

        headerClose.onclick = () => {
            shuffleContainer.style.transform = 'translateY(100%)';
            showMenu();
        }

   

    }

    
















}


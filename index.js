window.onload = () => {

    setTimeout(() => {
        const splashScreen = document.querySelector('.splash-screen');
        splashScreen.style.display = 'none';
        document.body.style.overflowY = 'scroll';
        console.log("hello");
    }, 2500);


    const referContainer = document.querySelector('.refer-container');
    setTimeout(() => {
        referContainer.style.transform = 'translateX(0%)';
    }, 10000);

    const close = document.querySelector('.close-refer');
    close.onclick = () => {
        referContainer.style.transform = 'translateX(-100%)';
    }


    const shuffleBox = document.querySelector('.shuffle-box');

    const shuffleContainer = document.querySelector('.food-shuffle-container');


    shuffleBox.onclick = () =>{
        shuffleContainer.style.display = 'flex';

        setTimeout(() => {
            shuffleContainer.style.transform = 'translateY(20%)';
        },10);
    }





}


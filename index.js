window.onload = () => {

    setTimeout(() => {
        const splashScreen = document.querySelector('.splash-screen');
        splashScreen.style.display = 'none';
        document.body.style.overflowY = 'scroll';
        console.log("hello");
    }, 2500);
}
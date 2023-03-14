
let myScaleSection = document.getElementById('mySection');





let myOriginInfoElement = document.getElementById('originInfo');
let myClassListInfoElement = document.getElementById('classListInfo');

// classlist toggles

let myScaleXButton = document.getElementById('scaleXButton');
let myScaleYButton = document.getElementById('scaleYButton');
let myScaleButton = document.getElementById('scaleButton');

myScaleXButton.addEventListener('click', () => {
    myScaleSection.classList.toggle('scaleWidthDouble');
    myClassListInfoElement.innerText = myScaleSection.classList;

});

myScaleYButton.addEventListener('click', () => {
    myScaleSection.classList.toggle('scaleHeightDouble');
    myClassListInfoElement.innerText = myScaleSection.classList;

});

myScaleButton.addEventListener('click', () => {
    myScaleSection.classList.toggle('scaleDouble');
    myClassListInfoElement.innerText = myScaleSection.classList;
});

// direct styling --- inline
let myOriginButtons = document.getElementsByClassName('myButtons');
for (const button of myOriginButtons) {
    button.addEventListener('click', (e) => {

        let myOrigin = "center";

        switch (e.target.innerText) {
            case 'center':
                myOrigin = "center";

                break;
            case 'top left':
                myOrigin = "top left";
                break;
            case 'bottom right':
                myOrigin = "bottom right";
                break;


            default:

                break;
        }
        myOriginInfoElement.innerText = `transform-origin:${myOrigin}`;
        myScaleSection.style = `transform-origin:${myOrigin}`;
    });
}

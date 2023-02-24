'use strict';

//VARIABLES

const navItems = document.querySelectorAll('.header__nav--list > li');
const dropDownBackground = document.querySelector('.dropdownBackground');
const navEl = document.querySelector('.header__nav');


//FUNCTIONS

function handleEnter() {
    /*Display*/
    this.classList.add('trigger-enter');
    /*Opacity*/
    setTimeout(() => {
        if(this.classList.contains('trigger-enter')){
            this.classList.add('trigger-enter-active');
        }
    }, 150);
    //General dropdown
    dropDownBackground.classList.add('open');
    //Target element dropdown
    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = navEl.getBoundingClientRect();
    const coords = {
        height: dropdownCoords.height, 
        width: dropdownCoords.width, 
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    }
    //Set background properties
    dropDownBackground.style.setProperty('width', `${coords.width}px`);
    dropDownBackground.style.setProperty('height', `${coords.height}px`);
    dropDownBackground.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    dropDownBackground.classList.remove('open');
}


//EVENT LISTENERS

navItems.forEach(item => item.addEventListener('mouseenter', handleEnter));
navItems.forEach(item => item.addEventListener('mouseleave', handleLeave));

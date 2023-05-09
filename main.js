const burger = document.querySelector('.burger')
const nav = document.querySelector('nav')
const prev = document.querySelector('.news-cta-prev')
const next = document.querySelector('.news-cta-next')
const newsList = document.querySelector('.news__list')
let newsItem =document.querySelectorAll('.news__item')
newsItem = Array.from(newsItem);
var max = newsItem.length /2;

burger.onclick = function() {
    nav.classList.toggle('animationMobile')
}

function changeView1(CurrentIndex){
    if(CurrentIndex < max){
        if(CurrentIndex!=0){
            newsList.style.transition = '0.3s ease'
        }else {
            newsList.style.transition = 'unset'
        }
        newsList.style.transform = `translateX(calc(-100% * ${CurrentIndex} - ${CurrentIndex} * 30px))`
        newsItem.forEach(function(newItem,index){
            if(index<CurrentIndex*2){
                newItem.style.transition = 'unset'
                newItem.style.opacity = '0'
                newItem.pointerEvents = "none";
            }else {
                newItem.pointerEvents = "auto";
                newItem.style.opacity = '1'
                newItem.style.transition = '0.3s ease'
            }
        })
    }
}

function changeView2(CurrentIndex){
    if(CurrentIndex < max){
        newsList.style.transition = '0.3s ease'
        newsList.style.transform = `translateX(calc(-100% * ${CurrentIndex} - ${CurrentIndex} * 30px))`
        newsItem.forEach(function(newItem,index){
            if(index<CurrentIndex*2){
                newItem.style.transition = 'unset'
                newItem.style.opacity = '0'
                newItem.pointerEvents = "none";
            }else {
                newItem.pointerEvents = "auto";
                newItem.style.opacity = '1'
                newItem.style.transition = '0.3s ease'
            }
        })
    }
}

var CurrentIndex = 0
next.onclick = function() {
    CurrentIndex++;
    if(CurrentIndex>=max){
        CurrentIndex = 0;
    }
    changeView1(CurrentIndex);
}

prev.onclick = function() {
    CurrentIndex--;
    if(CurrentIndex<0){
        CurrentIndex = max-1;
    }
    changeView2(CurrentIndex);
}

const home = document.querySelector('.nav__item-link-home')
const service = document.querySelector('.nav__item-link-service')
const about = document.querySelector('.nav__item-link-about')
const doctors = document.querySelector('.nav__item-link-doctors')

function remove(){
    home.classList.remove('nav__item-link--active')
    service.classList.remove('nav__item-link--active')
    about.classList.remove('nav__item-link--active')
    doctors.classList.remove('nav__item-link--active')
}

window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    if(scrollTop<=700){
        remove()
        home.classList.toggle('nav__item-link--active')
    }else if(scrollTop<=1100){
        remove()
        service.classList.toggle('nav__item-link--active')
    }else if(scrollTop<=2700){
        remove()
        about.classList.toggle('nav__item-link--active')
    }else if(scrollTop<=4000){
        remove()
        doctors.classList.toggle('nav__item-link--active')
    }
});






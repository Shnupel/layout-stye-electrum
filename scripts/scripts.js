const headerLang     = document.querySelector('.header__language');
const headerSubLangs = document.querySelector('.header__sub-langs');
const headerArrow    = document.querySelector('.header__arrow');



const headerBurger    = document.querySelector('.burger__inner');
const headerMenu      = document.querySelector('._menu');
const close           = document.querySelector('.menu__close');
const body            = document.body;

headerLang.classList.remove('_active');
headerSubLangs.classList.remove('_active');
headerArrow.classList.remove('_active');
headerBurger.classList.remove('_active');
headerMenu.classList.remove('_active');
close.classList.remove('_active');
body.classList.remove('_active');

headerLang.addEventListener('click', function(){
    //headerLang.classList.toggle('_active');
    headerSubLangs.classList.toggle('_active');
    headerArrow.classList.toggle('_active');
    console.log("i finish");
});

headerBurger.addEventListener('click', function(){
    headerBurger.classList.toggle('_active');
    headerMenu.classList.toggle('_active');
    body.classList.toggle('_active');
});

close.addEventListener('click', function(){
    headerBurger.classList.remove('_active');
    headerMenu.classList.remove('_active');
    body.classList.remove('_active');
});


const accardionTitle1   = document.querySelector('._compani');
const accardion1        = document.querySelector('.menu_compani');
accardionTitle1.addEventListener('click', function(){
    accardion1.classList.toggle('_active');
    accardionTitle1.classList.toggle('_active');
});

const accardionTitle2   = document.querySelector('._info');
const accardion2        = document.querySelector('.menu_info');
accardionTitle2.addEventListener('click', function(){
    accardion2.classList.toggle('_active');
    accardionTitle2.classList.toggle('_active');
});

const accardionTitle3   = document.querySelector('._energy');
const accardion3        = document.querySelector('.menu_energy');
accardionTitle3.addEventListener('click', function(){
    accardion3.classList.toggle('_active');
    accardionTitle3.classList.toggle('_active');
});

const accardionTitle4   = document.querySelector('._gas');
const accardion4        = document.querySelector('.menu_gas');
accardionTitle4.addEventListener('click', function(){
    accardion4.classList.toggle('_active');
    accardionTitle4.classList.toggle('_active');
});

const accardionTitle5   = document.querySelector('._services');
const accardion5        = document.querySelector('.menu_services');
accardionTitle5.addEventListener('click', function(){
    accardion5.classList.toggle('_active');
    accardionTitle5.classList.toggle('_active');
});

const subAccardionTitle1   = document.querySelector('._sub-enegrgy');
const subAccardion1        = document.querySelector('.min-energy');
subAccardionTitle1.addEventListener('click', function(){
    subAccardion1.classList.toggle('_active');
    subAccardionTitle1.classList.toggle('_active');
});

const subAccardionTitle2   = document.querySelector('._sub-gas');
const subAccardion2        = document.querySelector('.min-gas');
subAccardionTitle2.addEventListener('click', function(){
    subAccardion2.classList.toggle('_active');
    subAccardionTitle2.classList.toggle('_active');
});
/*
const accardionTitle5   = document.querySelector('._services');
const accardion5        = document.querySelector('.menu_services');
accardionTitle5.addEventListener('click', function(){
    accardion5.classList.toggle('_active');
});*/


const isMobile = {
	Android: function(){
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function(){
		return navigator.userAgent.match(/BlackBerry/i);
	},
	IOS: function(){
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function(){
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function(){
		return navigator.userAgent.match(/IEMobile/i);
	},

	any: function(){
		return(
			isMobile.Android()||
			isMobile.BlackBerry()||
			isMobile.IOS()||
			isMobile.Opera()||
			isMobile.Windows());
	}
}

const headerInner      = document.querySelector('.header__inner');
const downMenu = document.querySelectorAll('.down-Menu');

if (isMobile.any()) {
    window.addEventListener('scroll', function(){
    let scroll         = window.pageYOffset;
    //console.log(scroll);
    if(scroll>1000){
        headerInner.classList.add('_active');
        close.classList.remove('_unActive')        
    }else{
        headerInner.classList.remove('_active');
        close.classList.add('_unActive');
    }
});
} else {
    window.addEventListener('scroll', function(){
    let scroll         = window.pageYOffset;
    //console.log(scroll);
    if(scroll>1000){
        headerInner.classList.add('_active');
    }else{
        headerInner.classList.remove('_active');
    }
});
};


$(document).ready(function(){
	$('._slider').slick({
		dots:false,
		arrows:true,
		adaptiveHeight:true,
        slidesToShow: 6,
        slidesToScroll: 2,
        responsive:[
            {
                breakpoint: 1030,
                settings:{
                    slidesToShow: 4,
                },
                breakpoint: 435,
                settings:{
                    slidesToShow: 2,
                }
            }
        ],
	});
    $('.achivements__slider').slick({
		dots:true,
		arrows:false,
		adaptiveHeight:true,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive:[
            {
                breakpoint: 775,
                settings:{
                    slidesToShow: 4,
                },
                breakpoint: 435,
                settings:{
                    slidesToShow: 2,
                },
            }
        ],
	});
});


// falling menu script

const fallingDownButtons   = document.querySelectorAll('.header__elem');

const header__elem_1 = document.querySelector('.header__elem_company');
const header__elem_2 = document.querySelector('.header__elem_energy');
const header__elem_3 = document.querySelector('.header__elem_gas');
const header__elem_4 = document.querySelector('.header__elem_info');
const header__elem_5 = document.querySelector('.header__elem_services');
const header__elem_6 = document.querySelector('.header__elem_contacts');


for(let i=0; i<fallingDownButtons.length; i++){
    fallingDownButtons[i].addEventListener('click', function(){
        //console.log(i);
        if(i == 1){
            header__elem_1.classList.toggle('_active');
            header__elem_2.classList.remove('_active');
            header__elem_3.classList.remove('_active');
            header__elem_4.classList.remove('_active');
            header__elem_5.classList.remove('_active');
            header__elem_6.classList.remove('_active');
        }
        if(i == 2){
            header__elem_2.classList.toggle('_active');
            header__elem_1.classList.remove('_active');
            header__elem_3.classList.remove('_active');
            header__elem_4.classList.remove('_active');
            header__elem_5.classList.remove('_active');
            header__elem_6.classList.remove('_active');
        }
        if(i == 3){
            header__elem_3.classList.toggle('_active');
            header__elem_1.classList.remove('_active');
            header__elem_2.classList.remove('_active');
            header__elem_4.classList.remove('_active');
            header__elem_5.classList.remove('_active');
            header__elem_6.classList.remove('_active');
        }
        if(i == 4){
            header__elem_4.classList.toggle('_active');
            header__elem_1.classList.remove('_active');
            header__elem_2.classList.remove('_active');
            header__elem_3.classList.remove('_active');
            header__elem_5.classList.remove('_active');
            header__elem_6.classList.remove('_active');
        }
        if(i == 5){
            header__elem_5.classList.toggle('_active');
            header__elem_1.classList.remove('_active');
            header__elem_2.classList.remove('_active');
            header__elem_3.classList.remove('_active');
            header__elem_4.classList.remove('_active');
            header__elem_6.classList.remove('_active');
        }
        if(i == 6){
            header__elem_6.classList.toggle('_active');
            header__elem_1.classList.remove('_active');
            header__elem_2.classList.remove('_active');
            header__elem_3.classList.remove('_active');
            header__elem_4.classList.remove('_active');
            header__elem_5.classList.remove('_active');
        }
    });
}


const call   = document.querySelector('.footer__call');
const list   = document.querySelector('.footer__icons');
const letter = document.querySelector('.footer__letter');
const popUp  = document.querySelector('.footer__popUp');

call.addEventListener('click', function(){
    list.classList.toggle('_active');
    letter.classList.toggle('_active');
});

letter.addEventListener('click', function(){
    popUp.classList.add('_active');
});

window.addEventListener('click', function(e){
    if(e.target == popUp){
        popUp.classList.remove('_active');
    };
});








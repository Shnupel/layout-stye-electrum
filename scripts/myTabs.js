const tabTopBtn_20  = document.querySelector('.tab__btn_t_20');
const tabTopBtn_21  = document.querySelector('.tab__btn_t_21');
const top_right_1 = document.querySelector('.top_right_1');
const top_right_2 = document.querySelector('.top_right_2');
const top_right_3 = document.querySelector('.top_right_3');
const top_right_4 = document.querySelector('.top_right_4');
const top_right_5 = document.querySelector('.top_right_5');

const tab_right_20_1 = document.querySelector('.tab_right_20_1');
const tab_right_20_2 = document.querySelector('.tab_right_20_2');
const tab_right_20_3 = document.querySelector('.tab_right_20_3');
const tab_right_20_4 = document.querySelector('.tab_right_20_4');
const tab_right_20_5 = document.querySelector('.tab_right_20_5');

tab_right_20_1.classList.add('_active');
tab_right_20_2.classList.add('_active');
tab_right_20_3.classList.add('_active');
tab_right_20_4.classList.add('_active');
tab_right_20_5.classList.add('_active');


tabTopBtn_20.addEventListener('click', function(){
    tabTopBtn_20.classList.add('_active');
    tabTopBtn_21.classList.remove('_active');
    top_right_1.classList.remove('_active');
    top_right_2.classList.remove('_active');
    top_right_3.classList.remove('_active');
    top_right_4.classList.remove('_active');
    top_right_5.classList.remove('_active');

    tab_right_20_1.classList.add('_active');
    tab_right_20_2.classList.add('_active');
    tab_right_20_3.classList.add('_active');
    tab_right_20_4.classList.add('_active');
    tab_right_20_5.classList.add('_active');
});

tabTopBtn_21.addEventListener('click', function(){
    tabTopBtn_20.classList.remove('_active');
    tabTopBtn_21.classList.add('_active');
    top_right_1.classList.add('_active');
    top_right_2.classList.add('_active');
    top_right_3.classList.add('_active');
    top_right_4.classList.add('_active');
    top_right_5.classList.add('_active');

    tab_right_20_1.classList.remove('_active');
    tab_right_20_2.classList.remove('_active');
    tab_right_20_3.classList.remove('_active');
    tab_right_20_4.classList.remove('_active');
    tab_right_20_5.classList.remove('_active');
});




// tabs, which bottom

const tab__btn_b_20 = document.querySelector('.tab__btn_b_20');
const tab__btn_b_21 = document.querySelector('.tab__btn_b_21');

const b_tab_right_20_1 = document.querySelector('.b_tab_right_20_1');
const b_tab_right_20_2 = document.querySelector('.b_tab_right_20_2');
const b_tab_right_20_3 = document.querySelector('.b_tab_right_20_3');
const b_tab_right_20_4 = document.querySelector('.b_tab_right_20_4');
const b_tab_right_20_5 = document.querySelector('.b_tab_right_20_5');
const b_tab_right_20_6 = document.querySelector('.b_tab_right_20_6');
const b_tab_right_20_7 = document.querySelector('.b_tab_right_20_7');

b_tab_right_20_1.classList.add('_active');
b_tab_right_20_2.classList.add('_active');
b_tab_right_20_3.classList.add('_active');
b_tab_right_20_4.classList.add('_active');
b_tab_right_20_5.classList.add('_active');
b_tab_right_20_6.classList.add('_active');
b_tab_right_20_7.classList.add('_active');


const bottom_right_1 = document.querySelector('.bottom_right_1');
const bottom_right_2 = document.querySelector('.bottom_right_2');
const bottom_right_3 = document.querySelector('.bottom_right_3');
const bottom_right_4 = document.querySelector('.bottom_right_4');
const bottom_right_5 = document.querySelector('.bottom_right_5');
const bottom_right_6 = document.querySelector('.bottom_right_6');
const bottom_right_7 = document.querySelector('.bottom_right_7');


tab__btn_b_20.addEventListener('click', function(){
    tab__btn_b_20.classList.add('_active');
    tab__btn_b_21.classList.remove('_active');
    b_tab_right_20_1.classList.add('_active');
    b_tab_right_20_2.classList.add('_active');
    b_tab_right_20_3.classList.add('_active');
    b_tab_right_20_4.classList.add('_active');
    b_tab_right_20_5.classList.add('_active');
    b_tab_right_20_6.classList.add('_active');
    b_tab_right_20_7.classList.add('_active');

    bottom_right_1.classList.remove('_active');
    bottom_right_2.classList.remove('_active');
    bottom_right_3.classList.remove('_active');
    bottom_right_4.classList.remove('_active');
    bottom_right_5.classList.remove('_active');
    bottom_right_6.classList.remove('_active');
    bottom_right_7.classList.remove('_active');
});

tab__btn_b_21.addEventListener('click', function(){
    tab__btn_b_21.classList.add('_active');
    tab__btn_b_20.classList.remove('_active');
    b_tab_right_20_1.classList.remove('_active');
    b_tab_right_20_2.classList.remove('_active');
    b_tab_right_20_3.classList.remove('_active');
    b_tab_right_20_4.classList.remove('_active');
    b_tab_right_20_5.classList.remove('_active');
    b_tab_right_20_6.classList.remove('_active');
    b_tab_right_20_7.classList.remove('_active');

    bottom_right_1.classList.add('_active');
    bottom_right_2.classList.add('_active');
    bottom_right_3.classList.add('_active');
    bottom_right_4.classList.add('_active');
    bottom_right_5.classList.add('_active');
    bottom_right_6.classList.add('_active');
    bottom_right_7.classList.add('_active');
});
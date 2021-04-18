import FastClick from './fastclick';

// 设置rem适配,以iPhone6为原型图
 document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';

//  将FastClick添加到body
 window.addEventListener('load', function () {
     FastClick.attach(document.body);
 }, false);

//  阻止touch多指默认事件
 document.documentElement.addEventListener('touchmove', function (e) {
     if(e.touches.length > 1) {
         e.preventDefault();
     }
 }, false);
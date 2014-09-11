/*global document,setTimeout,clearTimeout,setInterval,clearInterval  */
var snippet = (function(){

  'use strict';

  return{
    
    ready:function(){
      this.functions();
    },

    functions:function(){
      var logo_title = this.selector('.logo_title'),
          logo_subtitle = this.selector('.logo_subtitle');
     
      
      snippet.wait(function(){
        snippet.anima(logo_title,'opacity',0,0,1,1000);
        logo_title.innerHTML = 'ДЕТСКИЙ';
      },1000);
      
       snippet.wait(function(){
         snippet.anima(logo_subtitle,'opacity',0,0,1,1000);
         logo_subtitle.innerHTML ='ЛАГЕРЬ';
      },1500); 
 
      snippet.wait(function(){
        snippet.anima(logo_title,'opacity',0,0,1,1000);
        logo_title.innerHTML = 'ИССЫК-КУЛЬ';
      },3000);
      
       snippet.wait(function(){
         snippet.anima(logo_subtitle,'opacity',0,0,1,1000);
         logo_subtitle.innerHTML ='БЛАГОСЛОВЕННЫЙ';
      },3500); 
      
       snippet.wait(function(){
         snippet.anima(logo_title,'opacity',0,0,1,1000);
         logo_title.innerHTML = '2013 ГОД';
         logo_subtitle.innerHTML ='';
      },4500); 
      
       snippet.wait(function(){
         snippet.anima(logo_title,'opacity',0,0,1,1000);
         logo_title.innerHTML = '';
         logo_subtitle.innerHTML ='';
      },7500);
 
       snippet.wait(function(){
         snippet.anima(logo_subtitle,'opacity',0,0,1,1000);
         logo_subtitle.innerHTML ='';
      },10000);
      
       snippet.wait(function(){
         snippet.anima(logo_title,'opacity',0,0,1,1000);
         snippet.anima(logo_subtitle,'opacity',0,0,1,2000);
         logo_title.innerHTML = '© Konkin Artem';
         logo_subtitle.innerHTML ='';
      },15000);
      
    },
    // this.selector('.foo');
    selector:function(el){
      return document.querySelector(el);
    },

    /*
    *  like delay
    *  snippet.wait(callback(),time);
    */
    wait:function(callback,time){
      if(typeof setTimeout !== 'undefined'){
        var t = setTimeout(function(){
          clearTimeout(t);
          return callback();
        },time);
      }
    },
    
    /*
    *  like animate
    *  snippet.anima(elem,style,unit,from,to,time);
    */
    anima:function(elem,style,unit,from,to,time) {
      if( !elem) return;
      var start = new Date().getTime(),
          timer = setInterval(function() {
            var step = Math.min(1,(new Date().getTime()-start)/time);
            elem.style[style] = (from+step*(to-from))+unit;
            if( step == 1) clearInterval(timer);
          },25);
      elem.style[style] = from+unit;
    }
  };
})();
snippet.ready();
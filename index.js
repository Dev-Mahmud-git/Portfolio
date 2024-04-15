const home =  document.querySelector('.item-1');
const gallery = document.querySelector('.item-2');
const favourites = document.querySelector('.item-3');
const timelines = document.querySelector('.item-4');
const animate = document.querySelector('.animate');
const dropdown = document.querySelector(".dropdown");
const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const page3 = document.querySelector(".page3");

const para1 = document.querySelector(".home");
const para2 = document.querySelector(".gallery");
const para3 = document.querySelector(".favourites");
const para4 = document.querySelector(".timeline");
const avatar = document.querySelector('.avatar')
const progress = document.querySelector('.progress')
const blurDiv = document.querySelector('.glass');
const stick   = document.querySelector('.stick')
const smooth  = document.querySelector('.smooth')

// const cardAnimate = document.querySelector(".card-animate");

let page1Left = false ;
let page2Left = false ;
let page3Left = false ;

home.addEventListener('mouseover' , () => {
    
    animate.style.left = "14px" ;
    animate.style.opacity = '1' ;
    animate.style.backgroundColor = "rgb(26, 114, 245)"
    page1.style.opacity = '0';
    page1.style.left = "-146px";
    page2.style.opacity = '0';
    page2.style.left = "-136px";
    page3.style.opacity = '0';
    page3.style.left = "-126px";
    animate.style.boxShadow = '0 0 80px 0 rgb(26, 114, 245)';
    // cardAnimate.style.transform = rotateY(180deg);
    
});




gallery.addEventListener('mouseover' , () => {
    
    animate.style.left = "189px" ;
    animate.style.opacity = '1' ;
    animate.style.backgroundColor = "rgb(26, 114, 245)"
    page1.style.opacity = '0';
    page1.style.left = "-146px";
    page2.style.opacity = '0';
    page2.style.left = "-136px";
    page3.style.opacity = '0';
    page3.style.left = "-126px";
    animate.style.boxShadow = '0 0 80px 0 rgb(26, 114, 245)';
    
});



favourites.addEventListener('mouseover' , () => {
    
    animate.style.left = "364px" ;
    animate.style.opacity = '1' ;
   animate.style.backgroundColor = "rgb(26, 114, 245)";
   page1.style.opacity = '1';
  page1.style.left = "0px";
 page2.style.opacity = '1';
 page2.style.left = "0px";
   page3.style.opacity = '1';
 page3.style.left = "0px";
 animate.style.boxShadow = '0 0 80px 0 rgb(26, 114, 245)';
   
});


page1.addEventListener('mouseout' , function(event) {


    page1Left = true ;


});

page2.addEventListener('mouseout' , function(event) {


    page2Left = true ;


});

page3.addEventListener('mouseout' , function(event) {


    page3Left = true ;


});

document.body.addEventListener('mouseover' , function(event) {

    if( page1left || page2Left || page3left){

    page1.style.opacity = '0';
    page1.style.left = "-146px";
    page2.style.opacity = '0';
    page2.style.left = "-136px";
    page3.style.opacity = '0';
    page3.style.left = "-126px";


    page1Left = false;
    page2Left = false;
    page3Left = false;


    }

})


favourites.addEventListener('mouseout' , function(event) {

    if(event.target){}

})


timelines.addEventListener('mouseover' , () => {
    
    animate.style.left = "539px" ;
    animate.style.opacity = '1' ;
    animate.style.backgroundColor = "rgb(26, 114, 245)"
    page1.style.opacity = '0';
    page1.style.left = "-146px";
    page2.style.opacity = '0';
    page2.style.left = "-136px";
    page3.style.opacity = '0';
    page3.style.left = "-126px";
    animate.style.boxShadow = '0 0 80px 0 rgb(26, 114, 245)';
    
});


// added bgcolor at active event 


home.addEventListener('click' , () => {
    
    animate.style.backgroundColor = "grey"
    
});




gallery.addEventListener('click' , () => {
    
    animate.style.backgroundColor = "grey"
});



favourites.addEventListener('click' , () => {
    
    if (page1.style.opacity === '0' ) {
        page1.style.opacity = '1';
   page1.style.left = "15px";
  page2.style.opacity = '1';
  page2.style.left = "15px";
    page3.style.opacity = '1';
  page3.style.left = "15px";
    }
  else{  
      
    page1.style.opacity = '0';
    page1.style.left = "-146px";
    page2.style.opacity = '0';
    page2.style.left = "-136px";
    page3.style.opacity = '0';
    page3.style.left = "-126px";
      
      
  }
    
   // animate.style.backgroundColor = "grey"
  
  
  
});



timelines.addEventListener('click' , () => {
    
    animate.style.backgroundColor = "grey"
});


// also effective when click at .animate 


animate.addEventListener('click' , () => {
    
    animate.style.backgroundColor = "grey"
    
});




animate.addEventListener('click' , () => {
    
    animate.style.backgroundColor = "grey"
});



animate.addEventListener('click' , () => {
    
    animate.style.backgroundColor = "grey"
});



animate.addEventListener('click' , () => {
    
    animate.style.backgroundColor = "grey"
});


//           Functioning with .dropdown div          //



if (animate.style.left === "14px") {
    para1.style.color = "black";
}
else if(animate.style.left === "189px"){
    para2.style.color = "black"
}
else if (animate.style.left === "364px") {

 para3.style.color = "black"

}
else if (animate.style.left === "539px"){

    para4.style.color = "black"

}




document.addEventListener('click' , function(event)  {
    if(event.target === document.body){
    page1.style.opacity = '0';
    page1.style.left = "-146px";
    page2.style.opacity = '0';
    page2.style.left = "-136px";
    page3.style.opacity = '0';
    page3.style.left = "-126px";
    // animate.style.opacity = '0'
    
    
    

    }

   

})




document.body.addEventListener('mouseover', function(event) {
    if (event.target === document.body) {
        
        animate.style.boxShadow = '0 0 0px 0 rgb(26, 114, 245)';
        animate.style.opacity = '0'

    }

    if (event.target === document.body && page1.style.opacity === '1'){

        page1.style.opacity = '0';
    page1.style.left = "-146px";
    page2.style.opacity = '0';
    page2.style.left = "-136px";
    page3.style.opacity = '0';
    page3.style.left = "-126px";

    }
    
    stick.style.transform = 'rotateY(0deg)';

});






// document.addEventListener('mouseover' , () => {

//     animate.style.boxShadow = '0 0 0px 0 rgb(26, 114, 245)';
//     animate.style.opacity = '0'
// })

// document.addEventListener('mouseout' , () => {

//     animate.style.boxShadow = '0 0 80px 0 rgb(26, 114, 245)';
//     animate.style.opacity = '1'
// })


// document.addEventListener('mouseout' ,  function(event) {

//     if(event.target === "document.body")

//     animate.style.boxShadow = '0 0 80px 0 rgb(26, 114, 245)';
//     // animate.style.transform = 'rotateY(300deg)';
// })




    // Assuming you have already defined `const animate = document.querySelector('.animate');` somewhere in your code

    // document.html.addEventListener('mouseover', function(event) {
    //     // Assuming you have a div with class 'gg'
    //    if(animate.style.opacity === '1'){
    //     animate.style.boxShadow = '0 0 0px 0 rgb(26, 114, 245)';
    //     animate.style.opacity = '0';
    //    }
    // });
    

// avatar.addEventListener('mouseover' , function(event){

//     progress.setAttribute('stroke-dashoffset' , '565.48')

// })


// avatar.addEventListener('mouseover', function(event) {
//     // Get the length of the stroke path (the circumference of the circle)
//     const length = progress.getTotalLength();

//     // Animate the stroke dash offset from the full length to 0 over 1 second
//     progress.style.transition = 'stroke-dashoffset 1s';
//     progress.style.strokeDashoffset = '0';
// });

// avatar.addEventListener('mouseout', function(event) {
//     // Reset the stroke dash offset when mouse leaves the avatar
//     progress.style.strokeDashoffset = '100';
// });

//    1821.387451171875     , 1928.387451171875


avatar.addEventListener('mouseover' , () => {

    progress.classList.add('anime');

});

avatar.addEventListener('mouseout' , () => {

    progress.classList.remove('anime');

});


//////////////||||||||||||||||||||||||||||  Avatar Animate ||||||||||||||||||||||||||||\\\\\\\\\\\\\\\\\

smooth.addEventListener('mouseover' , () =>{

    blurDiv.style.backdropFilter = 'blur(5px)';
    
    setTimeout( () => {

        stick.style.transform = 'rotateY(180deg)';

    } , 600);
});

smooth.addEventListener('mouseout' , () => {

    setTimeout(() => {

        blurDiv.style.backdropFilter = 'blur(0px)';

    } , 250)
    

})
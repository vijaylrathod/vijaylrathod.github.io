
// reset position of the loading screen
gsap.set(".loader", {
    scaleX: 0,
    rotation: 10,
    xPercent: -5,
    yPercent: -50,
    transformOrigin: 'left center',
    autoAlpha: 1
});

function loaderIn() {
    // GSAP tween to stretch the loading screen across the whole screen
    return gsap.fromTo(".loader",
        {
            rotation: 10,
            scaleX: 0,
            xPercent: -5,
           
        },
        {
            duration: 0.8,
           
            xPercent: 0,
            scaleX: 1,
            rotation: 0,
            ease: 'power4.inOut',
            transformOrigin: 'left center'
        });
}
function loaderAway() {
    // GSAP tween to hide loading screen
    return gsap.to(".loader", {
        duration: 0.8,
        scaleX: 0,
        xPercent: 5,
        rotation: -10,
        transformOrigin: 'right center',
        ease: 'power4.inOut'
    });
}


function pageTransition() {
  var tl = gsap.timeline();
  console.log("Page transition function called");

  tl.to(".transition li", {
      duration: 0.5,
      scaleY: 1,
      transformOrigin: "bottom left",
      stagger: 0.2,
  });

  tl.to(".transition li", {
      duration: 0.5,
      scaleY: 0,
      transformOrigin: "bottom left",
      stagger: 0.1,
      delay: 0.1,
  });
}
// scroll to the top of the page
barba.hooks.before(() => {
    window.scrollTo(0, 0);
});
// barba.init({
//     transitions: [{
//         sync:true,
//       name: 'default-transition',
//       leave() {
//         // create your stunning leave animation here
     
      
        
//       },
//       enter() {
//         // create your amazing enter animation here
//         pageTransition();
//       }
//     }]
//   });

barba.init({
    transitions: [{
        
        async leave() {
            await loaderIn();
        },
        enter() {
            loaderAway();
        }
    }]
});

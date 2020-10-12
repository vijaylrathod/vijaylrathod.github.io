// Tell Barba to use the CSS plugin
barba.use(barbaCss);

        
barba.hooks.afterEnter((data) => {
    gsap.to('.scroll-content',{y:0, duration:0.5, ease:Circ.easeOut});
    console.log("Gloabal hook called");
  });

barba.init({
  transitions: [
    {
        name: "clip",
        from: {
          namespace: [
            'home'
          ]
        },
        sync: true,
       
        leave() { console.log("leave method called");  
    },
       
        enter() {console.log("Enter  method called");}
    },
    {
      name: 'home',
      sync: true,
      from: { namespace: ['clip'] },
      once() {},
      leave() {},
      enter() {},
    },


]
});





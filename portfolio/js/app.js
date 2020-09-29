

// Smooth scroll bar;
// Smooth scroll setup
gsap.registerPlugin(ScrollTrigger);
const bodyScrollBar = Scrollbar.init(document.body, { damping: 0.1, delegateTo: document });
 
bodyScrollBar.setPosition(0, 0);
bodyScrollBar.track.xAxis.element.remove();

// How to get them to work together
ScrollTrigger.scrollerProxy("body", {
  scrollTop(value) {
    if (arguments.length) {
      bodyScrollBar.scrollTop = value;
    }
    return bodyScrollBar.scrollTop;
  }
});



//define tween for video opactity and register event handler
var vid = document.getElementsByTagName("video");
var playPromise;
[].forEach.call(vid, function (item) {
    item.addEventListener('mouseover', hoverVideo, false);
    item.addEventListener('mouseout', hideVideo, false);
});

function hoverVideo(e)
{   
    playPromise= this.play();
   
    
    
}
function hideVideo(e)
{


    if (playPromise !== undefined) {
        playPromise.then(_ => {
          // Automatic playback started!
          // Show playing UI.
          // We can now safely pause video...
          this.pause();
        })
        .catch(error => {
          // Auto-play was prevented
          // Show paused UI.
        });
    }
    
}

//Hero Section Animation is defined here.

//Timeline variable is declared here

var heroTimeline=gsap.timeline();


heroTimeline.from('header',{opacity:0,duration:0.8})
            .from('.hideText', {y:'200%',duration:1,ease:Circ.easeOut})
            .from('.hidePara', {y:'200%',duration:0.8,ease:Circ.easeOut  })
            .from('.heroContent ul',{opacity:0, y:'100%',duration:0.5,ease:Circ.easeOut})
            .from('nav',{opacity:0, y:'200%',duration:0.8,ease:Circ.easeOut })

//Project Section Animation is defined here.

var projectTimeline=gsap.timeline();


// Loopp through all sections and apply scroll tigger to animate the elements

//Animate lines
const lines = gsap.utils.toArray('.line');
lines.forEach(line=> {
gsap.from(line, { 
  scaleX:0, transformOrigin:'left',duration:1,ease:Circ.easeOut,duration:1 ,
    scrollTrigger: {
      trigger: line,
      
    }
  })
});

//Animate title
const titles = gsap.utils.toArray('.title');
titles.forEach(title=> {
gsap.from(title, { 
  duration: 0.5, y: '100%',  ease: 'power1.out',
    scrollTrigger: {
      trigger: title,
      
    }
  })
});

//Animate introduction
const intro = gsap.utils.toArray('.introduction');
intro.forEach(introduction=> {
gsap.from(introduction, { 
  duration: 0.5, y: '100%',  ease: 'power1.out',
    scrollTrigger: {
      trigger: introduction,
      
    }
  })
});

//Animate messages
const msgs = gsap.utils.toArray('.messages');
msgs.forEach(messages => {
gsap.from(messages, { 
  duration: 1, x: "-100%", delay:5, ease: 'power1.out',
    scrollTrigger: {
      trigger: messages,
      
    }
  })
});





// gsap.from('.line', {scrollTrigger:{trigger:".line"},scaleX:0, transformOrigin:'left',duration:1,ease:Circ.easeOut,duration:1 })



// projectTimeline
// .from('.line', { scaleX:0, transformOrigin:'left',duration:1,ease:Circ.easeOut,duration:1 })
// .from('.title', {duration: 0.5, y: '100%',  ease: 'power1.out' })
// .from('.introduction', {duration: 0.5, y: '100%',  ease: 'power1.out' })
// .from('.projects', {duration: 0.5, y: 5,  ease: 'power1.out' })
// .from('.messages p', {duration: 1, x: "-100%", delay:2.5, ease: 'power1.out' })

           
         

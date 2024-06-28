// nav Animation
var nav = document.querySelector("nav");

nav.addEventListener("mouseenter", function () {
  var tl = gsap.timeline().to(".nav-btm", {
    height: "23vh",
  });
  tl.to(".nav-part2 h5", {
    display: "block",
  });
  tl.from(".nav-part2 h5 span", {
    y: 15,
    stagger: {
      amount: 0.5,
    },
  });
});

nav.addEventListener("mouseleave", function () {
  var tl = gsap.timeline();
  tl.to(".nav-part2 h5 span", {
    y: 0,
    stagger: {
      amount: 0.5,
    },
  });
  tl.to(".nav-part2 h5", {
    display: "none",
    duration: 0.1,
  });
  tl.to(".nav-btm", {
    height: 0,
    duration: 0.2,
  });
});

// page2 mouse hover

var rightElems = document.querySelectorAll(".right-elem");

rightElems.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    console.log(elem.getBoundingClientRect);

    gsap.to(elem.childNodes[3], {
      opacity: 1,
      scale: 1,
    });
  });
  elem.addEventListener("mouseleave", function () {
    gsap.to(elem.childNodes[3], {
      opacity: 0,
      scale: 0,
    });
  });
  elem.addEventListener("mousemove", function (dets) {
    gsap.to(elem.childNodes[3], {
      x: dets.x - elem.getBoundingClientRect().x - 50,
      y: dets.y - elem.getBoundingClientRect().y - 180,
    });
  });
});

//page3 create video play button

var page3center = document.querySelector(".page3-center");
var video = document.querySelector(".page3 video");

page3center.addEventListener("click", function () {
  video.play();
  gsap.to(video, {
    transform: "scaleX(1) scaleY(1)",
    opacity: 1,
    borderRadius: 0,
  });
});
video.addEventListener("click", function () {
  video.pause();
  gsap.to(video, {
    transform: "scaleX(0.7) scaleY(0)",
    opacity: 0,
    borderRadius: "30px",
  });
});

// page 6 img and video

// moving element

gsap.to(" .bottom10-part2 h4", {
  x: 100,
  duration: 1,
  stagger: {
    amount: 0.3,
  },
  scrollTrigger: {
    trigger: ".bottom10-part2 h4 ",
    scroller: "body",
    markers: true,
    start: "top 80%",
    ent: "top 0%",
    scrub: true,
  },
});
gsap.to(" .bottom10-part3 h4", {
  x: 100,
  duration: 1,
  stagger: {
    amount: 0.3,
  },
  scrollTrigger: {
    trigger: ".bottom10-part3 h4 ",
    scroller: "body",
    markers: true,
    start: "top 80%",
    ent: "top 0%",
    scrub: true,
  },
});

gsap.to(" .bottom10-part4 h4", {
  x: 100,
  duration: 1,
  stagger: {
    amount: 0.3,
  },
  scrollTrigger: {
    trigger: ".bottom10-part4 h4 ",
    scroller: "body",
    markers: true,
    start: "top 80%",
    ent: "top 0%",
    scrub: true,
  },
});

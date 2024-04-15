function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
init();

var cursor = document.querySelector(".cursor");
var main = document.querySelector(".main");
main.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + 20 + "px";
  cursor.style.top = dets.y + 20 + "px";
});

var video = document.querySelector("#vid");
video.addEventListener("mouseenter", function () {
  cursor.style.borderRadius = "10%"
  cursor.style.height = "30px"
  cursor.style.width = "100px"
  cursor.innerHTML = 'Sea Waves'  
  cursor.style.padding = '7px 5px'
  cursor.padding = "10px"
})
video.addEventListener("mouseleave", function () {
  cursor.style.borderRadius = "50%"
  cursor.style.height = "20px"
  cursor.style.width = "20px"
  cursor.style.padding = '0px 0px'
  cursor.textContent = ""
});

gsap.from(".page1 h1,.page1 h2", {
  y: 10,
  rotate: 10,
  opacity: 0,
  delay: 0.3,
  duration: 0.7,
});

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    // makers: true,
    start: "top 27%",
    end: "top 0",
    scrub: 3,
  },
});
tl.to(
  ".page1 h1",
  {
    x: -100,
    duration: 1,
  },
  "anim"
);
tl.to(
  ".page1 h2",
  {
    x: 100,
    duration: 1,
  },
  "anim"
);
tl.to(
  ".page1 video",
  {
    width: "90%",
    duration: 1,
  },
  "anim"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top -115%",
    end: "top -120%",
    scrub: 3,
  },
});

tl2.to(".main", {
  backgroundColor: "#fff",
});
var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top -280%",
    end: "top -300%",
    scrub: 3,
  },
});
tl3.to(".main", {
  backgroundColor: "#0f0d0d",
});

var boxes = document.querySelectorAll(".box-container");

boxes.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    var att = elem.getAttribute("data-image");
    cursor.style.width = "470px";
    cursor.style.height = "370px";
    cursor.style.borderRadius = "0";
    cursor.style.backgroundImage = `URL(${att})`;
  });
  elem.addEventListener("mouseleave", function () {
    elem.style.backgroundColor = "transparent";
    cursor.style.width = "20px";
    cursor.style.height = "20px";
    cursor.style.borderRadius = "50%";
    cursor.style.backgroundImage = `none`;
  });
});

var h4 = document.querySelectorAll("#nav h4");
var purple = document.querySelector(".purple");
h4.forEach(function (elem) {
  elem.addEventListener("mouseenter", function (elem) {
    purple.style.display = "block";
    purple.style.opacity = "1";
  });
  elem.addEventListener("mouseleave", function (elem) {
    purple.style.display = "none";
    purple.style.opacity = "0";
  });
});

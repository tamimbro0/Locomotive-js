function loding() {
  let tl1 = gsap.timeline();

  tl1.to("#yellow1", {
    top: "-100%",
    delay: 0.8,
    duration: 0.7,
    ease: "expo.out",
  });

  tl1.from(
    "#yellow2",
    {
      top: "100%",
      delay: 0.02,
      duration: 0.02,
      ease: "expo.out",
    },
    "anim"
  );

  tl1.to(
    "#loader h1",
    {
      delay: 0.06,
      color: "black",
    },
    "anim"
  );

  tl1.to("#loader", {
    opacity: 0,
  });

  tl1.to("#loader", {
    display: "none",
  });
}

loding();

function loca() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  document.querySelector("#footer h2").addEventListener("click", () => {
    scroll.scrollTo(0);
  });

  let elems = document.querySelectorAll(".elem");
  let page2 = document.querySelector("#page2");
  elems.forEach(function (ele) {
    ele.addEventListener("mouseenter", function () {
      let bgimg = ele.getAttribute("data-img");
      page2.style.backgroundImage = `url(${bgimg})`;
    });
  });
}
loca();

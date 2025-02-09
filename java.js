gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

gsap.to(".fish1", {
    motionPath: {
        path: "#path",
        align: "#path",
        alignOrigin: [0.5, 0.5]
    },
    scrollTrigger: {
        trigger: "path-container",
        start: "top top",
        end: "bottom center",
        scrub: true,
        markers: true
    }
});
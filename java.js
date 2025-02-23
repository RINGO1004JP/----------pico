gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// 魚１
gsap.to(".fish1", {
    motionPath: {
        path: "#path",
        align: "#path",
        alignOrigin: [0.5, 0.5],
        autoRotate: -90,
    },
    scrollTrigger: {
        trigger: "path-container",
        start: "top top",
        end: "bottom center",
        scrub: true,
        markers: true,
    }
});

// 円グラフをピン留め
ScrollTrigger.create({

    trigger: ".s2t1",
    start: "top 20%",

    endTrigger: ".s2t2",
    end: "top 80%",
    pin: ".graph-container",
    pinSpacing: true, 
    markers: true, // デバッグ用
  });

// 円グラフの1つ目のグラフを表示させる
gsap.set('.graph2', {autoAlpha: 0}); //初期状態としてopacity: 0;とvisibility: hidden;が指定される
gsap.to('.graph2', { 
  autoAlpha: 1, //opacity: 1;とvisibility：visible;がつく
  duration: 2,
  scrollTrigger: {
    trigger: '.s2t1', //現在、、海の中が〜が上に来たときに、opacityを1にする
    start: '.fish1 20%', //スクロールの開始位置
  }
});
gsap.set('.percent2img,.percent2',{autoAlpha: 0});
gsap.to('.percent2img,.percent2',{
  autoAlpha: 1,
  duration: 2,
  scrollTrigger: {
    trigger: '.s2t1',
    start: '.fish1 20%',
  }
});
gsap.set('.graph1', {autoAlpha: 0});
gsap.to('.graph1', {
  autoAlpha: 1,
  duration:1,
  scrollTrigger: {
    trigger: '.s2t1',
    start: '.fish1 20%',
  }
});
gsap.set('.percent1img,.percent1',{autoAlpha: 0});
gsap.to('.percent1img,.percent1',{
  autoAlpha: 1,
  duration:1,
  scrollTrigger: {
    trigger: '.s2t1',
    start: '.fish1 20%',
  }
});
// ペットボトルゆらゆら
gsap.to(".petb", {
  x: 200,
  duration: 2,
  repeat: -1, // 無限に繰り返し
  repeatDelay: 0.5, // 繰り返し時に0.5秒の待機,
  yoyo: true, // 反転
  rotate:360,
});

// 丸い画像をピン留めさせる
ScrollTrigger.create({

    trigger: ".s4t1",
    start: "bottom center",

    endTrigger: ".s4t3",
    end: "bottom center",
    pin: ".s2img",
    pinSpacing: true, 
    markers: true, // デバッグ用
  });

  const imageContainer = document.querySelector(".s2img");
  /* 3) 各セクションが中央に来たら、画像を回転＋差し替えする */
const sections = document.querySelectorAll(".section");
// 切り替える画像パスを配列で（例）
const imagePaths = [
  "img/IMG_5219.jpg",
  "img/IMG_5220.jpg",
  "img/IMG_5221.jpg",
];

// セクションの数だけループ
sections.forEach((section, i) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top center", 
    markers: true, // デバッグ用
    onEnter: () => {
      // 回転しながら画像を変更するアニメ
      gsap.to(".s2img", {
        duration: 0.5,
        rotation: "+=90",   // 一回転
        ease: "power1.inOut",
        autoAlpha: 0.2,
        onComplete: () => {
          // 回転終了後に画像差し替え
          imageContainer.style.backgroundImage = `url(${imagePaths[i]})`;
          // rotationを0に戻しておくなら:
          gsap.set(".s2img", { rotation: 0 });
          gsap.to(imageContainer, {
            duration: 0.5,
            autoAlpha: 1,       // 透明度1（フェードイン）
            ease: "power1.inOut"
          });
        }
      });
    }
  });
});


// ふわっと表示させるためのもの
const targets = document.getElementsByClassName('floattext');
for(let i = targets.length; i--;){
 let observer = new IntersectionObserver((entries, observer) => {
  for(let j = entries.length; j--;){
   if (entries[j].isIntersecting) {
    entries[j].target.classList.add('active');
   } else{
    entries[j].target.classList.remove('active');
   }
  }
 });
 observer.observe(targets[i]);
}
import gsap from 'gsap';
import SplitType from 'split-type';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
export const animatePageIn = () => {
  const logo = document.getElementsByClassName('logo');
  const sectionLeft = document.getElementsByClassName('sectionLeft');
  const navItem = document.getElementsByClassName('navItem');
  const scaleUp = document.getElementsByClassName('scaleUp');

  const imageFirst = document.getElementsByClassName('imageFirst');
  const articleFirst = document.getElementsByClassName('articleFirst');
  const articleTextFirst = document.getElementsByClassName('articleTextFirst');
  const scaleUpInside = document.getElementsByClassName('scaleUpInside');
  const ContactscaleUp = document.getElementsByClassName('ContactscaleUp');
  const filter = document.getElementsByClassName('filter');
  const ContactscaleUpInside = document.getElementsByClassName(
    'ContactscaleUpInside'
  );
  const exploreScaleUp = document.getElementsByClassName('exploreScaleUp');
  const exploreScaleUpInside = document.getElementsByClassName(
    'exploreScaleUpInside'
  );
  const workScaleUp = document.getElementsByClassName('workScaleUp');
  const text = document.getElementById('my-text');
  const text1 = document.getElementById('my-text1');
  const marquee = document.querySelector('.wrapperBars');
  const marqueeContent = marquee!.children;
  const marqueeWidth = (marqueeContent[0] as HTMLElement).offsetWidth;
  const marquee2 = document.querySelector('.wrapperBars2');
  const marqueeContent2 = marquee2!.children;
  const marqueeWidth2 = (marqueeContent2[0] as HTMLElement).offsetWidth;
  const marquee3 = document.querySelector('.wrapperBars3');
  const marqueeContent3 = marquee3!.children;
  const marqueeWidth3 = (marqueeContent3[0] as HTMLElement).offsetWidth;
  if (logo && sectionLeft && navItem && ScrollTrigger) {
    const text1El = new SplitType(text!);
    const textEl = new SplitType(text1!);
    if (text1El && textEl) {
      const char = document.getElementsByClassName('char');
      const word = document.querySelector('#my-text1 .word');
      const tl = gsap.timeline();
      // GSAP animation
      gsap.to(marqueeContent, {
        x: -marqueeWidth, // Move the content to the left by its width
        duration: 30, // Adjust the duration for speed
        ease: 'none',
        repeat: -1, // Infinite loop
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % marqueeWidth), // Reset position when it goes out of view
        },
      });

      const secondBarAnimation = gsap.to(marqueeContent2, {
        x: marqueeWidth2, // Move to the right
        duration: 30,
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % marqueeWidth2),
        },
        paused: true, // Start paused
      });
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
        trigger: marqueeContent2,
        start: 'top bottom', // When the top of the second bar reaches the center of the viewport
        end: 'bottom top', // When the bottom of the second bar reaches the center of the viewport
        onEnter: () => {
          setTimeout(() => {
            secondBarAnimation.play();
          }, 200);
        }, // Play animation when the second bar enters the viewport
        onLeaveBack: () => secondBarAnimation.pause(), // Pause animation when the second bar leaves the viewport
      });

      const thirdBarAnimation = gsap.to(marqueeContent3, {
        x: -marqueeWidth3, // Move to the right
        duration: 30,
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % marqueeWidth3),
        },
        paused: true, // Start paused
      });
      ScrollTrigger.create({
        trigger: marqueeContent3,
        start: 'top bottom', // When the top of the second bar reaches the center of the viewport
        end: 'bottom top', // When the bottom of the second bar reaches the center of the viewport
        onEnter: () => {
          setTimeout(() => {
            thirdBarAnimation.play();
          }, 200);
        }, // Play animation when the second bar enters the viewport
        onLeaveBack: () => thirdBarAnimation.pause(), // Pause animation when the second bar leaves the viewport
      });
      gsap.defaults({ ease: 'ease' });
      tl.to(sectionLeft, {
        right: '7%',
        duration: 0.6,
      })
        .to(
          navItem,
          {
            height: '40px',
            duration: 0.5,
          },
          '='
        )
        .to(
          char,
          {
            y: 0,
            stagger: 0.05,
            duration: 1,
          },
          '-=0.4'
        )
        .fromTo(
          logo,
          { opacity: 0, top: '-70px' },
          { opacity: 1, top: 0, duration: 1 },
          '='
        )
        .fromTo(
          scaleUp,
          {
            scale: 0,
            opacity: 0,
          },
          { scale: 1, opacity: 1 },
          '-=2.6'
        )
        .fromTo(
          scaleUpInside,
          {
            scale: 0,
            opacity: 0,
          },
          { scale: 1, opacity: 1 },
          '-=2.2'
        )
        .fromTo(
          ContactscaleUp,
          {
            scale: 0,
            opacity: 0,
          },
          { scale: 1, opacity: 1 },
          '-=2.2'
        )
        .fromTo(
          ContactscaleUpInside,
          {
            scale: 0,
            opacity: 0,
          },
          { scale: 1, opacity: 1 },
          '-=2'
        )
        .fromTo(
          exploreScaleUp,
          {
            scale: 0,
            opacity: 0,
          },
          { scale: 1, opacity: 1 },
          '-=2.15'
        )
        .fromTo(
          exploreScaleUpInside,
          {
            scale: 0,
            opacity: 0,
          },
          { scale: 1, opacity: 1 },
          '-=1.7'
        )
        .fromTo(
          workScaleUp,
          {
            scale: 0,
            opacity: 0,
          },
          { scale: 1, opacity: 1 },
          '-=1.9'
        )

        .fromTo(
          filter,
          {
            filter: 'blur(40px)',
          },
          { filter: 'blur(0px)' },
          '-=1.7'
        )
        .to(
          word,
          {
            backgroundSize: '100% 100%',
          },
          '-=1'
        )
        .fromTo(
          imageFirst,
          {
            scale: 1.2,
          },
          { scale: 1 },
          '-=0.8'
        )
        .fromTo(
          articleFirst,
          {
            top: '100%',
          },
          { top: '75%' },
          '-=0.8'
        )

        .fromTo(
          articleTextFirst,
          {
            top: '10%',
            opacity: 0,
          },
          { top: '0%', opacity: 1 },
          '-=0.6'
        );
    }
    const textSvg = document.getElementsByClassName('textSvg');
    const goUP = document.getElementsByClassName('goUP');
    const staggerScale = document.getElementsByClassName('staggerScale');
    const circle = document.getElementsByClassName('circle');
    const logo2 = document.getElementsByClassName('logo2');
    const imageTwo = document.getElementsByClassName('imageTwo');
    const imageTwo2 = document.getElementsByClassName('imageTwo2');
    let scene1 = gsap.timeline({ defaults: { duration: 1 } });
    scene1.pause();
    const sec2Animation = scene1
      .fromTo(
        [circle, logo2, imageTwo],
        {
          scale: 0,
        },
        { scale: 1 }
      )
      .fromTo(
        imageTwo2,
        {
          scale: 1.5,
        },
        { scale: 1 }
      )
      .to(
        '.cls-1',
        {
          attr: {
            d: 'M.68,0,199.36,1.85V6.09l-34.47-.34c-9.87-.34-17.28-.12-20.07.34-1.32.22-2.52.51-2.52.51-8.42,2-9.16,4.71-17.49,7.13-7.47,2.18-12.75,1.74-22.41,1.36C99,15,81.94,15,47.89,14.92c-12.2,0-12.84.15-19.7,0-4.74-.1-8.22,0-10.35,0-3.59,0-9.16.06-17.84,0Q.35,7.46.68,0Z',
          },
          duration: 0.3,
        },
        '-=0.8'
      )
      .to(
        '.cls-1',
        {
          attr: {
            d: 'M.68,0,199.36,1.85V7.09l-34.47-.34c-9.87-.34-12.28-.12-15.07.34-1.32.22-2.52.51-2.52.51-8.42,2-9.16,17.71-17.49,20.13-7.47,2.18-17.75,1.74-27.41,1.36C99,29,81.94,29,47.89,28.92c-12.2,0-12.84.15-19.7,0-4.74-.1-8.22,0-10.35,0-3.59,0-9.16.06-17.84,0C.23,24,.45,5,.68,0Z',
          },
          duration: 0.2,
        },
        '-=0.5'
      )

      .to(
        '.cls-1',
        {
          attr: {
            d: 'M.68,0,199.36,1.85V7.09l-34.47-.34c-9.87-.34-24.28-.12-27.07.34-1.32.22-2.52.51-2.52.51-8.42,2-.08,17.73-8.49,27.13-5.19,5.81-14.75,5.74-24.41,5.36C99,40,81.94,40,47.89,39.92c-12.2,0-12.84.15-19.7,0-4.74-.1-8.22,0-10.35,0-3.59,0-9.16.06-17.84,0C.23,35,.45,5,.68,0Z',
          },
          duration: 0.3,
        },
        '-=0.3'
      )

      .fromTo(textSvg, { opacity: 0 }, { opacity: 1 }, '-=0.31')
      .fromTo(staggerScale, { scale: 0 }, { scale: 1, stagger: 0.2 }, '-=1.2')
      // .fromTo(imageThree, { scale: 1.2 },{ scale: 1, stagger: 0.2 }, '-=0.5')
      .fromTo(
        goUP,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1 },
        '-=0.5'
      )
      .to(
        circle,
        {
          rotate: '+=360', // Rotate 360 degrees relative to the current rotation
          duration: 12, // Duration of one full rotation
          repeat: -1, // Infinite repeat
          ease: 'none',
        },
        '='
      );
    const changing = () => {
      const imageTwo2 = document.querySelector(
        '.imageTwo2'
      ) as HTMLImageElement;
      const staggerScaleOne = document.querySelectorAll('.staggerScaleOne');
      const firstOne = document.querySelector('.firstOne') as HTMLImageElement;
      const secondOne = document.querySelector(
        '.secondOne'
      ) as HTMLImageElement;
      const firstBar = document.querySelector('.firstBar') as HTMLImageElement;
      const secondBar = document.querySelector(
        '.secondBar'
      ) as HTMLImageElement;
      const image1 = '/secondBackground.webp'; // Path to the first image
      const image2 = '/secondBackgroundTwo.webp'; // Path to the second image

      if (!imageTwo2) {
        console.error("Image element with class 'imageTwo2' not found!");
        return;
      }

      let isFirstImage = true; // Toggle state

      // Set an interval to change the image every 2 seconds
      setInterval(() => {
        if (isFirstImage) {
          imageTwo2.src = image2;
          const timline2 = gsap.timeline({ defaults: { duration: 1.5 } });
          timline2
            .fromTo(
              imageTwo2,
              { opacity: 0 },
              { opacity: 1, duration: 1, ease: 'ease.in.out' }
            )
            .fromTo(firstOne, { scale: 1 }, { scale: 0, duration: 0.2 }, '=')
            .fromTo(
              firstBar,
              { background: 'black' },
              { background: '#a5a5a5', duration: 0.2 },
              '='
            )
            .fromTo(secondOne, { scale: 0 }, { scale: 1, duration: 0.2 }, '=')
            .fromTo(
              secondBar,
              { background: '#a5a5a5' },
              { background: 'black' },
              '='
            )

            .fromTo(staggerScaleOne, { scale: 0 }, { scale: 1, stagger: 0.2 })
            .fromTo(
              goUP,
              { y: 50, opacity: 0 },
              { y: 0, opacity: 1, stagger: 0.1 },
              '-=0.5'
            );
          // Change to the second image
        } else {
          imageTwo2.src = image1;
          const timline2 = gsap.timeline({ defaults: { duration: 1.5 } });
          timline2
            .fromTo(
              imageTwo2,
              { opacity: 0 },
              { opacity: 1, duration: 1, ease: 'ease.in.out' }
            )
            .fromTo(secondOne, { scale: 1 }, { scale: 0, duration: 0.2 }, '=')
            .fromTo(
              secondBar,
              { background: 'black' },
              { background: '#a5a5a5', duration: 0.2 },
              '='
            )
            .fromTo(firstOne, { scale: 0 }, { scale: 1, duration: 0.2 }, '=')
            .fromTo(
              firstBar,
              { background: '#a5a5a5' },
              { background: 'black', duration: 0.2 },
              '='
            )
            .fromTo(staggerScaleOne, { scale: 0 }, { scale: 1, stagger: 0.2 })
            .fromTo(
              goUP,
              { y: 50, opacity: 0 },
              { y: 0, opacity: 1, stagger: 0.1 },
              '-=0.5'
            );

          // Change back to the first image
        }
        isFirstImage = !isFirstImage; // Toggle the state
      }, 7000);
    };
    changing();
    ScrollTrigger.create({
      trigger: imageTwo,
      start: 'top bottom',
      end: 'bottom top',
      onEnter: () => {
        setTimeout(() => {
          sec2Animation.play();
        }, 200);
      }, // Play animation when the second bar enters the viewport
      onLeaveBack: () => sec2Animation.pause(), // Pause animation when the second bar leaves the viewport
    });
  }
};

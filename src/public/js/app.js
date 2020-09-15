const appInit = () => {
  const header = document.getElementById('header');
  const headerMenu = document.getElementById('header-menu');

  const featuresItemValue = document.querySelectorAll('.features__item-value');

  const changeHeaderColorAfterScroll = () => {
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > header.offsetHeight) {
        header.classList.add('header--dark')
      } else if (headerMenu.classList.contains('header__menu--active') && document.documentElement.scrollTop <= header.offsetHeight ) {
        header.classList.add('header--dark')
      }
      else {
        header.classList.remove('header--dark')
      }
    });
  };

  changeHeaderColorAfterScroll();

  featuresItemValue.forEach(item => {
    function countUp() {
      let counter = 0;
      const countTo = item.dataset.countTo;

      function increaseCounter() {

        item.innerHTML = counter;
        counter += 1;
        if (counter > countTo) {
          clearInterval(timer);
          if (item.dataset.plus == 'true') {
            item.innerHTML += '+';
          }
        }
      }

      let timeout;
      if (+countTo <= 15) {
        timeout = 500;
      } else if (+countTo <= 20) {
        timeout = 350;
      } else if (+countTo <= 40) {
        timeout = 175;
      } else if (+countTo <= 100) {
        timeout = 70;
      } else if (+countTo <= 350) {
        timeout = 18;
      } else if (+countTo <= 1500) {
        timeout = 0;
      }

      const timer = window.setInterval(increaseCounter, timeout);
    }
    countUp();
  });

  if (document.querySelector("#canvas")) {

    let canvas;
    let ctx;
    let w, h;
    let z = 0;
    let simplex;
    let mx, my;
    let noiseFactorX = 1, noiseFactorY = 1;

    const config = {
      intervalX : 5,
      intervalY : 50,
      zoom      : 261,
      velocity  : 5000,
      width     : 3,
      amplitude : 7,
    }

    let linesColor = {
      red   : 253,
      green : 149,
      blue  : 228,
      alpha : 1,
    }

    let bgColor = {
      red   : 0,
      green : 0,
      blue  : 0,
      alpha : 1,
    }

    function init() {
      canvas = document.querySelector("#canvas");
      ctx = canvas.getContext("2d", { alpha: false });
      window.addEventListener("resize", reset);
      canvas.addEventListener('mousemove', canvasHover)
      reset();
    }

    let mouse = {
      x: 0,
      y: 0,
    }
    const canvasHover = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
      noiseFactorX = (mouse.x / 300).toFixed(4)
      noiseFactorY = (mouse.y / 400).toFixed(4)
    };

    function reset() {

      simplex = new SimplexNoise();
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;

      ctx.fillStyle = `rgba(${bgColor.red}, ${bgColor.green}, ${bgColor.blue}, ${bgColor.alpha})`;
    }

    function draw() {
      requestAnimationFrame(draw);

      let iterator = ((Math.random() * 10) + 1) / config.velocity
      z += iterator;


      ctx.lineWidth = config.width;
      ctx.fillStyle = `rgba(${bgColor.red}, ${bgColor.green}, ${bgColor.blue}, ${bgColor.alpha})`;

      ctx.clearRect(0, 0, w, h);

      let amplitude = config.amplitude;
      let amplitudeY = amplitude * 3

      for(let y = -amplitude * 4; y < h + (amplitude * 4); y += config.intervalY) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${linesColor.red}, ${linesColor.green}, ${linesColor.blue}, ${linesColor.alpha})`;

        for(let x = -amplitude * 4; x < w + (amplitude * 4); x+= config.intervalX) {
          let n1 = simplex.noise3D(x / config.zoom, y / config.zoom, z) * amplitude * noiseFactorX;
          let n2 = simplex.noise3D(x / config.zoom + 1000, y / config.zoom + 1000, z) * amplitudeY * noiseFactorY;

          ctx.lineTo(x + n1, y  + n2);
        }
        ctx.stroke();
        ctx.closePath()
      }
    }

    init();
    draw();
  }

  const animateLines = document.querySelectorAll('.js-line');
  const animateBorder = document.querySelectorAll('.services__item');
  const animateCircleBorder = document.querySelectorAll('.js-border');

  animateLines.forEach( (item) => {
    item.style.width = '0'
    window.addEventListener('scroll', () => {
      if (item.getBoundingClientRect().top < window.innerHeight ) {
        item.style.width = '100%'
      }
    })
  });
  animateBorder.forEach( (item) => {

    window.addEventListener('scroll', () => {
      if (item.getBoundingClientRect().top < window.innerHeight ) {
        if (!item.classList.contains('is-active')) {
          item.classList.add('is-active')
        }
      }
    })
  });

  animateCircleBorder.forEach( (item) => {
    window.addEventListener('scroll', () => {
      if (item.getBoundingClientRect().top < window.innerHeight ) {
        if (!item.classList.contains('is-active')) {
          item.classList.add('is-active')
        }
      }
    })
  });

  AOS.init()

  const parallaxWrapper = document.querySelectorAll('.parallax__wrapper')

  parallaxWrapper.forEach(elem => {
    elem.addEventListener("mousemove", onMousemoveCardHandler);
    elem.addEventListener("mouseleave", onMouseleaveCardHandler);
  });

  function onMousemoveCardHandler(event) {
    let item = this.querySelector('.parallax__item');
    const itemWidth = this.offsetWidth
    const itemHeight = this.offsetHeight
    let left = 0;
    let top = 0;

    let x = event.layerX;
    let y = event.layerY;

    left = itemWidth/2 - x;
    top = itemHeight/2 - y;

    item.style.transform = `translate(${left / 10}px, ${top/10}px)`;
  }

  function onMouseleaveCardHandler(event) {
    let item = this.querySelector('.parallax__item');
    item.style.transform = '';
  }

}

export default appInit;




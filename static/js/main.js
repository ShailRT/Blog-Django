/*------------------------------------------------------------------

    01. Custom cursor
    02. Reveal animations
    03. Menu
    04. Sliders
    05. Header reveal
    06. AJAX contact form
    07. Charts
    08. Video
    09. Isotope filtering
    10. Smooth scroll
    11. Scroll spy
    12. Typewriter
    13. Particles
    14. AJAX page transition

-------------------------------------------------------------------*/

/*--------------------------------------------------
	01. Custom cursor
---------------------------------------------------*/

function cursorInit() {
    let clientX = -100;
    let clientY = -100;

    const innerCursor = document.querySelector(".cursor");
    const itemCursor = document.querySelector(".cursor-item");

    var cw = innerCursor.offsetWidth  / 2;
    var ch = innerCursor.offsetHeight / 2;

    const initCursor = () => {
        document.addEventListener("mousemove", e => {
            clientX = e.clientX;
            clientY = e.clientY;
        });

        const render = () => {
            innerCursor.style.transform =
                `translate(${clientX - cw}px, ${clientY - ch}px)`;

            requestAnimationFrame(render);
        };

        requestAnimationFrame(render);
    };

    initCursor();


    var button = document.querySelectorAll([
        'button',
        'a',
        '.click-target',
        'input',
        'textarea'
    ]);

    for (let i = 0; i < button.length; i++) {
        const el = button[i];
        
        el.addEventListener('mouseenter', e => {
            itemCursor.classList.add('cursor-big');
        })
        el.addEventListener('mouseleave', e => {
            itemCursor.classList.remove('cursor-big');
        })
    }

    var cursorColor = document.querySelectorAll('.cursor-color');

    for (let i = 0; i < cursorColor.length; i++) {
        const el = cursorColor[i];
        
        el.addEventListener('mouseenter', e => {
            itemCursor.classList.add('cursor-alt');
        })
        el.addEventListener('mouseleave', e => {
            itemCursor.classList.remove('cursor-alt');
        })
    }
}

/*--------------------------------------------------
	02. Reveal animations
---------------------------------------------------*/

var controller = new ScrollMagic.Controller();


function containerAnimation() {
    var animationContainer = document.querySelectorAll(
        '[data-animation-container]'
    );
    
    for (let i = 0; i < animationContainer.length; i++) {
        const el = animationContainer[i];
    
        new ScrollMagic.Scene({
            offset: '-100px',
            triggerElement: el,
            triggerHook: "onCenter",
        })
        .addTo(controller)
        .on('enter', function (event) {
            var animChilds = el.querySelectorAll('[data-animation-child]');
    
            el.classList.add('animated');
    
            for (let i = 0; i < animChilds.length; i++) {
                const el = animChilds[i];
    
                if (el.getAttribute('data-animation') == 'cover-down') {
                    el.classList.add('cover-down-anim');
                    continue;
                }
                else if (el.getAttribute('data-animation') == 'cover-right') {
                    el.classList.add('cover-right-anim');
                    continue;
                }
                else if (el.getAttribute('data-animation') == 'slide-down') {
                    el.classList.add('slide-anim');
                    continue;
                }
                else if (el.getAttribute('data-animation') == 'slide-left') {
                    el.classList.add('slide-anim');
                    continue;
                }
                else if (el.getAttribute('data-animation') == 'slide-up') {
                    el.classList.add('slide-anim');
                    continue;
                }
                else if (el.getAttribute('data-animation') == 'slide-right') {
                    el.classList.add('slide-anim');
                    continue;
                }
            }
    
        })
    }
}


function footerContainerAnimation() {
    var footerAnimationContainer = document.querySelectorAll(
        '[footer-data-animation-container]'
    );
    
    for (let i = 0; i < footerAnimationContainer.length; i++) {
        const el = footerAnimationContainer[i];
    
        new ScrollMagic.Scene({
            offset: '110px',
            triggerElement: el,
            triggerHook: "onEnter",
        })
        .addTo(controller)
        .on('enter', function (event) {
            var animChilds = el.querySelectorAll('[data-animation-child]');
    
            el.classList.add('animated');
    
            for (let i = 0; i < animChilds.length; i++) {
                const el = animChilds[i];
    
                if (el.getAttribute('data-animation') == 'cover-down') {
                    el.classList.add('cover-down-anim');
                    continue;
                }
                else if (el.getAttribute('data-animation') == 'cover-right') {
                    el.classList.add('cover-right-anim');
                    continue;
                }
                else if (el.getAttribute('data-animation') == 'slide-down') {
                    el.classList.add('slide-anim');
                    continue;
                }
                else if (el.getAttribute('data-animation') == 'slide-left') {
                    el.classList.add('slide-anim');
                    continue;
                }
                else if (el.getAttribute('data-animation') == 'slide-up') {
                    el.classList.add('slide-anim');
                    continue;
                }
                else if (el.getAttribute('data-animation') == 'slide-right') {
                    el.classList.add('slide-anim');
                    continue;
                }
            }
    
        })
    }
}


function singleAnimation() {
    var animationTarget = document.querySelectorAll(
        '[data-animation]:not([data-animation-child])'
    );
    
    for (let i = 0; i < animationTarget.length; i++) {
        const el = animationTarget[i];
    
        new ScrollMagic.Scene({
            offset: '-100px',
            triggerElement: el,
            triggerHook: "onCenter",
        })
        .addTo(controller)
        .on('enter', function (event) {
    
            if (el.getAttribute('data-animation') == 'cover-down') {
                el.classList.add('cover-down-anim');
            }
            else if (el.getAttribute('data-animation') == 'cover-right') {
                el.classList.add('cover-right-anim');
            }
            else if (el.getAttribute('data-animation') == 'slide-down') {
                el.classList.add('slide-anim');
            }
            else if (el.getAttribute('data-animation') == 'slide-left') {
                el.classList.add('slide-anim');
            }
            else if (el.getAttribute('data-animation') == 'slide-up') {
                el.classList.add('slide-anim');
            }
            else if (el.getAttribute('data-animation') == 'slide-right') {
                el.classList.add('slide-anim');
            }
    
        })
    }
}
/*--------------------------------------------------
	03. Menu
---------------------------------------------------*/

function headerScrollReveal() {
    var firstSection = document.querySelector('#firstSection');
    var header = document.querySelector('.header');
    var timeout;
    
    new ScrollMagic.Scene({
        duration: firstSection.offsetHeight,
        triggerElement: firstSection,
        triggerHook: 'onLeave',
    })
    .addTo(controller)
    .on('enter', function (event) {
        header.classList.remove('header-background');
        header.classList.add('header-to-top');
        timeout = setTimeout(() => {
            header.classList.remove('header-fixed');
        }, 400);
    })
    .on('leave', function (event) {
        clearTimeout(timeout);
        header.classList.remove('header-to-top');
        header.classList.add('header-background');
        header.classList.add('header-fixed');
    });
}


function menuBackgroundToggle() {
    var menu_button  = document.querySelector('.menu');
    var menu_overlay = document.querySelector('.menu-overlay');
    var body         = document.body;

    menu_button.addEventListener('click', (e) => {
        body.classList.toggle('is-menu-open');
        body.classList.toggle('over-hidden');
    })

    menu_overlay.addEventListener('click', (e) => {
        body.classList.toggle('is-menu-open');
        body.classList.toggle('over-hidden');
    })
}


function menuLinksToggle() {
    var navList  = document.querySelector('.navigation-list');
    var navItems = navList.querySelectorAll('.navigation-list > li');
    var navItemsSubnav = [];


    for (let i = 0; i < navItems.length; i++) {
        const el = navItems[i];
        var elLink = el.querySelector('li > a');

        if (el.querySelector('.subnav-list')) {
            elLink.removeAttribute('href');
            navItemsSubnav.push(el);
        }
    }


    navItemsSubnav.forEach(el => {
        var elLink   = el.querySelector('li > a');
        var elSubnav = el.querySelector('.subnav-list');
        var elSubnavTitle = el.querySelector('.subnav-title');


        elLink.addEventListener('click', () => {
            navList.classList.toggle('nav-list-hidden');
            elSubnav.classList.toggle('subnav-active');
        });

        elSubnavTitle.addEventListener('click', () => {
            navList.classList.toggle('nav-list-hidden');
            elSubnav.classList.toggle('subnav-active');
        });
    });
}
/*--------------------------------------------------
	04. Sliders
---------------------------------------------------*/

function mainSliderInit() {
    var sliderMain = new Swiper ('.slider-main', {
        spaceBetween: 0,
        speed: 1300,
        effect: 'coverflow',
        parallax: true,
        autoplay: {
            delay: 9000
        },
    
        coverflowEffect: {
            rotate: 30,
            slideShadows: false,
        },
    
        pagination: {
            el: '.pagination',
            bulletClass: 'bullet',
            bulletActiveClass: 'bullet-active',
            clickable: true
        },
    
        navigation: {
            nextEl: '.btn-next',
            prevEl: '.btn-prev',
        },
    });


    var sliderMainItem = document.querySelector('.slider-main');
    var slides = sliderMainItem.querySelectorAll('.swiper-slide');
    var current = 0;


    sliderMain.on('transitionEnd', function() {
        if (sliderMain.activeIndex > current) {
            var content = slides[current].querySelector('.slide-content');
            content.classList.remove('content-visible');

            current = sliderMain.activeIndex;

            var content = slides[current].querySelector('.slide-content');
            content.classList.add('content-visible');

            var content = slides[0].querySelector('.slide-content');
            content.classList.remove('slide-content-intro');
            content.classList.add('slide-content-second');
        }

        if (sliderMain.activeIndex < current) {
            var content = slides[current].querySelector('.slide-content');
            content.classList.remove('content-visible');

            current = sliderMain.activeIndex;

            var content = slides[current].querySelector('.slide-content');
            content.classList.add('content-visible');
        }
    });
}

function mainSliderReveal() {
    var mainSlider = document.querySelector('.slider-main-reveal');
    mainSlider.classList.add('slider-main-reveal-animated');

    setTimeout(() => {
        if (document.querySelector('.slide-content-intro')) {
            var content = document.querySelector('.slide-content-intro');
            content.classList.add('content-visible');
        }
    
        if (document.querySelector('.slider-nav-intro')) {
            var sliderNav = document.querySelector('.slider-nav-intro');
            sliderNav.classList.add('slider-nav-visible');
        }
    }, 500);
}


function mainSliderPreloaderReveal() {
    document.body.classList.add('over-hidden');

    window.addEventListener('load', () => {
        setTimeout(() => {
            var preloader = document.querySelector('.preloader');
            preloader.classList.add('preloader-hidden');

            document.body.classList.remove('over-hidden');
        }, 200 + 400);

        setTimeout(() => {
            mainSliderReveal();

            setTimeout(() => {
                document.body.classList.add('header-reveal');
            }, 1400);
        }, 200 + 400 + 200);
    })
}

function mainSliderNumPreloaderReveal() {
    document.body.classList.add('over-hidden');

    window.addEventListener('load', () => {
        var number = document.querySelector('.preloader-num');
        var count = 0;
        
        var counter = setInterval(() => {
            if (count < 101) {
                number.innerHTML = count;
                count++;
            } else {
                clearInterval(counter);


                setTimeout(() => {
                    number.classList.add('preloader-num-out');
                }, 200);

                setTimeout(() => {
                    var preloader = document.querySelector('.preloader');
                    preloader.classList.add('preloader-hidden');

                    document.body.classList.remove('over-hidden');
                }, 200 + 400);

                setTimeout(() => {
                    mainSliderReveal();

                    setTimeout(() => {
                        document.body.classList.add('header-reveal');
                    }, 1400);
                }, 200 + 400 + 200);

            }
        }, 20);
    })
}




function testimonialsSliderInit() {
    new Swiper ('.testimonials-slider', {
        speed: 1200,
        autoHeight: true,
        spaceBetween: 30,
        loop: true,

        pagination: {
            el: '.testimonials-pagination',
            bulletClass: 'bullet',
            bulletActiveClass: 'bullet-active',
            clickable: true,
        },
    })
}

function testimonialsCardInit() {
    new Swiper ('.testimonials-card', {
        speed: 700,
        spaceBetween: 30,
        loop: true,
        slidesPerView: 2,

        breakpoints: {
            767: {
                slidesPerView: 1
            }
        },

        pagination: {
            el: '.testimonials-pagination',
            bulletClass: 'bullet',
            bulletActiveClass: 'bullet-active',
            clickable: true,
        },
    })
}


function portfolioSliderFull() {
    var interleaveOffset = 0.2;

    var swiperOptions = {
        direction: 'vertical',
        speed: 1200,
        parallax: true,
        grabCursor: true,
        watchSlidesProgress: true,
        mousewheelControl: true,
        mousewheel: true,

        navigation: {
            nextEl: ".portfolio-slider-navigation .btn-next",
            prevEl: ".portfolio-slider-navigation .btn-prev"
        },

        pagination: {
            el: '.portfolio-slider-pagination',
            bulletClass: 'bullet',
            bulletActiveClass: 'bullet-active',
            clickable: true,
            dynamicBullets: true
        },

        on: {
            progress: function() {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    var slideProgress = swiper.slides[i].progress;
                    var innerOffset = swiper.width * interleaveOffset;
                    var innerTranslate = slideProgress * innerOffset;
                    swiper.slides[i].querySelector(".portfolio-slider-img").style.transform =
                    "translate3d(0, " + innerTranslate + "px, 0)";
                }      
            },
            touchStart: function() {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = "";
                }
            },
            setTransition: function(speed) {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".portfolio-slider-img").style.transition =
                    speed + "ms";
                }
            }
        }
    };

    var sliderPortfolio = new Swiper(".portfolio-slider", swiperOptions);

    var sliderPortfolioItem = document.querySelector('.portfolio-slider');

    // Num pagination
    var sliderPortfolioPagination = sliderPortfolioItem.querySelector('.portfolio-slider-pagination')
    var bullets = sliderPortfolioPagination.querySelectorAll('.bullet');
    var num = 0;

    bullets.forEach(el => {
        num++;
        num = '0' + num;
        el.innerHTML = num;
    });


    // Content reveal
    var slides = sliderPortfolioItem.querySelectorAll('.swiper-slide');
    var current = 0;

    sliderPortfolio.on('transitionEnd', function() {
        var revealElements = slides[current].querySelectorAll('.cover-right');
        revealElements.forEach(el => {
            el.classList.remove('cover-right-anim');
        });

        current = sliderPortfolio.activeIndex;

        var revealElements = slides[current].querySelectorAll('.cover-right');
        revealElements.forEach(el => {
            el.classList.add('cover-right-anim');
        });
    });
}

function portfolioSliderFullReveal() {
    var slider = document.querySelector('.portfolio-slider-reveal');
        
    var preloader = document.querySelector('.preloader');
    preloader.classList.remove('preloader-visible');

    setTimeout(() => {
        slider.classList.add('portfolio-slider-reveal-anim');
        var sliderNav = slider.querySelector('.slider-nav');
        sliderNav.classList.add('slider-nav-visible');
    }, 0);

    setTimeout(() => {
        document.body.classList.add('header-reveal');

        var sliderPagination = slider.querySelector('.portfolio-slider-pagination');
        sliderPagination.classList.add('portfolio-slider-pagination-reveal');
    }, 0 + 1000);

    setTimeout(() => {
        var sliderCurrentSlide  = slider.querySelector('.swiper-slide');
        var sliderRevealContent = sliderCurrentSlide.querySelectorAll('.cover-right');
        
        sliderRevealContent.forEach(el => {
            el.classList.add('cover-right-anim');
        });
    }, 0 + 1400);
}


function portfolioSliderColumn() {
    new Swiper ('.portfolio-slider-column', {
        slidesPerView: 3,
        spaceBetween: 0,
        mousewheel: true,
        speed: 1000,
        
        breakpoints: {
            991: {
                slidesPerView: 2
            },
            767: {
                slidesPerView: 1
            }
        },

        navigation: {
            nextEl: ".portfolio-slider-column-navigation .btn-next",
            prevEl: ".portfolio-slider-column-navigation .btn-prev"
        },
    })
}

function portfolioSliderColumnReveal() {
    var slider = document.querySelector('.portfolio-slider-column-reveal');
        
    var preloader = document.querySelector('.preloader');
    preloader.classList.remove('preloader-visible');

    var sliderNav = document.querySelector('.slider-nav');
    sliderNav.classList.add('slider-nav-visible');

    setTimeout(() => {
        slider.classList.add('portfolio-slider-column-reveal-anim');
    }, 200);

    setTimeout(() => {
        document.body.classList.add('header-reveal');
    }, 800);
}


function blogSlider() {
    new Swiper ('.blog-slider', {
        spaceBetween: 0,
        slidesPerView: 3,
        speed: 700,
        
        breakpoints: {
            991: {
                slidesPerView: 2
            },
            767: {
                slidesPerView: 1
            }
        },

        pagination: {
            el: '.blog-slider-pagination',
            bulletClass: 'bullet',
            bulletActiveClass: 'bullet-active',
            clickable: true,
        },
    })
}

/*--------------------------------------------------
	05. Header reveal
---------------------------------------------------*/

function headerReveal() {
    // Along with changing these variables, you need to change the values in CSS
    var preLoaderDuration = 900;
    var preLoaderDelay    = 0;

    var pageHeaderDuration = 900;
    var pageHeaderDelay    = 0;

    const baseDelay = 1150;

    var pageHeader = document.querySelector('.page-header');
    var slideOver = pageHeader.querySelectorAll('.slide-over');

    setTimeout(() => {
        for (let i = 0; i < slideOver.length; i++) {
            slideOver[i].classList.add('slide-over-animated');
        }

        document.body.classList.add('header-reveal');
    }, preLoaderDuration + preLoaderDelay + pageHeaderDuration + pageHeaderDelay - baseDelay);
}


function workHeaderReveal() {
    // Along with changing these variables, you need to change the values in CSS
    var preLoaderDuration = 900;
    var preLoaderDelay    = 0;

    var pageHeaderDuration = 900;
    var pageHeaderDelay    = 0;

    const baseDelay = 1150;

    var workHeader = document.querySelector('.work-header-reveal');
    var sliderOver = workHeader.querySelectorAll('.slide-over');

    setTimeout(() => {
        for (let i = 0; i < sliderOver.length; i++) {
            sliderOver[i].classList.add('slide-over-animated');
        }

        workHeader.classList.add('work-header-animated');
        document.body.classList.add('header-reveal');
    }, preLoaderDuration + preLoaderDelay + pageHeaderDuration + pageHeaderDelay - baseDelay);
}

/*--------------------------------------------------
	06. AJAX contact form
---------------------------------------------------*/

function contactForm() {
    var mainForm = document.getElementById('form');

    var outputField = document.querySelector('.output-message');
    var outputClass;
    var outputMessage;

    mainForm.addEventListener('submit', (e) => {
        e.preventDefault();

        var name    = document.getElementById('username').value;
        var email   = document.getElementById('email').value;
        var message = document.getElementById('message').value;


        outputField.classList.remove('alert-danger');
        outputField.classList.remove('alert-success');
        outputField.innerHTML = null;


        if (name == '' || email == '' || message == '') {
            outputClass = 'alert-danger';
            outputMessage = 'Fill in all fields!';

        } else if (!/^[a-zA-Z ]+$/.test(name)) {
            outputClass = 'alert-danger';
            outputMessage = 'Name field must contain only letters!';

        }  else {
            outputClass = 'alert-success';
            outputMessage = 'Email sent!';

            var request = new XMLHttpRequest();
            var requestData = `name=${name}&email=${email}&message=${message}`;

            request.open('POST.html', 'contact-2.html', true);
            request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            request.send(requestData);
        }

        outputField.classList.add(outputClass);
        outputField.innerHTML = outputMessage;
    })
}

/*--------------------------------------------------
	07. Charts
---------------------------------------------------*/

function chartsInit() {
    var chartArr = [];
    var charts = document.querySelectorAll('.skills-chart');

    for (let i = 0; i < charts.length; i++) {
        const el = charts[i];

        var progressBar = new ProgressBar.Circle(el, {
            color: '#FF003C',
            trailColor: '#828282',
            strokeWidth: 1.5,
            trailWidth: 1.5,
            duration: 2200,
            easing: 'easeInOutQuart',
            autoStyleContainer: false,
            text: {
                className: 'skills-percent',
            },
            step: (state, bar) => {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        });

        chartArr.push(progressBar);
    }

    for (let i = 0; i < chartArr.length; i++) {
        const el = chartArr[i];
        
        new ScrollMagic.Scene({
            offset: "-100px",
            triggerElement: charts[i],
            triggerHook: "onCenter",
        })
        .addTo(controller)
        .on("enter", (e) => {
                
            setTimeout(() => {
                var value = charts[i].getAttribute('data-value') / 100;
                el.animate(value);
            }, 300);

        });
    }
}

/*--------------------------------------------------
	08. Video
---------------------------------------------------*/

function videoInit() {
    var videos = document.querySelectorAll('.video');

    for (let i = 0; i < videos.length; i++) {
        const el = videos[i];
        
        var videoLink  = el.querySelector('.video-link');
        var videoInner = el.querySelector('.video-inner');
        var iframe     = videoInner.querySelector('iframe');

        videoLink.addEventListener('click', (e) => {
            e.preventDefault();
            document.body.classList.add('over-hidden');

            videoInner.classList.add('visible');
            videoInner.classList.add('video-anim');
        })

        videoInner.addEventListener('click', (e) => {
            document.body.classList.remove('over-hidden');

            var iframeSrc = iframe.getAttribute('src');
            iframe.setAttribute('src', iframeSrc);

            videoInner.classList.remove('video-anim');
            setTimeout(() => {
                videoInner.classList.remove('visible');
            }, 520);
        })

    }
}

/*--------------------------------------------------
	09. Isotope filtering
---------------------------------------------------*/

function filterInit() {
    var iso = new Isotope( '.grid', {
        itemSelector: '.grid-item',
        percentPosition: true
    });
    
    var filterButtons = document.querySelectorAll('.filter-buttons .filter-item');
    
    filterButtons.forEach(el => {
        el.addEventListener('click', () => {
            var filterValue = el.getAttribute('data-filter');
            iso.arrange({
                filter: filterValue
            })
        })
    });
}
/*--------------------------------------------------
	10. Smooth scroll
---------------------------------------------------*/

function smoothScroll() {
    var scroll = new SmoothScroll('a[href*="#"]', {

        // Selectors
        topOnEmptyHash: true, // Scroll to the top of the page for links with href="#"

        // Speed & Duration
        speed: 900, // Integer. Amount of time in milliseconds it should take to scroll 1000px
        speedAsDuration: false, // If true, use speed as the total duration of the scroll animation
        durationMax: 2400, // Integer. The maximum amount of time the scroll animation should take
        durationMin: 900, // Integer. The minimum amount of time the scroll animation should take
        clip: true, // If true, adjust scroll distance to prevent abrupt stops near the bottom of the page
        easing: 'easeInOutCubic',

        // History
        // updateURL: true, // Update the URL on scroll
        // popstate: true, // Animate scrolling with the forward/backward browser buttons (requires updateURL to be true)

        // Custom Events
        emitEvents: true // Emit custom events

    });

    document.addEventListener('scrollStart', (e) => {
        document.body.classList.remove('is-menu-open');

        setTimeout(() => {
            document.body.classList.remove('over-hidden');
        }, 10);
    });
}

/*--------------------------------------------------
	11. Scroll spy
---------------------------------------------------*/

function scrollSpy() {
    const sections = document.querySelectorAll( 'section' );

    window.onscroll = ( ) => {
        const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

        for ( let s in sections )
            if ( sections.hasOwnProperty( s ) && sections[ s ].offsetTop <= scrollPos ) {
                const id = sections[ s ].id;
                document.querySelector( '.active' ).classList.remove( 'active' );
                document.querySelector( `.menu-anchor-list li a[href*=${ id }]` ).parentNode.classList.add( 'active' );
            }
    }  
}

/*--------------------------------------------------
	12. Typewriter
---------------------------------------------------*/

function typeInit() {
    var typewriter = new Typewriter('#type', {
        loop: true
    });
    
    setTimeout(() => {
        typewriter
            .typeString('creative ideas')
            .pauseFor(1000)
            .deleteAll()
            .typeString('business solutions')
            .pauseFor(1000)
            .deleteAll()
            .typeString('digital innovations')
            .pauseFor(1000)
            .deleteAll()
            .start()
    }, 3600);
}

/*--------------------------------------------------
	13. Particles
---------------------------------------------------*/

function particlesInit() {
    particlesJS('firstSection',
        {
            "particles": {
                "number": {
                    "value": 70,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#FF003C"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#FF003C"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.6,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 170,
                    "color": "#FF003C",
                    "opacity": 0.3,
                    "width": 1.2
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": true,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 150,
                        "line_linked": {
                            "opacity": 0.8
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true,
            "config_demo": {
                "hide_card": false,
                "background_color": "#b61924",
                "background_image": "",
                "background_position": "50% 50%",
                "background_repeat": "no-repeat",
                "background_size": "cover"
            }
        }
    );
}

/*--------------------------------------------------
	14. AJAX page transition
---------------------------------------------------*/

// Page transition animation
const jsOptions = [
    {
        from: '(.*)',
        to: '(.*)',
        out: (next) => {
            
            var preloader = document.querySelector('.preloader');
            preloader.classList.remove('preloader-out');
            preloader.classList.remove('preloader-hidden');

            preloader.classList.add('preloader-visible');

            document.body.classList.add('over-hidden');
            document.documentElement.classList.remove('smooth-scroll');

            setTimeout(() => {
                document.body.classList.remove('header-reveal');

                if (document.querySelector('.header')) {
                    var header = document.querySelector('.header');
                    header.classList.add('header-hidden');
                }

                next();
            }, 900);
            
        },
        in: function(next) {

            var preloader = document.querySelector('.preloader');
            var header = document.querySelector('.page-header');
            var main = document.querySelector('.page-main');

            var menuHeader = document.querySelector('.header');
            menuHeader.classList.add('header-hidden');


            setTimeout(() => {
                menuHeader.classList.remove('header-hidden');
            }, 1600);


            if (document.querySelector('.page-header')) {
                header.classList.add('page-header-to-bot');

                setTimeout(() => {
                    var header = document.querySelector('.page-header');
                    header.classList.remove('page-header-to-bot');
                }, 150);
            }


            if (document.querySelector('.page-main')) {
                main.classList.add('page-main-to-bot');

                setTimeout(() => {
                    var main = document.querySelector('.page-main');
                    main.classList.remove('page-main-to-bot');
                }, 200);
            }


            document.body.classList.remove('over-hidden');
            
            preloader.classList.remove('preloader-visible');
            preloader.classList.add('preloader-out');
            next();

        },
    }
];


// Swup plugin Init
if (document.getElementById('swup')) {
    var swupScroll = new SwupScrollPlugin({
        doScrollingRightAway: false,
        animateScroll: false,
    });
    
    const options = {
        linkSelector: 'a[data-swup]',
        cache: true,
        plugins: [
            swupScroll,
            new SwupJsPlugin(jsOptions),
        ],
    };

    const swup = new Swup(options);

    swup.on('contentReplaced', init);

    swup.on('clickLink', () => {
        document.body.classList.remove('is-menu-open');
        document.body.classList.remove('over-hidden')
        document.getElementById('cursor').classList.remove('cursor-big');
    });
}


// This function reloads all scripts when navigating through pages
function init() {

    // Menu animation start
    if (document.querySelector('.navigation')) {
        menuBackgroundToggle();
        menuLinksToggle();
    }
    // Menu animation end


    // Sticky header on scroll start
    if (document.querySelector('.header')) {
        headerScrollReveal();
    }
    // Sticky header on scroll end


    // Cursor init start
    if (document.querySelector('.cursor')) {
        cursorInit();
    }
    // Cursor init end


    // Back button start
    if (document.querySelector('.to-top-button')) {
        setTimeout(() => {
            var firstSection = document.querySelector('#firstSection');
            var toTopButton  = document.querySelector('.to-top-button');
            var header = document.querySelector('.header');


            toTopButton.addEventListener('click', () => {
                header.classList.remove('header-background');
                header.classList.add('header-to-top');
                timeout = setTimeout(() => {
                    header.classList.remove('header-fixed');
                }, 400);
            })
        
            new ScrollMagic.Scene({
                duration: firstSection.offsetHeight,
                triggerElement: firstSection,
                triggerHook: 'onCenter',
            })
            .addTo(controller)
            .on('enter', function (event) {
                toTopButton.classList.remove('visible');
            })
            .on('leave', function (event) {
                toTopButton.classList.add('visible');
            })
        }, 400);
    }
    // Back button end


    // Main slider start
    if (document.querySelector('.slider-main')) {
        mainSliderInit();
    }
    // Main slider end


    // Main slider reveal animation on enter
    if (document.querySelector('.slider-main-reveal') && !document.querySelector('.preloader-num')) {
        mainSliderPreloaderReveal();
    }
    // -----


    // Main slider reveal animation on enter with preloader
    if (document.querySelector('.slider-main-reveal') && document.querySelector('.preloader-num')) {
        mainSliderNumPreloaderReveal();
    }
    // -----


    // Main slider reveal animation when navigating from another page
    if (document.readyState === 'complete' && document.querySelector('.slider-main-reveal')) {
        mainSliderReveal();

        setTimeout(() => {
            document.body.classList.add('header-reveal');
        }, 1400);
    }
    // -----


    // Page reveal with second header start
    if (document.querySelector('.page-header')) {
        var preloader = document.querySelector('.preloader');
        preloader.classList.remove('preloader-visible');
        headerReveal();
    }
    // Page reveal with second header end


    // 404 preloader remove start
    if (document.querySelector('.page-404')) {
        var preloader = document.querySelector('.preloader');
        preloader.classList.remove('preloader-visible');
    }
    // 404 preloader remove end


    // Work page reveal start
    if (document.querySelector('.work-header')) {
        var preloader = document.querySelector('.preloader');
        preloader.classList.remove('preloader-visible');
        workHeaderReveal();
    }
    // Work page reveal end


    // Section sliders start
    if (document.querySelector('.testimonials-slider')) {
        testimonialsSliderInit();
    }

    if (document.querySelector('.testimonials-card')) {
        testimonialsCardInit();
    }

    if (document.querySelector('.blog-slider')) {
        blogSlider();
    }
    // Section sliders end


    // Top bar reveal if no header
    if (!document.querySelector('.page-header') &&
        !document.querySelector('.slider-main') &&
        !document.querySelector('.slider-main-reveal') &&
        !document.querySelector('.video-main') &&
        !document.querySelector('.work-header') &&
        !document.querySelector('.portfolio-slider-reveal') &&
        !document.querySelector('.portfolio-slider-column-reveal')) {
        document.body.classList.add('header-reveal');
    }
    // -----


    // Animation start
    if (document.querySelector('[data-animation-container]')) {
        containerAnimation();
    }

    if (document.querySelector('[footer-data-animation-container]')) {
        footerContainerAnimation();
    }

    if (document.querySelector('[data-animation]:not([data-animation-child])')) {
        singleAnimation();
    }
    // Animation end


    // Contact form start
    if (document.getElementById('form')) {
        contactForm();
    }
    // Contact form end


    // Lazy load start
    if (document.querySelector('.lazy')) {
        new LazyLoad({
            elements_selector: ".lazy",
        });
    }
    // Lazy load end


    // Isotope start
    if (document.querySelector('.grid')) {
        filterInit();
    }
    // Isotope end


    // Portfolio slider pages start
    if (document.querySelector('.portfolio-slider')) {
        portfolioSliderFull();
    }

    if (document.querySelector('.portfolio-slider-reveal')) {
        portfolioSliderFullReveal();
    }


    if (document.querySelector('.portfolio-slider-column')) {
        portfolioSliderColumn();
    }

    if (document.querySelector('.portfolio-slider-column-reveal')) {
        portfolioSliderColumnReveal();
    }
    // Portfolio slider pages end


    // Charts start
    if (document.querySelector('.skills-chart')) {
        chartsInit();
    }
    // Charts end


    // Video start
    if (document.querySelector('.video')) {
        videoInit();
    }
    // Video end


    // Smooth scroll and scroll spy start
    if (document.querySelector('a[href*="#"]')) {
        smoothScroll();
    }

    if (document.querySelector('.menu-anchor-list li a')) {
        scrollSpy();
    }
    // Smooth scroll and scroll spy end


    // Typewriter start
    if (document.querySelector('#type')) {
        typeInit();
    }
    // Typewriter end


    // Particles start
    if (document.querySelector('#particles')) {
        particlesInit();
    }
    // Particles end

}


// Init all functions on start
init();


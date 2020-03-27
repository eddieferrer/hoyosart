/* eslint-disable */
$(function() {
  'use strict'

  const htmlBody = $('html,body')
  const body = $('body')

  /* ===============================================
    Page Preloaders
  =============================================== */
  $(window).on('load', function() {
    body.addClass('loaded')
  })

  if (body.attr('data-preloader') === '1') {
    body.append(
      $(
        "<div class='preloader preloader-1'><div><svg class='loader-circular' viewBox='25 25 50 50'><circle class='loader-path' cx='50' cy='50' r='20'/></svg></div></div>"
      )
    )
  } else if (body.attr('data-preloader') === '2') {
    body.append(
      $("<div class='preloader preloader-2'><div><span></span></div></div>")
    )
  } else if (body.attr('data-preloader') === '3') {
    body.append(
      $("<div class='preloader preloader-3'><div><span></span></div></div>")
    )
  } else if (body.attr('data-preloader') === '4') {
    body.append(
      $("<div class='preloader preloader-4'><div><span></span></div></div>")
    )
  }

  /* ===============================================
    Sal.js
  =============================================== */
  sal({
    duration: 500
  })

  /* ===============================================
    Smooth Scrolling
  =============================================== */
  const smoothscroll = $('.smoothscroll')

  smoothscroll.on('click', function(e) {
    htmlBody.animate(
      { scrollTop: $(this.hash).offset().top },
      700,
      'easeInOutQuart'
    )
    e.preventDefault()
  })

  /* ===============================================
    Scroll to Top
  =============================================== */
  const scrollToTop = $('.scrolltotop')
  //
  // Show/Hide button //
  //
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 700) {
      // 700px from top
      scrollToTop.addClass('scrolltotop-show')
    } else {
      scrollToTop.removeClass('scrolltotop-show')
    }
  })

  //
  // Animate button //
  //
  scrollToTop.on('click', function() {
    htmlBody.animate({ scrollTop: 0 }, 700, 'easeInOutQuart')
    return false
  })

  /* ===============================================
    Header Menu
  =============================================== */
  //
  // Fixed //
  //
  let c
  let currentScrollTop = 0
  const header = $('.header.fixed')

  $(window).on('scroll', function() {
    const a = $(window).scrollTop()
    currentScrollTop = a

    if (c < currentScrollTop && a > 210) {
      header.addClass('hide')
    } else if (c > currentScrollTop && !(a <= 210)) {
      header.removeClass('hide')
    }

    c = currentScrollTop
  })

  //
  // Sticky //
  //
  if ($('.header.sticky').length) {
    $("<div class='header-placeholder'></div>").insertBefore('.header.sticky')
  }

  //
  // Absolute //
  //
  if ($('.absolute-light').length) {
    $(window).on('scroll', function() {
      const headerFixed = $('.header.fixed')
      if ($(window).scrollTop() > 10) {
        headerFixed.removeClass('absolute-light')
      } else {
        headerFixed.addClass('absolute-light')
      }
    })
  }
  if ($('.absolute-dark').length) {
    $(window).on('scroll', function() {
      const headerFixed = $('.header.fixed')
      if ($(window).scrollTop() > 10) {
        headerFixed.removeClass('absolute-dark')
      } else {
        headerFixed.addClass('absolute-dark')
      }
    })
  }

  //
  // Open/Close Header Menu //
  //
  const wrapper = $('.wrapper')
  const headerMenu = $('.header-menu-wrapper')
  const mToggle = $('.m-toggle')
  const closeBtn = $('.close-button')

  mToggle.on('click', function(e) {
    if (headerMenu.hasClass('show')) {
      headerMenu.removeClass('show')
      wrapper.removeClass('overlay')
    } else {
      headerMenu.addClass('show')
      wrapper.addClass('overlay')
    }
    e.stopPropagation()
  })

  closeBtn.on('click', function() {
    if (headerMenu.hasClass('show')) {
      headerMenu.removeClass('show')
      wrapper.removeClass('overlay')
    }
  })
  $(document).on('click', function(e) {
    if ($(e.target).closest('.header-menu-wrapper').length === 0) {
      if (headerMenu.hasClass('show')) {
        headerMenu.removeClass('show')
        wrapper.removeClass('overlay')
      }
    }
  })

  //
  // Move Header Menu on mobile //
  //
  checkSize()
  $(window).resize(checkSize)
  function checkSize() {
    if (headerMenu.css('position') == 'fixed') {
      headerMenu.prependTo('body')
    } else {
      $('.header>.container, .header>.container-fluid').append(headerMenu)
    }
  }

  //
  // Dropdown Menu //
  //
  $('.m-link').each(function() {
    const $this = $(this)
    if ($this.parent('.m-item').children('.m-dropdown').length) {
      $this.addClass('m-dropdown-toggle')
      const dropdownMenu = $this.parent('.m-item').children('.m-dropdown')

      $this.on('click', function(e) {
        if ($this.hasClass('active')) {
          $this.removeClass('active')
          dropdownMenu.removeClass('show')
        } else {
          $this.addClass('active')
          dropdownMenu.addClass('show')
        }
        e.preventDefault()
      })
    }
  })

  //
  // Sub Dropdown Menu //
  //
  $('.m-dropdown-link').each(function() {
    const $this = $(this)

    if ($this.parent('.m-dropdown-item').children('.m-subdropdown').length) {
      $this.addClass('m-subdropdown-toggle')
      const subDropdownMenu = $this
        .parent('.m-dropdown-item')
        .children('.m-subdropdown')

      $this.on('click', function(e) {
        if ($this.hasClass('active')) {
          $this.removeClass('active')
          subDropdownMenu.removeClass('show')
        } else {
          $this.addClass('active')
          subDropdownMenu.addClass('show')
        }
        e.preventDefault()
      })
    }
  })

  //
  // Mega Menu //
  //
  const $megamenu = $('.megamenu')

  if ($megamenu.length) {
    $megamenu.each(function() {
      const $this = $(this)
      const megamenu = $this.parent('.m-item').children('.megamenu')
      const megamenuLink = $this.parent('.m-item').children('.m-link')

      $this.parent('.m-item').addClass('m-megamenu')
      $this
        .parent('.m-item')
        .children('.m-link')
        .addClass('m-dropdown-toggle')

      megamenuLink.on('click', function(e) {
        if (megamenuLink.hasClass('active')) {
          megamenuLink.removeClass('active')
          megamenu.removeClass('show')
        } else {
          megamenuLink.addClass('active')
          megamenu.addClass('show')
        }
        e.preventDefault()
      })
    })
  }

  /* ===============================================
    Fullscreen Menu
  =============================================== */
  const fmToggle = $('.fm-toggle')
  const fmClose = $('.fm-close')
  const fmWrapper = $('.fm-wrapper')

  fmToggle.on('click', function() {
    fmWrapper.addClass('fm-show')
  })

  fmClose.on('click', function() {
    fmWrapper.removeClass('fm-show')
  })

  /* ===============================================
    Sidebar Menu
  =============================================== */
  const smToggle = $('.sm-toggle')
  const smClose = $('.sm-close')
  const smWrapper = $('.sm-wrapper')
  const smMobile = $('.sm-mobile')

  if ($('.sm-wrapper.sm-left').length) {
    body.addClass('sm-spacer-left')
  }
  if ($('.sm-wrapper.sm-right').length) {
    body.addClass('sm-spacer-right')
  }

  if ($('.sm-wrapper.dark').length) {
    smMobile.addClass('dark')
  }
  if ($('.sm-wrapper.black').length) {
    smMobile.addClass('black')
  }

  smToggle.on('click', function() {
    smWrapper.addClass('sm-show')
    wrapper.addClass('overlay')
    smMobile.addClass('overlay')
  })

  smClose.on('click', function() {
    smWrapper.removeClass('sm-show')
    wrapper.removeClass('overlay')
    smMobile.removeClass('overlay')
  })

  //
  // Dropdown Menu //
  //
  $('.sm-link').each(function() {
    const $this = $(this)
    if ($this.parent('.sm-item').children('.sm-dropdown').length) {
      $this.addClass('sm-dropdown-toggle')
      const dropdownMenu = $this.parent('.sm-item').children('.sm-dropdown')

      $this.on('click', function(e) {
        if ($this.hasClass('active')) {
          $this.removeClass('active')
          dropdownMenu.removeClass('show')
        } else {
          $this.addClass('active')
          dropdownMenu.addClass('show')
        }
        e.preventDefault()
      })
    }
  })

  //
  // Sub Dropdown Menu //
  //
  $('.sm-dropdown-link').each(function() {
    const $this = $(this)

    if ($this.parent('.sm-dropdown-item').children('.sm-subdropdown').length) {
      $this.addClass('sm-subdropdown-toggle')
      const subDropdownMenu = $this
        .parent('.sm-dropdown-item')
        .children('.sm-subdropdown')

      $this.on('click', function(e) {
        if ($this.hasClass('active')) {
          $this.removeClass('active')
          subDropdownMenu.removeClass('show')
        } else {
          $this.addClass('active')
          subDropdownMenu.addClass('show')
        }
        e.preventDefault()
      })
    }
  })

  /* ===============================================
    Sidebar Toggle Menu
  =============================================== */
  const stmToggle = $('.stm-toggle')
  const stmToggleWrapper = $('.stm-toggle-wrapper')
  const stmClose = $('.stm-close')
  const stmWrapper = $('.stm-wrapper')
  const stmLeft = $('.stm-left')
  const stmRight = $('.stm-right')

  if (stmLeft.length) {
    body.addClass('stm-spacer-left')
    stmToggleWrapper.addClass('stm-toggle-left')
  }
  if (stmRight.length) {
    body.addClass('stm-spacer-right')
    stmToggleWrapper.addClass('stm-toggle-right')
  }

  if ($('.stm-toggle-wrapper.dark').length) {
    stmWrapper.addClass('dark')
  }
  if ($('.stm-toggle-wrapper.black').length) {
    stmWrapper.addClass('black')
  }

  stmToggle.on('click', function() {
    if (stmWrapper.hasClass('stm-show')) {
      stmWrapper.removeClass('stm-show')
      wrapper.removeClass('overlay')
      stmToggle.removeClass('stm-toggle-active')
      stmToggleWrapper.removeClass('overlay')
    } else {
      stmWrapper.addClass('stm-show')
      wrapper.addClass('overlay')
      stmToggle.addClass('stm-toggle-active')
      stmToggleWrapper.addClass('overlay')
    }
  })

  stmClose.on('click', function() {
    stmWrapper.removeClass('stm-show')
    wrapper.removeClass('overlay')
    stmToggle.removeClass('stm-toggle-active')
    stmToggleWrapper.removeClass('overlay')
  })

  //
  // Dropdown Menu //
  //
  $('.stm-link').each(function() {
    const $this = $(this)
    if ($this.parent('.stm-item').children('.stm-dropdown').length) {
      $this.addClass('stm-dropdown-toggle')
      const dropdownMenu = $this.parent('.stm-item').children('.stm-dropdown')

      $this.on('click', function(e) {
        if ($this.hasClass('active')) {
          $this.removeClass('active')
          dropdownMenu.removeClass('show')
        } else {
          $this.addClass('active')
          dropdownMenu.addClass('show')
        }
        e.preventDefault()
      })
    }
  })

  //
  // Sub Dropdown Menu //
  //
  $('.stm-dropdown-link').each(function() {
    const $this = $(this)

    if (
      $this.parent('.stm-dropdown-item').children('.stm-subdropdown').length
    ) {
      $this.addClass('stm-subdropdown-toggle')
      const subDropdownMenu = $this
        .parent('.stm-dropdown-item')
        .children('.stm-subdropdown')

      $this.on('click', function(e) {
        if ($this.hasClass('active')) {
          $this.removeClass('active')
          subDropdownMenu.removeClass('show')
        } else {
          $this.addClass('active')
          subDropdownMenu.addClass('show')
        }
        e.preventDefault()
      })
    }
  })

  /* ===============================================
    Parallax Background
  =============================================== */
  const parallaxBg = $('.parallax-bg')

  if (parallaxBg.length) {
    parallaxBg.each(function() {
      $(this).parallaxie({
        speed: 0.2
      })
    })
  }

  /* ===============================================
    Background Image
  =============================================== */
  $('.bg-image').each(function() {
    const bgData = $(this).attr('data-bg-src')
    $(this).css('background-image', 'url(' + bgData + ')')
  })

  /* ===============================================
    Owl Carousel
  =============================================== */
  $('.owl-carousel').each(function() {
    const $carousel = $(this)

    const $defaults = {
      rewind: true,
      navText: [
        "<i class='ti-angle-left'></i>",
        "<i class='ti-angle-right'></i>"
      ],
      autoHeight: true,
      autoplayTimeout: 4000,
      autoplaySpeed: 400,
      autoplayHoverPause: true,
      navSpeed: 350,
      dotsSpeed: 350,
      dragEndSpeed: 350
    }
    const $options = {
      items: $carousel.data('owl-items'),
      margin: $carousel.data('owl-margin'),
      loop: $carousel.data('owl-loop'),
      center: $carousel.data('owl-center'),
      nav: $carousel.data('owl-nav'),
      rewind: $carousel.data('owl-rewind'),
      dots: $carousel.data('owl-dots'),
      autoplay: $carousel.data('owl-autoplay')
    }
    const $responsive = {
      responsive: {
        0: {
          items: $carousel.data('owl-xs')
        },
        576: {
          items: $carousel.data('owl-sm')
        },
        768: {
          items: $carousel.data('owl-md')
        },
        992: {
          items: $carousel.data('owl-lg')
        },
        1200: {
          items: $carousel.data('owl-xl')
        }
      }
    }

    if ($carousel.hasClass('portfolio-carousel')) {
      var $portfolioCarousel = {
        items: 2,
        center: true
      }
    }

    if ($carousel.hasClass('product-carousel')) {
      var $productCarousel = {
        items: 1,
        animateOut: 'fadeOut',
        URLhashListener: true,
        startPosition: 'URLHash'
      }
    }

    $carousel.owlCarousel(
      $.extend(
        $defaults,
        $options,
        $responsive,
        $portfolioCarousel,
        $productCarousel
      )
    )

    const customPrev = $('#customPrev')
    const customNext = $('#customNext')

    customNext.on('click', function() {
      $carousel.trigger('next.owl.carousel', [400])
    })
    customPrev.on('click', function() {
      $carousel.trigger('prev.owl.carousel', [400])
    })
  })

  /* ===============================================
    Portfolio Masonry
  =============================================== */
  const portfolioMasonry = $('.portfolio-masonry')

  if (portfolioMasonry.length) {
    portfolioMasonry.imagesLoaded(function() {
      const $portfolioWrapper = $('.portfolio-masonry').isotope({
        itemSelector: '.portfolio-item',
        transitionDuration: 300 // 0.3 second
      })

      const filter = $('.portfolio-filter li, .portfolio-side-filter li')

      // Portfolio Filter //
      filter.on('click', function() {
        const filterValue = $(this).attr('data-filter')
        $portfolioWrapper.isotope({ filter: filterValue })

        filter.removeClass('active')
        $(this).addClass('active')
      })
    })
  }

  /* ===============================================
    Portfolio Metro
  =============================================== */
  const portfolioMetro = $('.portfolio-metro')

  if (portfolioMetro.length) {
    portfolioMetro.imagesLoaded(function() {
      portfolioMetro.packery({
        itemSelector: '.portfolio-item'
      })
    })
  }

  /* ===============================================
    Justified Gallery
  =============================================== */
  const justifiedGallery = $('.justified-gallery')

  if (justifiedGallery.length) {
    justifiedGallery.justifiedGallery({
      rowHeight: 340,
      margins: 10
    })
    justifiedGallery.each(function() {
      $(this).magnificPopup({
        delegate: 'a',
        removalDelay: '200',
        type: 'image',
        fixedContentPos: false,
        gallery: {
          enabled: true
        },
        image: {
          titleSrc: 'data-gallery-title'
        }
      })
    })
  }

  /* ===============================================
    MixItUp
  =============================================== */
  const portfolioGrid = $('.portfolio-grid')

  if (portfolioGrid.length) {
    const mixer = mixitup('.portfolio-grid', {
      selectors: {
        target: '.portfolio-item'
      },
      animation: {
        duration: 300
      }
    })
  }

  /* ===============================================
    Masonry Grid
  =============================================== */
  var $masonryGrid = $('.masonry').imagesLoaded(function() {
    $masonryGrid.masonry({
      itemSelector: '.masonry-item',
      columnWidth: '.masonry-item',
      gutter: 0
    })
  })

  /* ===============================================
    Lightbox
  =============================================== */
  //
  // Lightbox - Image //
  //
  $('.lightbox-image-link, .lightbox-image-box').each(function() {
    $(this).magnificPopup({
      type: 'image',
      fixedContentPos: false,
      removalDelay: 200,
      closeOnContentClick: true,
      image: {
        titleSrc: 'data-image-title'
      }
    })
  })

  //
  // Lightbox - Media //
  //
  $('.lightbox-media-link, .lightbox-media-box').each(function() {
    const lightboxMedia = $(this)

    lightboxMedia.magnificPopup({
      type: 'iframe',
      fixedContentPos: false,
      removalDelay: 200,
      preloader: false,
      iframe: {
        patterns: {
          youtube: {
            index: 'youtube.com/',
            id: 'v=',
            src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0'
          },
          vimeo: {
            index: 'vimeo.com/',
            id: '/',
            src: '//player.vimeo.com/video/%id%?autoplay=1'
          }
        },
        srcAction: 'iframe_src'
      }
    })
  })

  //
  // Lightbox - Gallery //
  //
  const $gallery = $('.gallery')

  if ($gallery.length) {
    $gallery.each(function() {
      $(this).magnificPopup({
        delegate: 'a',
        removalDelay: '200',
        type: 'image',
        fixedContentPos: false,
        gallery: {
          enabled: true
        },
        image: {
          titleSrc: 'data-gallery-title'
        }
      })
    })
  }

  /* ===============================================
    Accordion
  =============================================== */
  $('.accordion-title').each(function() {
    const $this = $(this)

    $this.on('click', function() {
      const accordionList = $this.parent('li')
      const accordionContent = this.nextElementSibling

      if (accordionList.hasClass('active')) {
        accordionList.removeClass('active')
        accordionContent.style.maxHeight = null
      } else {
        accordionList.addClass('active')
        if ($this.closest('.accordion').hasClass('single-open')) {
          $this
            .closest('.accordion')
            .children('li')
            .removeClass('active')
          accordionList.addClass('active')
          $this
            .parents('.single-open')
            .find('.accordion-content')
            .css('max-height', '0')
        }
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
      }
    })

    //
    // Give max-height to Accordion's active content //
    //
    if (
      $this
        .parents('.accordion')
        .find('li')
        .hasClass('active')
    ) {
      const accordionActiveContent = $this
        .parents('.accordion')
        .find('li.active')
        .children('.accordion-content')
      const accordionHeight = accordionActiveContent.prop('scrollHeight')

      accordionActiveContent.css({ 'max-height': accordionHeight + 'px' })
    }
  })

  /* ===============================================
    Counter
  =============================================== */
  const counter = $('.counter')

  if (counter.length) {
    counter.appear(
      function() {
        $(this).each(function() {
          $(this)
            .prop('Counter', 0)
            .animate(
              {
                Counter: $(this).text()
              },
              {
                duration: 3000,
                easing: 'swing',
                step(now) {
                  $(this).text(Math.ceil(now))
                }
              }
            )
        })
      },
      { accX: 0, accY: -10 }
    )
  }

  /* ===============================================
    Countdown
  =============================================== */
  const countdown = $('.countdown')

  if (countdown.length) {
    countdown.each(function() {
      const finalDate = $(this).attr('data-countdown')

      $(this).countdown(finalDate, function(event) {
        $(this).html(event.strftime('%D days %H:%M:%S'))
      })
    })
  }

  /* ===============================================
    Google Maps
  =============================================== */
  const mapCanvas = $('.gmap')
  let m, divId, initLatitude, initLongitude, map

  if (mapCanvas.length) {
    for (let i = 0; i < mapCanvas.length; i++) {
      m = mapCanvas[i]

      initLatitude = m.dataset.latitude
      initLongitude = m.dataset.longitude
      divId = '#' + m.id

      map = new GMaps({
        el: divId,
        lat: initLatitude,
        lng: initLongitude,
        zoom: 16,
        scrollwheel: false,
        styles: [
          /* style your map at https://snazzymaps.com/editor and paste JSON here */
        ]
      })

      map.addMarker({
        lat: initLatitude,
        lng: initLongitude
      })
    }
  }

  /* ===============================================
    Contact Form
  =============================================== */
  $('#contactform').on('submit', function(e) {
    const name = $('#name').val()
    const email = $('#email').val()
    const subject = $('#subject').val()
    const message = $('#message').val()

    if (name === '') {
      $('#name').addClass('error-color')
    }
    if (email === '') {
      $('#email').addClass('error-color')
    }
    if (subject === '') {
      $('#subject').addClass('error-color')
    }
    if (message === '') {
      $('#message').addClass('error-color')
    } else {
      $.ajax({
        url: '../../assets/php/contact-form.php',
        data: $(this).serialize(),
        type: 'POST',
        success(data) {
          $('#success').addClass('show-result') // Show Success Message
          $('#contactform').each(function() {
            this.reset()
          })
        },
        error(data) {
          $('#error').addClass('show-result') // Show Error Message
        }
      })
      const forms = $('#contactform input, #contactform textarea')
      forms.removeClass('error-color')
    }

    e.preventDefault()
  })

  /* ===============================================
    Shop
  =============================================== */

  $('.product-quantity .qnt').append(
    '<a class="dec qnt-button" href="#">-</a><a class="inc qnt-button" href="#">+</a>'
  )

  $('.qnt-button').on('click', function() {
    const $button = $(this)
    const oldValue = $button
      .parent()
      .find('input')
      .val()

    if ($button.text() == '+') {
      var newVal = parseFloat(oldValue) + 1
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 1) {
        var newVal = parseFloat(oldValue) - 1
      } else {
        newVal = 1
      }
    }

    $button
      .parent()
      .find('input')
      .val(newVal)

    return false
  })
})

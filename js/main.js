---
layout: null
sitemap:
  exclude: 'yes'
---

function scrollYToElement(elem) {
  if(elem) {

    $('html, body').animate({
      scrollTop: elem.offset().top
    }, 800);
    
  }
}

$(document).ready(function () {
  const panelCoverClass = '.panel-cover';
  const showingClass = 'showing';
  const hideClass = 'hidden';
  const panelCoverCollapsedClass = 'panel-cover--collapsed';
  const contentWrapperClass = '.content-wrapper';


  function show() {
    $(contentWrapperClass).removeClass(hideClass);
    $(contentWrapperClass).addClass(showingClass);
  }

  function hide() {
    $(contentWrapperClass).removeClass(showingClass);
    $(contentWrapperClass).addClass(hideClass);
  }

  $('a.moreinfo-btn').click(function (e) {
    // If is already showing, hide
    if ($(contentWrapperClass).hasClass(showingClass)) {
      $(contentWrapperClass).removeClass('animated slideInRight');
      $(panelCoverClass).removeClass(panelCoverCollapsedClass);
      $(panelCoverClass).css('max-width', '100%');
      $(panelCoverClass).animate({'width': '100%'}, 400, swing = 'swing', function () {});
      hide();
      
      e.preventDefault();
      window.location.hash = '';
      parent.location.hash = '';
      return;
    }

    // Else, show

    currentWidth = $(panelCoverClass).width();

    let isMobile = currentWidth < 960;

    if (isMobile) {
      $(panelCoverClass).addClass(panelCoverCollapsedClass);
      $(contentWrapperClass).addClass('animated slideInRight');
    } else {
      $(panelCoverClass).css('max-width', currentWidth);
      $(panelCoverClass).animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {});
    }
    
    show();

    if (isMobile) {
      scrollYToElement($(contentWrapperClass));
    }
  })

  if (window.location.hash && window.location.hash == '#info') {
    $(panelCoverClass).addClass(panelCoverCollapsedClass);
    show();

    let currentWidth = $(panelCoverClass).width();
    if (currentWidth < 960) {
      $(panelCoverClass).addClass(panelCoverCollapsedClass);
      $(contentWrapperClass).addClass('animated slideInRight');
    }
  } else {
    hide();
  }

  if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
    $(panelCoverClass).addClass(panelCoverCollapsedClass);
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  })


  /* ***************** Switch images in skill cicle ***************** */
  function switchSkillImages(skillDiv, isHoverOn) {
    let id = skillDiv.id;
    if (id) {
      let elem = $(`#${id}`);
      if (elem) {
        let imgNoHover = elem.find('img.no-hover')[0];
        let imgHover = elem.find('img.hover')[0];

        if(imgNoHover && imgHover){ 
          if (isHoverOn){
            $(imgNoHover).addClass('hidden');
            $(imgHover).removeClass('hidden');
          } else {
            $(imgHover).addClass('hidden');
            $(imgNoHover).removeClass('hidden');
          }
        }
      }
    }
  }


  $('.img-me').hover(
    function(eventObj) {
      if(eventObj && eventObj.target && eventObj.target.parentElement){
        switchSkillImages(eventObj.target.parentElement, true);
      }
    },
    function(eventObj) { 
      if(eventObj && eventObj.target && eventObj.target.parentElement){
        switchSkillImages(eventObj.target.parentElement, false);
      }
    }

  );

  /* ***************** End of Switch images in skill cicle ***************** */


  /* *********************** Aviso Legal (Modal) *********************** */
  // Get the modal
  var modal = document.getElementById("legalModal");

  // Get the button that opens the modal
  var btn = document.getElementById("legal");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  /* *********************** End Aviso Legal (Modal) *********************** */
})

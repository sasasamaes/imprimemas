(function(){
  document.addEventListener('DOMContentLoaded',onDOMLoad);

  var section1 = document.getElementById('section-1');
  section1.addEventListener('scroll',onScroll);

  function onScroll() {
    if (window.scrollY >= 200) {
      alert('scroll');
    }
  }

  function onDOMLoad(){

    var btnMenu = document.getElementById('btnMenu');
    var navMenu = document.getElementById('navbarMenu');



    btnMenu.addEventListener('click',onClickMenu);

    function onClickMenu() {
      navbarMenu.classList.toggle('header-menu-list--show')
    }
  }


}());

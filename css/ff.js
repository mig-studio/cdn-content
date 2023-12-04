
  $('.item-arrow').click(function (e) {
  e.preventDefault();

    $(this).find('ul') .css("display", "block");
});

  $('.button-fall-out-menu').click(function (e) {
    e.preventDefault();

    $('.ut-menu').toggleClass('js-display-menu');
    $('.height-menu-bg').toggleClass('js-height-menu-bg');
    $('.icon-under-menu').toggleClass('js-minus-plus');


    js-minus-plus
  });


  $('.item-arrow').click(function (e) {
    e.preventDefault();
    $(this).closest("li").find("ul").toggle();
  });



  $('.item-arrow').click(function (e) {
    e.preventDefault();
    if ($(this).closest("li").find("ul").is(":visible")) {
      $(this).closest("li").find("ul").css("display","none");
    }
    else {
      $(this).closest("li").find("ul").css("display","block");
    }
    $(this).closest("li").find("ul").toggle();
  });



  $('.item-arrow').click(function () {
    console.log($(this).closest("li").find("ul").css("opacity"));
    console.log($(this).closest("li").find("ul").css("opacity")>0);


    if ($(this).closest("li").find("ul").hasClass('open')) {
      $(this).closest("li").find("ul").addClass('open');
      $(this).closest("li").find("ul").toggle();
    }
    else {
      $(this).closest("li").find("ul").removeClass('open');
    }
    return false
  });







  //останя зміна

  $('.item-arrow').click(function (e) {
    e.preventDefault();
    if ($(this).closest("li").find("ul").is(":visible")) {
      $(this).closest("li").find("ul").css("display","none");
      $(this).toggleClass('js-minus');
    }
    else {
      $(this).closest("li").find("ul").css("display","block");
      $(this).toggleClass('js-minus');
    }

  });





  $('.item-arrow').click(function () {
    $(this).toggleClass('js-minus');
    if ($(this).closest("li").find("ul").hasClass('open')) {
      $(this).closest("li").find("ul").removeClass('open');
      $(this).closest("li").find("ul").addClass('hide');
    }
    else {
      $(this).closest("li").find("ul").removeClass('hide');
      $(this).closest("li").find("ul").addClass('open');
    }
    return false
  });


  <script>
</script>




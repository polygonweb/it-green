import $ from 'jquery';
import DropBlock from './DropBlock';

function init() {
  $(".menu-switcher").click(function() {
    $("nav > ul > li").not(".menu-switcher").toggle();
  });

  $(".action-city").click(function(ev) {
    $(".city-wrapper").toggle();
    ev.preventDefault();
  });

  $(".action.enter").click(function() {
    $(".modal-enter").show();
  });

  $(".itgreen-filter-select").click(function() {
    $(this).find(".itgreen-filter-options").toggle();
  });

  $(".itgreen-filter-select .itgreen-filter-option").click(function() {
    var $option;
    $option = $(this);
    $option.parents(".itgreen-filter-select").find(".placeholder").html($option.html());
  });

  $(".status-select").click(function() {
    $(this).find(".options").toggle();
  });

  $(".status-select .order-status").click(function() {
    var $option;
    $option = $(this);
    $option.parents(".status-select").find(".selected").html($option.clone());
  });

  $(".tabs-switcher .tab").click(function() {
    var selTab, tab;
    selTab = $(this).parents(".tabs-switcher").find('.selected');
    tab = selTab.attr('tab');
    selTab.removeClass('selected');
    $(".tabs .tab[tab = " + tab + "]").hide();
    tab = $(this).attr('tab');
    $(this).addClass('selected');
    $(".tabs .tab[tab = " + tab + "]").show();
  });


  $(".user-area .action.user").on("click", function(e) {
    $(this)
        .closest(".user-area")
        .toggleClass("is-active");
    e.preventDefault();
  });


  $('.b-file-loader').each(function(index, elem) {
    var $block = $(elem);
    var $input = $block.find('.b-file-loader__input');
    var $del = $block.find('.b-file-loader__del');

    $input.on('change', function(e) {
      $block.addClass('b-file-loader_active')
    });

    $del.on('click', function(e) {
      $block.removeClass('b-file-loader_active');
      $input.get(0).value = '';
    });
  });


  $('.b-help-hint').each(function(index, elem) {
    var $block = $(elem);
    var $trigger = $block.find('.b-help-hint__btn');
    var $content = $block.find('.b-help-hint__content');
    var $close = $block.find('.b-help-hint__close');

    $trigger.on('click', function(e) {
      $block.toggleClass('b-help-hint_active');
      e.preventDefault();
    });

    $close.on('click', function(e) {
      $block.removeClass('b-help-hint_active');
      e.preventDefault();
    });
  });

  /**
   * Designer
   * ================================================
   */
  $('.b-inner-nav__list_nested')
    .closest('.b-inner-nav__item')
    .find('.b-inner-nav__link')
      .on('touchmove', function(e) {
        e.stopPropagation();
      })
      .on('touchend', function(e) {
        $(this)
          .closest('.b-inner-nav__item')
          .toggleClass('b-inner-nav__item_hover');
        e.preventDefault();
      })
    .end()
    .hover(
      function() {
        $(this).addClass('b-inner-nav__item_hover');
      },
      function() {
        $(this).removeClass('b-inner-nav__item_hover')
      }
    );

    $('.b-inner-nav__toggle').on('click', function(e) {
      $(this)
        .closest('.b-inner-nav')
        .toggleClass('b-inner-nav_open')
    });


  var toolbarItems = Array.prototype.slice.call(document.querySelectorAll('.b-toolbar__item'));
  toolbarItems.forEach(function(item) {
    var btn = item.querySelector('.b-toolbar__btn');
    var dropdown = item.querySelector('.b-toolbar__dropdown');
    if (!dropdown) return;
    new DropBlock({
      element: item,
      trigger: btn,
      dropElement: dropdown,
      activeClass: 'b-toolbar__item_open',
      onOpen: function(element, trigger, dropElement) {},
      onClose: function(element, trigger, dropElement) {}
    });
  })

};

$(init);

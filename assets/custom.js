$(document).ready(function () {
setTimeout(function () {
$('.product-form .shopify-payment-button__button').text("Buy Now");
 },1000);
  // START:- product desktop atc button

  $(document).on("click", ".duplicate--addtocart-btn", function () {
    var $_this = $(this),
      $wrapper = $_this.closest(".card--media"),
      $find_class = $wrapper.find(".js-atc-button"),
      $spinner_class = $wrapper.find(".loading__spinner"),
      $atc_span = $wrapper.find(".dupli__atctext");
    $_this.addClass("loading");
    $find_class.trigger("click");
    $spinner_class.removeClass("hidden");
    $atc_span.addClass("hidden");

    setTimeout(function () {
      $spinner_class.addClass("hidden");
      $atc_span.removeClass("hidden");
      $_this.removeClass("loading");
    }, 1200);
  });

  // END:- product desktop atc button


  // START:- sticky menu mobile
  $(document).on("click", ".sticky--menu", function () {
    var $_this = $(this);
    $(".menu-drawer-container .header__icon--menu").trigger("click");
    $_this.addClass("active");
    // END:- sticky menu mobile
  });

  $(".footer-block--menu").wrapAll(
    "<div class='footer-block--menu_wrap'></div>"
  );

  // START:- Add free gift with thresold price
  $(document).on("click", ".add_free_gift--js", function () {
    var $el = $(this),
      $wrap = $el.closest(".add_free_gift--wrapper"),
      id = $el.attr("data-id"),
      pos = $wrap.attr("pos");
    if ($el.hasClass("loading")) {
      return;
    }
    $el.addClass("loading");
    var data = {
      id: id,
      quantity: 1,
      properties: { __free_gift_pos: "pos_" + pos },
    };
    multipleATC([data]);
  });

  // END:- Add free gift with thresold price

  /** START:- mobile nav drawer tab **/

  $(document).on("click", ".acc_tab_link", function (e) {
    var $el = $(this),
      target = $el.attr("data-target"),
      $wrap = $el.closest(".menu__navigation");
    $(".acc_tab_link").removeClass("active");
    $el.addClass("active");
    $(".acc_tab_content").hide();
    $wrap.find(target).show();
  });

  $(document).on("click", ".firstlevel_label", function () {
    var $_this = $(this);
    $_this.next("ul").slideToggle();
    $_this.toggleClass("active_menu");
    menu_height_adjust();
  });
  $(document).on("click", ".secondlevel_item", function () {
    var $_this = $(this);
    $_this.next("ul").slideToggle();
    $_this.toggleClass("active_menu");
    menu_height_adjust();
  });

  menu_height_adjust();

  /** END:- mobile nav drawer tab **/

  /** START:- slick slider for image with link block **/

  $(".trending-offer-wrap .active--slider").each(function () {
    var $slider = $(this),
      toshow_desk = $slider.attr("slidetoshow_desk"),
      toshow_mob = $slider.attr("slidetoshow_mob"),
      autoplay_speed = $slider.attr("autoplay_speed"),
      autoplay = $slider.attr("autoplay");
    $slider.slick({
      dots: true,
      infinite: true,
      autoplay: autoplay === 'true',
      autoplaySpeed: autoplay_speed,
      slidesToShow: toshow_desk,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: toshow_mob,
            infinite: true,
            dots: false,
          },
        }
      ],
    });
  });
  /** END:- slick slider for image with link block**/

  /** START:- tab with collection section**/

  $(".js_collectionslider").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(document).on("click", ".coll_tab-wrap .tab_titles", function () {
    var _this = $(this),
      target_clas = _this.attr("data-target");
    $(".coll_tab-wrap .tab_titles.active").removeClass("active");
    _this.addClass("active");
    $(".tab_content.js_collectionslider").slick("slickUnfilter");
    $(".tab_content.js_collectionslider").slick(
      "slickFilter",
      `.${target_clas}`
    );
setTimeout(function(){
      $(".tab_content.js_collectionslider").slick("slickGoTo", 0);
},100)


  });

  $(".coll_tab-wrap .tab_titles.active").each(function () {
    $(this).click();
  });

  /** END:- tab with collection section**/

  /** START:- cart drawer discounts **/
  $(document).on("click", ".avail--ofer-wrap", function () {
    $(".cart-discountcode-wrapper").show();
    $(".cart-drawer").addClass("discountCode-popup-wrap");
  });
  $(document).on("click", ".apply--offers-wrap", function () {
    $(".cart-discountcode-wrapper").hide();
    $(".cart-drawer").removeClass("discountCode-popup-wrap");
  });

  /** END:- cart drawer discounts**/

  /** START:- similar products **/

  $(document).on("click", ".similer_items", function (e) {
    e.preventDefault();
    $("#similer-product-main--wrapper").show();
    $("body").addClass("similar-prod-modal--open");
  });

  $("body").on("click", function (e) {
    $("#similer-product-main--wrapper").hide();
    $("body").removeClass("similar-prod-modal--open");
  });

  /** END:- similar products **/

  /** START:- copy text code **/
  $(document).on("click", ".copyText", function () {
    var $this = $(this),
      __closest = $this.closest(".discount-text"),
      $selector = __closest.find(".copy--text-value");
    $selector.addClass("copied-code");
    copyText($selector);
    setTimeout(function () {
      $selector.removeClass("copied-code");
    }, 2000);
  });

  $(document).on("click", ".discount--code-wrap", function () {
    var $this = $(this),
      $selector = $this.find(".one_disc_code");
    $selector.addClass("copied-code");
    copyText($selector);
    setTimeout(function () {
      $selector.removeClass("copied-code");
    }, 2000);
  });

  // copy discount code on product page
  $(document).on("click", ".discountcode", function () {
    var $selector = $(this);
    $selector.addClass("copied-code");
    copyText($selector);
    setTimeout(function () {
      $selector.removeClass("copied-code");
    }, 2000);
  });

  /** END:- copy text code **/

  //888888 add product
  $(document).on("click", "button.zero-product", function () {
    var _this = $(this);
    _this.prop("disabled", true);
    var pid = $(this).attr("data-id"),
      items = [];

    window.zeroProduct.variants.forEach((variant) => {
      var myObj = {
        id: variant.id,
        quantity: 1,
        properties: { __source: "Free gift Box" },
      };
      if (variant.available) {
        items.push(myObj);
      }
    });

    let formData = {
      items: items,
    };
    fetch(window.Shopify.routes.root + "cart/add.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        $.getJSON("/cart.js", function (cart) {
          $("span.header__counter").html(cart.item_count);
          setTimeout(function () {
            $("span.header__counter.custom_cart_count").html(cart.item_count);
          }, 4000);

          $(".popup-cart__head h5 span").html(cart.item_count);
          window.cartRefresh();
          // _this.prop('disabled', false);
          setTimeout(function () {
            $(".partypopper").css("display", "block");
          }, 1000);
          setTimeout(function () {
            $(".partypopper").css("display", "none");
            $("div.getZerotext").addClass("addedProduct");
            checkproduct();
            freproduct();
          }, 4000);
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        _this.prop("disabled", false);
      });
  });

  checkproduct();
  freproduct();

  // START:- sticky atc

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 1200) {
      $(".sticky--atc-wrapper").show();
      $(".sticky--atc-wrapper").addClass("sticky--visible");
    } else {
      $(".sticky--atc-wrapper").hide();
      $(".sticky--atc-wrapper").removeClass("sticky--visible");
    }
  });
  // END:-  sticky atc

// START:- back to top button
var btn = $('#topbutton');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
// END:- back to top button

 // START:-  product page desktop media slider
  $(document).on("click", ".slider-arrow--js", function () {
    var $el = $(this),
      $wrap = $el.closest("media-gallery"),
      $main = $wrap.find(".mainmedia"),
      $thumbs = $wrap.find(".thumbnail-slider"),
      $current = $thumbs.find('[aria-current="true"]'),
      $current_li = $current.closest(".thumbnail-list__item");
    // console.log($current, $current_li.length)
    if ($el.hasClass("next")) {
      var $next = $current_li.next(".thumbnail-list__item");
      // console.log($next, $next.length)
      if ($next.length) {
        $next.find(".thumbnail").click();
      }
    } else {
      var $prev = $current_li.prev(".thumbnail-list__item");
      // console.log($prev, $prev.length)
      if ($prev.length) {
        $prev.find(".thumbnail").click();
      }
    }
    arrowAdjust();
  });
  // END:-  product page desktop media slider

  
// START:- products according to collection on product page
$(".product-grid_collection-slider").slick({
  dots: false,
  infinite: true, 
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  autoplay: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2, // Changed from 2 to 1 for better mobile experience
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
});

  // END:- products according to collection on product page
  
}); //END:- ready

function multipleATC(data) {
  var items = [];
  console.log(data, "<<<data");
  data.forEach((d) => {
    var id = d.id,
      qty = d.quantity,
      props = d.properties;
    myObj = {
      id: id,
      quantity: qty,
      properties: props,
    };
    items.push(myObj);
  });

  let formData = {
    items: items,
  };

  fetch(window.Shopify.routes.root + "cart/add.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      window.cartRefresh();
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

window.onUpdateCart = () => {
  var rmv_itms_key = [];
  $(".popup-cart__buttons").addClass("disabled");
  $.getJSON("/cart.js", function (cart) {
    // console.log(cart, "<<<carttttttt");
    const itemIds = window.zeroProduct.variants.map((item) => item.id);
    const variantInCart = cart.items.filter((s_i) => itemIds.includes(s_i.id));
    const cartCount = cart.item_count;
    // console.log(cartCount, "<<<cartCount");
    if (window.fgs.enable) {
      var fg_pi = cart.items.filter(
          (item) => item.properties.__free_gift_pos != null
        ),
        fg_its = window.fgs.thresholds.filter(
          (fg) => cart.total_price < fg.price
        );
      fg_pi.forEach((item) => {
        fg_its.forEach((fgg) => {
          var ps = "pos_" + fgg.position;
          if (ps == item.properties.__free_gift_pos) {
            rmv_itms_key.push(item.key);
          }
        });
      });
      // console.log(fg_its, "<<<<fg_its>>>>", fg_pi, rmv_itms_key);
    }
    $(".custom_cart_count").attr("data-js-cart-count-mobile", cartCount);
    if (!variantInCart.length) {
      $(".popup-cart__buttons").removeClass("disabled");
      // return;
    }
    if (cart.total_price < window.zeroProduct.threshold_price) {
      variantInCart.forEach((i) => {
        rmv_itms_key.push(i.key);
      });
    } else {
      $(".popup-cart__buttons").removeClass("disabled");
    }
    if (rmv_itms_key.length) {
      removeItems(rmv_itms_key);
    }
    freproduct();
  });
};

const removeItems = (variantIDS) => {
  if (variantIDS.length) {
    let formData = {
      updates: {},
    };
    var variantID;
    variantIDS.forEach((id) => {
      formData["updates"][id] = 0;
    });
    let info = fetch("/cart/update.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // window.location.href = '/cart';
        theme.Cart.updateCart();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
};

window.cartRefresh = () => {
  fetch(`${routes.cart_url}?section_id=cart-drawer`)
    .then((response) => response.text())
    .then((responseText) => {
      const html = new DOMParser().parseFromString(responseText, "text/html");
      var item_count = html
        .querySelector("#CartDrawer")
        .getAttribute("item-count");
      const selectors = [
        "cart-drawer-items",
        ".cart-drawer__footer",
        ".free_gift__main_wrap",
        ".discount-msgg",
      ];
      for (const selector of selectors) {
        const targetElement = document.querySelector(selector);
        const sourceElement = html.querySelector(selector);
        if (targetElement && sourceElement) {
          targetElement.replaceWith(sourceElement);
        }
      }
      document.querySelectorAll(".cart-count-bubble").forEach((ccb) => {
        ccb.querySelector("span").innerHTML = item_count;
        if (item_count > 0) {
          ccb.classList.remove("hidden");
        } else {
          ccb.classList.add("hidden");
        }
      });
      freproduct();
    })
    .catch((e) => {
      console.error(e);
    });
};

// mobile menu tab height ajust
function menu_height_adjust() {
  setTimeout(function () {
    var window_height = $(window).height(),
      bh = $(".menu-drawer .linklist--image.bottom").height(),
      th = $(".menu-drawer .linklist--image").height(),
      tabh = $(".menu-drawer .tab").height();
    // alert(window_height+"<<>>"+bh+"<<>>"+th+"<<>>"+tabh)
    $(".menu-drawer .tab_content-wrap").height(
      +window_height - bh - th - tabh - 15
    );
     // $(".menu-drawer .tab_content-wrap").attr('style','min-height:setheight;');
  }, 100);
}

/** START:- copy text code **/

function copyText($selector) {
  // get the container
  const element = $selector.get(0);
  // Create a fake `textarea` and set the contents to the text
  // you want to copy
  const storage = document.createElement("textarea");
  storage.value = element.innerHTML;
  element.appendChild(storage);

  // Copy the text in the fake `textarea` and remove the `textarea`
  storage.select();
  storage.setSelectionRange(0, 99999);
  document.execCommand("copy");
  element.removeChild(storage);
}

/** END:- copy text code **/

function checkproduct() {
  var proId = $("button.zero-product").attr("data-id");
  var checkzero = false;
  $.getJSON("/cart.js", function (cart) {
    const cartItemIds = cart.items.map((item) => item.id);
    const variantInCart = window.zeroProduct.variants.filter((s_i) =>
      cartItemIds.includes(s_i.id)
    );
    // console.log('isProductVariantInCart>> ', variantInCart)
    if (variantInCart.length) {
      $("div.getZerotext").addClass("addedProduct");
      $("button.zero-product").prop("disabled", false);
    }
  });
}

function freproduct() {
  // $.getJSON("/cart.js", function (cart) {
  //   let prices = [];
  //   for (let item of cart.items) {
  //     for (let i = 0; i < item.quantity; i++) {
  //       prices.push(item.price);
  //     }
  //   }

  //   prices.sort(function (a, b) {
  //     return a - b;
  //   });

  //   if (cart.item_count == 2 || cart.item_count == 3) {
  //     let minval = Shopify.formatMoney(prices[0]).replace("$", "");

  //     $("#discount-text p").html(
  //       "Congratulations! Products worth Rs. " + minval + " is now <b>FREE</b>"
  //     );
  //   } else if (cart.item_count == 4 || cart.item_count == 5) {
  //     let minval = Shopify.formatMoney(prices[0] + prices[1]).replace("$", "");

  //     $("#discount-text p").html(
  //       "Congratulations! Products worth Rs. " + minval + " is now <b>FREE</b>"
  //     );
  //   } else if (cart.item_count == 6 || cart.item_count == 7) {
  //     let minval = Shopify.formatMoney(
  //       prices[0] + prices[1] + prices[2]
  //     ).replace("$", "");

  //     $("#discount-text p").html(
  //       "Congratulations! Products worth Rs. " + minval + " is now <b>FREE</b>"
  //     );
  //   } else if (
  //     cart.item_count == 8 ||
  //     cart.item_count == 9 ||
  //     cart.item_count > 9
  //   ) {
  //     let minval = Shopify.formatMoney(
  //       prices[0] + prices[1] + prices[2] + prices[3]
  //     ).replace("$", "");

  //     $("#discount-text p").html(
  //       "Congratulations! Products worth Rs. " + minval + " is now <b>FREE</b>"
  //     );
  //   } else {
  //     $("#discount-text p").html(
  //       "Add min 2 units in the cart to get 1 of them FREE"
  //     );
  //   }

  //   /****** zero ******/

  //   setTimeout(function () {
  //     let subTotal = cart.items_subtotal_price;
  //     const newNum = subTotal.toString().slice(0, -2);

  //     let zeroprice = Number($("div.getZerotext p span").text());

  //     $("div.getZerotext p code").text(zeroprice - Number(newNum));

  //     if (Number(newNum) > zeroprice) {
  //       $("div.getZerotext p").css("display", "none");
  //       $("button.zero-product").css("display", "block");
  //     } else {
  //       $("div.getZerotext p").css("display", "block");
  //       $("button.zero-product").css("display", "none");
  //     }
  //   }, 1000);
  //   /***** zero ****/
  // });
}


$(document).on('change', '.sticky--atc-button [type="radio"]', function() {
  var $el = $(this),
    val = $el.val();
  $(`variant-radios [value="${val}"]`).click();
});

setInterval(function () {
  var org_disbld = $(`.product [name="add"]`).prop('disabled');
  $('.sticky--atc-button [type="submit"]').prop('disabled', org_disbld)
  if(org_disbld){
    $('.sticky--atc-button [type="submit"] span').html('Sold out')
  } else {
    $('.sticky--atc-button [type="submit"] span').html('Add to cart')
  }
})

function arrowAdjust(media_selector = "media-gallery") {
  $(media_selector).each(function () {
    var $wrap = $(this),
      $main = $wrap.find(".mainmedia"),
      $thumbs = $wrap.find(".thumbnail-slider"),
      $current = $thumbs.find('[aria-current="true"]'),
      $current_li = $current.closest(".thumbnail-list__item");
    if ($current_li.next().length) {
      $wrap.find(".slider-arrow--js.next").prop("disabled", false);
    } else {
      $wrap.find(".slider-arrow--js.next").prop("disabled", true);
    }
    if ($current_li.prev().length) {
      $wrap.find(".slider-arrow--js.prev").prop("disabled", false);
    } else {
      $wrap.find(".slider-arrow--js.prev").prop("disabled", true);
    }
  });
}
const itemsNav = document.querySelectorAll('.nav__item');

for (let i = 0; i < itemsNav.length; i++) {
  let innerItems = itemsNav[i].querySelectorAll('.dropdown-list__item');

  for (let i = 0; i < innerItems.length; i++) {
    console.log(innerItems[i])
    if (i > 7) {
      console.log('ссылок больше 8');
      innerItems[i].closest('.dropdown-list').classList.add('dropdown-list--two-column')
      break;
    }
  }
}

(function () {
  let btnBurger = document.querySelector(".burger"),
    btnClose = document.querySelector("[data-hide-mob-menu]"),
    mobileMenu = document.querySelector("[data-mobile-menu]");

  btnBurger.addEventListener("click", openMobileMenu);
  btnClose.addEventListener("click", openMobileMenu);

  function openMobileMenu() {
    if (mobileMenu.classList.contains("mob-menu--open")) {
      mobileMenu.classList.remove("mob-menu--open");
      document.querySelector("html").classList.remove("hiden");
    } else {
      mobileMenu.classList.add("mob-menu--open");
      document.querySelector("html").classList.add("hiden");
    }
  }
})();


// акордионы

class Accordion {
  constructor(selector) {
    this.selector = selector;
  }

  createAccordion(selector) {
    const accordionList = document.querySelectorAll(this.selector);
    for (let element of accordionList) {
      element.addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else if (panel.closest(".open-accordion")) {
          // console.log(this);
          let parentAccordion = this.closest("[data-accordion-content]");
          parentAccordion.style.maxHeight = parentAccordion.scrollHeight + panel.scrollHeight + "px";
          panel.style.maxHeight = panel.scrollHeight + "px";
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
        let parentElem = this.parentNode;
        if (this.classList.contains("active")) {
          parentElem.classList.add("open-accordion");
        } else {
          parentElem.classList.remove("open-accordion");
        }
      });
    }
  }
}

const accMobMenu = new Accordion(".menu-nav__up");
const accFooter = new Accordion(".page-footer__row-up");
const accSidebar = new Accordion(".link-menu__up");
const togglelist = new Accordion(".togglelist__head");

accMobMenu.createAccordion();
accFooter.createAccordion();
accSidebar.createAccordion();
togglelist.createAccordion();

// акордионы  - конец

// Хлебные крошки

let breadСrumbs = document.querySelector(".breadcrumbs__list");

setTimeout(function () {
  if (breadСrumbs) {
    breadСrumbs.scrollLeft = breadСrumbs.offsetWidth;
  }
}, 100);

if (document.querySelector('.breadcrumbs')) {
  (function () {

    const cropElement = document.querySelectorAll('.breadcrumbs__link'), // выбор элементов 
      size = 100 // кол-во символов 
    endCharacter = '...'; // окончание 

    cropElement.forEach(el => {
      let text = el.innerHTML;

      if (el.innerHTML.length > size) {
        text = text.substr(0, size);
        el.innerHTML = text + endCharacter;
      }
    });

  }());
}

// Хлебные крошки -- конец

// Табы

function tabs() {
  window.addEventListener("click", function (event) {

    if (event.target.dataset.nametabs) {
      event.preventDefault();
      const tabName = event.target.dataset.nametabs;
      const tabActive = document.querySelectorAll(".active-item-tab");
      const tabWrapper = event.target.closest(".tab-wrapper");
      const tabBlock = tabWrapper.querySelectorAll(".tab-block");

      tabActive.forEach(function (item) {
        if (item.classList.contains("active-item-tab")) {
          item.classList.remove("active-item-tab");
        };
      });

      tabBlock.forEach(function (item) {
        item.classList.remove("tab-block--active");
        if (item.dataset.tabcontent == tabName) {
          item.classList.add("tab-block--active");
        };
      });

      event.target.classList.add("active-item-tab");
    };

  });
};


function openList() {
  window.addEventListener("click", function (event) {

    if (event.target.dataset.namebtn) {
      const listName = event.target.dataset.namebtn;
      const btnOpen = document.querySelectorAll(".open-btn");
      const listGroup = document.querySelectorAll(".list-accordeon");

      if (event.target.classList.contains('open-btn')) {
        event.target.classList.remove("open-btn");

        listGroup.forEach(function (item) {
          item.classList.remove("animate-hate--open");
          item.style.maxHeight = null;
        });
      } else {
        btnOpen.forEach(function (item) {
          if (item.classList.contains("open-btn")) {
            item.classList.remove("open-btn");
          };
        });
        event.target.classList.add("open-btn");

        listGroup.forEach(function (item) {
          item.classList.remove("animate-hate--open");
          item.style.maxHeight = null;
          if (item.dataset.namelist == listName) {
            item.classList.add("animate-hate--open");
            item.style.maxHeight = item.scrollHeight + "px";
          };
        });
      };

      event.preventDefault();
    };

  });
};

// Табы - конец

// Модалки

(function () {
  window.addEventListener("click", function (event) {

    if (event.target.dataset.clickModal) {
      event.preventDefault();

      const btnName = event.target.dataset.clickModal;

      document.querySelector("#" + btnName).classList.add("modal--open");
      document.querySelector("html").classList.add("hiden");
    };

    if (event.target.classList.contains("modal__overlay")) {
      event.target.closest(".modal").classList.remove("modal--open");
      document.querySelector("html").classList.remove("hiden");
    } else if (event.target.classList.contains("close")) {
      event.target.closest(".modal").classList.remove("modal--open");
      document.querySelector("html").classList.remove("hiden");
      if (document.querySelector(".event-text")) {
        document.querySelector(".event-text").innerHTML = "";
        document.querySelector(".event-text").classList.remove("event-text--change");
      }
    };
  });
})();

(function () {
  window.addEventListener("click", function (event) {

    if (event.target.dataset.clickSearch) {
      event.preventDefault();

      const btnName = event.target.dataset.clickSearch;

      document.querySelector("#" + btnName).classList.add("search-modal--open");
      document.querySelector("html").classList.add("hiden");
    };

    if (event.target.classList.contains("search-modal__overlay")) {
      event.target.closest(".search-modal").classList.remove("search-modal--open");
      document.querySelector("html").classList.remove("hiden");
    } else if (event.target.classList.contains("close-search")) {
      event.target.closest(".search-modal").classList.remove("search-modal--open");
      document.querySelector("html").classList.remove("hiden");
    };
  });
})();

// Модалки - конец

// Очистка календаря

function clearCalendar(itemCalendar) {
  window.addEventListener("click", function (event) {

    if (event.target.classList.contains("btn-cancel")) {
      itemCalendar.clear();

      event.target.style.display = "none";
    };
  });
};

// Очистка календаря - конец


// Модальное окно с официальными сайтами

const arrNameSites = [];

(function () {

  const arrFiltrSites = document.querySelectorAll(".sites-modal__item input");

  arrFiltrSites.forEach(function (item) {
    item.addEventListener("change", function (event) {
      const idItem = item.closest(".sites-modal__item").dataset.sites;
      const bloksSites = document.querySelectorAll(".sites-block");

      function showBlocksSites() {
        bloksSites.forEach(function (i) {
          i.style.display = "none";
        });

        arrNameSites.forEach(function (nameSites) {
          document.querySelector("#" + nameSites).style.display = "block";
        })
      }

      if (event.target.checked) {
        arrNameSites.push(idItem);
        showBlocksSites();
      } else if (!event.target.checked) {
        const indexItem = arrNameSites.indexOf(idItem);
        arrNameSites.splice(indexItem, 1);
        showBlocksSites();
      };

      if (arrNameSites.length === 0) {
        bloksSites.forEach(function (i) {
          i.style.display = "block";
        });
      }
    });
  });

})();

if (document.querySelector(".sites-modal")) {
  let ScrollbarModal = window.Scrollbar;

  if (document.documentElement.clientWidth >= 768) {
    ScrollbarModal.init(document.querySelector('.sites-modal__left'));
    ScrollbarModal.init(document.querySelector('.sites-modal__right'));
  }
}

// Модальное окно с официальными сайтами - конец

// Фиксированная шапка

window.onscroll = function () {
  myFunction();
};

let header = document.getElementById("myHeader");
let sticky = header.offsetTop;
const parentHeaderInner = header.parentNode;

function myFunction() {
  if (window.pageYOffset > sticky) {
    const heightHeader = parentHeaderInner.offsetHeight;
    parentHeaderInner.style.minHeight = heightHeader + 'px';
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
    parentHeaderInner.style.minHeight = '';
  }
}

// Фиксированная шапка - конец



const accModalUp = new Accordion(".modal-accordion-up");

accModalUp.createAccordion();


// Вырезаем таблицу из контента и вставляем в div со скролом

(function() {
  if (document.querySelector('.text-page__area') && document.querySelector('.text-page__area').querySelector('table')) {
    const tableChange = document.querySelector('table');
    document.querySelector('table').insertAdjacentHTML('afterend', `<div class="table-page__wrap-table" id="table-scroll-one" data-scroll-wrap><div class="table-page__scroll-wrap"><table>${tableChange.innerHTML}</table></div></div>`);
    tableChange.remove();

    let Scrollbar = window.Scrollbar;

		Scrollbar.init(document.querySelector('[data-scroll-wrap]'));
  }
})();

// Вырезаем таблицу из контента и вставляем в div со скролом -- конец

/////////////////////////////////////////////////////////////



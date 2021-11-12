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

/////////////////////////////////////////////////////////////

const filterForm = document.querySelector('.filter-documentation__form');
const listDocument = document.querySelector('.documentation-sect__wrapper');
const paginationList = document.querySelector('.pagination__list');
const arrLinnks = paginationList.querySelectorAll('li .pagination__link');
let count;
let interval;
let arrField = [];
let leftBorder;
let rightBorder;


const changeDocument = {
  prevNomer: 0,
  nomer: 1,
  show: 8,
  count: 20,
  items: ['1', '2', '3', '4', '5', '6', '7', '20'],
  go: function (nomer) {
    this.prevNomer = this.nomer;
    this.nomer = nomer;
    this.render();
  },
  render: function () {
    //console.clear();

    var nomer = this.nomer;
    var show = this.show;
    var count = this.count;

    leftBorder = 2;
    rightBorder = count - 1;
    var showLeftDots = false;
    var showRightDots = false;


    if (show < count) {

      var devide = Math.floor((show - 2) / 2);

      var leftBorder = nomer - devide;
      var rightBorder = nomer + devide - 1;

      if (leftBorder < 2) {
        showRightDots = true;
        leftBorder = 2;
        rightBorder = leftBorder + (show - 2) - 1;
      } else if (rightBorder > count - 1) {
        showLeftDots = true;
        rightBorder = count - 1;
        leftBorder = rightBorder - (show - 2) + 1;
      } else {
        showLeftDots = true;

        showRightDots = true;
      }
    };

    console.log(this);
    console.log('leftBorder ' + leftBorder, showLeftDots);
    console.log('rightBorder ' + rightBorder, showRightDots);
    this.items = [];

    var length = show;
    if (length > count) {
      length = count;
    }

    for (i = 1; i <= length; i++) {

      if (i == 1) {
        this.items.push(i);
      } else if (i == length) {
        this.items.push(count);
      } else {
        if (showLeftDots && showRightDots) {
          // this.items.push(leftBorder++);
        } else {
          // this.items.push(leftBorder++);
        }
        this.items.push(leftBorder++);
      };
    };



    // if ((rightBorder - leftBorder) < 4) {
    //   if (showLeftDots && showRightDots) {
    //     if (rightBorder + 1 == count) {
    //       showRightDots = false;
    //     } else {
    //       for (i = 2, l = this.items.length - 2; i <= l; i++) {
    //         this.items[i]++;
    //       }
    //     }
    //   }
    // }


    if (showLeftDots) {
      this.items[1] = '...';
    };

    if (showRightDots) {
      this.items[(this.items.length - 2)] = '...';
    };
    console.log(this.items);
  },

  refreshPagination: function (arr) {
    arrLinnks.forEach(function (item) {
      item.textContent = '';
      item.classList.remove('pagination__link--active');
    });

    for (let i = 0; i < arrLinnks.length; i++) {
      arrLinnks[i].textContent = arr[i];
      arrLinnks[i].classList.remove('pagination__link--dotted');
      if (arrLinnks[i].textContent === '') {
        arrLinnks[i].closest('.pagination__item').classList.add('pagination__item--hide');
      } else if (arrLinnks[i].textContent === '...') {
        arrLinnks[i].classList.add('pagination__link--dotted');
      }
    }
  },
  createListDocuments: function (arr) {
    console.log(arr);

    arr.documents.forEach(function (item) {
      function addCategory(nameCategory) {
        let result = '';
        nameCategory.forEach(function (i) {
          result += `<a href='#' class='topic-item topic-item--change topic-item--change-collor'><div class='topic-item__wrapper'><span class='topic-item__text'>${i}</span></div></a>`;
        });
        return result;
      };

      listDocument.insertAdjacentHTML('beforeend', `<div class='documentation-sect__row'><div class='news-post'><div class='news-post__wrapper'><div class='news-post__row'><span class='info-text date'>${item.date}</span>${addCategory(item.category)}</div><a href='#' class='news-post__wrap-text'><h3>${item.nameDocument}</h3></a></div></div></div>`);
    });
  },
  cicleField: function () {
    arrField = [];
    filterForm.querySelectorAll('input').forEach(function (i) {
      let fieldSuccessful = {
        nameInput: '',
        value: '',
      };
      fieldSuccessful.nameInput = i.getAttribute('name');
      fieldSuccessful.value = i.value;
      arrField.push(fieldSuccessful);
    });
  },
  timer: function (arrFilter) {
    clearInterval(interval);
    count = 12;
    interval = setInterval(() => {
      count--;
      console.log('count: ', count--);
      if (count <= 0) {
        clearInterval(interval);
        // Здесь скрипт очиски списка документов и получение данных

        listDocument.querySelectorAll('*').forEach(function (i) {
          i.remove();
        });

        axios({
          method: 'post',
          url: '',
          data: {
            arrFilter
          }
        }).then(function (response) {
          console.log(response);
        }).catch(function (error) {
          console.log(error);
        });

        fetch('js/documentList.json').then(response => response.json()).then(data => {
          this.createListDocuments(data);
          this.count = data.pagination;


          // генерация пагинации
          if (document.documentElement.clientWidth < 768) {
            console.log('меньше 768')
            this.show = 5;
            this.nomer = 1;
            this.render();
            this.refreshPagination(this.items);
          } else if (document.documentElement.clientWidth < 1300 && document.documentElement.clientWidth > 767) {
            console.log('меньше 1300')
            this.show = 6;
            this.nomer = 1;
            this.render();
            this.refreshPagination(this.items);
          } else {
            console.log(this.count);
            this.nomer = 1;
            this.render();
            this.refreshPagination(this.items);
          }
          arrLinnks[0].classList.add('pagination__link--active');
          // генерация пагинации --- конец
        });

        // Здесь скрипт очиски списка документов и получение данных -- end
      }
    }, 200);
  },
  clickFunction: function (elem, target) {
    // let index = [...elem.querySelectorAll('.pagination__link')].findIndex(el => el == event.target);
    paginationList.querySelectorAll('.pagination__link').forEach(function (i) {
      i.classList.remove('pagination__link--active');
    });

    if (target.classList.contains('pagination__link--dotted') || target.classList.contains('pagination__link--active')) {} else {
      // console.log('fire')
      this.go(Number(target.textContent));
      this.refreshPagination(this.items);
      // console.log(this.nomer);
    };
  },
};


(function () {
  filterForm.addEventListener('input', function (event) {

    changeDocument.cicleField();
    //console.log(arrField);
    changeDocument.timer(arrField);
  });

  filterForm.addEventListener('change', function (event) {
    if (event.target.classList.contains('select')) {
      console.log('селект изменился');
      changeDocument.cicleField();
      filterForm.querySelectorAll('select').forEach(function (i) {
        let fieldSuccessful = {
          nameInput: '',
          value: '',
        };
        fieldSuccessful.nameInput = i.getAttribute('name');
        fieldSuccessful.value = i.value;
        arrField.push(fieldSuccessful);
      });
      //console.log(arrField);
      changeDocument.timer(arrField);
    }
  });

  // function activeLinkPage(parent, target) {
  //   parent.querySelectorAll('.pagination__link').forEach(function (i) {
  //     i.classList.remove('pagination__link--active');
  //   });
  //   console.log(parent);

  //   target.classList.add('pagination__link--active');
  // };

  paginationList.addEventListener('click', function (event) {
    event.preventDefault();
    // let index = [...this.querySelectorAll('.pagination__link')].findIndex(el => el == event.target);
    // activeLinkPage(this, event.target);
    if (document.documentElement.clientWidth < 768) {
      console.log('меньше 767')
      changeDocument.show = 5;
    } else if (document.documentElement.clientWidth < 1300 && document.documentElement.clientWidth > 767) {
      console.log('меньше 1300')
      changeDocument.show = 6;
    } else {
      console.log(changeDocument.nomer)
    };

    changeDocument.clickFunction(this, event.target);

    arrLinnks.forEach(function (i) {
      if (i.textContent === String(changeDocument.nomer)) {
        console.log(i)
        i.classList.add('pagination__link--active');
      }
    });

    // if (event.target)

  });

})();

// генерация пагинации
if (document.documentElement.clientWidth < 768) {
  console.log('меньше 768')
  changeDocument.show = 5;
  changeDocument.nomer = 1;
  changeDocument.render();
  changeDocument.refreshPagination(changeDocument.items);
} else if (document.documentElement.clientWidth < 1300 && document.documentElement.clientWidth > 767) {
  console.log('меньше 1300')
  changeDocument.show = 6;
  changeDocument.nomer = 1;
  changeDocument.render();
  changeDocument.refreshPagination(changeDocument.items);
} else {
  console.log(changeDocument.count);
  changeDocument.nomer = 1;
  changeDocument.render();
  changeDocument.refreshPagination(changeDocument.items);
}
arrLinnks[0].classList.add('pagination__link--active');
// генерация пагинации --- конец
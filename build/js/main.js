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

accMobMenu.createAccordion();
accFooter.createAccordion();
accSidebar.createAccordion();

// акордионы  - конец

let breadСrumbs = document.getElementsByClassName("breadcrumbs__list")[0];

if (breadСrumbs) {
  breadСrumbs.scrollLeft = breadСrumbs.offsetWidth + 25;
}

// Табы

function tabs() {
  window.addEventListener("click", function (event) {

    if (event.target.dataset.nametabs) {
      event.preventDefault();
      console.log("fire")
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
    };
  });
})();

// Модалки - конец

// Очистка календаря

function clearCalendar(itemCalendar) {
  window.addEventListener("click", function (event) {

    if (event.target.classList.contains("btn-cancel")) {
      console.log(itemCalendar);
      itemCalendar.clear();

      event.target.style.display = "none";
    };
  });
};

// Очистка календаря - конец


// Поиск темы

function changeTopic() {
  const parentLi = document.querySelector("#items");
  const filter = document.querySelector("#filter");

  filter.addEventListener("keyup", filterItems);

  function filterItems(event) {
    const searchedText = event.target.value.toLowerCase();
    const items = parentLi.querySelectorAll("li");


    items.forEach(function (item) {
      // Получаем текст задачи из списка и переводим в нижний регистр
      const itemText = item.querySelector(".check-row__text").textContent.toLowerCase();

      // Проверяем вхождение искомой подстроки в текст задачи
      if (itemText.indexOf(searchedText) != -1) {
        // Если вхождение есть - показываем элемент с задачей
        item.style.display = "block";
        item.classList.add("show-item");
      } else {
        // Если вхождения нет - скрываем элемент с задачей
        item.style.display = "none";
        item.classList.remove("show-item");
      };
    });

    const classTest = parentLi.querySelectorAll(".show-item");
    const addLi = '<span class="mesage-find">Не найдено!</span>';
    const classAddLi = document.querySelector(".topic-block").querySelectorAll(".mesage-find");

    if (classTest.length == 0 && classAddLi.length < 1) {
      document.querySelector(".topic-block__scroll").insertAdjacentHTML('afterend', addLi);
    } else if (classTest.length > 0) {
      document.querySelector(".topic-block").querySelector(".mesage-find").remove();
    };
  };
};

function addTopic() {
  const parenTopicHtml = document.querySelector(".wrapper-topic");
  const inputCheck = document.querySelectorAll(".check-row input");
  let arrChecked = [];

  inputCheck.forEach(function (item) {
    item.addEventListener("change", function (event) {
      const textItem = item.closest(".check-row").querySelector(".check-row__text").textContent.replace(/\s*\(.+?\)$/gm, '');
      let itemObj = {
        id: item.closest(".topic-block__item").getAttribute('id'),
        text: textItem
      };

      function checkArrChecked(i) {
        return i.id === itemObj.id;
      };

      if (item.checked) {
        if (arrChecked.find(checkArrChecked)) {
        } else {
          arrChecked.push(itemObj);
        }
      } else {
        if (arrChecked.find(checkArrChecked)) {
          const indexItem = arrChecked.indexOf(arrChecked.find(checkArrChecked));
          arrChecked.splice(indexItem, 1);
        };
      };
      console.log(arrChecked);

      

      arrChecked.forEach(function(arrItem) {
        console.log(arrItem.id, arrItem.text);
        parenTopicHtml.innerHTML = "";
        parenTopicHtml.insertAdjacentHTML('beforeend', `<div class="topic-item" id="${arrItem.id}"><div class="topic-item__wrapper"><span class="topic-item__text">${arrItem.text}</span><span class="topic-item__close"></span></div></div>`);
      });
    });
  });
};

// Поиск темы - конец
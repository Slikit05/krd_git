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

accMobMenu.createAccordion();
accFooter.createAccordion();
accSidebar.createAccordion();

// акордионы  - конец

let breadСrumbs = document.querySelector(".breadcrumbs__list");

setTimeout(function () {
  if (breadСrumbs) {
    // console.log(breadСrumbs.offsetWidth + 25);
    // const scrollWidthLeft =  + 1000000;
    breadСrumbs.scrollLeft = breadСrumbs.offsetWidth;
  }
}, 100);

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
      console.log(itemCalendar);
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
      } else if(!event.target.checked) {
        const indexItem = arrNameSites.indexOf(idItem);
        arrNameSites.splice(indexItem, 1);
        showBlocksSites();
      };

      if (arrNameSites.length === 0) {
        bloksSites.forEach(function(i) {
          i.style.display = "block";
        });
      }      
    });
  });

})();

if (document.querySelector(".sites-modal")) {
  let ScrollbarModal = window.Scrollbar;

  ScrollbarModal.init(document.querySelector('.sites-modal__left'));
  ScrollbarModal.init(document.querySelector('.sites-modal__right'));
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



// days.forEach(function(itemDay) {
//   if(itemDay.classList.contains("event-day")) {
//     console.log("Есть текст")
//   }
// });

// (function() {
//   window.addEventListener("click", function (event) {
//     if (event.target.classList.contains("event-day")) {
//       //console.log(event.target.querySelector(".event-text-hiden").textcontent)
//       console.log("fire")
//     };
//   });
// })();

// onChange: function(selectedDates, dateStr, instance) {
//   const days = instance.days.children;
  
  //console.log(days)
  //funcDays(days);	
  
// },
// onReady: function() {
//   console.log("fire")
// }


// (function() {
//   const days = calendarDateTwo.days.children;
//   //console.log(days);
//   window.addEventListener("click", function(event) {
//     setTimeout(function(){
//       if (event.target.classList.contains("flatpickr-day")) {
//         console.log("fire");
//       }
//     }, 500)
//   });
// })();


// for (let day of days) {
//   funcDays(day);
//   setTimeout(function() {
//     if (day.classList.contains("event-day")){
//       console.log("нашел")
//     }
//   }, 500)
// }




//-----------------------------------

// new Vue({
//   el: '#scrollPage',
//   data: {
//     value: 'Vue Template',
//     persons: []
//   },
//   methods: {
//     appendUser () {
//       axios.get(`https://randomuser.me/api/`)
//         .then(response => { this.persons.push(response.data.results[0]); });
//     },
//     getInitialUsers () {
//       for (var i = 0; i < 10; i++) {
//         // Grabbing six users at once since the API only returns one at a time.
//         this.appendUser()
//       }
//     },
//     scroll (person) {
//       window.onscroll = () => {
//         const scrollPage = document.querySelector("#scrollPage");
//         //console.log(document.documentElement.scrollTop + scrollPage.innerHeight)
//         //let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === scrollPage.scrollHeight;
//         let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight;
//         let bottomOfPage = scrollPage.scrollHeight;
//         //console.log('If bottom', bottomOfWindow);
//         console.log(bottomOfWindow);
//         if (bottomOfWindow) {
//         // Append an additional row of users
//           for(var i = 0; i < 5; i++){
//             this.appendUser()
//           }
//         }
//       };
//     },
//   },
//   beforeMount() {
//     this.getInitialUsers();
//   },
//   mounted() {
//     this.scroll(this.person);
//   }
// });




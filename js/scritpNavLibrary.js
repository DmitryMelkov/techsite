// const tabsBtnLibr = document.getElementsByClassName('content__libr-link');
// const tabsItemsLibr = document.querySelectorAll('.library-nav__intro');

// if (tabsBtnLibr) {
//   for (let i = 0; i < tabsBtnLibr.length; i++) {
//     let itemLibr = tabsBtnLibr[i];
//     itemLibr.addEventListener('click', function () {
//       let currentBtnLibr = itemLibr;
//       let tabIdLibr = currentBtn.getAttribute('data-tab');
//       let currentTabLibr = document.querySelector(tabIdLibr);

//       if (!currentBtnLibr.classList.contains('active')) {
//         for (let i = 0; i < tabsBtnLibr.length; i++) {
//           let itemLibr = tabsBtnLibr[i];
//           itemLibr.classList.remove('active');
//         }
//         for (let i = 0; i < tabsItemsLibr.length; i++) {
//           let itemLibr = tabsItemsLibr[i];
//           itemLibr.classList.remove('active');
//         }
//         currentBtnLibr.classList.add('active');
//         currentTabLibr.classList.add('active');
//       }
//     });
//   }
// }

const tabsBtn = document.getElementsByClassName('content__libr-link');
const tabsItems = document.querySelectorAll('.library-nav__intro');

if (tabsBtn) {
  for (let i = 0; i < tabsBtn.length; i++) {
    let item = tabsBtn[i];
    item.addEventListener('click', function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains('active')) {
        for (let i = 0; i < tabsBtn.length; i++) {
          let item = tabsBtn[i];
          item.classList.remove('active');
        }
        for (let i = 0; i < tabsItems.length; i++) {
          let item = tabsItems[i];
          item.classList.remove('active');
        }
        currentBtn.classList.add('active');
        currentTab.classList.add('active');
      }
    });
  }
}
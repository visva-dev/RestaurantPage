import './style.scss';
import home from './modules/home';
import contact from './modules/contact';
import menu from './modules/menu';

home();
menu();
contact();

const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItems = document.querySelectorAll('.tabs__item');

function onTabClick(item) {
  item.addEventListener('click', () => {
    const currentBtn = item;
    const tabId = currentBtn.getAttribute('data-tab');
    const currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('active')) {
      tabsBtn.forEach((item) => {
        item.classList.remove('active');
      });

      tabsItems.forEach((item) => {
        item.classList.remove('active');
      });

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }
  });
}
tabsBtn.forEach(onTabClick);
document.querySelector('.tabs__nav-btn').click();

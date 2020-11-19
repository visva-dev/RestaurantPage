function menu() {
  const tabsNav = document.querySelector('.tabs__nav');
  const tabsContent = document.querySelector('.tabs__content');
  const tabsNavbtn2 = document.createElement('button');
  const tabsItem2 = document.createElement('div');
  const tabsItem2p = document.createElement('p');
  const menu = document.createElement('div');
  const box1 = document.createElement('div');
  const box2 = document.createElement('div');
  const box3 = document.createElement('div');
  const box4 = document.createElement('div');
  const box5 = document.createElement('div');
  const box6 = document.createElement('div');

  tabsNavbtn2.setAttribute('class', 'tabs__nav-btn');
  tabsNavbtn2.setAttribute('type', 'button');
  tabsNavbtn2.setAttribute('data-tab', '#tab_2');
  tabsNavbtn2.textContent = 'Menu';
  tabsItem2.setAttribute('class', 'tabs__item');
  tabsItem2.setAttribute('id', 'tab_2');
  tabsItem2p.textContent = "It eadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
  menu.setAttribute('class', 'menu');
  box1.setAttribute('class', 'box box1');
  box2.setAttribute('class', 'box box2');
  box3.setAttribute('class', 'box box3');
  box4.setAttribute('class', 'box box4');
  box5.setAttribute('class', 'box box5');
  box6.setAttribute('class', 'box box6');
  box1.textContent = 'We sell Bread 🍞';
  box2.textContent = 'We sell Pizza 🍕';
  box3.textContent = 'We sell French Fries 🍟';
  box4.textContent = 'We sell bacon 🥓';
  box5.textContent = 'We sell Hot Dogs 🌭';
  box6.textContent = 'We sell Pancakes 🥞';

  tabsNav.appendChild(tabsNavbtn2);
  tabsContent.appendChild(tabsItem2);
  tabsItem2.appendChild(tabsItem2p);
  tabsItem2.appendChild(menu);
  menu.appendChild(box1);
  menu.appendChild(box2);
  menu.appendChild(box3);
  menu.appendChild(box4);
  menu.appendChild(box5);
  menu.appendChild(box6);
}
export default menu;

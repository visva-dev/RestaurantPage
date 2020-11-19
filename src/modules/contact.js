function contact() {
  const tabsNav = document.querySelector('.tabs__nav');
  const tabsContent = document.querySelector('.tabs__content');
  const tabsNavbtn3 = document.createElement('button');
  const tabsItem3 = document.createElement('div');
  const tabsItem3p = document.createElement('p');
  const contact = document.createElement('div');
  const box7 = document.createElement('div');
  const box8 = document.createElement('div');

  tabsNavbtn3.setAttribute('class', 'tabs__nav-btn');
  tabsNavbtn3.setAttribute('type', 'button');
  tabsNavbtn3.setAttribute('data-tab', '#tab_3');
  contact.setAttribute('class', 'contact');
  box7.setAttribute('class', 'box box1');
  box8.setAttribute('class', 'box box2');
  tabsNavbtn3.textContent = 'Contact';
  box7.textContent = 'More my works at: Good-Developer.com 🔗';
  box8.textContent = 'Or write me to: visva.rapalis@gmail.com 💌';

  tabsItem3.setAttribute('class', 'tabs__item');
  tabsItem3.setAttribute('id', 'tab_3');
  tabsItem3p.textContent = "Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";


  tabsNav.appendChild(tabsNavbtn3);
  tabsContent.appendChild(tabsItem3);
  tabsItem3.appendChild(tabsItem3p);
  tabsItem3.appendChild(contact);
  contact.appendChild(box7);
  contact.appendChild(box8);
}
export default contact;

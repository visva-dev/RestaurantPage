function contact() {
  const tabs__nav = document.querySelector('.tabs__nav');
  const tabs__content = document.querySelector('.tabs__content');
  const tabs__nav_btn3 = document.createElement('button')
  const tabs__item3 = document.createElement('div')
  const tabs__item3_p = document.createElement('p')

  tabs__nav_btn3.setAttribute('class', 'tabs__nav-btn')
  tabs__nav_btn3.setAttribute('type', 'button')
  tabs__nav_btn3.setAttribute('data-tab', '#tab_3')
  tabs__nav_btn3.textContent = 'Contact';

  tabs__item3.setAttribute('class', 'tabs__item')
  tabs__item3.setAttribute('id', 'tab_3')
  tabs__item3_p.textContent = "Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";


  tabs__nav.appendChild(tabs__nav_btn3)
  tabs__content.appendChild(tabs__item3)
  tabs__item3.appendChild(tabs__item3_p)
};
export default contact;

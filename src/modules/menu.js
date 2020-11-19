function menu() {
  const tabs__nav = document.querySelector('.tabs__nav');
  const tabs__content = document.querySelector('.tabs__content');
  const tabs__nav_btn2 = document.createElement('button')
  const tabs__item2 = document.createElement('div')
  const tabs__item2_p = document.createElement('p')

  tabs__nav_btn2.setAttribute('class', 'tabs__nav-btn')
  tabs__nav_btn2.setAttribute('type', 'button')
  tabs__nav_btn2.setAttribute('data-tab', '#tab_2')
  tabs__nav_btn2.textContent = 'Menu';

  tabs__item2.setAttribute('class', 'tabs__item')
  tabs__item2.setAttribute('id', 'tab_2')
  tabs__item2_p.textContent = "It eadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";


  tabs__nav.appendChild(tabs__nav_btn2)
  tabs__content.appendChild(tabs__item2)
  tabs__item2.appendChild(tabs__item2_p)
}
export default menu;

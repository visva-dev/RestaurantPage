const nav = () => {
  console.log('This is a Restaurant navbar!');
  const nav = document.createElement('nav');
  const unorderedList = document.createElement('ul');
  const list = document.createElement('li');
  const anchor = document.createElement('a');
  const secondList = document.createElement('li');
  const secondAnchor = document.createElement('a');
  const thirdList = document.createElement('li');
  const thirdAnchor = document.createElement('a');
  const content = document.getElementById('content');
  anchor.textContent = 'Home';
  secondAnchor.textContent = 'Menu';
  thirdAnchor.textContent = 'Contact';
  list.appendChild(anchor);
  secondList.appendChild(secondAnchor);
  thirdList.appendChild(thirdAnchor);
  unorderedList.appendChild(list);
  unorderedList.appendChild(secondList);
  unorderedList.appendChild(thirdList);
  nav.appendChild(unorderedList);

  content.appendChild(nav);
  nav.setAttribute('class', 'flex-nav');
}

export default nav;

function menu() {
  const container = document.getElementById('content');
  const childOne = document.getElementById('top');
  const childTwo = document.getElementById('features');
  const childThree = document.getElementById('about');
  const childFour = document.getElementById('gallery');
  const childFive = document.getElementById('footer');
  container.removeChild(childOne);
  container.removeChild(childTwo);
  container.removeChild(childThree);
  container.removeChild(childFour);

  const menu = document.createElement('div');
  const box1 = document.createElement('div');
  const box2 = document.createElement('div');
  const box3 = document.createElement('div');
  const box4 = document.createElement('div');
  const box5 = document.createElement('div');
  const box6 = document.createElement('div');

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

  container.appendChild(menu);
  menu.appendChild(box1);
  menu.appendChild(box2);
  menu.appendChild(box3);
  menu.appendChild(box4);
  menu.appendChild(box5);
  menu.appendChild(box6);
  let parentDiv = childFive.parentNode;
  parentDiv.insertBefore(menu, childFive);
  console.log('Hellooooo');
}
export default menu;

import footer from "./footer";

const contact = () => {
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

  const details = document.createElement('section');
  const details_p = document.createElement('p');
  const details_p2 = document.createElement('p');

  details.setAttribute('class', 'details');
  details_p.textContent = 'Hey! I hope you like this restourant!';
  details_p2.textContent = 'You can reach us at - Good-Developer.com';

  container.appendChild(details);
  details.appendChild(details_p)
  details.appendChild(details_p2)
  let parentDiv = childFive.parentNode
  parentDiv.insertBefore(details, childFive)
  console.log('Hellooooo');
};
export default contact;

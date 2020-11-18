const home = () => {
  const top = document.createElement('div');
  const header = document.createElement('header');
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const h1 = document.createElement('h1');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  const p4 = document.createElement('p');
  const p5 = document.createElement('p');
  const content = document.getElementById('content');
  h1.textContent = "Terry's Taco Joint";
  p1.textContent = "Pretty Good Tacos!";
  p2.textContent = '$1.99'
  p3.textContent = 'Tacos'
  p4.textContent = '$3.99'
  p5.textContent = 'Kombucha'

  header.appendChild(h1);
  header.appendChild(p1);
  div1.appendChild(p2);
  div1.appendChild(p3);
  div2.appendChild(p4);
  div2.appendChild(p5);
  content.appendChild(top);
  top.appendChild(header);
  top.appendChild(div1);
  top.appendChild(div2);
  top.setAttribute('class', 'top');
  header.setAttribute('class', 'hero');
  p2.setAttribute('class', 'price');
  p4.setAttribute('class', 'price');
  div1.setAttribute('class', 'cta cta1')
  div2.setAttribute('class', 'cta cta2')
}

export default home;

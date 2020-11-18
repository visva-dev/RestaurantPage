const home = () => {
  const top = document.createElement('div');
  const header = document.createElement('header');
  const features = document.createElement('section');
  const feature1 = document.createElement('div');
  const feature1_span = document.createElement('span');
  const feature1_h3 = document.createElement('h3');
  const feature1_p = document.createElement('p');
  const feature2 = document.createElement('div');
  const feature2_span = document.createElement('span');
  const feature2_h3 = document.createElement('h3');
  const feature2_p = document.createElement('p');
  const feature3 = document.createElement('div');
  const feature3_span = document.createElement('span');
  const feature3_h3 = document.createElement('h3');
  const feature3_p = document.createElement('p');
  const feature4 = document.createElement('div');
  const feature4_span = document.createElement('span');
  const feature4_h3 = document.createElement('h3');
  const feature4_p = document.createElement('p');
  const about = document.createElement('section');
  const about_img = document.createElement('img');
  const about_div = document.createElement('div');
  const about_div_h2 = document.createElement('h2');
  const about_div_p1 = document.createElement('p');
  const about_div_p2 = document.createElement('p');
  const about_div_button = document.createElement('button');
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
  feature1_span.textContent = '🌮'
  feature2_span.textContent = '🍺'
  feature3_span.textContent = '🍷'
  feature4_span.textContent = '🎵'
  feature1_h3.textContent = 'Tacos'
  feature2_h3.textContent = 'Beer'
  feature3_h3.textContent = 'Wine'
  feature4_h3.textContent = 'Music'
  feature1_p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
  feature2_p.textContent = "adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
  feature3_p.textContent = "adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisicing elit, elit."
  feature4_p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  about_img.src = './queso-taco.png'
  about_div_h2.textContent = "Featured Taco"
  about_div_p1.textContent = "Slim Profile, easy to hold and loaded with cheese."
  about_div_p2.textContent = "This is the one you have been waiting for"
  about_div_button.textContent = "Learn More →"

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
  content.appendChild(features);
  features.appendChild(feature1);
  features.appendChild(feature2);
  features.appendChild(feature3);
  features.appendChild(feature4);
  feature1.appendChild(feature1_span)
  feature1.appendChild(feature1_h3)
  feature1.appendChild(feature1_p)
  feature2.appendChild(feature2_span)
  feature2.appendChild(feature2_h3)
  feature2.appendChild(feature2_p)
  feature3.appendChild(feature3_span)
  feature3.appendChild(feature3_h3)
  feature3.appendChild(feature3_p)
  feature4.appendChild(feature4_span)
  feature4.appendChild(feature4_h3)
  feature4.appendChild(feature4_p)
  content.appendChild(about);
  about.appendChild(about_img)
  about.appendChild(about_div)
  about_div.appendChild(about_div_h2)
  about_div.appendChild(about_div_p1)
  about_div.appendChild(about_div_p2)
  about_div.appendChild(about_div_button)

  top.setAttribute('class', 'top');
  header.setAttribute('class', 'hero');
  features.setAttribute('class', 'features');
  feature1.setAttribute('class', 'feature');
  feature2.setAttribute('class', 'feature');
  feature3.setAttribute('class', 'feature');
  feature4.setAttribute('class', 'feature');
  feature1_span.setAttribute('class', 'icon');
  feature2_span.setAttribute('class', 'icon');
  feature3_span.setAttribute('class', 'icon');
  feature4_span.setAttribute('class', 'icon');
  p2.setAttribute('class', 'price');
  p4.setAttribute('class', 'price');
  div1.setAttribute('class', 'cta cta1')
  div2.setAttribute('class', 'cta cta2')
  about.setAttribute('class', 'about');
  about_div.setAttribute('class', 'about__details')
}

export default home;

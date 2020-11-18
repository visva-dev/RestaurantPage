import './style.scss';
import nav from './modules/navbar';
import home from './modules/home';
import footer from './modules/footer';
import contact from './modules/contact';
import menu from './modules/menu';

nav();
home();
footer();

// document.getElementById('home').addEventListener('click', () => {
//   home();
// });

document.getElementById('contact').addEventListener('click', () => {
  console.log('Hellooooo');
  contact();
});

document.getElementById('menu').addEventListener('click', () => {
  console.log('Hellooooo');
  menu();
});


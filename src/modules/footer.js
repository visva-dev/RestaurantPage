const footer = () => {
  const footer = document.createElement('footer');
  const footer_p = document.createElement('p');
  const content = document.getElementById('content');

  footer_p.textContent = 'Visvaldas Rapalis'

  content.appendChild(footer);
  footer.appendChild(footer_p)
}

export default footer;
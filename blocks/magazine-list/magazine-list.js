export default async function decorate(block) {
  const response = await fetch('/query-index.json');
  const data = await response.json();
  data.data.forEach( (magazine ) => {
    if (magazine.path.startsWith('/us/en/magazine/')) {
      const title = document.createElement('h3');
      title.textContent = magazine.title;
      block.append(title);      
      const description = document.createElement('p');
      description.textContent = magazine.description;
      block.append(description);      
      const link = document.createElement('a');
      const linkText = document.createTextNode('Read more');
      link.appendChild(linkText);
      link.title = 'Read more';
      link.href = magazine.path;
      block.append(link);
    }    
  });
}

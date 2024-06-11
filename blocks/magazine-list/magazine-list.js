export default async function decorate(block) {
    let response = await fetch('/query-index.json');
    let data = await response.json();
    for (const magazine of data.data) {
        if(magazine.path.startsWith('/us/en/magazine/')){
            console.log(magazine.path);
            console.log(magazine.title);
            console.log(magazine.image);
            let title = document.createElement('h3');
            title.textContent = magazine.title;
            block.append(title);

            let description = document.createElement('p');
            description.textContent = magazine.description;
            block.append(description);

            let link = document.createElement('a');
            let linkText = document.createTextNode("Read more");
            link.appendChild(linkText);
            link.title = "Read more";
            link.href = magazine.path;
            block.append(link);
        }
    }
  }
const api = document.querySelector(".api");
const container = document.querySelector(".products");

fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(products => {
    api.innerHTML = "API data loaded successfully";

    products.forEach(p => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${p.image}" alt="product image">
        
        <h3>${p.title.slice(0, 50)}</h3>
        <p class="price">${p.price}</p>
        <p class="desc">${p.description.slice(0, 100)}...</p>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    api.style.color = "red";s
    api.innerHTML = "Error: " + error;
  })
  .finally(() => {
    api.innerHTML += "<br>API request completed";
  });
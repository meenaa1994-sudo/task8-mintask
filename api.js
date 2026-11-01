const api = document.querySelector(".api");
const output = document.querySelector(".output");

api.innerHTML = "Loading...";                       // Task 19

function section(name) {
  const h = document.createElement("h2");
  h.innerHTML = name;
  output.appendChild(h);
  const box = document.createElement("div");
  output.appendChild(box);
  return box;
}

function add(box, html, cls) {
  const el = document.createElement("div");
  if (cls) el.className = cls;
  el.innerHTML = html;
  box.appendChild(el);
}

fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(products => {
    api.innerHTML = "API data loaded successfully"; // Task 18

    let b = section("1. Title in h1");
    products.forEach(p => add(b, `<h1>${p.title}</h1>`));

    b = section("2. ID and title in h2");
    products.forEach(p => add(b, `<h2>${p.id} - ${p.title}</h2>`));

    b = section("3. Title first 30 chars");
    products.forEach(p => add(b, p.title.slice(0, 30)));

    b = section("4. Description first 100 chars");
    products.forEach(p => add(b, p.description.slice(0, 100)));

    b = section("5. Image inside div");
    products.forEach(p => add(b, `<img src="${p.image}" width="100">`));

    b = section("6. Title, description, image in one div");
    products.forEach(p =>
      add(b, `<h3>${p.title}</h3><p>${p.description}</p><img src="${p.image}" width="100">`));

    b = section("7. Price in p");
    products.forEach(p => add(b, `<p>${p.price}</p>`));

    b = section("8. Category in h3");
    products.forEach(p => add(b, `<h3>${p.category}</h3>`));

    b = section("9. Title uppercase");
    products.forEach(p => add(b, p.title.toUpperCase()));

    b = section("10. Title and character count");
    products.forEach(p => add(b, `${p.title} (${p.title.length} characters)`));

    b = section("11. First 5 products");
    products.slice(0, 5).forEach(p => add(b, p.title));

    b = section("12. ID, title, price");
    products.forEach(p => add(b, `${p.id} | ${p.title} | $${p.price}`));

    b = section("13. Image width 200px");
    products.forEach(p => add(b, `<img src="${p.image}" width="200">`));

    b = section("14. Card for each product");
    products.forEach(p => add(b, p.title, "card"));

    b = section("15. Title + description (50 chars)");
    products.forEach(p => add(b, `<b>${p.title}</b><br>${p.description.slice(0, 50)}`));

    b = section("16. Titles in console and page");
    products.forEach(p => {
      console.log(p.title);
      add(b, p.title);
    });

    b = section("17. Title and category in same div");
    products.forEach(p => add(b, `${p.title} - ${p.category}`));
  })
  .catch(error => {
    api.style.color = "red";
    api.innerHTML = "Error: " + error;
  })
  .finally(() => {
    api.innerHTML += "<br>API request completed";  // Task 20
  });
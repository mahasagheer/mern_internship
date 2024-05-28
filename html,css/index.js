let cart = [];
let text = localStorage.getItem("myCart");
let obj = JSON.parse(text);
console.log(obj);
for (let i = 0; i < obj.length; i++) {
  pro.insertAdjacentHTML(
    "afterend",
    `<div class="cart">
        <img class="imge" src=${obj[i].imagePro} />
       <div class="prodetail"> <p>
       PRODUCT NAME:<span class="nameProduct">${obj[i].name}
         </span></p>
        <p>PRICE:Rs.<span class="priceProduct">${obj[i].pricePro}</span></p></div>
        <div class="delete" onclick="del(${obj[i].name})"><i class="fa-solid fa-trash"></i></div>
        </div>`
  );
}

function addCart(m) {
  let product_name = document.querySelectorAll(".product_name");
  let price = document.querySelectorAll(".price");
  let image = document.querySelectorAll(".image");
  let name = product_name[m].innerText;
  let pricePro = price[m].innerText;
  let imagePro = image[m].getAttribute("src");
  cart.push({ name: name, pricePro: pricePro, imagePro: imagePro });
  let item = {
    name: name,
    pricePro: pricePro,
    imagePro: imagePro,
  };
  localStorage.setItem("myCart", JSON.stringify(cart));
  let pro = document.querySelector("#pro");
  // cart.map(display);
  // function display(i) {
  console.log(item);
  pro.insertAdjacentHTML(
    "afterend",
    `<div class="cart">
        <img class="imge" src=${item.imagePro} />
       <div class="prodetail"> <p>
       PRODUCT NAME:<span class="nameProduct">${item.name}
         </span></p>
        <p>PRICE:Rs.<span class="priceProduct">${item.pricePro}</span></p></div>
        <div class="delete" onclick="del(${item})"><i class="fa-solid fa-trash"></i></div>
        </div>`
  );
}
// }
function del(e) {
  alert(e);
  // let delet = document.querySelector(".delete");
  // delet = JSON.parse(localStorage.getItem("myCart"));
  // cart.map(display);
  // function display(i) {
  //   localStorage.removeItem("myCart");
  //   let cartT = document.querySelector(".cart");
  //   cartT.classList.add("disable");
  // }
}

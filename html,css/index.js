let laptopAccesoriesStock = [
  {
    name: "laptop",
    quantity: 23,
    price: "Rs.112,000",
    image: "laptop.jpg",
    description:
      "Think of the Lenovo V15 as your office manager, executing your everyday tasks with efficiency. It will keep your business productive and your data secure, while its thinner, smaller design and narrower side bezels put a clean, professional look on your desk—or wherever you choose to use it.Intel® Core™ i3-1215U, 6C 15.6 FHD (1920x1080) TN 250nits",
  },
  {
    name: "Laptop Sleeve",
    quantity: 5,
    price: "Rs.1,400",
    image: "laptopcover.jpg",
    description:
      "Wrap your laptop in a colourful, comfortable sleeve. The durable neoprene material helps protect your personal computer from the elements, as well as bumps and scratches. Easily reversible so you can change colors to suit your mood 14 Reversible Sleeve Colour Grey PC and Mac Fits up to 35.56 cm (14?) Diagonal Laptops",
  },
  {
    name: "Laptop Stand",
    quantity: "2",
    price: "Rs.2,900",
    image: "laptopStand_.jpg",
    description:
      "This Wooden Laptop Table will protect both the laptop from overheating and the user from suffering heat-related discomfort. In addition, it can also be used as a coffee table/study table. You can play card games, study, write a diary and do much more with this Laptop Desk on your lap. Length: 23.6 - Width: 15.7 - Height: 11 Anti-Skid Foam Gripping Sturdy Powder-Coated Metal Tubes Laminated Ergonomically Designed Edges",
  },
  {
    name: "Cable Organizer",
    quantity: "4",
    price: "Rs. 950",
    image: "cableorganizer.webp",
    description:
      "Ugreen Cable Organizer is designed to make your desk and office tidy and organized. It can keep all your cables within arm's reach while in use and also remain in place while disconnected.You will never lose your cable at the floor or behind the desk when you own a cable organizer like this.Also this cable organizer will easily make you win time and money by increasing lifetime of cables and saving time for searching them",
  },
  {
    name: "Laptop Backpack",
    quantity: "6",
    price: "Rs.3,000",
    image: "laptopBackpack.jpg",
    description:
      "The Lenovo 15.6 Casual Backpack B210 utilizes a water-repellent fabric and a clean, streamlined design to create a case that's perfectly suited to modern life.Integrated laptop compartment Internal pockets for those must-have accessories Spacious main compartment for books and other items Casual and stylish design",
  },
  {
    name: "Cooling Pad",
    quantity: "7",
    price: "Rs.3,900",
    image: "coolingpad.jpg",
    description:
      "The efficient cooling channel directs heat away from your notebook. Designed for desk or lap use - just turn 90 degrees. Built-in height adjustment provides added comfort. Efficient cooling channel directs heat away Contoured for lap use Flip down the stand for desk use USB powered",
  },
  {
    name: "Light Keyboard",
    quantity: "8",
    price: "Rs. 7,799",
    image: "lightkeyboard.jpg",
    description:
      "The latest A4Tech Bloody B500N Mechanical light switch Gaming Keyboard price in Pakistan is 7,799 - PKR which was recently updated on May 2024.",
  },
  {
    name: "Laptop Skin Sticker",
    quantity: "6",
    price: "Rs. 650",
    image: "laptopSticker.webp",
    description:
      "Step 1:- Product Title: We Bare Bears Laptop Skin Vinyl Sticker Decal- Graphics Memory: HD- Category Path: Computers & Laptops>Computer Accessories>Mac AccessoriesStep 2:- Additional Keywords: Laptop Skin, Vinyl Sticker, Decal, Mac AccessoriesStep 3:• High-definition graphics memory for clear and vibrant visuals.• Fits all laptops from 12 to 15.6 inches in size.• We Bare Bears design adds a fun and stylish touch.• Vinyl sticker decal for easy application and removal.• Protects your laptop from scratches and dust.• Perfect for Mac accessories and computer customization.Step 4:- N/AStep 5:- N/A",
  },
];
for (let i = 0; i < localStorage.length; i++) {
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

// let cart = [];
// let text = localStorage.getItem("myCart");
// let obj = JSON.parse(text);
// console.log(obj);
// for (let i = 0; i < obj.length; i++) {
//   pro.insertAdjacentHTML(
//     "afterend",
//     `<div class="cart">
//         <img class="imge" src=${obj[i].imagePro} />
//        <div class="prodetail"> <p>
//        PRODUCT NAME:<span class="nameProduct">${obj[i].name}
//          </span></p>
//         <p>PRICE:Rs.<span class="priceProduct">${obj[i].pricePro}</span></p></div>
//         <div class="delete" onclick="del(${obj[i].name})"><i class="fa-solid fa-trash"></i></div>
//         </div>`
//   );
// }

// function addCart(m) {
//   let product_name = document.querySelectorAll(".product_name");
//   let price = document.querySelectorAll(".price");
//   let image = document.querySelectorAll(".image");
//   let name = product_name[m].innerText;
//   let pricePro = price[m].innerText;
//   let imagePro = image[m].getAttribute("src");
//   cart.push({ name: name, pricePro: pricePro, imagePro: imagePro });
//   let item = {
//     name: name,
//     pricePro: pricePro,
//     imagePro: imagePro,
//   };
//   localStorage.setItem("myCart", JSON.stringify(cart));
//   let pro = document.querySelector("#pro");
//   // cart.map(display);
//   // function display(i) {
//   console.log(item);
//   pro.insertAdjacentHTML(
//     "afterend",
//     `<div class="cart">
//         <img class="imge" src=${item.imagePro} />
//        <div class="prodetail"> <p>
//        PRODUCT NAME:<span class="nameProduct">${item.name}
//          </span></p>
//         <p>PRICE:Rs.<span class="priceProduct">${item.pricePro}</span></p></div>
//         <div class="delete" onclick="del(${item})"><i class="fa-solid fa-trash"></i></div>
//         </div>`
//   );
// }
// // }
// function del(e) {
//   alert(e);
//   // let delet = document.querySelector(".delete");
//   // delet = JSON.parse(localStorage.getItem("myCart"));
//   // cart.map(display);
//   // function display(i) {
//   //   localStorage.removeItem("myCart");
//   //   let cartT = document.querySelector(".cart");
//   //   cartT.classList.add("disable");
//   // }
// }

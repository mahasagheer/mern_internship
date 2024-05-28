/////// GET ITEM AFTER REFRESH //////
let addList = document.querySelector(".addList");
let list = [];
let taskCount = 1;
let text = localStorage.getItem("List");
let obj = JSON.parse(text);
for (let i = 0; i < obj.length; i++) {
  addList.insertAdjacentHTML(
    "beforeend",
    `   <div class="todo">
      <h2 class="index">${obj[i].index}</h2>
      <h2 class="task">${obj[i].todo}</h2>
      </div>`
  );
}
/////// ADD TASK IN TODO //////////
function add() {
  let input = document.querySelector(".input");
  let text = input.value;
  console.log(text);

  list.push({ index: taskCount, todo: text });
  addList.insertAdjacentHTML(
    "beforeend",
    `   <div class="todo">
      <h2 class="index">${taskCount++}</h2>
      <h2 class="task">${text}</h2>
      </div>`
  );
  localStorage.setItem("List", JSON.stringify(list));
  console.log(list);
}

//////// JS TASK ///////////////
let Users = [
  (userOne = {
    name: "Basit",
    age: 17,
    favBook: [
      "Hold On",
      "Robinson Crusoe",
      "Gulliver's Travels",
      "The Narrative of Arthur Gordon Pym",
    ],
  }),
  (userTwo = {
    name: "Rafay",
    age: "22",
    favBook: ["True Wisdom Comes from experience", "Clarissa", "Tom Jones"],
  }),
  (userThree = {
    name: "Wahaj",
    age: "21",
    favBook: [
      "AL-Chemist",
      "Tristram Shandy",
      "Emma",
      "Frankenstein",
      "Nightmare Abbey",
    ],
  }),
];
console.log(Users);
///////// ADD NEW MEMBER //////
const newUser = { name: "nam", age: 6, favBook: ["hold on", "Math"] };
let addUser = (...nUser) => {
  Users.push(...nUser);
  console.log(nUser);
  console.log(Users);
};
addUser(newUser);
/////// UPDATE AGE OF EXSISTING MEMBER////
let updateName = prompt("Enter your name to update?");
let updateAge = prompt("Enter age to update?");
let updateUserAge = (uName, uAge) => {
  let [userOne, userTwo, userThree, newUser] = Users;
  for (let i = 0; i < Users.length; i++) {
    // console.log(Users[i]);
    let { name, age, ...res } = Users[i];
    if (Users[i].name === uName) {
      Users[i].age = uAge;
      Users[i] = { name: Users[i].name, age: Users[i].age, ...res };
    }
    console.log(Users[i]);
  }
};
updateUserAge(updateName, updateAge);

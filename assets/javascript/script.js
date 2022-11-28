/*    DROPDOWN AREA    */

const dropDownButtonList = document.querySelectorAll('.dropdown__area .toggle__button');

const toggleDropDownStatus = (key) => {
  const dropDownDivList = document.querySelectorAll('.dropdown__box-item');
  const buttonImg = dropDownDivList[key].querySelector('.dropdown__area .toggle__button img');
  dropDownDivList[key].classList.toggle('show')

  if(dropDownDivList[key].classList.contains('show')) {
    buttonImg.src = "./assets//icons/icon-arrow-up.svg"
    return
  };
  buttonImg.src = "./assets//icons/icon-arrow-down.svg";
};

dropDownButtonList.forEach((item, index) => {
  item.addEventListener('click', () => toggleDropDownStatus(index));
});

/*    INTERACTIVE CIRCLE    */
const buttonsList = document.querySelectorAll('.interative__circle-area .circle__button');
const textList = document.querySelectorAll('.interative__circle-area .main__text');
const textCicle = document.querySelector(".interative__circle-area .text__circle")
const backgroundClassList = ["yellow", "red", "gray"];

const clearAllSelected = () => {
  buttonsList.forEach(button => {
    button.classList.remove("show");
    button.querySelector("img").src = "./assets/icons/icon-plus.svg";
  });
  textList.forEach(item => item.classList.remove("show"));
};

const changeBackgroundCircleColor = (index) => {
  for(let i in backgroundClassList) {
    textCicle.classList.remove(backgroundClassList[i]);
  }
  textCicle.classList.add(backgroundClassList[index]);
};

const toggleInteractiveCircle = (button, index) => {
  clearAllSelected();
  button.querySelector("img").src = "./assets/icons/icon-minos.svg";
  button.classList.add("show");
  changeBackgroundCircleColor(index);
  textList[index].classList.add("show");
};

buttonsList.forEach((button, index) => {
  button.addEventListener('click', () => toggleInteractiveCircle(button, index));
});
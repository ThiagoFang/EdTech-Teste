/*    DROPDOWN AREA    */
const dropDownButtonList = document.querySelectorAll('.toggle__button.dropdown');

const toggleDropDownStatus = (key) => {
  const dropDownDivList = document.querySelectorAll('.dropdown__box-item');
  const buttonImg = dropDownDivList[key].querySelector('.toggle__button img');
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
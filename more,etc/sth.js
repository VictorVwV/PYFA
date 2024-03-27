function Backc(element) {
  let buttons = document.querySelectorAll('.but');
  if (element.checked) {
    document.body.style.backgroundColor = "#000000";
    buttons.forEach(button => {
      button.querySelector('.txt1').style.color = "#000000";
    });
  } else {
    document.body.style.backgroundColor = "#FFFFFF";
    buttons.forEach(button => {
      button.querySelector('.txt1').style.color = "#FFFFFF";
    });
  }
}
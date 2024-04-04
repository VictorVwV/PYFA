function centerBox() {
  var box3 = document.getElementById('box3');
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  var boxHeight = box3.offsetHeight;
  var boxWidth = box3.offsetWidth;
  box3.style.top = Math.round((windowHeight - boxHeight) / 3) + 'px';
  box3.style.left = Math.round((windowWidth - boxWidth) / 3) + 'px';
}
window.onload = centerBox;
window.onresize = centerBox;
function Backc(element) {
  let buttons = document.querySelectorAll('.but');
  let div=document.querySelectorAll('.vad');
  let h3=document.querySelectorAll('.cond');
  if (element.checked) {
    document.body.style.backgroundColor = "#000000";
    buttons.forEach(button => {
      button.querySelector('.txt1').style.color = "#000000";
    });
    div.forEach(div =>{
      div.style.color="#FFFFFF";
    })
    h3.forEach(h3 =>{
      h3.style.color="#FFFFFF";
    })
  }
     else {
    document.body.style.backgroundColor = "#FFFFFF";
    buttons.forEach(button => {
      button.querySelector('.txt1').style.color = "#FFFFFF";
    });
    div.forEach(div =>{
      div.style.color="#000000";
     })
     h3.forEach(h3 =>{
      h3.style.color="#000000";
    })
  }}
  let afi3 = document.getElementById("dis3");
let v, w, x, libe, del;

do {
    v = Math.round(Math.random() * 100 / 12) + 1;
    w = Math.round(Math.random() * 100 / 12) + 2;
    x = 2+Math.floor( Math.round(Math.random() * 10)) + 1;
    libe = Math.round(Math.random() * 100 / 12) + Math.round(Math.random() * 100 / 12) + 1;
    del = Math.round(w * w - 4 * v * libe);
} while (Math.floor(x)!==x && del <= 0 || Math.round(v * x * x - w * x + libe) !== 0 || x <= 0);

if (v > 1) {
    afi3.textContent = `${v}x²-${w}x+${libe}= 0`;
} else if (v === 1) {
    afi3.textContent = `x²-${w}x+${libe}= 0`;
}

function reff() {
    location.reload();
}
let ib,ic;
ib=document.getElementById("input_box");
ic=document.getElementById("input_case");
function get_input() {
    var ssw = parseFloat(ib.value.trim());
    let sq = parseFloat(ic.value.trim());

    if (v * ssw * ssw - w * ssw + libe === v * x * x - w * x + libe &&
        v * sq * sq - w * sq + libe === v * x * x - w * x + libe) {
        document.body.style.backgroundColor = "#355E3B";
        setTimeout(reff,3000);
        alert('Corect, bravo!');
    } else {
        alert('Sorry nah');
    }
}
function centerBox() {
  var box3 = document.getElementById('box3');
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  var boxHeight = box3.offsetHeight;
  var boxWidth = box3.offsetWidth;
  box3.style.top = ((windowHeight - boxHeight) / 2) + 'px';
  box3.style.left = ((windowWidth - boxWidth) / 2) + 'px';
}
window.onload = centerBox;
window.onresize = centerBox;
function Backc(element) {
  let buttons = document.querySelectorAll('.but');
  let div=document.querySelectorAll('.vad');
  if (element.checked) {
    document.body.style.backgroundColor = "#000000";
    buttons.forEach(button => {
      button.querySelector('.txt1').style.color = "#000000";
    });
    div.forEach(div =>{
      div.style.color="#FFFFFF";
    })
  } else {
    document.body.style.backgroundColor = "#FFFFFF";
    buttons.forEach(button => {
      button.querySelector('.txt1').style.color = "#FFFFFF";
    });
    div.forEach(div =>{
      div.style.color="#000000";
     })
  }}
afi=document.getElementById("dis");
afi2=document.getElementById("dis2");
let v=Math.round(Math.round(Math.random()*100)/12)+1;
let w=Math.round(Math.round(Math.random()*100)/12)+2;
let x=Math.round(Math.round(Math.random()*100)/12)+1;
let y=Math.round(Math.round(Math.random()*100)/12)+1;
while(v*x-y*w<=0 || v*x+y*w>100){
  v=Math.round(Math.round(Math.random()*100)/12)+1;
  w=Math.round(Math.round(Math.random()*100)/12)+2;
  x=Math.round(Math.round(Math.random()*100)/12)+1;
  y=Math.round(Math.round(Math.random()*100)/12)+1;
}
let sc;
let sv;
if(v*x<w*y){
  sc=w;
  w=v;
  v=sc;
  sv=y;
  y=x;
  x=sv;
}
let m=Math.random();
let n=Math.round(Math.round(Math.random()*10)*w);
let b=Math.round(Math.round(Math.random()*10)*v);
while((b<2 && n<2) || (v*x-y*n<=0 || b*x-y*n<0 || b*x+y*n>40 || v*x-y*w<=0)){
  v=Math.round(Math.round(Math.round(Math.random()*100)/12))+1;
  w=Math.round(Math.round(Math.round(Math.random()*100)/12))+2;
  x=Math.round(Math.round(Math.round(Math.random()*100)/12))+1;
  y=Math.round(Math.round(Math.round(Math.random()*100)/12))+1;
  n=Math.round(Math.round(Math.round(Math.random()*100)*w))+2;
  b=Math.round(Math.round(Math.round(Math.random()*100)*v))+2;
  if(v*x<w*y){
    sc=Math.round(w);
    w=Math.round(v);
    v=Math.round(sc);
    sv=Math.round(y);
    y=Math.round(x);
    x=Math.round(sv);
  }
}
console.log(v +" "+w+" "+x+" "+y+" "+b+" "+n )
let vf=0;
if(n*y>v*x){
  vf=1;
}
if(v===1){
    if(w===1){
      afi.textContent="x+ "  + "y="+ Math.round(v*x+w*y);
  afi2.textContent="x- " + "y="+ Math.round(v*x-w*y);
    }
    else{
        if(m>(1/4)){
         afi.textContent="x+ " + w + "y="+ Math.round(v*x+w*y);
         if(vf===1){ 
         afi2.textContent=n+"y- " + "x="+ Math.round(n*y-v*x);
        }
        else if(vf===0){
          afi2.textContent="x- " + n + "y="+ Math.round(v*x-y*n);
        }

      else{ 
          afi.textContent="x+ " + w + "y="+ Math.round(v*x+w*y);
          afi2.textContent="x- " + w + "y="+ Math.round(v*x-w*y);
  }}
}}
else if(v>1){
    if(w===1){
       if(m>(1/2)){
       afi.textContent=v+"x+ " + "y="+ Math.round(v*x+w*y);
      afi2.textContent=b+"x- " + "y="+ Math.round(b*x-w*y);
      }
      else{
      afi.textContent=v+"x+ " + "y="+ Math.round(v*x+w*y);
      afi2.textContent=v+"x- " + "y="+ Math.round(v*x-w*y);
    }}
    else{
      afi.textContent=v+"x+ " + w + "y="+ Math.round(v*x+w*y);
      if(m<=(1/4)){
      afi2.textContent=v+"x- " + w + "y="+ Math.round(v*x-w*y);
      }
      else if(m>(1/4)&& m<=(2/4)){
         if(vf===1){ 
         afi2.textContent=n + "y- "+v+"x= "+ Math.round(n*y-v*x);
        }
        else if(vf===0){
          afi2.textContent=v+ "x- " + n + "y="+ Math.round(v*x-y*n);
        }
        }
      else if(m>(2/4) && m<=(3/4)){
        afi2.textContent=b+"x- "+w+ "y="+ Math.round(b*x-w*y);
      }
      else if(m>(3/4)){
        afi2.textContent=b+"x- "+n + "y="+ Math.round(b*x-y*n);
      }
}
}
function reff(){
  location.reload();
}
ib=document.getElementById("input_box");
  ic=document.getElementById("input_case");
  function get_input(){
    var ssw=ib.value.trim();
    let sq=ic.value.trim();
     if(Math.round(ssw*v)===Math.round(v*x) && Math.round(sq*w)===Math. round(w*y)){
      console.log(ssw + ' ' + sq);
      document.body.style.backgroundColor = "#355E3B";
      setTimeout(reff,3000);
     }
     else{
      alert('Nah ah');
     }
}
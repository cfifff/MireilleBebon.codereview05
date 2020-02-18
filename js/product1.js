

var like = [];
for( let i = 0; i<product.length; i++){
  document.getElementById("product").innerHTML += `
   <div class="col-xs-12 col-md-4">
      
      <img src="${product[i].img}" width="250"><br>
     <button type="button" class="btn btn-info likeButton" data-toggle="modal" data-target="#Like">click here to like the movie</button>
     <button class="add">Like</button>
     
  `;
}
var btns = document.getElementsByClassName("likeButton");

for(let i = 0 ; i < btns.length; i++){
  btns[i].addEventListener("click",function(){
    likeButton(product[i]);
    readCart();

    })
}
function likeButton(obj){
  if(obj.likeqt == 0){
    obj.likeqt++;
    like.push(obj);
  }
  
}
function readCart(){
  
  document.getElementById("like").innerHTML = "";
  for(let i = 0 ; i < like.length ; i++){
  document.getElementById("like").innerHTML += `
    <p> ${like[i].name} | ${like[i].likeqt} </p>
    
  `;
}



var addbtns = document.getElementsByClassName("add");

for(let i = 0 ; i < addbtns.length ; i++){
  addbtns[i].addEventListener("click",function(){
    addMore(like[i]);
  })
  
}


function addMore(a){
  a.likeqt ++;
  readCart();
}}

//like button end here

// pop up

var links = document.querySelectorAll(".product");
var gallery = document.getElementsByClassName("product")[0];
var gallerSingleElem = document.getElementsByClassName("gallery-single")[0];
var btnClose = document.getElementById("btnClose");
var image = "";
var title = "";
var desc = "";

// Popup
links.forEach(function(link) {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    image = link.querySelector("img").getAttribute("src");
    title = link.getAttribute("data-title");
    desc = link.getAttribute("data-desc");
    gallerSingleElem.querySelector("img").setAttribute("src", image);
    gallerSingleElem.querySelector("img").setAttribute("alt", title);
    gallerSingleElem.querySelector("h3").innerHTML = title;
    gallerSingleElem.querySelector("p").innerHTML = desc;

    // Showing Gallery Single element
    gallery.classList.add("shown");
  });
});


// Closing Gallery Single element
btnClose.addEventListener("click", closeSingleGallery);
window.addEventListener("keypress", processKeyPress);

function processKeyPress(e) {
  if (e.key == "Escape") {
    closeSingleGallery();
  }
}

function closeSingleGallery() {
  gallery.classList.remove("shown");
}

// global variables

var items = [{
    code: "1tvs",
    title: "tv samsung",
    price: 1000,
    description: "this is the long description of the item",
    category: "electronics",
    image: "img/tv.jpg"
  },
  {
    code: "1ph10",
    title: "Iphone X",
    price: 1200,
    description: "this is the long description of the item",
    category: "Mobile devices",
    image: "img/iphone.jpg"
  },
  {
    code: "2spk",
    title: "speakers",
    price: 100,
    description: "this is the long description of the item",
    category: "sound",
    image: "img/speaker.jpg"
  },
  {
    code: "1pc",
    title: "computer",
    price: 2000,
    description: "this is the long description of the item",
    category: "computer",
    image: "img/computer.jpg"
  }
];
var items = [];
var serverURL = "http://localhost:8080/api/";

// functions

// get items from server
function fetchCatalog() {
  $.ajax({
    url: serverURL + "catalog",
    type:"GET",
    success: function (res) {
      console.log("server is good", res);
      for (var j = 0; j < res.length; j++){
        
        if (res[j].user=="arthur" && res[j].title!="") {
          items.push(res[j]);
        }
      }
      displayCatalog();
    },
    error: function (Details) {
      console.log("error", Details);
    }
  });
  
}
function displayCatalog() {
  for (var i = 0; i < items.length; i++){
    displayItems(items[i]);
  }
}
function displayItems(product) {
  // travel inside the array
  // for (var i = 0; i < items.length; i++) {
    // get element from the array

    
    // create the string

    var layout =
      `<div class="item" id="${product.code}">
        <img src="${product.image}">
        <h4>${product.title}<h4>
        <h6 class="item-price">${product.price}<h6>
        <p>${product.description}<p>
        <div class="button-div">
        <button class="btn btn-primary">add to cart</button>
        </div>  
        </div>`;
    
    // display the element in the DOM(html)
    $("#catolog").append(layout);


  // }




}


function init() {
  console.log("catolog page");
  fetchCatalog();
  $("#search-btn").click(Search);
  $("#search-txt").keypress(function (e) {
    if (e.keyCode == 13) {
    Search();
    }
    
  });
}

function Search() {
  
    // body earch function
    var searchString = $('#search-txt').val();
    // travel the array
  for (var i = 0; i < items.length; i++) {
    // conditional
    if (items[i].title.toUpperCase().includes(searchString.toUpperCase()) || items[i].code.toUpperCase().includes(searchString.toUpperCase()) || items[i].description.toUpperCase().includes(searchString.toUpperCase())) {
      // execute the change
      $('#' + items[i].code).show();
    } else {
      // execute the change
      $('#' + items[i].code).hide();
    }
    if (searchString == "") {
      $('#' + items[i].code).show();
    }
  }
  
}
// initialization

window.onload = init;
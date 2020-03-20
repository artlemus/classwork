var serverURL = "http://localhost:8080/api/";


var items = [];

function init() {
    console.log("Admin page");
}

window.onload = init;

// object constructor

class Item {

    constructor(code, title, price, description, category, image) {
        this.code = code;
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
        this.user = "arthur";

    }
};

function clearForm() {
    $("#code").val("");
    $("#title").val("");
    $("#price").val("");
    $("#description").val("");
    $("#category").val("");
    $("#image").val("");
}

function register() {




    var code = $("#code").val();
    var title = $("#title").val();
    var price = $("#price").val();
    var description = $("#description").val();
    var category = $("#category").val();
    var image = $("#image").val();

    if (code != "" && title != "" && price != "" && description != "" && category != "" && image != "") {


        // create an object

        var newItem = new Item(code, title, price, description, category, image);

        items.push(newItem);
        var jsonString = JSON.stringify(newItem);
        console.log(newItem);
        console.log(jsonString);

    }

    // Asyn JS and xml
    //  send obj and to server(strings,int,boolean)
    $.ajax({
        url: serverURL + "items",
        type: "POST",
        contentType: "application/json",
        data: jsonString,
        success: function (response) {
            console.log("it works", response);
            // shows the notification
            $('#alert-box').removeClass("hidden");
            // hide the notification
            setTimeout(function () {
                $('#alert-box').addClass("hidden");  
            },3000)
            clearForm();
        },
        error: function (errorDetails) {
            console.log("error,something went wrong", errorDetails);
        }
    });
}
$("#register-btn").on("click", function () {
    register();
});

//   homework

function solveHW() {
    var data = [{
            age: 28,
            name: "eli",
            color: "orange"
        },
        {
            age: 35,
            name: "zach",
            color: "blue"
        },
        {
            age: 26,
            name: "larry",
            color: "blue"
        },
        {
            age: 37,
            name: "ed",
            color: "blue"
        },
        {
            age: 30,
            name: "jeremy",
            color: "peach"
        },
        {
            age: 28,
            name: "pavel",
            color: "purple"
        },
        {
            age: 33,
            name: "chad",
            color: "red"
        }
    ]
}
// who name-age is the oldest,youges,sum of all the ages

// read about HTTP Methods
// GET POST PUT PATCH DELETE
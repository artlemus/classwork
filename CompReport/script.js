class Character {
  constructor(image, name, energy, hp, id) {
    this.name = name;
    this.energy = energy;
    this.hp = hp;
    this.id = id;
    this.image = image;
  }

  display = function() {
    document.getElementById(
      "img" + this.id
    ).innerHTML = `<img class="character" src="${this.image}" alt="">`;
    document.getElementById(
      this.id
    ).innerHTML = `${this.name} <br> Health: ${this.energy} Dmg: ${this.hp}`;
    if (this.energy <= 0) {
      this.energy = 0;
    }
  };

  attack = function(opponent, item) {
    var newEnergy = opponent.energy - item.imagic;
    opponent.energy = newEnergy;
    opponent.display();
    document.getElementById(
      "console"
    ).innerHTML = `<img src="${item.img}"</img>`;

    function console() {
      document.getElementById("console").innerHTML =
        "You were attacked by the oponnent!!";

        if (opponent.energy <= 0) {
            item.imagic = 0;
        document.getElementById("console").innerHTML = "GAMEOVER!!";
      }
    }

    setTimeout(console, 2000);
  }
}

const c1 = new Character("images/goku.png", "Goku", 100, 10, "c1");
const c2 = new Character("images/black goku.png", "Black Goku", 100, 10, "c2");

c1.display();
c2.display();

class Item {
  constructor(iname, imagic, img) {
    this.iname = iname;
    this.imagic = imagic;
    this.img = img;
    }
    
}

const item1 = new Item("iname", 30, "images/attack.gif");

const item2 = new Item("iname", 10, "images/Genkidama.gif");
const item3 = new Item("iname", 20, "images/KiLiberation.gif");

var items = [item1, item2, item3];

function select() {
  let selection = Math.floor(Math.random() * 3);
  return items[selection];
}

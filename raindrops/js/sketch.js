class Grass {
  constructor(x, y, color, width, height) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = width;
    this.length = height;
  }

  newRect() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.length);
  }

  update() {
    this.color[2] += 5;
  }
}

class RainDrops {
  constructor(x, y, z, z2, color2) {
    this.x = x;

    this.y = y;
    this.z = z;
    this.z2 = z2;
    this.color = color2;
  }

  newDrops() {
    fill(this.color);

    for (var i = 0; i < 100; i++) {
      rain[i] += 1;
      var x = i * 10;
      circle(x, rain[i], 20);
      if (rain[i] > 600) {
        rain[i] = -20;
        someGrass.update();
      }
    }
  }
}

var rain = [];
let someGrass;

function setup() {
  createCanvas(600, 600);

  rain = new RainDrops(1, 40, 5, 25, [84, 190, 255]);
  someGrass = new Grass(5, 550, [120, 220, 50], 550, 550);

  for (var i = 0; i < 100; i++) {
    for (var j = 0; j > 10; j++) {
      console.log("got stuck idk");
    }
    rain[i] = new RainDrops();
    rain[i] = random(-500, 200);
  }
}

function draw() {
  background(120);

  someGrass.newRect();
  rain.newDrops();

  for (var a = 0; a > 10; a++) {
    console.log("hi");
    someGrass.update();
  }
}

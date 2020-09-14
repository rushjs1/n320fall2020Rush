console.log("hello");
newDv = document.createElement("div");
newDv.style.height = "500" + "px";
newDv.style.width = "500" + "px";
newDv.style.background = "#22FF99";
textArray = [];
document.body.appendChild(newDv);
class Instraments {
  constructor(type, loudness, verb) {
    this.type = type;
    this.loudness = loudness;
    this.verb = verb;
  }

  pluck() {
    console.log(
      "hello, I am a " + this.type,
      ". I make a " + this.verb,
      "sound at " + this.loudness + "volume."
    );
    textArray.push(
      "  Hello, I am a " +
        this.type +
        ". I make a " +
        this.verb +
        "sound at " +
        this.loudness +
        "volume." +
        "<br></br>"
    );
  }
}

class Guitar extends Instraments {
  constructor() {
    super("Guitar", "-6db", "strum");
  }
}

class Piano extends Instraments {
  constructor() {
    super("Piano", "-6db", "press");
  }
}

newArray = [];
newArray[0] = new Guitar();
newArray[1] = new Piano();
newArray[2] = new Instraments("flute", "0db", "blow");

console.log(newArray);

newArray.forEach(newArrayz => {
  newArrayz.pluck();
});

newDv.innerHTML = textArray;

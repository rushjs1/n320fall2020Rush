$(document).ready(function() {
  superInit();
});

class VirtualRiot {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hunger = 0;
    this.energy = 10;
  }
  render() {
    return `<div id="homeContent">

    <p> Product Options : ${this.firstName} and ${this.lastName} </p>
    <p>Total :${this.hunger.toFixed(2)}$ </p>
    <p>Stock : ${this.energy} </p>
    </div>`;
  }
  run() {
    this.hunger = this.hunger + 2.99;
    this.energy = this.energy - 1;
    if (this.energy == 0) {
      alert("Out of Stock");
      $("#runBtn").css("display", "none");
    }
  }
  feed() {
    this.energy++;
    if (this.energy > 0) {
      $("#runBtn").css("display", "flex");
    }
  }
  sleep() {
    this.hunger++;
    this.energy = this.energy + 2;
  }
}

function superInit() {
  function init() {
    $("#runBtn").css("display", "none");
    $("#feedBtn").css("display", "none");

    $("#inputHolder").css("display", "none");
  }
  init();
  function initListener() {
    $("#enterSite").click(function(e) {
      $("#enterSite").css("display", "none");
      $("#inputHolder").css("display", "flex");
    });
  }

  initListener();

  function submitName() {
    $("#submitName").click(function(e) {
      let newPetName1 = $("#firstName").val();
      let newPetName2 = $("#lastName").val();

      var myPet = new VirtualRiot(newPetName1, newPetName2, 0, 100);
      var displayPet = myPet.render();

      $("#homeContent").html(displayPet);
      $("#runBtn").css("display", "flex");
      $("#feedBtn").css("display", "flex");

      $("#enterSite").css("display", "none");
      $("#inputHolder").css("display", "none");
      function decEnergy() {
        $("#runBtn").click(function(e) {
          console.log("click");
          myPet.run();
          var upDate = myPet.render();
          $("#homeContent").html(upDate);
        });
      }
      decEnergy();
      function feedPet() {
        $("#feedBtn").click(function(e) {
          console.log("feedClick");
          myPet.feed();
          var upDate = myPet.render();
          $("#homeContent").html(upDate);
        });
      }
      feedPet();
    });
  }
  submitName();
}

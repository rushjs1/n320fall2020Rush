function hello() {
  var yo = "Mwuahahahaahahahahhah";
  console.log(yo);
}

$(document).ready(function() {
  superInit();
});

class VirtualRiot {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hunger = 0;
    this.energy = 100;
  }
  render() {
    return `<div id="homeContent">

    <p>Name : ${this.firstName} ${this.lastName} </p>
    <p>Hunger :${this.hunger} </p>
    <p>Energy : ${this.energy} </p>
    </div>`;
  }
  run() {
    this.hunger++;
    this.energy = this.energy - 5;
  }
  feed() {
    this.hunger--;
    this.energy++;
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
    $("#sleepBtn").css("display", "none");
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
      $("#sleepBtn").css("display", "flex");
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

      function sleep() {
        $("#sleepBtn").click(function(e) {
          console.log("sleepClick");
          myPet.sleep();
          var upDate = myPet.render();
          $("#homeContent").html(upDate);
        });
      }
      sleep();
    });
  }
  submitName();
}

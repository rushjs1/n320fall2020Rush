var canvas = document.getElementById("renderCanvas");

var engine = new BABYLON.Engine(canvas, true);

// app varrrs
var camera, scene, ball, goal, timeoutID, particalSystem;

//create scene instane
scene = createScene();

engine.runRenderLoop(function() {
  scene.render();
});

scene.registerAfterRender(function() {
  if (ball.intersectsMesh(goal, false)) {
    console.log("Goal");

    //move goal
    goal.position.x = Math.random() * 8 - 4;

    //play a partical burst
    particalSystem.manualEmitCount = 21;

    particalSystem.start();

    //position particals
    particalSystem.minEmitBox = ball.position;
    particalSystem.maxEmitBox = ball.position;

    //reset ball
    resetBall();
  }
});

function createScene() {
  var scene = new BABYLON.Scene(engine);

  camera = new BABYLON.UniversalCamera(
    "UC",
    new BABYLON.Vector3(0, 0, -15),
    scene
  );

  var light = new BABYLON.DirectionalLight(
    "lighty",
    new BABYLON.Vector3(0, -0.2, 1),
    scene
  );

  //enable physics
  var gravityVector = BABYLON.Vector3(0, -9.81, 0);
  var physicsPlugin = new BABYLON.CannonJSPlugin();

  scene.enablePhysics(gravityVector, physicsPlugin);

  //ball

  ball = new BABYLON.MeshBuilder.CreateSphere("sphero", { diameter: 1 }, scene);
  ball.physicsImpostor = new BABYLON.PhysicsImpostor(
    ball,
    BABYLON.PhysicsImpostor.SphereImpostor,
    { mass: 1, restitution: 0.0 },
    scene
  );

  //create Ground
  var ground = BABYLON.MeshBuilder.CreateGround(
    "ground",
    { height: 20, width: 20, subdivisions: 4 },
    scene
  );

  ground.position.y = -3;
  ground.position.z = 8;
  ground.physicsImpostor = new BABYLON.PhysicsImpostor(
    ground,
    BABYLON.PhysicsImpostor.BoxImpostor,
    { mass: 0, restitution: 0.9 },
    scene
  );
  ball.tag = "ball";

  //textures
  var mat = new BABYLON.StandardMaterial("base", scene);
  mat.diffuseTexture = new BABYLON.Texture("../images/ball.jpg", scene);

  ball.material = mat;

  //make a goal

  goal = new BABYLON.MeshBuilder.CreateBox(
    "goal",
    { height: 5, width: 5 },
    scene
  );
  goal.position.z = 7;
  goal.position.x = Math.random() * 8 - 4;

  // make  partical system
  particalSystem = new BABYLON.ParticleSystem("particals", 2000, scene);
  particalSystem.emitter = new BABYLON.Vector3(0, 0, 0);
  particalSystem.minEmitPower = 1;
  particalSystem.maxEmitPower = 3;
  particalSystem.addVelocityGradient(0, 2);

  //load partical textures
  particalSystem.particleTexture = new BABYLON.Texture("images/ball.jpg");

  return scene;
}

function resetBall() {
  // reset position
  ball.position = new BABYLON.Vector3();

  //reset velocity
  ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3());
  ball.physicsImpostor.setAngularVelocity(new BABYLON.Vector3());

  //get rid of timeout if its set
  clearInterval(timeoutID);
}

window.addEventListener("click", function() {
  var pickResult = scene.pick(scene.pointerX, scene.pointerY);
  var selectedObject = pickResult.pickedMesh;
  if (selectedObject) {
    if (selectedObject.tag == "ball") {
      var surfaceNormal = pickResult.getNormal(true);

      var forceDirection = surfaceNormal.scale(-1000);

      selectedObject.physicsImpostor.applyForce(
        forceDirection,
        selectedObject.getAbsolutePosition()
      );

      timeoutID = setTimeout(resetBall, 3000);
    }
  }
});

//render loop

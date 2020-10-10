//upon the inital load of the page .. we want the following functions to be called in a particular order, we can do this here.
window.onload = () => {
  go();
};

go = () => {
  //method for click event
  wasClick = () => {
    // using event.target we can refrence only the specific element clicked and begin the animation below
    //gsap.to(event.target, { rotation: 7, x: 1000, duration: 5 });
    console.log(event.target);
    gsap.to(purpRect, { rotation: 7, x: 2000, duration: 5 });
    gsap.to(blueRect, { rotation: 7, x: 2000, duration: 5 });
    gsap.to(title, { rotation: 7, x: 2000, duration: 5 });
  };

  //title h1 element
  var title = document.getElementById("title");
  gsap.from(title, { rotation: 27, x: -200, duration: 1.7 });

  //blue Rectangle
  var blueRect = document.getElementById("blueRectContainer");
  gsap.from(blueRect, { rotation: 7, x: -1000, duration: 2 });

  // purple rectangles.. we need to use class name here because you can refrence multiple elements by their uniform class name. Unlike id, were it is supposed to be unique to one element.
  let purpRect = document.getElementsByClassName("purpRect");
  for (let i = 0; i < purpRect.length; i++) {
    gsap.from(purpRect[i], { rotation: 7, x: -2000, duration: 2.2 });
    //adding click events to each iterand of the loop
    purpRect[i].addEventListener("click", wasClick);
  }

  //add click events
  blueRect.addEventListener("click", wasClick);
  title.addEventListener("click", wasClick);

  //change color upon mouse click.
  blueRect.onmouseover = () => {
    if (blueRect.style.backgroundColor != "#DFFF00") {
      blueRect.style.backgroundColor = "#DFFF00";
    } else {
      blueRect.style.backgroundColor = "#000080";
    }
  };
};

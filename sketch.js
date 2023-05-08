let input, button, result, question, submit, answer;

let frame1, frame2, frame3, frame4;

// let Answer1;

let colorInput = document.getElementById('color-input');
let c;

function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

    result = createElement('p', 'Welcome to Elises archive for Digital Media Design');
    result.style('font-size', '30px');
    result.style('margin', '0px');
    result.style('text-align', 'center');
    result.style('font-family', 'Marola')
    result.style('padding', '20px 0px')
    result.style('margin', '20px 0px')
    result.id('answer');
    answer = document.getElementById('answer');
    colorInput.appendChild(answer);

  

    let button = createButton("Project One");
    button.id('one');
    yes = document.getElementById('one');
    colorInput.appendChild(one);
    button.mousePressed(clock);
    button.style('font-size', '30px');
    button.style('background-color', 'FFFFFF');
    button.style('border-style', 'inset')
    button.style('margin', '20px 0px')
    button.style('font-family', 'Marola')

    let button2 = createButton("Project Two");
    button2.id('two');
    absolutely = document.getElementById('two');
    colorInput.appendChild(two);
    button2.mousePressed(elise);
    button2.style('font-size', '30px');
    button2.style('background-color', 'FFFFFF');
    button2.style('border-style', 'inset')
    button2.style('margin', '20px 0px')
    button2.style('font-family', 'Marola')

    let button4 = createButton("Project Three");
    button4.id('three');
    absolutely = document.getElementById('three');
    colorInput.appendChild(three);
    button4.mousePressed(sam);
    button4.style('font-size', '30px');
    button4.style('background-color', 'FFFFFF');
    button4.style('border-style', 'inset')
    button4.style('margin', '20px 0px')
    button4.style('font-family', 'Marola')

  }
  
  function draw() {

  }
  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}

  function clock(){
    window.location.replace("project1.html")
  }

  function red(){
    window.location.replace("exhibitthree.html")
  }

  function sam(){
    window.location.replace("project3.html")
  }

  function elise(){
    window.location.replace("project2.html")
  }

  // function frame1(){


  // }

  let a = createA('next.html', 'next');


   








// function myInputEvent() {
//   console.log('you are typing: ', this.value());
// }

// function output() {
//   const answers = input.value();
//   input.value('');

//   let answer1 = createP('');
//   answer1.id('answer-1')
//   answer1.style('font-size', '30px');
//   answer1.style('margin', '0px');

//   let Answer1 = document.getElementById('answer-1');
//   colorInput.appendChild(Answer1);
//   Answer1.innerHTML = answers;

//   let a = createA('next.html', 'next');

  // if (answers == "yes"){
  //   Answer1.innerHTML = answers;
  //   let clock = createImg("images/clock.png");
  //   clock.size(439,287);
  //   clock.position(650, 350);
  //   a.id('next');
  //   colorInput.appendChild(next);
  // } else if (answers == "ya"){
  //   Answer1.innerHTML = answers;
  //   let sam = createImg("images/unclesam.png");
  //   sam.size(179,287);
  //   sam.position(450, 350);
  //   a.id('next');
  //   colorInput.appendChild(next);
  // } else if (answers == "yeah"){
  //   Answer1.innerHTML = answers;
  //   let red = createImg("images/red.png");
  //   red.size(200,287);
  //   red.position(200, 350);
  //   a.id('next');
  //   colorInput.appendChild(next);
  // } else if (answers == "hell yes") {
  //   Answer1.innerHTML = answers;
  //   let planet = createImg("images/planet.jpg");
  //   planet.size(180,287);
  //   planet.position(1100, 350);
  //   a.id('next');
  //   colorInput.appendChild(next);
  // } else {
  //   Answer1.innerHTML = "News flash: it wants to destroy you. <3";
  // }
     
  // }

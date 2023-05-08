let htmlBody = document.getElementById('html-body');
let c;

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('myArtwork1');

    result = createElement('p', 'I was given the opportunity to hand-code a website in response to the prompt “earliest internet memory”, and have creative control over what it looked like and the websites assets. My earliest internet memory would have to be logging into the computers in grade school and at my home computer, so I took that idea and ran with it. I was no one really until I got my real id and was put into the system. ');
    result.style('font-size', '30px');
    result.style('margin', '0px');
    result.style('text-align', 'center');
    result.style('font-family', 'Helvetica')
    result.style('padding', '20px 0px')
    result.style('margin', '20px 0px')
    result.style('color', '#FFFFFF')
    result.id('answer');
    result.position(20,30);
    answer = document.getElementById('answer');
    htmlBody.appendChild(answer);

    let button = createButton("HOME");
    button.id('one');
    yes = document.getElementById('one');
    htmlBody.appendChild(one);
    button.mousePressed(home);
    button.style('font-size', '30px');
    button.style('background-color', 'FFFFFF');
    button.style('border-style', 'inset');
    button.style('margin', '20px 0px');
    button.style('font-family', 'Marola');
    button.position(550, 500);

    let button2 = createButton("VIEW PROJECT");
    button2.id('two');
    absolutely = document.getElementById('two');
    htmlBody.appendChild(two);
    button2.mousePressed(memory);
    button2.style('font-size', '30px');
    button2.style('background-color', 'FFFFFF');
    button2.style('border-style', 'inset')
    button2.style('margin', '20px 0px')
    button2.style('font-family', 'Marola');
    button2.position(730, 500);


    // frame1 = createImg("images/frame1.png");
    // frame1.position(600, 60);
    // frame1.size(420,600);
    // frame1.id('red')
    // Frame1 = document.getElementById('red');
    // colorInput.appendChild(Frame1);
    // frame1.mousePressed(upclose1);

    // frame2 = createImg("images/frame2.png");
    // frame2.position(1500, 60);
    // frame2.size(514,600);
    // frame2.id('planet')
    // Frame2 = document.getElementById('planet');
    // colorInput.appendChild(Frame1);
    // frame2.mousePressed(upclose2);


    

}

function draw() {
}

function windowResized() {
  // resize the canvas when the screen is resized.
  resizeCanvas(windowWidth, windowHeight);
}

  function memory(){
    window.location='https://uhhhhleese.github.io/wwhatisgoingon/'
  }
  function home(){
    window.location.replace("index.html")
  }


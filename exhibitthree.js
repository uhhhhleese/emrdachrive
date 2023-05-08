let htmlBody = document.getElementById('html-body');
let c;

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('myArtwork1');

    result = createElement('p', 'When assigned to build an interactive website that has the feature of input and output, I knew I wanted to achieve this by making a 2D walk through gallery. As if you were in a museum choosing different interactive exhibits to look at, this website achieves just that providing three different exhibits for three different experiences.');
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
    window.location='https://uhhhhleese.github.io/thegallerybyelise/'
  }
  function home(){
    window.location.replace("index.html")
  }


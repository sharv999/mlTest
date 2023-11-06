// Globals
let classifier;
let img;

// ml5 preload function
function preload() {
  classifier = ml5.imageClassifier('MobileNet', modelReady);
}

// ml5 setup function
function setup() {
  createCanvas(400, 400);
  img = createImg('images/bird.jpg', imageReady);
  img.hide();
  background(0);
}

// callback function for when the model is ready
function modelReady() {
	console.log('Model ready');
	classifier.classify(img, gotResult);
}

// callback function for when the image is ready
function imageReady() {
	image(img, 0, 0, width, height);
}

// A callback function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  } else {
    // The results are in an array ordered by confidence.
    console.log(results);
    createDiv(`Label: ${results[0].label}`);
    createDiv(`Confidence: ${nf(results[0].confidence, 0, 2)}`);
  }
}

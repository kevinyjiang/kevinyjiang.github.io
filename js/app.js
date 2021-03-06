var logo = document.getElementById('logoAnimation');
var code = document.getElementById('codeAnimation');
var photo = document.getElementById('photoAnimation');
var music = document.getElementById('musicAnimation');

document.getElementById('code').addEventListener('mouseover', function() {
  codeAnim.setDirection(1);
  codeAnim.play();
});

document.getElementById('code').addEventListener('mouseout', function() {
  codeAnim.setDirection(-1);
  codeAnim.play();
});

document.getElementById('photo').addEventListener('mouseover', function() {
  photoAnim.setDirection(1);
  photoAnim.play();
});

document.getElementById('photo').addEventListener('mouseout', function() {
  photoAnim.setDirection(-1);
  photoAnim.play();
});

document.getElementById('music').addEventListener('mouseover', function() {
  musicAnim.setDirection(1);
  musicAnim.play();
});

document.getElementById('music').addEventListener('mouseout', function() {
  musicAnim.setDirection(-1);
  musicAnim.play();
});


var logoAnim = lottie.loadAnimation({
  container: logo,
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'json/logo.json',
});

var codeAnim = lottie.loadAnimation({
  container: code,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'json/code.json',
});

var photoAnim = lottie.loadAnimation({
  container: photo,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'json/photo.json',
});

var musicAnim = lottie.loadAnimation({
  container: music,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'json/music.json',
});

logoAnim.setSpeed(.40);
codeAnim.setSpeed(.5);
musicAnim.setSpeed(.5);

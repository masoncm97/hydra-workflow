import Hydra from 'hydra-synth';
import image from '../assets/image.png';
import movie from '../assets/IMG_3037.mp4';
import '../styles.css';

var hydra = new Hydra({
  canvas: document.getElementById("hydra-canvas"),
  detectAudio: false,
  width: 1280, 
  height: 720
})

// Image

// s0.initImage(image)
// osc(6).modulate(src(s0),1).out(o0)

// Video 

s0.initVideo(movie)
src(s0).modulate(noise(4)).out(o0)
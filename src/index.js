import React from 'react'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from './app';
import Performance from './performance'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App/>
    ),
  },
  {
    path: "performance",
    element: <Performance/>
  },
]);

createRoot(document.getElementById("app")).render(
  <RouterProvider router={router} />
);

// Image

// s0.initImage(image)
// osc(6).modulate(src(s0),1).out(o0)

// Video 
// s0.initVideo(movie)
// src(s0).modulate(noise(3)).out(o0)

// osc( [1,10,50,100,250,500] ).out(o0)
// function r(min=0,max=1) { return Math.random()*(max-min)+min; }

// shape(4,1,0).repeat(20,10)
// 	.out()

// modulateScale(osc(4,0.1,0),1,1).out(o0)

// function r(min=0,max=1) { return Math.random()*(max-min)+min; }

// speed = 3
// shape(4,r(0.6,0.93),0).repeat(10,10).modulateRotate(osc(1,0.5,0).kaleid(15).scale(0.5),5,1).out(o0)

// solid(0.2,0.6,0.9).layer(osc(31.4,0).thresh(0.7).luma().modulate(osc(4,1).rotate(1),0.05).color(0,0,0)).layer(osc(31.4,0).thresh(0.7).luma().modulate(osc(4,1).rotate(1),0.1)).out()

// solid(.5,1,.5).
//   layer(osc(150,0).
//     rotate( () => time%360 ).
//     thresh(0.2)).
//     modulate(osc(3,1).rotate(1).luma()).
//   mult(
//     solid(.5,1,.5).
//     layer(osc(150,0).
//       rotate( () => time%360 ).
//       thresh(0.2)).
//       modulate(osc(3,1).rotate(1).luma()).rotate(1)
//     )
// .out()

// osc(50, .01, ({time}) => Math.sin(time/10) * 100).
//   diff(
//     osc(50, -0.01, ({time}) => Math.sin(time/10) * 100).
//     rotate(1)
//   ).kaleid(15).kaleid(15).
// out(o0)

// src(o0).modulateHue(
//   osc(50, .01).
//   thresh(0.5).diff(
//       osc(50, -0.01).
//       thresh(0.5).
//       rotate(1)
//     ), 10
// ).
// luma(0.5,1).
// out(o1)

// render(o1)


// modulate(osc(4,1).
// rotate(1),0.05)
// .color(0,0,0)

// layer(
//   osc(31.4,0).
//   thresh(0.7).
//   luma().
//   modulate(
//     osc(4,1).
//       rotate(1)
//       ,0.1)
//     )
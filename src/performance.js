import Canvas from './canvas'
import image from '../assets/image.png'
import movie from '../assets/IMG_3037.mp4'
import car from '../assets/XT042387.mp4'
import React from 'react'
import REGL from 'regl';
import { Hydra, generators } from 'hydra-ts';

function Performance() {

    const regl = REGL()
    const hydra = new Hydra({
        regl,
        width: 1080,
        height: 1080,
    });

    const { src, osc, gradient, shape, voronoi, noise, solid } = generators
    const { sources, outputs } = hydra

    const [s0, s1, s2, s3] = sources
    const [o0, o1, o2, o3] = outputs
    const { hush, loop, render, synth } = hydra

    function Image() {
        s0.initImage(image)
        osc(6).modulate(src(s0), 1).out(o0)
    }

    function Video() {
        s0.initVideo(car)
        src(s0).modulateRotate(noise(3)).out(o0)
    }

    return (
        <div>
             <p>lit</p>
            <Canvas creation={Video} loop={loop}></Canvas>
        </div>
    )
}

export default Performance;
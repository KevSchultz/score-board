/**
 * App.js
 * 
 * This is the main component of the application. It initializes the particle engine
 * and renders the Score component. The particle engine is used for creating a 
 * dynamic background effect. The Score component is responsible for displaying 
 * and managing the score.
 * 
 * @module App
 */

import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import "./style.css";
import particlesOptions from "./particles.json";
import ScoreBoard from "./ScoreBoard";
import ChristmasPingPong from './christmaspingpong.png';


function App() {
    const [init, setInit] = useState(false); // Whether the particle engine has been initialized

    useEffect(() => {
        // If the particle engine has already been initialized, do nothing
        if (init) {
            return;
        }

        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });

    }, []);

    return (
        <div className="App">
            {init && <Particles options={particlesOptions} />}
            <ScoreBoard />
            <img src={ChristmasPingPong} id="christmas-ping-pong" />
        </div>
    );
}

export default App;

/**
 * ScoreBoard.js
 * 
 * This component is responsible for managing and displaying the score in the application.
 * It uses the Material-UI library for UI components and the Flip component for a flip clock effect.
 * The score is limited between 0 and 99.
 * 
 * @module ScoreBoard
 */

import React from "react";

import { useEffect } from "react";
import { useState } from "react";

import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

import ChristmasPingPong from './christmaspingpong.png';
import Flip from "./Flip";
import "./style.css";

function limitScore(score) {
    if (score > 99) {
        return 99;
    }
    if (score < 0) {
        return 0;
    }
    return score;
}

function ScoreBoard() {
    const [playerOneScore, setPlayerOneScore] = useState(0);
    const [playerTwoScore, setPlayerTwoScore] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPlayerTwoScore(playerTwoScore => playerTwoScore > 0 ? playerTwoScore - 1 : 0);
        }, 500);
        return () => clearInterval(interval);
    });

    return (
        <>
            <div class="lightrope">`
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="score-board">
                <div className="score-column">
                    <Card className="score-card">
                        <Flip value={playerOneScore.toString().padStart(2, '0')} />
                    </Card>
                    <Card className="score-card">
                        <IconButton
                            className="score-button"
                            variant="contained"
                            onClick={e => setPlayerOneScore(limitScore(playerOneScore - 1))}
                        >
                            <RemoveIcon className="score-icon" />
                        </IconButton>
                        <IconButton
                            className="score-button"
                            variant="contained"
                            onClick={e => setPlayerOneScore(limitScore(playerOneScore + 1))}
                        >
                            <AddIcon className="score-icon" />
                        </IconButton>
                    </Card>
                    <Card className="score-card">
                        <Typography className="score-typography">
                            (Kevin)
                        </Typography>
                    </Card>
                </div>
                <div className="score-column">
                    <Card className="score-card">

                        <Flip value={playerTwoScore.toString().padStart(2, '0')} />
                    </Card>
                    <Card className="score-card">

                        <IconButton
                            className="score-button"
                            variant="contained"
                            onClick={e => setPlayerTwoScore(limitScore(playerTwoScore - 1))}
                        >
                            <RemoveIcon className="score-icon" />
                        </IconButton>
                        <IconButton
                            className="score-button"
                            variant="contained"
                            onClick={e => setPlayerTwoScore(limitScore(playerTwoScore + 1))}
                        >
                            <AddIcon className="score-icon" />
                        </IconButton>
                    </Card>
                    <Card className="score-card">
                        <Typography className="score-typography">
                            (Kaitlin)
                        </Typography>
                    </Card>
                </div>
            </div >
        </>
    );

}

export default ScoreBoard;
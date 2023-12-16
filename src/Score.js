import React, { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import { Button, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Flip from "./Flip";
import "./App.css";

function limitScore(score) {
    if (score > 99) {
        return 99;
    }
    if (score < 0) {
        return 0;
    }
    return score;
}

function Score() {
    const [playerOneScore, setPlayerOneScore] = useState(0);
    const [playerTwoScore, setPlayerTwoScore] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPlayerTwoScore(playerTwoScore => playerTwoScore > 0 ? playerTwoScore - 1 : 0);
        }, 1000);
        return () => clearInterval(interval);
    });

    return (
        <>
            <div className="scores" style={{marginTop: '100px'}}>
                <div>
                    <Flip value={playerOneScore.toString().padStart(2, '0')} />
                    <IconButton
                        style={{ color: '#ff0000' }}
                        variant="contained" onClick={e => setPlayerOneScore(limitScore(playerOneScore - 1))}>
                        <RemoveIcon style={{ fontSize: '100px' }} />
                    </IconButton>
                    <IconButton
                        style={{ color: '#ff0000' }}
                        variant="contained" onClick={e => setPlayerOneScore(limitScore(playerOneScore + 1))}>
                        <AddIcon style={{ fontSize: '100px' }} />
                    </IconButton>
                    <Typography style={{ fontSize:'100px', color: "white", fontFamily: 'Great Vibes, cursive' }}>
                        Kevin
                    </Typography>
                </div>
                <div>
                    <Flip value={playerTwoScore.toString().padStart(2, '0')} />
                    <IconButton
                        style={{ color: '#ff0000' }}
                        variant="contained" onClick={e => setPlayerTwoScore(limitScore(playerTwoScore - 1))}>
                        <RemoveIcon style={{ fontSize: '100px' }} />
                    </IconButton>
                    <IconButton
                        style={{ color: '#ff0000' }}
                        variant="contained" onClick={e => setPlayerTwoScore(limitScore(playerTwoScore + 1))}>
                        <AddIcon style={{ fontSize: '100px' }} />
                    </IconButton>
                    <Typography style={{ fontSize:'100px', color: "white", fontFamily: 'Great Vibes, cursive' }}>
                        Kaitlin
                    </Typography>
                </div>
            </div>
            <div className="buttons">
            </div>
        </>
    );

}

export default Score;
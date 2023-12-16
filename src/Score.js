import React, { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import { Button, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ChristmasPingPong from './christmaspingpong.png';
import Box from '@mui/material/Box';
import Flip from "./Flip";
import Card from '@mui/material/Card';
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
        }, 10000);
        return () => clearInterval(interval);
    });

    return (
        <>
            <div className="scores" style={{ marginTop: '100px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div>
                        <div style={{ borderRight: '5px solid white' }}>
                            <Flip value={playerOneScore.toString().padStart(2, '0')} />
                        </div>
                        <div>
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
                        </div>
                        <Typography style={{ fontSize: '100px', color: "white", fontFamily: 'Great Vibes, cursive' }}>
                            Kevin
                        </Typography>
                    </div>
                    <div>
                        <div style={{ borderLeft: '5px solid white'}}>
                            <Flip value={playerTwoScore.toString().padStart(2, '0')} />
                        </div>
                        <div>
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
                        </div>
                        <Typography style={{ fontSize: '100px', color: "white", fontFamily: 'Great Vibes, cursive' }}>
                            Kaitlin
                        </Typography>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center' }}>
                <Box component="img" sx={{ height: 300, width: 300, transform: 'translateY(-300px)' }} src={ChristmasPingPong} />
            </div>
        </>
    );

}

export default Score;
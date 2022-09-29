import React from 'react'
import { Button } from '../components/Button'
import { useState } from 'react';

export const Tictactoe = () => {

    const [turn, setTurn] = useState("x");
    const[cells,setcells ]=useState(Array(9).fill(''));
    const [winner,setWinner]=useState();

    const checkWinner = (squares)=>{
        let combos = {
            horizontal :[
                [0,1,2],
                [3,4,5],
                [6,7,8],
            ],
            vertical: [
                [0,3,6],
                [1,4,7],
                [2,5,8],
            ],
            diagnol: [
                [0,4,8],
                [2,4,8],
            ],
        };
        for(let combo in combos){
            combos[combo].forEach(patterns => {
                if(
                    squares[patterns[0]]==='' ||
                    squares[patterns[1]]==='' ||
                    squares[patterns[2]]===''
                ){
                     //do noting
                }else if(
                    squares[patterns[0]]===squares[patterns[1]]&&
                    squares[patterns[1]]===squares[patterns[2]]
                ){
                    setWinner(squares[patterns[0]]);
                }

            });
        }

    };


    const clickButton = (value) => {
        if(cells[value]!==''){
            console.log(" it is already clicked...."); 
            return;
    
        }
        let squares=[...cells];


        if (turn === "x") {
            squares[value]="x";
            setTurn('0')
        } else {
            squares[value]="0";
            setTurn("x")
        }
        checkWinner(squares);
        setcells(squares);
        console.log("button is clicked...", value);
        console.log("value ...", squares);

    };

    const Button = ({ value }) => {
       
        return (
            
                <button onClick={() => clickButton(value)} className="buttons">{cells[value]}</button>
            
        )
    };
    const restartGame= ()=>{
        setWinner(null);
        setcells(Array(9).fill(''))
    }



    return (
        <>
            <h1>turn {turn}</h1>
            <div className='Containeer'>
                <table>
                    <tbody>
                        <tr>
                            <td><Button value={0} /></td>
                            <td><Button value={1} /></td>
                            <td><Button value={2} /></td>
                        </tr>
                        <tr>
                            <td><Button value={3} /></td>
                            <td><Button value={4} /></td>
                            <td><Button value={5} /></td>
                        </tr>
                        <tr>
                            <td><Button value={6} /></td>
                            <td><Button value={7} /></td>
                            <td><Button value={8} /></td>
                        </tr>

                    </tbody>
                </table>
                
 
            </div>
        {winner &&(
                <>
                <p> {winner} is the winner</p> 
                <button onClick={restartGame}>play again</button>
                </>
            )}
       

        </>
    )
}

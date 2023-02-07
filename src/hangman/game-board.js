import LetterGrid from './letter-grid';
import ButtonGrid from './button-grid';
import {useState} from 'react';

function GameBoard({secretWord,maxErrors,isShown}){
    const [guessedLetters,setGuessedLetters] = useState([]);
    const [errorCount,setErrorCount] = useState(0);
    function letterGuessedHandler(letter){
        let val = letter.toLowerCase();
        if (secretWord.toLowerCase().indexOf(val) === -1){
            setErrorCount(errorCount +1);
        }
        setGuessedLetters(prev => [...prev,val]);
    }
    return (
        <div className={isShown ? "" : "hidden"}>
            <div>Mistakes Left: {maxErrors - errorCount}</div>
            <LetterGrid secretWord={secretWord} guessedLetters={guessedLetters}/>
            <ButtonGrid letterGuessed={letterGuessedHandler} isShown={errorCount < maxErrors}/>
        </div>
    );
}
export default GameBoard;
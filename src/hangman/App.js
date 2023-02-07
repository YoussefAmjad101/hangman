import '../App.css';
import GameBoard from './game-board';
import WordSelect from './word-select';
import {useState} from 'react';

function App() {
  const [secretWord,setSecretWord] = useState('');

  return (
    <div className="app-container">
     <h1> Welcome to Hangman !</h1>
     <p>Do you want to play a game ?</p>
     <div className="board">
       <WordSelect isShown={!secretWord} WordSelected={val => setSecretWord(val)} />
       <GameBoard secretWord={secretWord} maxErrors={5} isShown={secretWord}/>
     </div>
    </div>
  );
}

export default App;

import { useState } from "react";

function WordSelect({WordSelected,isShown}){
    const [secretWord,setSecretWord] = useState("");
    return (
        <div className={isShown ? '' : 'hidden'}>
            <input type="text" onChange={(e) => setSecretWord(e.target.value)} />
            <button onClick={e => WordSelected(secretWord)}>Set Word</button>

        </div>
    );
}
export default WordSelect;
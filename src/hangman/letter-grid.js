import Letter from './letter' 

function LetterGrid({secretWord,guessedLetters}){
    let letters = secretWord.split("").map((letter,index) => { 
        let isShown = guessedLetters.indexOf(letter.toLowerCase()) > -1;
        return (<Letter value={letter} isShown={isShown} key={index} />)});
    return (
        <div className="flex">
            {letters}
        </div>
    );
}
export default LetterGrid;
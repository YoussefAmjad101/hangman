import Button from './button' 

function ButtonGrid({letterGuessed,isShown}){
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
        'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let buttons = letters.map((letter,index) => 
    (<Button value={letter} key={index} onClick={letterGuessed}/>)
    );
    let className = "flex flex-wrap";
    if (!isShown){
        className += " hidden";
    }
    return (
        <div className={className}>
            {buttons}
        </div>
    );
}
export default ButtonGrid;
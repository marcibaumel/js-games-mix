import {useEffect, useState} from "react";

const width = 8;
const candyColors = [
    'blue',
    'green',
    'orange',
    'purple',
    'red',
    'yellow'
]

const App = () => {
    const [currentColorArrangement, setCurrentColorArrangement] = useState([])

    const checkForColumnOfThree = () =>{
        
    }

    const createBoard = () =>{
        const randomColorArrangement = [];

        for(let i = 0; i<width*width; i++){
            const randomNumberFrom0To5 = Math.floor(Math.random() * candyColors.length);
            const randomColor = candyColors[randomNumberFrom0To5];
            randomColorArrangement.push(randomColor);
        }
        setCurrentColorArrangement(randomColorArrangement);
    }

    useEffect(() => {
        createBoard();
    }, [])

    console.log(currentColorArrangement)

  return (
    <div className="app">
        <div className="game">
            {currentColorArrangement.map((candyColors, index) => (
                <img
                    key={index}
                    style = {{backgroundColor: candyColors}}
                    alt={candyColors}
                />
                ))}
        </div>
    </div>
  );
}

export default App;

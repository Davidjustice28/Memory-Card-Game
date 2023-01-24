import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import "./app.css"

function App() {
  const [CARDS,setCards] = useState(["bmw", "challenger", "corvette", "ferrari", "gwagon", "mustang", "porshe", "supra"])
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [choices, setChoices] = useState([])

  const shuffleCards = () => {
    let previousCards = [...CARDS]
    let newList = []
    while(newList.length < 8) {
      let index = Math.round(Math.random() *10)
      console.log(index)
      if(index < 8 && !newList.includes(CARDS[index])) {
        newList.push(CARDS[index])
        previousCards.splice(index,1)
      }
    }
    setCards(newList)
  }


  const pickCard = (value) => {
    if(choices.includes(value)) {
      if(score > bestScore) {
        setBestScore(score)
        shuffleCards()
      }
      // alert(`Oops. You already picked the ${value.toUpperCase()} card.`)
      document.getElementById("pop-up").style.display = "flex"
      return
    }else {
      let list = choices
      list.push(value)
      setChoices(list)
      setScore(score + 1)
      shuffleCards()
    }
  }

  const playAgain = () => {
    document.getElementById("pop-up").style.display = "none"
    setScore(0)
    setChoices([])
}

  const resetGame = () => {
    setScore(0)
    setBestScore(0)
    setChoices([])
    shuffleCards()
  }

  useEffect(() => {
    console.log(choices)
  },[choices])

  return (
    <div className="App">
      <header>
        <span id="app-title"><span class="material-symbols-outlined">sports_score</span><span id="title-text">Sports Car Memory Game</span></span>
        <div className="scores-div">
          <p>Score: {score}</p>
          <p>Best Score: {bestScore}</p>
        </div>
      </header>
      <p id="i">Pick as many cards as possible without selecting any previous choices.</p>
      <section id="cards-section">
        {CARDS.map((c) => {
          return (
            <Card title={c} altText={c} func={pickCard} key={CARDS.indexOf(c)}></Card>
      )
        })}
      </section>
      <button id="reset-button" onClick={resetGame}>Reset Game</button>
      <div id="pop-up">
        <h1>Game Over</h1>
        <p>Score: {score}</p>
        <button id="try-again" onClick={playAgain}>Try Again</button>
      </div>
    </div >
  );
}

export default App;

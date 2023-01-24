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
      alert(`Oops. You already picked the ${value.toUpperCase()} card.`)
      setScore(0)
      setChoices([])
      return
    }else {
      let list = choices
      list.push(value)
      setChoices(list)
      setScore(score + 1)
      shuffleCards()
    }
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
        <span id="app-title"><span class="material-symbols-outlined">sports_score</span>Sports Car Memory Game</span>
        <div className="scores-div">
          <p>Score: {score}</p>
          <p>Best Score: {bestScore}</p>
        </div>
      </header>
      <section id="cards-section">
        {CARDS.map((c) => {
          return (
            <Card title={c} altText={c} func={pickCard} key={CARDS.indexOf(c)}></Card>
      )
        })}
      </section>
      <button id="reset-button" onClick={resetGame}>Reset Game</button>
    </div >
  );
}

export default App;

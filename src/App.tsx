import { useState, useEffect } from 'react';
import styles from "./app.module.css";
import style from "../src/components/Letter/styles.module.css"

import { Header } from "./components/Header/header";
import { Tip } from './components/Tip/tip';
import { Letter } from './components/Letter/letter';
import { Input } from './components/Input/input';
import { Button } from './components/Button/button';
import { LetterUsed, LetterUsedProps } from './components/LetterUsed/letterused';

import { WORDS, Challenge } from './utils/words';

function App() {
  const [score, setScore] = useState(0)
  const [letter, setLetter] = useState("");
  const [lettersUsed, setLettersUsed] = useState<LetterUsedProps[]>([{value: "D", correct: true}])
  const [challenge, setChallenge] = useState<Challenge | null>(null);

  function handleConfirm () {
   if (!challenge) {
     alert ("")
   }

   if (!letter.trim()) {
      alert("Digite uma letra")
   }

   const value = letter.toUpperCase()
   const exist = lettersUsed.find((used)=> used.value.toUpperCase() === value) 

  if(exist){
    return alert(`Você já tentou a letra ${value}`)
  }

  const hits = challenge?.word.toUpperCase().split("").filter((char) => char === value).length || 0
  const correct = hits > 0
  const currentScore = score + hits

  setLettersUsed((prevState) => [...prevState, {value, correct}])
  setScore(currentScore)
  setLetter("")
  }

  function handleRestartGame() {
    const isConfirmed = window.confirm("Quer mesmo reiniciar o jogo?");

    if (isConfirmed) {
      startGame()
    }
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length);
    const randomWord = WORDS[index];

    setChallenge(randomWord);
    setScore(0);
    setLettersUsed([])
    setLetter("");
  } 

  function endGame (message: string){
    alert(message)
    startGame()
  }

  useEffect(() => {
    startGame();
  }, []);

  useEffect(() => {
    if (!challenge) {
      return
    }
     setTimeout(() => {
      if (score === challenge.word.length) {
        return endGame("Parabéns, você concluiu esta etapa do jogo :)")
      }

      const attemptLimit = challenge.word.length + 3
      if (lettersUsed.length === attemptLimit) {
        return endGame("Você chegou ao número máximo de tentativas :(")
      }
     }, 1000)
  }, [score, lettersUsed.length]);

  if (!challenge) {
    return null;
  }

  return ( 
    <div className={styles.container}>
      <main>
        <Header current={lettersUsed.length} max={challenge.word.length + 3} onRestart={handleRestartGame}/> 

        <Tip tip={challenge.tip}/>

        <div className={styles.word}>
          {
            challenge.word.split("").map((letter, index) => {
              if (letter === " ") {
                return <Letter key={index} value='-' color='default'/>
              }
              const letterUsed = lettersUsed.find((used)=> used.value.toUpperCase() === letter.toUpperCase())
              return (
              <Letter key={index} value={letterUsed?.value} color={letterUsed?.correct ? "correctInt" : "default"}/>
            )})}
        </div>

        <h4>Palpite</h4>

        <div className={styles.guesses}>
          <Input onChange={(e) => setLetter(e.target.value)} maxLength={1} placeholder='?' value={letter}/>
          <Button title='Confirmar' onClick={handleConfirm}/>
        </div> 

        <div className={styles.border}></div>

        <LetterUsed data={lettersUsed}/>

      </main>
    </div>
  );
}

export default App;

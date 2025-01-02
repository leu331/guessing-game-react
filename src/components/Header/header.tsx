
import logo from "../../assets/logo.png"

import restartLogo from "../../assets/Frame.svg"

import styles from "./styles.module.css"

type Props = {
    current: number,
    max: number,
    onRestart: () => void 
}

export function Header({current, max, onRestart}: Props){
    return <div className={styles.container}>
        <img src={logo} alt="Logo do jogo" />

        <header>
            <span>
            <strong>{current}</strong> de {max} tentativas 
            </span>

            <button type="button" onClick={onRestart}> <img src={restartLogo} alt="icone de resetar o jogo"/></button>
        </header>
    </div>
}


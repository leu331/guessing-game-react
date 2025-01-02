import tipLogo from "../../assets/tip.svg"

import styles from "./styles.module.css"

type Props = {
    tip: string
}

export function Tip({tip}: Props) {
    return <section className={styles.tip}>
        
        <button>
        <img src={tipLogo} alt="ícone de dica" />
        </button>

        <div>
            <h3>Dica</h3>
            <p>{tip}</p>
        </div>
    </section>
}

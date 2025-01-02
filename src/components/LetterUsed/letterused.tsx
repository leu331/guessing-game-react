import styles from "./styles.module.css"

import { Letter } from "../Letter/letter"

export type LetterUsedProps = {
    value: string,
    correct: boolean
}

type Props = {
    data: LetterUsedProps[]
}

export function LetterUsed ({data}: Props) {
    return (
    <div className={styles.letterused}>
        <h5>Letras utilizadas</h5>
    
        <div>
            {
            data.map(({value, correct}) =>(
                <Letter value={value} size="small" color={correct ? "correct" : "wrong"} key={value}/>
            ))}
            
          
        </div>
        </div>

        
    )
}
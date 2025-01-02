import styles from "./styles.module.css"

export function Input ({...rest}: React.ComponentProps<"input">) {
    return ( 
    <div className={styles.input}>
        <input type="text" {...rest}/>
    </div>
    )
}
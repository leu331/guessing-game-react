import styles from "./styles.module.css"

type Props = React.ComponentProps<"button"> & {
    title: string
}

export function Button ({title, ...rest}: Props) {
    return <div className={styles.button} >
        <button {...rest}>{title}</button>
    </div>
}
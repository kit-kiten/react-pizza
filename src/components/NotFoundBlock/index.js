import styles from './style.module.scss'

function NotFoundBlock() {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>
                😕<br />
                <span>
                    Ничего не найдено
                </span>
            </h2>
            <p className={styles.description}>
                Данная страница отсутствует в интернет-магазине
            </p>
        </div>
    )
}

export default NotFoundBlock;
import styles from './CommentSection.module.css';

export function CommentSection() {
    return (
        <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>
            <textarea placeholder="Deixe um comentário" />

            <footer>
                <button type='submit'>Comentar</button>
            </footer>
        </form>
    )
}
import styles from './CommentSection.module.css';
import { CommentList } from './comment-list/CommentList';

export function CommentSection() {
    return (<>
        <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>
            <textarea placeholder="Deixe um comentário" />

            <footer>
                <button type='submit'>Comentar</button>
            </footer>
        </form>

        <div className={styles.commentList}>
            <CommentList />
        </div>
    </>)
}
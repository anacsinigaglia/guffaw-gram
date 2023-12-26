import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './CommentList.module.css';
import { profilePicture } from '../../sidebar/Sidebar';

export function CommentList() {
    return (
        <div className={styles.comment}>
            <img src={profilePicture} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Anokia Sinigalia</strong>
                            <time 
                                title="26 de Dezembro às 15:11"
                                dateTime='2022-12-26'
                            >
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    
                    <p>Muito bom!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20}/>
                        Aplaudir <span>28</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
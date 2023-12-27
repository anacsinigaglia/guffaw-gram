import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./CommentCard.module.css";
import { profilePicture } from "../../sidebar/Sidebar";

export function CommentCard({ comment }) {
  return (
    <div className={styles.comment}>
      <img src={profilePicture} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Anokia Sinigaglia</strong>
              <time title="26 de Dezembro às 15:11" dateTime="2022-12-26">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{comment}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>28</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./CommentCard.module.css";
import { profilePicture } from "../../sidebar/Sidebar";
import { useState } from "react";

export function CommentCard({ comment, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  const handleDeleteComment = () => onDeleteComment(comment);

  const handleLikeComment = () => setLikeCount(likeCount + 1);

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

            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{comment}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

import { CommentForm } from "./comment-form/CommentForm";
import { CommentCard } from "./comment-card/CommentCard";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import styles from "./PostCard.module.css";
import { useState } from "react";

export function PostCard({ author, publishedAt, content }) {
  const [comments, setComments] = useState([1, 2]);
  const [newCommentText, setNewCommentText] = useState("");

  const formattedPublishedDate = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );
  const formattedPublishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={formattedPublishedDate}
          dateTime={publishedAt.toISOString()}
        >
          {formattedPublishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map(({ type, text }, idx) => {
          if (type === "paragraph") {
            return (
              <>
                <p key={idx}>{text}</p>
                <br />
              </>
            );
          } else {
            return (
              <a href="" key={idx}>
                {" "}
                {text}
              </a>
            );
          }
        })}
      </div>

      <CommentForm
        setComments={setComments}
        newCommentText={newCommentText}
        setNewCommentText={setNewCommentText}
      />
      {comments.map((comment, idx) => (
        <div className={styles.commentList} key={idx}>
          <CommentCard comment={comment} />
        </div>
      ))}
    </article>
  );
}

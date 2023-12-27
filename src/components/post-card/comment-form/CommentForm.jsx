import styles from "./CommentForm.module.css";

export function CommentForm({
  setComments,
  newCommentText,
  setNewCommentText,
}) {
  const handleCreateNewComment = (e) => {
    e.preventDefault();
    setComments((prevValues) => [...prevValues, newCommentText]);
    setNewCommentText("");
  };

  const handleNewCommentChange = (e) => {
    setNewCommentText(e.target.value);
  };

  return (
    <form className={styles.commentForm}>
      <strong>Deixe seu feedback</strong>
      <textarea
        name="comment"
        placeholder="Deixe um comentário"
        value={newCommentText}
        onChange={handleNewCommentChange}
      />
      <footer>
        <button type="submit" onClick={handleCreateNewComment}>
          Publicar
        </button>
      </footer>
    </form>
  );
}

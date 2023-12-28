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
    e.target.setCustomValidity("");
    setNewCommentText(e.target.value);
  };

  const handleNewCommentInvalid = (e) => {
    e.target.setCustomValidity("Esse campo é obrigatório");
  };

  const isNewCommentInputEmpty = newCommentText.length === 0;

  return (
    <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
      <strong>Deixe seu feedback</strong>
      <textarea
        name="comment"
        placeholder="Deixe um comentário"
        value={newCommentText}
        onChange={handleNewCommentChange}
        onInvalid={handleNewCommentInvalid}
        required
      />
      <footer>
        <button type="submit" disabled={isNewCommentInputEmpty}>
          Publicar
        </button>
      </footer>
    </form>
  );
}

import { useParams, Link, useNavigate } from "react-router";
import { useState, useEffect, useContext } from "react";
import { deleteHoot, getHoot, createComment } from "../../services/hoots.js";
import { UserContext } from "../../contexts/UserContext.jsx";
import CommentForm from "../CommentForm/CommentForm.jsx";

function HootDetail() {
  const [hoot, setHoot] = useState(null);

  const { user } = useContext(UserContext);
  const { hootId } = useParams();
  const navigate = useNavigate();

  const fetchHoot = async () => {
    const hootData = await getHoot(hootId);
    setHoot(hootData);
  };

  useEffect(() => {
    fetchHoot();
  }, [hootId]);

  if (!hoot) return <main>Loading...</main>;

  const handledAddComment = async (commentFormData) => {
    await createComment(hootId, commentFormData);
    fetchHoot();
  };

  return (
    <main>
      <section>
        <header>
          <h1>{hoot.title}</h1>
          <p>{hoot.category?.toUpperCase()}</p>
          <p>
            {`${hoot.author?.username} posted on
            ${new Date(hoot.createdAt).toLocaleDateString()}`}
          </p>
        </header>
        <p>{hoot.text}</p>
        {hoot.author._id === user._id && (
          <>
            <Link to={`/hoots/${hoot._id}/edit`}>
              <button>Edit</button>
            </Link>
            <button
              onClick={() => {
                deleteHoot(hootId);
                navigate("/hoots");
              }}
            >
              Delete
            </button>
          </>
        )}
      </section>
      <section>
        <h2>Comments</h2>
        <CommentForm handleAddComment={handledAddComment} />
        {!hoot.comments?.length && <p>There are no comments.</p>}

        {hoot.comments?.map((comment) => (
          <article key={comment._id}>
            <header>
              <p>
                {`${comment.author.username} posted on
                ${new Date(comment.createdAt).toLocaleDateString()}`}
              </p>
            </header>
            <p>{comment.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default HootDetail;

import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";
import { getHoot } from "../../services/hoots.js";
import CommentForm from "../CommentForm/CommentForm.jsx";

function HootDetail() {
  const [hoot, setHoot] = useState({});
  const { hootId } = useParams();

  useEffect(() => {
    const fetchHoot = async () => {
      const hootData = await getHoot(hootId);
      setHoot(hootData);
    };
    fetchHoot();
  }, [hootId]);

  if (!hoot) return <main>Loading...</main>;

  const handledAddComment = async (commentFormData) => {
   const newComment = await hootService.createComment(hootId, commentFormData);
    setHoot({ ...hoot, comments: [...hoot.comments, newComment] });
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
        <Link to={`/hoots/${hoot._id}/edit`}>
          <button>Edit</button>
        </Link>
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

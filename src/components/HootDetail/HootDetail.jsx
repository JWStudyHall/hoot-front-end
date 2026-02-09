import { useParams, useContext } from "react-router";
import { useState, useEffect } from "react";
import { deleteHoot, getHoot } from "../services/hoots.js";
import { UserContext } from "../contexts/UserContext";

function HootDetail() {
  const { hootId } = useParams();
  const { user } = useContext(UserContext);
  const [hoot, setHoot] = useState(null);

  useEffect(() => {
    const fetchHoot = async () => {
      const hootData = await getHoot(hootId);
      setHoot(hootData);
    };
    fetchHoot();
  }, [hootId]);

  if (!hoot) return <main>Loading...</main>;

  return (
    <main>
      <section>
        <header>
          <p>{hoot.category.toUpperCase()}</p>
          <h1>{hoot.title}</h1>
          <p>
            {`${hoot.author.username} posted on
            ${new Date(hoot.createdAt).toLocaleDateString()}`}
          </p>
        </header>
        <p>{hoot.text}</p>
      </section>
      <section>
        <h2>Comments</h2>
        {!hoot.comments.length && <p>There are no comments.</p>}

        {hoot.comments.map((comment) => (
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
        <header>
          <p>{hoot.category.toUpperCase()}</p>
          <h1>{hoot.title}</h1>
          <p>
            {`${hoot.author.username} posted on
              ${new Date(hoot.createdAt).toLocaleDateString()}`}
          </p>
          {/* Add the following */}
          {hoot.author._id === user._id && (
            <>
              <button onClick={() => deleteHoot(hootId)}>Delete</button>
            </>
          )}
        </header>
      </section>
    </main>
  );
}

export default HootDetail;

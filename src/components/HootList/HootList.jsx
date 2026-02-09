import { Link } from "react-router";
import { useState, useEffect } from "react";
import { getHoots } from "../../services/hoots.js";

const HootList = () => {
  const [hoots, setHoots] = useState([]);

  useEffect(() => {
    const fetchAllHoots = async () => {
      const hootsData = await getHoots();
      setHoots(hootsData);
    };

    fetchAllHoots();
  }, []);

  return (
    <main>
      {hoots.map((hoot) => (
        <Link key={hoot._id} to={`/hoots/${hoot._id}`}>
          <article>
            <header>
              <h2>{hoot.title}</h2>
              <p>
                {hoot.author?.username || "Unknown"} posted on{" "}
                {new Date(hoot.createdAt).toLocaleDateString()}
              </p>
            </header>
            <p>{hoot.text}</p>
          </article>
        </Link>
      ))}
    </main>
  );
};

export default HootList;

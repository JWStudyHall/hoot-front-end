import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { getHoot, updateHoot } from "../../services/hoots";

export const HootEdit = () => {
  const [formData, setFormData] = useState({
    title: "",
    text: "",
    category: "News",
  });

  const { hootId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHoot = async () => {
      const hootData = await getHoot(hootId);
      setFormData(hootData);
    };
    fetchHoot();
  }, [hootId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateHoot(hootId, formData);
    navigate(`/hoots/${hootId}`);
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title-input">Title</label>
        <input
          required
          type="text"
          name="title"
          id="title-input"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="text-input">Text</label>
        <textarea
          required
          type="text"
          name="text"
          id="text-input"
          value={formData.text}
          onChange={handleChange}
        />
        <label htmlFor="category-input">Category</label>
        <select
          required
          name="category"
          id="category-input"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="News">News</option>
          <option value="Games">Games</option>
          <option value="Music">Music</option>
          <option value="Movies">Movies</option>
          <option value="Sports">Sports</option>
          <option value="Television">Television</option>
        </select>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  );
};

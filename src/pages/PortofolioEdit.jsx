import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PortofolioEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  useEffect(() => {
    const fetchabouts = async () => {
      const res = await axios.get(`http://localhost:4000/about/${id}`);
      setTitle(res.data.title);
      setDetail(res.data.detail);
    };
    fetchabouts();
  }, []);

  const updateAbout = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:4000/about/${id}`, {
        title,
        detail,
      });
      navigate("/");
    } catch (e) {
      alert(e);
    }
  };

  return (
    <form onSubmit={(e) => updateAbout(e)} className="question-form">
      <h1 className="question-form__title">Edit Portofolio</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        className="question-form__input"
      />
      <input
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
        type="text"
        className="question-form__input"
      />
      <button type="submit" className="btn btn-about">
        Update
      </button>
    </form>
  );
};

export default PortofolioEdit;

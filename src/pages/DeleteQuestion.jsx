import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteQuestion = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  useEffect(() => {
    const fetchQuestion = async () => {
      const res = await axios.get(`http://localhost:4000/questions/${id}`);
      setTitle(res.data.title);
      setDetail(res.data.detail);
    };
    fetchQuestion();
  }, []);

  const DeleteQuetion = async (e) => {
    e.preventDefault();

    try {
      await axios.delete(`http://localhost:4000/questions/${id}`, {
        title,
        detail,
      });
      navigate("/");
    } catch (e) {
      alert(e);
    }
  };

  return (
    <form onSubmit={(e) => DeleteQuetion(e)} className="question-form">
      <h1 className="question-form__title">Question {id}</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        className="question-form__input"
        disabled
      />
      <input
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
        type="text"
        className="question-form__input"
        disabled
      />
      <button type="submit" className="btn btn-primary">
        Delete
      </button>
    </form>
  );
};

export default DeleteQuestion;

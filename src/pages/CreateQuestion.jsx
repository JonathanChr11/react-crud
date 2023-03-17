import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CreateQuestion = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  useEffect(() => {
    const fetchQuestion = async () => {
      const res = await axios.get(`http://localhost:4000/questions/`);
      setTitle(res.data.title);
      setDetail(res.data.detail);
    };
    fetchQuestion();
  }, []);

  const insertQuestion = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`http://localhost:4000/questions/`, {
        title,
        detail,
      });
      navigate("/");
    } catch (e) {
      alert(e);
    }
  };

  return (
    <form onSubmit={(e) => insertQuestion(e)} className="question-form">
      <h1 className="question-form__title">Create Question</h1>
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
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
};

export default CreateQuestion;

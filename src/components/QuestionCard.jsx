import { Link } from "react-router-dom";

const QuestionCard = ({ title, detail, id }) => {
  return (
    <div className="card">
      <h5 className="card__title">{title}</h5>
      <p className="card__detail">{detail}</p>
      <div className="card__action">
        <Link className="btn btn-primary" to={`/question/${id}/edit`}>
          Edit
        </Link>
      </div>
      <div className="card__action">
        <Link className="btn btn-primary" to={`/question/${id}/delete`}>
          Delete
        </Link>
      </div>
    </div>
  );
};

export default QuestionCard;

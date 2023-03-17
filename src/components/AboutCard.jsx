import { Link } from "react-router-dom";

const AboutCard = ({ title, detail, id }) => {
  return (
    <div className="card">
      <h5 className="card__title">{title}</h5>
      <p className="card__detail">{detail}</p>
      <div className="card__action">
        <Link className="btn btn-about" to={`/about/${id}/edit`}>
          Edit
        </Link>
      </div>
    </div>
  );
};

export default AboutCard;

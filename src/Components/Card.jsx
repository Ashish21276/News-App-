import React from "react";

function Card(props) {
  return (
    <>
      <div className="col-4 my-2 ">
        <div className="card " style={{ width: "18rem" }}>
          <img
            src={
              props.curr.urlToImage
                ? props.curr.urlToImage
                : "https://assets.entrepreneur.com/content/3x2/2000/1642624507-shutterstock-1934875322.jpg"
            }
            className="card-img-top height"
            alt="..."
          />
          <div className="card-body">
            <div className="text-center">
              <span className="badge rounded-pill bg-success">
                {!props.curr.author ? "Unknown" : props.curr.author}
              </span>
            </div>
            <h5 className="card-title">{props.curr.title}...</h5>
            <p className="card-text ">{props.curr.description}</p>
            <a
              href={props.curr.url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary text-center"
            >
              Read More
            </a>
            <p className="card-text">
              <small className="text-muted">{props.curr.publishedAt} </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

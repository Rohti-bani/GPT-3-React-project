import "./article.css";

const Article = ({ image, para1, heading, para2 }) => {
  return (
    <div className="gpt3__article">
      <div className="gpt3__article-image">
        <img src={image} />
      </div>
      <div className="gpt3__article_container">
        <div className="gpt3__article_container-text">
          <p>{para1}</p>
          <h1>{heading}</h1>
        </div>
        <div className="gpt3__article_container-text-p2">
          <p>{para2}</p>
        </div>
      </div>
    </div>
  );
};

export default Article;

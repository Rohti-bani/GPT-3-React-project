import "./blog.css";
import img1 from "../../assets/blog01.png";
import img2 from "../../assets/blog02.png";
import img3 from "../../assets/blog03.png";
import img4 from "../../assets/blog04.png";
import img5 from "../../assets/blog05.png";
import Article from "../../Components/article/Article";

const Blog = () => {
  return (
    <div className="gpt3__blog" id="CaseStudies">
      <div className="gpt3__blog-heading">
        <h1>A lot is happening, We are blogging about it.</h1>
      </div>

      <div className="gpt3__blog_article-container">
        <div className="gpt3__blog_articleLeft">
          <Article
            image={img1}
            para1="Sep 26, 2021"
            heading="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            para2="Read Full Article"
          />
        </div>
        <div className="gpt3__blog_articleRight">
          <div className="gpt3__blog_articleRight_container1">
            <div className="gpt3__blog_articleRight_container1-article1">
              <Article
                image={img2}
                para1="Sep 26, 2021"
                heading="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                para2="Read Full Article"
              />
            </div>
            <div className="gpt3__blog_articleRight_container1-article2">
              <Article
                image={img3}
                para1="Sep 26, 2021"
                heading="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                para2="Read Full Article"
              />
            </div>
          </div>
          
          <div className="gpt3__blog_articleRight_container2">
            <div className="gpt3__blog_articleRight_container2-article3">
              <Article
                image={img4}
                para1="Sep 26, 2021"
                heading="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                para2="Read Full Article"
              />
            </div>
            <div className="gpt3__blog_articleRight_container2-article4">
              <Article
                image={img5}
                para1="Sep 26, 2021"
                heading="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                para2="Read Full Article"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;

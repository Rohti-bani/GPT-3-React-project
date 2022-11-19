import "./feature.css"

const Feature = ({title,text}) => {
  return (
    <div>
      <div className = "gpt3__whatGpt3-feature">
        <div className="gpt3__whatGpt3-feature-title">
          <div><span></span></div>
          <h1>{title}</h1>
        </div>
        <div className = "gpt3__whatGpt3-feature-text">
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default Feature

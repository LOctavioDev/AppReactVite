const Course = ({ title, image, subtitle }) => {
    return (
        <div>
          <img src = {image} alt={title} />
          <h2>{title}</h2>
          <p>{subtitle}</p> 
        </div>
    )
}

export default Course
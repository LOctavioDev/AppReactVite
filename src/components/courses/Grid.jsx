import Course from "./Curso";

function Grid(){
    return (
        <div className="main-content">
            <Course 
            title="Techniques for data analysis"
            subtitle = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem amet commodi totam, quasi accusantium aliquam sed mollitia"
            image = "https://edteam-media.s3.amazonaws.com/courses/medium/82daef93-44b7-4a0a-9910-42aa609c6eee.png"
            />

            <Course 
            title="JavaScript from scratch "
            subtitle = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem amet commodi totam, quasi accusantium aliquam sed mollitia"
            image = "https://edteam-media.s3.amazonaws.com/courses/medium/1fc49db5-2454-43e5-b94b-bed0d98719f2.png"
            />

            <Course 
            title="Java from scratch"
            subtitle = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem amet commodi totam, quasi accusantium aliquam sed mollitia"
            image = "https://edteam-media.s3.amazonaws.com/courses/medium/152be9d3-4704-4639-b399-203a76a286c5.jpg"
            />
        </div>
    )
}

export default Grid;
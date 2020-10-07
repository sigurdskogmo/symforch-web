import React from "react"

const Video = (props) => {
    return (
        <div>
            <iframe
                title={props.title}
                width="560"
                height="315" 
                src="https://www.youtube.com/embed/OEVUkf47IPA" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
            />
        </div>
    )
}

export default Video;
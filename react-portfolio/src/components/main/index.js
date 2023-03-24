import React from 'react'
// import './style.css'

const Projects = ({title, image, imageAlt, repo, url}) => {
    
    return (
        <div class="">
        <div class="">
            <h3 class="">{title}</h3>
            <img src={require('./Images/'+ image +'.png') || '#'} class="" alt={imageAlt} />
            <div class="card-body">
                <a href={repo} class="btn btn-primary m-2 ">Github Repository</a>
                <a href={url} class="btn btn-primary m-2 ">Deployed Application</a>
            </div>
        </div>
    </div>  
    )
}

export default Projects
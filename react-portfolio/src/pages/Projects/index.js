import React from 'react'
// import './style.css'
import Projects from '../../compnents/Projects'

const Portfolio = () => {
    const Project = [
        {
            title:"Little Library",
            image:"little-library",
            imageAlt:"image of little library app",
            repo:"https://github.com/HowardLee2022/Little-Library",
            url:"https://littlelibrary.herokuapp.com/"
        },
        {
            title:"Pokemon Deck Generator",
            image:"pokemon-deck-generator",
            imageAlt:"image of pokemon deck generator app",
            repo:"https://github.com/JJackielee/pokemon-deck-generator/",
            url:"https://jjackielee.github.io/pokemon-deck-generator/"
        },
        {
            title:"Note Taker",
            image:"notezfordayz",
            imageAlt:"image of note taker app",
            repo:"https://github.com/hermanea/note-taker",
            url:"https://notezfordayz.herokuapp.com/"
        },
        {
            title:"Quiz Time",
            image:"quiz-time",
            imageAlt:"image of quiz time app",
            repo:"https://github.com/hermanea/quiz-time",
            url:"https://hermanea.github.io/quiz-time/"
        },
        {
            title:"Work Scheduler",
            image:"work-scheduler",
            imageAlt:"image of work scheduler app",
            repo:"https://github.com/hermanea/work-scheduler-challenge05",
            url:"https://hermanea.github.io/work-scheduler-challenge05/"
        },
        {
            title:"Five Day Forecast",
            image:"five-day-forecast",
            imageAlt:"image of five day forecast app",
            repo:"https://github.com/hermanea/five-day-forecast-challenge06",
            url:"https://hermanea.github.io/five-day-forecast-challenge06/"
        }
    ]

    return (
        <div class="background">
            <div class="portfolioContainer">
                <br>
                </br>
                <h2 className="">Projects</h2>
                
                <div class="">
                    {Projects.map(work=><Project title={work.title} image={work.image} imageAlt={work.imageAlt} gitHub={work.repo} live={work.url}/>)}

                </div>
            </div>
        </div>
    )
}

export default Portfolio
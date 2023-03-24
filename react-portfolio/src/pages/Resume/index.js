// import './style.css'

const Resume = () => {

    return (
        <div className="">
            <div className="resumeContainer">
                
                <h2 className="">Resume</h2>
                
                <div className="">
                    <a href={resume} target='_blank' download="Resume_Andrew_Kim" class="">Download My Resume</a>
                </div>
                
                <h2 className="">Front End Proficiencies</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>REACT</li>
                    </ul>
                <h2 className="">Back End Proficiencies</h2>
                    <ul>
                        <li>MySql</li>
                        <li>MongoDB</li>
                        <li>Express</li>
                        <li>NodeJS</li>
                    </ul>
                <h2 className="">Other Proficiencies</h2>
                    <ul>
                        <li>GIS</li>
                        <li>Matlab</li>
                        <li>Textract</li>
                    </ul>
            </div>
        </div>
    )
}

export default Resume
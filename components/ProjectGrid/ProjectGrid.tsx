import { projectList } from "../../const/projectList"

export default function ProjectGrid() {
    return (
        <div className="project-grid">
            {
                projectList.map((project: any, id: number) => {
                    console.log(project)
                    return (
                        <div key={id} className="project-grid__item">
                            <img src={project.img.src} alt="test" />
                            <div style={{backgroundColor: project.background}} className="item-hover">
                                <p>{project.title}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
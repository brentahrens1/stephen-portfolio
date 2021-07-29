import Link from 'next/link'
import Image from 'next/image'
import { projectList } from "../../const/projectList"

export default function ProjectGrid() {
    return (
        <div className="project-grid">
            {
                projectList.map((project: any, id: number) => {
                    return (
                        <Link key={id} href={project.link}>
                            <a>
                                <div className="project-grid__item">
                                    <Image width={1000} height={600} layout="responsive" priority src={project.img.src} alt="test" />
                                    <div style={{backgroundColor: project.background}} className="item-hover">
                                        <p style={{color: `${project.color}`}}>{project.title}</p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    )
                })
            }
        </div>
    )
}
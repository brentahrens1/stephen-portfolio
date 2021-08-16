import Link from 'next/link'
import Image from 'next/image'
import { projectList } from "../../const/projectList"
import { motionList } from "../../const/projectList"

export default function ProjectGrid() {
    return (
        <>
        <div className="project-grid">
            {
                projectList.map((project: any, id: number) => {
                    return (
                        <Link key={id} href={project.link}>
                            <a>
                                <div className="project-grid__item">
                                    <Image width={1000} height={600} layout="responsive" priority={true} src={project.img.src} alt="test" />
                                    <div style={{backgroundColor: project.background}} className="item-hover">
                                        <p style={{color: `${project.color}`}}>{project.title}</p>
                                        <p style={{color: `${project.color}`}} className="subhead">{project.subhead}</p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    )
                })
            }
        </div>
        <h2>Motion</h2>
        <div className="motion-grid">
            {
                motionList.map((motion: any, id: number) => {
                    return (
                        <Link key={id} href={motion.link}>
                            <a>
                                <div className="motion-grid__item">
                                    <Image width={1000} height={600} layout="responsive" priority={true} src={motion.gif.src} alt="test" />
                                    <div style={{backgroundColor: motion.background}} className="item-hover">
                                        <p style={{color: `${motion.color}`}}>{motion.title}</p>
                                        <p style={{color: `${motion.color}`}} className="subhead">{motion.subhead}</p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    )
                })
            }
        </div>
        </>
    )
}
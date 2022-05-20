export default function Footer() {

    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <footer className="footer">
            <div className="footer__inner">
                <ul>
                    <li><a href="https://www.linkedin.com/in/stephen-galgano-bb231520a/" target="_blank" rel="noreferrer">Linkedin</a></li>
                    <li><a href="/resume/STEPHEN_GALGANO_GD_RESUME_2022.pdf">Resume</a></li>
                    <li><a href="mailto:stephenjgalgano@gmail.com">stephenjgalgano@gmail.com</a></li>
                </ul>
                <svg onClick={backToTop} className="back-to-top" width="16" height="35" viewBox="0 0 16 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.318192 7.76633L7.23182 0.341709C7.65607 -0.113903 8.34393 -0.113903 8.76818 0.34171L15.6818 7.76633C16.1061 8.22194 16.1061 8.96064 15.6818 9.41625C15.2576 9.87186 14.5697 9.87186 14.1454 9.41625L9.08637 3.98325L9.08637 35L6.91363 35L6.91363 3.98325L1.85455 9.41625C1.4303 9.87186 0.742447 9.87186 0.318192 9.41625C-0.106063 8.96064 -0.106062 8.22194 0.318192 7.76633Z" fill="#5F4F66"/>
                </svg>
            </div>
        </footer>
    )
}
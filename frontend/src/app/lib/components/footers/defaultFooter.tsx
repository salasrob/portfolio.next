
const DefaultFooter: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                           <a href="https://www.linkedin.com/in/robertsalas/">LinkedIn</a>
                        </div>
                        <p className="pt-3 text-center">
                            Designed on paper and built with Next.js and Tailwind CSS, deployed with Azure by Robert Salas.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default DefaultFooter;
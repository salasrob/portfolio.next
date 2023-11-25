
const DefaultFooter: React.FC = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                           <a href="https://www.linkedin.com/in/robertsalas/">LinkedIn</a>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;Robert Salas | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DefaultFooter;
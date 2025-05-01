const Alert = (props) =>{
    return (
        <div className="alert">
            {props.tema === "servis" ? "Hizmetlerimiz"
            : props.tema === "müsteri" ? "Müşteri Memnuniyeti"
            : props.tema === "galeri" ? "Fotoğraf Galerisi"
        : ""}

        </div>

    );
};
export default Alert ;
const Card = (props) =>{
    return(
        <div className="card">
            <img src={props.url} alt="" width={300}/>

            <div className="content">
                <h2>{props.title}</h2>
                <p>
                    {props.p}
                </p>
            </div>

        </div>
    );
};

export default Card ;
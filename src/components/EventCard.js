function EventCard (props) {
    return(
        <div className="eventCard">
            <img src={props.image}/>
            <div className="eventCard-info">
                <h1>{props.title}</h1>
                <h2>{props.location}</h2>
                <h3>{props.date}</h3>
            </div>
        </div>
    )
}

export default EventCard;
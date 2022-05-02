import './Card.css'

function Card(props) {
    return (
        <div className="Card">
            <img src="https://media-exp1.licdn.com/dms/image/C4D1BAQEokF1rY09G6A/company-background_10000/0/1606948917000?e=2147483647&v=beta&t=0gJ_oRumvRrlJP2OhxDBjMAtaD6SgCnsDPwQSd-08qI" />
            <div className='Card-info'>
                <h1>{props.title}</h1>
                <h2>{props.location}</h2>
            </div>
        </div>
    )
}

export default Card;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faCircle } from '@fortawesome/free-solid-svg-icons';

type CardProps = {
    name: string
}

export const Card = (props: CardProps) => {
    return (
        <div className="card">
            <div className="header">
                <img className="card-profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDNajgNyRBO7V-ow02dgPNtuWi5WvAoS0iGA&s" alt="" />
                <div className="info">
                    <h5 className="title">{props.name}</h5>
                    <div className="card-detail">
                        <div className="time">
                            <FontAwesomeIcon icon={faCalendarDays} />
                            <span>10:00 AM - 6:00 PM</span>
                        </div>
                        <div className="rating">
                            <FontAwesomeIcon icon={faCircle} />
                            <span style={{marginLeft: '5px'}}>4.5</span>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="card-image-container">
                <img className="card-image" src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/6483bb973b8f65001ea4755f.jpg" alt="" />
                <img className="card-image" src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/6483bb973b8f65001ea4755f.jpg" alt="" />
                <img className="card-image" src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/6483bb973b8f65001ea4755f.jpg" alt="" />
            </div>
        </div>
    )
}
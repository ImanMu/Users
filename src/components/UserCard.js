import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
function UserCard(props){
    const { singleUser } = props;
    return(
        <div>
        <div className="card h-100" >
        <img src={singleUser.image} className="card-img-top" alt="..." />
        <div className="card-body">
        {singleUser.is_verified ? <span className="badge rounded-pill text-bg-success ">
        Verified <FontAwesomeIcon icon={faCheckCircle}/> </span> :
                <span className="badge rounded-pill text-bg-danger" >Not Verified</span>}
            <h5 className="card-username">{singleUser.username}</h5>
            <h5 className="card-phone">phone: {singleUser.phone}</h5>
            <h5 className="card-email">Email: {singleUser.email}</h5>
            <p className="card-text"></p>
        </div>
    </div>
    </div>
    )
}
export default UserCard;
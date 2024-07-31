import { userList } from '../assets/Data';
import { useState } from "react";
import UserCard from './UserCard';
import NavBar from './NavBar';

function Users() {
    const [userArray, setUserArray] = useState(userList);
    const [notFound, setNotFound] = useState(false);
    const SearchForUser = (email) => {
        if (!email) {
            setUserArray(userList);
            setNotFound(true);
            return;
        }
        const filteredUser = userArray.filter(userList => userList.email == email);
        setUserArray(filteredUser);
        setNotFound(filteredUser.length === 0);
    }
    const resetUsers = () => {
        setNotFound(false);
        setUserArray(userList);
    }
    return (
        <>
        <NavBar singleUser={userList} handleSearch={SearchForUser} handleReset={resetUsers} />
        <div className="row row-cols-1 row-cols-md-3 g-5">
            {notFound && (
                <div className="alert alert-danger" role="alert">
                    User Not Found! 
                </div>
            )}
            {userArray.map(userList => {
                return (
                    <div className="col">
                        <UserCard singleUser={userList} />
                    </div>
                )
            })}
        </div>
        </>
    );
}
export default Users;



import { useState } from "react";
function Search(props) {
    const [email, setEmail] = useState('');
    const { handleSearch, handleReset } = props;

    return (
        <div className="navbar" style={{backgroundColor:'#F2F2F2', 
        marginBottom:'40px'}}>
            <p style={{fontSize:'40px', paddingLeft:'20px'}}>Users App</p>
            <div className="input-group" style={{ width: '600px', paddingRight:'20px' }}>
                <input type="text"
                    className="form-control"
                    placeholder="Enter an email address..."
                    aria-label="Recipient's username with two button addons"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn btn-primary"
                    type="button"
                    style={{backgroundColor:'#387ADF' ,border: '0.5px solid black'}}
                    onClick={() => handleSearch(email)}>Search</button>
                <button className="btn btn-primary"
                    type="button"
                    style={{backgroundColor:'#387ADF' ,border: '0.5px solid black'}}
                    onClick={() => handleReset(email)}>Reset</button>
            </div>
        </div>
    )
}
export default Search;
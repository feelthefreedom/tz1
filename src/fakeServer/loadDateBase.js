import axios from "axios";

const loadDB = async () => {
    let newUsers = await axios(`http://localhost:3001/users`)
    return newUsers;
}

export default loadDB;
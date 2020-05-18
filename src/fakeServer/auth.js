import loadDB from "./loadDateBase";
import getUserByEmail from "../components/getUserByEmail";
import jwt from 'jsonwebtoken'



const generateJwtToken = (userName, userID) => {
    const data = {
        name: userName,
        id: userID
    };
    const signature = "mYsuper_keY"
    const expiration = "14d"
    const token = jwt.sign({ data }, signature, { expiresIn: expiration })
    return token
}

const auth = async (email, password, setCurrentUser) => {
    let usersDB = await (await loadDB()).data
    let jwt

    if (getUserByEmail(usersDB, email)) {
        for (let i = 0; i < usersDB.length; i++) {
            if (usersDB[i].user.password === password) {
                jwt = generateJwtToken(usersDB[i].user.firstName, usersDB[i].user.id, usersDB)
                setCurrentUser(usersDB[i].user);
                return {
                    type: "success",
                    jwt: jwt
                }
            }
        }
        return {
            type: "error",
            message: "login or password is incorrect"
        }
    }
}

export default auth;
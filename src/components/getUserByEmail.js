const getUserByEmail = async (usersDB, email) => {
    for (const user of usersDB) {
        if (user.user.email === email) { return user.user }
        else { return false }
    }     
}

export default getUserByEmail;
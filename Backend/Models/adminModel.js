import mySqlConnection from "../Config/db.js";

class Admin {
    // #user_name;

    // constructor(userName) {
    //     this.#user_name = userName;
    // }

    async login(uName) {
        const sqlQuery = "SELECT password FROM admin where user_name=?";
        try {
            const dbResult = await mySqlConnection.query(sqlQuery, uName);
            return dbResult;
        } catch (err) {
            console.error(err);
        }
    }
}

export default Admin;
import mySqlConnection from "../Config/db.js";

class User {
    #full_name;
    #user_name;
    #email;
    #password

    constructor(fullName, userName, email, password) {
        this.#full_name = fullName;
        this.#user_name = userName;
        this.#email = email;
        this.#password = password;
    }

    async login(uName) {
        const loginQuery = "Select password from user where user_name=?";

        try {
            const loginResult = await mySqlConnection.query(loginQuery, uName);
            if (!loginResult || loginResult.length===0) {
                console.log("Result not found");
            }
            return loginResult;
        } catch(err) {
            console.error(err);
        }
    }

    async register() {
        const exsitenceQuery = "Select user_name from user where user_name=?"
        const registerQuery = "Insert into user (full_name, user_name, email, password) values (?, ?, ?, ?)";

        try {
            // const userExsitenceCheckIn = await mySqlConnection.query(exsitenceQuery, this.#user_name);
            // console.log(userExsitenceCheckIn[0][0].user_name);
            // if (userExsitenceCheckIn[0][0].user_name) {
            //     return userExsitenceCheckIn;
            // }

            const registerResult = await mySqlConnection.query(registerQuery, [
                this.#full_name, 
                this.#user_name,
                this.#email, 
                this.#password
            ]);

            if (!registerResult)
                console.log("Result not found");

            console.log(registerResult);
            return [registerResult];
        } catch(err) {
            console.error(err);
        }
    }

    async viewUser() {
        const viewSqlQuery = "Select * from user";
        try {
            const viewResult = await mySqlConnection.query(viewSqlQuery);
            if(!viewResult)
                console.log("Result not found");
            return viewResult;
        } catch (error) {
            console.log(error);
        }
    }
    async updateUser(oldUserName) {
        const updateSqlQuery = "Update user set full_name=?, user_name=?, email=?, password=? where user_name=?"
        
        try {
            const updateResult = await mySqlConnection.query(updateSqlQuery, [
                this.#full_name, 
                this.#user_name,
                this.#email, 
                this.#password,
                oldUserName
            ]);
            if (!updateResult) {
                console.log("Result not found");
            }
            return updateResult;
        } catch (err) {
            console.log(err);
        }
    }

    async deleteUser(userName) {
        const deleteSqlQuery = "Delete from user where user_name=?";

        try {
            const deleteResult = mySqlConnection.query(deleteSqlQuery, userName);
            if(!deleteResult)
                console.log("Result not found");
            return deleteResult;
        } catch(err) {
            console.log(err);
        }
    }
}

export default User;
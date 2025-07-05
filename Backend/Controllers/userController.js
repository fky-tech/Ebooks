import User from "../Models/userModel.js";
import bcrypt from 'bcrypt';

export const userLogin = async(req, res, next)=> {
    const { userName, password } = req.body;

    try {
        const user = new User();
        const userRes = await user.login(userName);
        if (!userRes || userRes[0].length === 0) {
            res.status(404).json({ success: false, message: "User not found" });
        }

        const userPassword = userRes[0][0].password;
        console.log(userPassword);
        
        try {
            const isMatch = await bcrypt.compare(password, userPassword);
            if(!isMatch)
                res.status(401).json({ success: false, message: "Incorrect Password" });
            res.status(200).json({ success: true, message: "Login successful" });
        } catch(err) {
            console.error(err);
        }
        
    } catch(err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const registerUser = async(req, res, next) => {
    const { fullName, userName, email, password } = req.body;

    try {
        const salt = 10;
        const hashedPwd = await bcrypt.hash(password, salt);

        const user = new User(fullName, userName, email, hashedPwd);
        const registerRes = await user.register();
        // console.log(registerRes);
        // console.log(registerRes[0][0].user_name);
        // if (registerRes[0][0].user_name)
        //     res.status(409).json({ success: false, message: "User already exists" });

        if (!registerRes)
            res.status(400).json({ success: false, message: "Error in registration" });
        res.status(201).json({ success: true, message: "User registered successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" })
    }
}

export const viewProfile = async(req, res, next) => {
    try {
        const user = new User();
        const viewRes = await user.viewUser();
        if (!viewRes)
            res.status(404).json({ success: false, message: "User not found" });

        const viewData = viewRes[0][0];
        res.status(200).json({ success: true, message: "Success", data: viewData});
    } catch(error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const updateProfile = async(req, res, next) => {
    const { oldUserName, fullName, userName, email, password } = req.body;

    try {
        const salt = 10;
        const hashedPwd = await bcrypt.hash(password, salt);

        const user = new User(fullName, userName, email, hashedPwd);
        const updateRes = await user.updateUser(oldUserName);
        console.log(updateRes);

        if (!updateRes)
            res.status(404).json({ success: false, message: "Not found" });
        res.status(200).json({ success: true, message: "Profile updated successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const deleteProfile = async(req, res, next) => {
    const { userName } = req.body;

    try {
        const user = new User();
        const deleteRes = user.deleteUser(userName);
        if(!deleteRes)
            res.status(404).json({ success: false, message: "Not found" });
        res.status(200).json({ success: true, message: "Profile deleted successfully" });
    } catch(error) {
        console.log(error);
        res.status(500).json({ success: "false", message: "Internal server error" });
    }
}
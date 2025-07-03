import Admin from "../Models/adminModel.js"
import bcrypt from 'bcrypt'

const adminLogin = async (req, res, next) => {
    const { userName, password } = req.body;

    try {
        const admin = new Admin();
        const adminRes = await admin.login(userName);
        if (!adminRes) {
            res.status(404).json({ success: false, message: "Not Found" });
        }

        const resPassword = adminRes[0][0].password;
        // const salt = 10
        // bcrypt.hash(resPassword, salt, (err, hashedResult) => {
        //     if (err) {
        //         console.log(err);
        //     }

        //     console.log(hashedResult);
        // })
        
        // bcrypt using await
        try {
            // compares the password that the user entered to the password in the db
            const isMatch = await bcrypt.compare(password, resPassword);
            if (!isMatch)
                res.status(401).json({ success: false, message: "Incorrect Password" });
            res.status(200).json({ success: true, message: "Log in successful" });
        } catch(err) {
            console.error(err);
        }

            // bcrypt using callback
        // bcrypt.compare(password, resPassword, (err, result) => {
        //     if (err) {
        //         console.log(err);
        //         return;
        //     }

        //     if (!result)
        //         res.status(401).json({ success: false, message: "Incorrect Password" });
        //     res.status(200).json({ success: true, message: "Log in successful" });
        // })
    } catch(err) {
        console.log(err.message);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export default adminLogin;
import User from "../model/user.js";

export const addUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate if the email and password exist in your MongoDB database
        const user = await User.findOne({ email, password });

        if (user) {
            // User exists in the database
            return res.status(200).json({ message: "User validated successfully" });
        } else {
            // User does not exist in the database
            return res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        return res.status(500).json(error);
    }
};

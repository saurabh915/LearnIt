import { response } from "express";
import { User } from "your-database-model"; // Replace with the actual User model from your database

export const addUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate if the email and password exist in your database
        const user = await User.findOne({
            where: { email, password }, // Replace with your database query
        });

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

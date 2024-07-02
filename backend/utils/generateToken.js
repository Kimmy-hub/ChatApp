import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '15d'
    });

    res.cookie("jwt", token,{
        maxAge: 15 * 24 * 60 * 60 * 1000, // it is in millisecond
        httpOnly: true, // it can't be accessed using JavaScript
        sameSite:"strict",
        secure: process.env.NODE_ENV !== "development",
    });
};

export default generateTokenAndSetCookie;
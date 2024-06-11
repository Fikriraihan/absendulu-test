import jwt from "jsonwebtoken";

const generateToken = (res, user) => {
  const tokenPayload = {
    userId: user._id,
    username: user.username,
    email: user.email,
  };

  const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: new Date(Date.now() + 1 * 60 * 60 * 1000),
    maxAge: 30 * 24 * 60 * 60 * 1000,
    samesite: "strict",
  });
};

export default generateToken;

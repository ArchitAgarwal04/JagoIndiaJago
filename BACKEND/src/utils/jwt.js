import jwt from 'jsonwebtoken';

const signJWT = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const verifyJWT = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

export { signJWT, verifyJWT };
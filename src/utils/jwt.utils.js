import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = (user) => {
  const payload = {
    username: user.username,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

  return token;
};

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          return res.status(403).json({ message: 'Invalid token' });
        }
        req.user = decoded;
        next();
      });
    } else {
      res.status(401).json({ message: 'Token not found' });
    }
  } else {
    res.status(401).json({ message: 'Bearer token not found' });
  }
};

export { generateToken, authenticateJWT };

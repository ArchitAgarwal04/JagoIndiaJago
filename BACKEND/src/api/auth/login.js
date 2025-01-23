import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const loginRoute = (app, prisma) => {
  app.post("/auth/login", async (req, res) => {
    console.log("Login request received");
    const { email, password } = req.body;

    try {
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        console.log("Invalid credentials");
        return res.status(401).json({ error: "Invalid credentials" });
      }

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      console.log("Token generated:", token);
      res.json({ token });
    } catch (error) {
      console.error("Error logging in user:", error);
      res.status(500).json({ error: "Error logging in user" });
    }
  });
};

export default loginRoute;
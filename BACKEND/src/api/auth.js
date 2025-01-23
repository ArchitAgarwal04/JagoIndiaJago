const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = (app, prisma) => {
  app.post("/auth/signup", async (req, res) => {
    const { email, password, name, age } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await prisma.user.create({
        data: { email, password: hashedPassword, name, age },
      });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: "Error signing up user" });
    }
  });

  app.post("/auth/login", async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: "Error logging in user" });
    }
  });
};

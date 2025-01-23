import bcrypt from 'bcrypt';

const signupRoute = (app, prisma) => {
  app.post("/auth/signup", async (req, res) => {
    console.log("Signup request received");
    const { email, password, name, age } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await prisma.user.create({
        data: { email, password: hashedPassword, name, age },
      });
      console.log("User created:", user);
      res.status(201).json(user);
    } catch (error) {
      console.error("Error signing up user:", error);
      res.status(500).json({ error: "Error signing up user" });
    }
  });
};

export default signupRoute;
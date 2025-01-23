module.exports = (app, prisma) => {
    app.get("/products/search", async (req, res) => {
      const { name } = req.query;
  
      try {
        const products = await prisma.product.findMany({
          where: { name: { contains: name, mode: "insensitive" } },
        });
        res.json(products);
      } catch (error) {
        res.status(500).json({ error: "Error searching products" });
      }
    });
  };
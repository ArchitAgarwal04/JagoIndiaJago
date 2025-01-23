module.exports = (app, prisma) => {
    app.post("/products/add", async (req, res) => {
      const { barcode, name, brand, category, calories, fat, protein, carbs, sugar, ingredients } = req.body;
  
      try {
        const product = await prisma.product.create({
          data: { barcode, name, brand, category, calories, fat, protein, carbs, sugar, ingredients },
        });
        res.status(201).json(product);
      } catch (error) {
        res.status(500).json({ error: "Error adding product" });
      }
    });
  };
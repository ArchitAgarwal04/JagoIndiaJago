import ProductCategories from "../../components/dashboard/product-categories"

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Welcome to JagoIndiaJago</h1>
      <div>
        <h2 className="text-2xl font-semibold text-white mb-4">Product Categories</h2>
        <ProductCategories />
      </div>
    </div>
  )
}


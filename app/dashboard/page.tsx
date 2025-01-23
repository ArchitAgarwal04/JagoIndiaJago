import ProductCategories from "../../components/dashboard/product-categories"

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Welcome to JagoIndiaJago</h1>
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
        <h2 className="text-2xl font-semibold text-white mb-4">Product Categories</h2>
        <ProductCategories />
      </div>
    </div>
  )
}


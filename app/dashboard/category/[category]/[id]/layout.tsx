export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="pt-6">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 text-center tracking-wide">
            Product Details
          </h1>
          <p className="text-gray-400 text-center mt-2 text-sm">
            Browse the details of your selected product with confidence.
          </p>
        </header>
        
        {/* Content */}
        <div className="text-gray-300">{children}</div>
      </div>
    </div>
  )
}

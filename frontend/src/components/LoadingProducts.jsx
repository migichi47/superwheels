export function LoadingProducts() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-primary rounded-full animate-spin mx-auto"></div>

        <p className="mt-4 text-gray-600">Loading products...</p>
      </div>
    </div>
  );
}

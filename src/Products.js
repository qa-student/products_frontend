import React from "react";

export default function ProductsApp() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const API_URL = process.env.REACT_APP_PRODUCTS_API;

  React.useEffect(() => {
    fetch(`${API_URL}/products`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Products
        </h1>

        {loading && (
          <p className="text-center text-gray-500">Loading products...</p>
        )}

        {error && (
          <p className="text-center text-red-500">Error: {error}</p>
        )}

        {!loading && !error && (
            <div>
                <p>Product Count: {products.length}</p>
          <ul className="space-y-4">
            {products.map((product) => (
              <li
                key={product.id}
                className="border rounded-xl p-4 hover:shadow-md transition"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-semibold">
                      {product.name}
                    </h2>
                    <p className="text-gray-500">
                      Category: {product.category}
                    </p>
                  </div>

                  <div className="text-lg font-bold">
                    £{product.price}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          </div>
        )}
      </div>
    </div>
  );
}

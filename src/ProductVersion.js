import React from "react";

export default function ProductVersion() {
  const [productVersion, setProductVersion] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const API_URL = process.env.REACT_APP_PRODUCTS_API;

  React.useEffect(() => {
    fetch(`${API_URL}/health`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch product version");
        }
        return response.json();
      })
      .then((data) => {
        setProductVersion(data.version || "");
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
          Product Version: {loading ? "Loading..." : error ? `Error: ${error}` : productVersion}
        </h1>
      </div>
    </div>
  );
}

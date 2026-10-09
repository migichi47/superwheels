import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import api from "../axios";
import { capitaliseFirstLetter } from "../utils/formatName";

export default function Breadcrumbs() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const location = useLocation();
  const pathnames = location.pathname
    .split("/")
    .filter((pathname) => pathname !== "" && pathname !== "details");

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await api.get(`/api/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    getProduct();
  }, [id]);
  const productName = `${capitaliseFirstLetter(product?.category)} ${capitaliseFirstLetter(product?.make)} ${capitaliseFirstLetter(product?.model)} ${product?.year}`;

  if (location.pathname === "/") return null;
  return (
    <nav className="flex gap-2 text-sm ml-5 mt-2">
      <Link to={"/"} className="hover:underline cursor-pointer">
        Home
      </Link>
      {pathnames.map((pathname, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const label =
          isLast && productName
            ? productName
            : pathname.replace(/\b\w/g, (char) => char.toUpperCase());

        return (
          <div key={routeTo} className="flex items-center gap-2">
            <span className="text-gray-400">/</span>

            {isLast ? (
              <span className="text-secondary capitalize">{label}</span>
            ) : (
              <Link to={routeTo} className="text-gray-600 hover:underline">
                {label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}

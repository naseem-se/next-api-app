"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ProductButton from "./button";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
};

async function fetchProducts(): Promise<Product[]> {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    }

    load();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-100">
            Loading Products...
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Please wait while we fetch the product data.
          </p>
          <div className="loader"></div>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            This may take a few seconds.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Link href="/" className="absolute top-4 left-4 text-blue-500 hover:underline">
        Back to Home
      </Link>

      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-100">
          All Products
        </h1>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <li
              key={product.id}
              className="m-4 rounded-lg border border-zinc-200 p-4 shadow-sm dark:border-zinc-700"
            >
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={300}
                height={200}
                className="mb-3 h-48 w-full rounded-md object-cover"
              />

              <h5 className="text-md font-semibold text-zinc-800 dark:text-zinc-200">
                {product.title}
              </h5>

              <p className="mt-2 text-md font-bold text-zinc-900 dark:text-zinc-100">
                ${product.price}
              </p>

              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {product.description.substring(0, 100)}...
              </p>

              <ProductButton props={product} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

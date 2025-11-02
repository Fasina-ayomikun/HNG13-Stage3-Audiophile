"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { getClientId } from "../../lib/clientId";

type Props = {
  product: {
    slug: string;
    name: string;
    price: number;
    category: string;
    image: string;
  };
};

export default function AddToCart({ product }: Props) {
  const clientId = getClientId();
  const add = useMutation(api.cart.add);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAdd = async () => {
    try {
      setLoading(true);
      await add({
        clientId,
        item: {
          slug: product.slug,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: qty,
          category: product.category,
        },
      });

      setQty(1);
      setAdded(true);

      setTimeout(() => setAdded(false), 2000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex items-center gap-4 mt-6'>
      <div className='flex items-center bg-gray-100 rounded-md'>
        <button
          className='px-3 py-2 text-sm font-semibold hover:text-primary transition'
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          disabled={loading}
        >
          -
        </button>
        <span className='px-4 py-2 text-sm font-semibold'>{qty}</span>
        <button
          className='px-3 py-2 text-sm font-semibold hover:text-primary transition'
          onClick={() => setQty((q) => q + 1)}
          disabled={loading}
        >
          +
        </button>
      </div>

      <button
        onClick={handleAdd}
        disabled={loading}
        className={`btn btn-primary min-w-[130px] transition ${
          added ? "bg-green-600 hover:bg-green-600" : ""
        }`}
      >
        {loading ? "Adding..." : added ? "Added!" : "Add to Cart"}
      </button>
    </div>
  );
}

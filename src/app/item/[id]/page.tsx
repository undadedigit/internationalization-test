"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getObject } from "../../../utils/api";
import Loading from "../../../components/Loading";
import Link from "next/link";
import { Item } from "../../../types";

export default function ItemDetails() {
  const { id } = useParams();
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchItem() {
      try {
        const data = await getObject(id as string);
        setItem(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching item:", error);
        setLoading(false);
      }
    }
    fetchItem();
  }, [id]);

  if (loading) return <Loading />;

  if (!item) return <div>Item not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <span className="text-blue-500 hover:underline mb-4 inline-block cursor-pointer">
          &larr; Back to Home
        </span>
      </Link>
      <h1 className="text-3xl font-bold mb-6">{item.name}</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Details:</h2>
        {item.data ? (
          <ul className="list-disc list-inside">
            {Object.entries(item.data).map(([key, value]) => (
              <li key={key} className="mb-2">
                <span className="font-semibold">{key}:</span> {value}
              </li>
            ))}
          </ul>
        ) : (
          <p>No additional data available</p>
        )}
      </div>
    </div>
  );
}

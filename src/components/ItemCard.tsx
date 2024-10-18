import Link from "next/link";
import { Item } from "../types";

interface ItemCardProps {
  item: Item;
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
      <p className="text-gray-600 mb-4">
        {item.data && item.data.price
          ? `Price: $${item.data.price}`
          : "Price not available"}
      </p>
      <Link href={`/item/${item.id}`}>
        <span className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 cursor-pointer">
          View Details
        </span>
      </Link>
    </div>
  );
}

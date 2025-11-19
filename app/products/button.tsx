"use client";
export default function ProductButton({ props }: { props: { price: number } }) {
  return (
    <button onClick={() => alert(`$${props.price}`)} className="mt-4 rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600">
      Check Price
    </button>
  );
}
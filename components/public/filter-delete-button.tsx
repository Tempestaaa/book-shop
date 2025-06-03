"use client";

import useCreateSearchParams from "@/hooks/useCreateSearchParams";

type Props = {
  value: string;
  side?: "right" | "left";
};

export default function FilterDeleteButton({ value, side = "right" }: Props) {
  const { getSearchParamsValue, deleteSearchParamsURL } =
    useCreateSearchParams();

  return (
    <div
      className={`grid ${
        side === "left" ? "place-items-end-safe" : "place-items-start"
      }`}
    >
      {getSearchParamsValue(value) && (
        <button
          onClick={() => deleteSearchParamsURL(value)}
          className="text-sm text-destructive font-bold hover:underline underline-offset-2 py-2 px-4 rounded-md"
        >
          Clear
        </button>
      )}
    </div>
  );
}

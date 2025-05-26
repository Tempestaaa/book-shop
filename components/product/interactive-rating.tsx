"use client";

import { StarIcon } from "lucide-react";
import { useState } from "react";

export default function InteractiveRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex items-center-safe gap-0.5">
      {[...Array(5)].map((_, id) => {
        const value = id + 1;
        return (
          <label key={id}>
            <input
              type="radio"
              name="rating"
              hidden
              onClick={() => setRating(value)}
            />
            <StarIcon
              onMouseEnter={() => setHover(value)}
              onMouseLeave={() => setHover(0)}
              fill={value <= (hover || rating) ? "var(--star)" : "var(--muted)"}
              className="size-6 text-transparent cursor-pointer"
            />
          </label>
        );
      })}
    </div>
  );
}

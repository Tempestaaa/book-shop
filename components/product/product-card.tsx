import StarRating from "@/components/public/star-rating";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

export default function ProductCard() {
  return (
    <div className="space-y-2 group">
      <div className="max-w-60 h-80 mx-auto bg-muted/30 rounded overflow-hidden relative">
        <Link href={`/shop/${123}`} className="block size-full"></Link>

        <Button className="absolute bottom-2 right-2 hidden group-hover:inline-flex gap-4">
          <ShoppingCartIcon />
          <div>Add to Cart</div>
        </Button>
      </div>

      <div className="max-w-60 mx-auto">
        <Link href={`/shop/${123}`} className="font-bold line-clamp-1">
          This is the book's title
        </Link>
        <div className="text-sm">Author name</div>
        <div className="flex items-center-safe gap-2 my-1">
          <StarRating rating={3.5} size="small" />
          <span className="text-xs text-muted">(956)</span>
        </div>
        <div className="font-bold text-xl">{formatPrice(45.99)}</div>
      </div>
    </div>
  );
}

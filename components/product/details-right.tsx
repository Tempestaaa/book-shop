import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/utils";
import { FORMATS } from "@/types/book.type";
import { ShoppingCartIcon } from "lucide-react";

export default function DetailsRight() {
  const save = (price: number, salePrice: number) =>
    Math.ceil((1 - price / salePrice) * 100);

  return (
    <section className="col-span-3">
      <div className="outline-2 outline-muted p-4 rounded flex flex-col shadow-md">
        <section className="grid grid-cols-2">
          {FORMATS.map((item, id) => (
            <label key={id} className="block cursor-pointer">
              <input
                type="radio"
                hidden
                name="format"
                defaultChecked={id === 0}
                className="peer"
              />
              <div className="text-center peer-checked:bg-foreground peer-checked:text-background py-2 rounded">
                {item}
              </div>
            </label>
          ))}
        </section>
        <Separator className="my-4" />
        <div className="text-sm px-2 py-1 rounded text-background bg-foreground w-fit ml-auto mb-2">
          Save {save(45.99, 60.99)}%
        </div>
        <section className="flex items-center-safe justify-end-safe gap-3">
          <s className="text-muted">{formatPrice(60.99)}</s>
          <div className="text-4xl">{formatPrice(45.99)}</div>
        </section>
        <Button className="mt-4">
          <ShoppingCartIcon />
          <span>Add to Cart</span>
        </Button>
      </div>
    </section>
  );
}

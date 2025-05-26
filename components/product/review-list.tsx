import ReviewCard from "@/components/product/review-card";
import { Button } from "@/components/ui/button";

export default function ReviewList() {
  return (
    <section className="mt-8 flex flex-col gap-4">
      <div className="text-sm text-muted">Display 1-8 of 200 reviews</div>

      <div className="flex flex-col gap-8">
        {[...Array(8)].map((_, id) => (
          <ReviewCard key={id} />
        ))}
      </div>

      <Button variant="ghost" className="mx-auto mt-2 !px-8">
        Show more
      </Button>
    </section>
  );
}

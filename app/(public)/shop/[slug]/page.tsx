import DetailsLeft from "@/components/product/details-left";
import DetailsMiddle from "@/components/product/details-middle";
import DetailsRight from "@/components/product/details-right";
import RatingSort from "@/components/product/rating-sort";
import RelatedProducts from "@/components/product/related-products";
import ReviewList from "@/components/product/review-list";
import WriteReview from "@/components/product/write-review";
import CustomBreadcrumb from "@/components/public/custom-breadcrumb";
import { Separator } from "@/components/ui/separator";

export default function BookDetailsPage() {
  return (
    <div className="flex flex-col pb-16 gap-4">
      <CustomBreadcrumb />

      <section className="grid grid-cols-[repeat(12,minmax(0,1fr))] gap-8 mb-8">
        <DetailsLeft />

        <section className="col-span-9 grid grid-cols-[repeat(9,minmax(0,1fr))] gap-8">
          <DetailsMiddle />
          <DetailsRight />

          <div className="col-span-9">
            <Separator className="mb-8" />

            <div className="space-y-4">
              <header className="text-2xl font-bold">Review</header>
              <WriteReview />
            </div>

            <Separator className="my-8" />

            <div className="space-y-2">
              <header className="text-2xl font-bold">Community reviews</header>
              <RatingSort />
            </div>

            <ReviewList />
          </div>
        </section>
      </section>

      <RelatedProducts />
    </div>
  );
}

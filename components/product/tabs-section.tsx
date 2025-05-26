import InfoItem from "@/components/product/info-item";
import RatingSort from "@/components/product/rating-sort";
import ReviewList from "@/components/product/review-list";
import WriteReview from "@/components/product/write-review";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatDate } from "@/lib/utils";
import { FORMATS } from "@/types/book.type";

export default function TabsSection() {
  return (
    <Tabs defaultValue="description" className="mt-8">
      <TabsList>
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>

      <div className="mt-2">
        <TabsContent value="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
          inventore nam impedit tempora, nostrum veritatis illo! Alias adipisci
          quae harum facilis dolorum delectus dolor rerum odio omnis incidunt
          officia non reprehenderit quaerat aliquam illum, quia nobis! Molestiae
          iure nihil aliquam aspernatur labore totam, velit necessitatibus unde
          reprehenderit magnam dolorem assumenda mollitia itaque omnis
          cupiditate dicta tenetur iste perspiciatis, perferendis consectetur
          voluptatibus voluptatum tempora. Est vero, architecto consequatur modi
          praesentium dicta minima provident expedita veniam, perspiciatis
          facere numquam incidunt obcaecati accusamus et mollitia cumque!
          Pariatur est aliquam earum autem hic. Saepe, eveniet. Ut, nisi. Odit a
          voluptatem dolor magnam quos soluta est provident, quam ratione
          repellendus et quisquam molestiae distinctio nostrum ut inventore ad
          error asperiores nobis! Fuga voluptatum repudiandae dicta nulla, ipsam
          saepe similique consequatur quisquam necessitatibus, vitae facilis
          sequi quas veritatis quos a sunt voluptates officiis iure blanditiis
          numquam adipisci? Quos quam eveniet sit, et non nulla eius vitae
          impedit labore ex consectetur ea ut, quidem temporibus. Quisquam
          laudantium error maiores, eligendi tempora, facere quos dignissimos
          sequi at eos quo unde? Nam officia animi accusamus. Possimus quisquam
          similique quae incidunt dolorum veritatis sit aspernatur iure! Neque
          perspiciatis accusamus esse, fugit quasi laborum, non doloribus, ullam
          reiciendis architecto quaerat dolor.
        </TabsContent>

        <TabsContent
          value="details"
          className="grid grid-cols-2 gap-8"
        ></TabsContent>

        <TabsContent value="reviews">
          <div className="grid grid-cols-2 gap-8">
            <RatingSort />
            <WriteReview />
          </div>
          <Separator className="my-10" />
          <ReviewList />
        </TabsContent>
      </div>
    </Tabs>
  );
}

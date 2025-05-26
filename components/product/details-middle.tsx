import InfoItem from "@/components/product/info-item";
import StarRating from "@/components/public/star-rating";
import genres from "@/data/genre";
import { formatDate, formattedSearchParams } from "@/lib/utils";
import Link from "next/link";

export default function DetailsMiddle() {
  return (
    <section className="col-span-6 flex-1 flex flex-col gap-2">
      <section className="space-y-2">
        <h1 className="text-4xl font-bold">This is the book's title</h1>
        <div className="">by Author name</div>
      </section>

      <section className="flex items-center-safe gap-4 text-2xl">
        <StarRating rating={4.5} showScore size="large" />
        <span className="text-sm">(954 reviews)</span>
      </section>

      <section className="flex items-center-safe gap-3 flex-wrap text-sm">
        <div className="font-bold">Genres:</div>
        {genres.slice(0, 6).map((item) => (
          <Link
            key={item.id}
            href={`/shop?genre=${formattedSearchParams(item.name)}`}
            className="p-1 text-muted duration-300 cursor-pointer shadow-[0px_1.5px] shadow-muted hover:shadow-foreground hover:text-foreground"
          >
            {item.name}
          </Link>
        ))}
      </section>

      <section className="line-clamp-4 my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolorem in
        maxime dolor sed et temporibus officia eaque perferendis sint voluptas
        ex quos quod voluptatum deleniti, quia quisquam iusto adipisci possimus
        molestiae expedita quidem rem neque? Itaque sapiente architecto ex!
        Doloribus saepe reprehenderit asperiores, quia nulla autem explicabo.
        Autem nobis suscipit qui at repudiandae aperiam dolorem dolorum eaque
        explicabo blanditiis, fuga nihil eligendi incidunt, veritatis, dolore
        minus optio tenetur ipsa delectus eum tempora commodi quaerat.
        Necessitatibus cupiditate porro dolore quas, ipsa voluptate eos
        reiciendis! Totam expedita quasi impedit odit eaque soluta
        exercitationem, illum libero velit tempora eum ipsam, eveniet minus
        voluptas iste quis corporis quisquam ex reprehenderit veniam commodi
        dolor? Eveniet atque dignissimos neque delectus eligendi iure in, totam
        quisquam harum quibusdam consequatur quae perspiciatis nulla nam eaque
        repudiandae obcaecati sed corrupti deserunt veniam sunt. Dicta provident
        suscipit fuga distinctio quisquam incidunt vero earum saepe dolorum. Aut
        pariatur libero deleniti accusamus rerum! Quod minus cum aut illo,
        eveniet voluptas vel! Explicabo, sit eius? Repellat earum expedita
        illum, tempore, adipisci nulla amet velit impedit fugiat ipsam illo aut
        inventore, eius facere. Laudantium quam, accusamus temporibus et
        inventore quo nihil earum at, culpa dolor omnis incidunt? Veniam
        provident rerum blanditiis illo eos!
      </section>

      <section className="text-sm text-muted space-y-2">
        <p>Paperback, 300 pages</p>
        <p>First published {formatDate(new Date())}</p>
        <InfoItem label="Awards" value="This is the book's awards" />
        <InfoItem
          label="Original title"
          value="This is the book's original title"
        />
      </section>

      <section className="mt-4">
        <header className="font-bold text-xl mb-2">This edition</header>
        <div className="*:py-1">
          <InfoItem label="Format" value="300 pages, Paperback edition" />
          <InfoItem label="Language" value="English" />
          <InfoItem label="ISBN" value="9781668067918" />
          <InfoItem label="Publisher" value="Publisher name" />
          <InfoItem label="Publication date" value={formatDate(new Date())} />
        </div>
      </section>
    </section>
  );
}

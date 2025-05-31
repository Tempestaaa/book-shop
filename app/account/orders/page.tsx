import { Button } from "@/components/ui/button";
import Pagination from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FilterIcon, SearchIcon, SortDescIcon } from "lucide-react";

const status = ["all", "completed", "pending", "failure"];

export default function OrdersPage() {
  return (
    <article className="space-y-4">
      <section className="flex items-center-safe gap-4 justify-between">
        <div className="flex items-center-safe p-1 rounded bg-muted/30 w-fit h-10">
          {status.map((item, id) => (
            <label key={item}>
              <input
                type="radio"
                name="status"
                hidden
                defaultChecked={id === 0}
                className="peer"
              />
              <span className="py-2 px-4 rounded text-sm capitalize peer-checked:bg-foreground peer-checked:text-background cursor-pointer">
                {item}
              </span>
            </label>
          ))}
        </div>

        <div className="flex items-center-safe gap-2">
          <Button variant="ghost">
            <SearchIcon />
          </Button>
          <Button variant="ghost">
            <FilterIcon />
          </Button>
          <Button variant="ghost">
            <SortDescIcon />
          </Button>
        </div>
      </section>

      <section className="space-y-4 max-w-full overflow-x-hidden">
        <Table className="overflow-x-auto max-w-full">
          <TableHeader>
            <TableRow className="bg-muted/30 *:font-bold">
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Total</TableHead>
              <TableHead className="text-right">Message</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {[...Array(10)].map((_, id) => (
              <TableRow key={id}>
                <TableCell>{id}</TableCell>
                <TableCell>{id}</TableCell>
                <TableCell>{id}</TableCell>
                <TableCell>{id}</TableCell>
                <TableCell>{id}</TableCell>
                <TableCell className="text-right">{id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Pagination />
      </section>
    </article>
  );
}

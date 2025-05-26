import StarRating from "@/components/public/star-rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { formatDate } from "@/lib/utils";
import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";

export default function ReviewCard() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center-safe gap-4">
        <Avatar className="size-10">
          <AvatarImage />
          <AvatarFallback>US</AvatarFallback>
        </Avatar>

        <div className="font-bold">Username</div>
      </div>

      <div className="space-y-2">
        <StarRating rating={4} size="small" />
        <div className="text-sm text-muted">
          Reviewed in England on {formatDate(new Date())}
        </div>
      </div>

      <p className="text-sm line-clamp-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
        exercitationem quae, quasi modi debitis ducimus qui impedit est harum
        illo totam accusantium consectetur. Officia porro aperiam eius nisi
        fugiat neque temporibus blanditiis assumenda architecto provident,
        atque, commodi dolorem ullam, perspiciatis quos doloremque praesentium
        recusandae voluptate enim aut totam. Similique quos in recusandae
        commodi dolor, nisi eum incidunt, fugit ipsum temporibus est! Aspernatur
        est quo quae ex sunt, ea quisquam impedit qui, perspiciatis eligendi
        corrupti? Accusantium ipsa dolore optio adipisci magnam quod
        reprehenderit? Vitae asperiores veritatis illum culpa suscipit tempore
        corrupti eius est incidunt voluptatum optio, aperiam praesentium
        deserunt ea possimus.
      </p>

      <div className="flex items-center-safe gap-2 mt-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <ThumbsUpIcon />
              </Button>
            </TooltipTrigger>

            <TooltipContent side="bottom">Helpful</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <ThumbsDownIcon />
              </Button>
            </TooltipTrigger>

            <TooltipContent side="bottom">Not helpful</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="text-sm text-muted italic ml-2">
          15 people found this review helpful
        </div>
      </div>
    </div>
  );
}

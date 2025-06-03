import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {
  value: string;
  children: React.ReactNode;
};

export default function FilterWrapper({ value, children }: Props) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="capitalize">{value}</AccordionTrigger>

      <AccordionContent className="space-y-2">{children}</AccordionContent>
    </AccordionItem>
  );
}

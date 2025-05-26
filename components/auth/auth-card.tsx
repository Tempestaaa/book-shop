import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  label: string;
  children: React.ReactNode;
  showBackHome?: boolean;
  isReversed?: boolean;
};

export default function AuthCard({
  label,
  children,
  showBackHome = false,
  isReversed = false,
}: Props) {
  return (
    <article
      className={`w-5xl h-140 rounded shadow-md flex overflow-hidden p-8 ${
        isReversed && "flex-row-reverse"
      }`}
    >
      <section
        className={`w-2/5 px-4 py-2 flex flex-col gap-2 ${
          isReversed ? "pl-8" : "pr-8"
        }`}
      >
        {showBackHome && (
          <Link
            href="/"
            className="flex items-center-safe gap-2 hover:bg-foreground hover:text-background duration-300 w-fit pr-2 pl-1 py-0.5 rounded text-sm"
          >
            <ChevronLeftIcon className="size-4" />
            <span>Back to Home</span>
          </Link>
        )}

        <div className="flex flex-col gap-8 flex-1">
          <header className="font-bold text-4xl">{label}</header>

          {children}
        </div>
      </section>

      <section className="w-3/5 bg-muted/30 rounded"></section>
    </article>
  );
}

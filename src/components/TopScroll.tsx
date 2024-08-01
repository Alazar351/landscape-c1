import { ChevronUp } from "lucide-react";

export default function TopScroll() {
  return (
    <a
      href="#"
      className="fixed bottom-4 right-5 flex size-12 items-center justify-center rounded-full bg-primary text-white transition-colors duration-300 ease-in-out hover:bg-primary-foreground"
    >
      <ChevronUp size={23} strokeWidth={4} />
    </a>
  );
}

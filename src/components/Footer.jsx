import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
      <p className="text-sm text-muted-foreground text-center sm:text-left">
        &copy; {new Date().getFullYear()} AfsanaKeya.com All rights reserved.
      </p>

      <a
        href="#hero"
        aria-label="Back to top"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jonathan Ostertag. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with&nbsp;
            <a href="https://lovable.dev" target="_blank" className="text-accent">Lovable</a>
            , React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="border-t bg-muted/30 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
          <p className="text-sm text-muted-foreground">
            {t("footer.builtWith")}&nbsp;
            <a href="https://lovable.dev" target="_blank" className="text-accent">Lovable</a>
            {t("footer.and")}
          </p>
        </div>
      </div>
    </footer>
  );
};

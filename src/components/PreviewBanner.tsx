import { useTranslation } from "react-i18next";

const PreviewBanner = () => {
  // Only show banner if VITE_PREVIEW_MODE is set
  if (!import.meta.env.VITE_PREVIEW_MODE) {
    return null;
  }

  const { t } = useTranslation();
  const branchSlug = import.meta.env.VITE_BRANCH_SLUG || "preview";

  return (
    <div className="bg-amber-500 text-black px-4 py-2 text-center text-sm font-medium shadow">
      🚀 {t("previewBanner.buildLabel")} <strong>{branchSlug}</strong> —{" "}
      {t("previewBanner.disclaimer")}
    </div>
  );
};

export default PreviewBanner;

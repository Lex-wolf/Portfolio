import { useLanguage } from "../context/LanguageContext";
import { useAudienceView } from "../context/AudienceViewContext";

export default function AudienceToggle() {
  const { t } = useLanguage();
  const { audience, setAudience } = useAudienceView();

  return (
    <div className="audience-toggle" role="tablist" aria-label={t("audience.toggleGroupLabel")}>
      <button type="button" className={audience === "qa" ? "active" : ""} onClick={() => setAudience("qa")}>
        {t("audience.qa")}
      </button>
      <button type="button" className={audience === "web" ? "active" : ""} onClick={() => setAudience("web")}>
        {t("audience.web")}
      </button>
    </div>
  );
}

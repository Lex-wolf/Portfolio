import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { useAudienceView } from "../context/AudienceViewContext";

export default function AudienceToggle() {
  const { t } = useLanguage();
  const { audience, setAudience } = useAudienceView();

  const btnBase =
    "relative z-10 min-h-[44px] flex-1 rounded-full px-2 py-2.5 text-center text-xs font-semibold transition-colors duration-300 sm:px-4 sm:text-sm";

  return (
    <div
      className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-xl"
      role="tablist"
      aria-label={t("audience.toggleGroupLabel")}
    >
      <div className="relative flex w-full rounded-full border border-white/15 bg-neutral-900/85 p-1 shadow-inner backdrop-blur-sm">
        <motion.div
          className="pointer-events-none absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-accent-teal shadow-[0_0_18px_rgba(69,162,158,0.4)]"
          initial={false}
          animate={{
            left: audience === "qa" ? 4 : "calc(50% + 0px)",
          }}
          transition={{ type: "spring", stiffness: 420, damping: 32 }}
          aria-hidden
        />
        <button
          type="button"
          role="tab"
          aria-selected={audience === "qa"}
          className={`${btnBase} ${audience === "qa" ? "text-base-dark" : "text-neutral-400 hover:text-white"}`}
          onClick={() => setAudience("qa")}
        >
          {t("audience.qa")}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={audience === "web"}
          className={`${btnBase} ${audience === "web" ? "text-base-dark" : "text-neutral-400 hover:text-white"}`}
          onClick={() => setAudience("web")}
        >
          {t("audience.web")}
        </button>
      </div>
    </div>
  );
}

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export const INQUIRY_TYPE_VALUES = ["employment", "project", "general"];

export const ROLE_TYPE_VALUES = ["qa", "frontend", "web-engineer", "other"];

export const PROJECT_TYPE_VALUES = ["new-website", "updates", "online-store", "other"];

const emptyEmploymentFields = () => ({
  companyName: "",
  positionTitle: "",
  roleType: "",
});

const emptyProjectFields = () => ({
  businessName: "",
  projectType: "",
});

const ContactForm = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [inquiryType, setInquiryType] = useState("");
  const [employmentFields, setEmploymentFields] = useState(emptyEmploymentFields);
  const [projectFields, setProjectFields] = useState(emptyProjectFields);

  const handleInquiryTypeChange = (e) => {
    setInquiryType(e.target.value);
    setEmploymentFields(emptyEmploymentFields());
    setProjectFields(emptyProjectFields());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.target;
    const inquiryTypeLabel = t(`contact.inquiryTypes.${inquiryType}`);
    const roleTypeLabel = employmentFields.roleType
      ? t(`contact.roleTypes.${employmentFields.roleType}`)
      : "";
    const projectTypeLabel = projectFields.projectType
      ? t(`contact.projectTypes.${projectFields.projectType}`)
      : "";

    const data = {
      name: form.name.value,
      email: form.email.value,
      inquiryType,
      inquiryTypeLabel,
      companyName: inquiryType === "employment" ? employmentFields.companyName.trim() : "",
      positionTitle: inquiryType === "employment" ? employmentFields.positionTitle.trim() : "",
      roleType: inquiryType === "employment" ? employmentFields.roleType : "",
      roleTypeLabel,
      businessName: inquiryType === "project" ? projectFields.businessName.trim() : "",
      projectType: inquiryType === "project" ? projectFields.projectType : "",
      projectTypeLabel,
      message: form.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        let message = t("contact.errorGeneric");
        try {
          const body = await res.json();
          message = body.error || message;
        } catch {
          // server returned non-JSON error
        }
        throw new Error(message);
      }

      setStatus("success");
    } catch (err) {
      setErrorMessage(err.message || t("contact.errorSend"));
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="contact-success">
        <div className="success-check">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3>{t("contact.successTitle")}</h3>
        <p>{t("contact.successBody")}</p>
      </div>
    );
  }

  const showEmploymentFields = inquiryType === "employment";
  const showProjectFields = inquiryType === "project";

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="contact-name">{t("contact.nameLabel")} <span className="req">*</span></label>
          <input
            required
            type="text"
            id="contact-name"
            name="name"
            autoComplete="name"
            placeholder={t("contact.namePlaceholder")}
          />
        </div>
        <div className="field">
          <label htmlFor="contact-email">{t("contact.emailLabel")} <span className="req">*</span></label>
          <input
            required
            type="email"
            id="contact-email"
            name="email"
            autoComplete="email"
            placeholder={t("contact.emailPlaceholder")}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="contact-inquiry-type">{t("contact.inquiryTypeLabel")} <span className="req">*</span></label>
        <select
          required
          id="contact-inquiry-type"
          name="inquiryType"
          value={inquiryType}
          onChange={handleInquiryTypeChange}
        >
          <option value="" disabled>
            {t("contact.inquiryTypePlaceholder")}
          </option>
          {INQUIRY_TYPE_VALUES.map((value) => (
            <option key={value} value={value}>
              {t(`contact.inquiryTypes.${value}`)}
            </option>
          ))}
        </select>
      </div>

      <div
        className={`field-conditional${showEmploymentFields ? " is-visible" : ""}`}
        aria-hidden={!showEmploymentFields}
      >
        <div className="field-conditional-inner">
          <div className="field-conditional-fields">
            <div className="field">
              <label htmlFor="contact-employer-company">
                {t("contact.employerCompanyLabel")} <span className="req">*</span>
              </label>
              <input
                type="text"
                id="contact-employer-company"
                name="companyName"
                value={employmentFields.companyName}
                onChange={(e) =>
                  setEmploymentFields((prev) => ({ ...prev, companyName: e.target.value }))
                }
                required={showEmploymentFields}
                disabled={!showEmploymentFields}
                tabIndex={showEmploymentFields ? 0 : -1}
                autoComplete="organization"
                placeholder={t("contact.employerCompanyPlaceholder")}
              />
            </div>
            <div className="field">
              <label htmlFor="contact-position-title">
                {t("contact.positionTitleLabel")} <span className="req">*</span>
              </label>
              <input
                type="text"
                id="contact-position-title"
                name="positionTitle"
                value={employmentFields.positionTitle}
                onChange={(e) =>
                  setEmploymentFields((prev) => ({ ...prev, positionTitle: e.target.value }))
                }
                required={showEmploymentFields}
                disabled={!showEmploymentFields}
                tabIndex={showEmploymentFields ? 0 : -1}
                placeholder={t("contact.positionTitlePlaceholder")}
              />
            </div>
            <div className="field">
              <label htmlFor="contact-role-type">{t("contact.roleTypeLabel")}</label>
              <select
                id="contact-role-type"
                name="roleType"
                value={employmentFields.roleType}
                onChange={(e) =>
                  setEmploymentFields((prev) => ({ ...prev, roleType: e.target.value }))
                }
                disabled={!showEmploymentFields}
                tabIndex={showEmploymentFields ? 0 : -1}
              >
                <option value="">{t("contact.roleTypePlaceholder")}</option>
                {ROLE_TYPE_VALUES.map((value) => (
                  <option key={value} value={value}>
                    {t(`contact.roleTypes.${value}`)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`field-conditional${showProjectFields ? " is-visible" : ""}`}
        aria-hidden={!showProjectFields}
      >
        <div className="field-conditional-inner">
          <div className="field-conditional-fields">
            <div className="field">
              <label htmlFor="contact-business-name">
                {t("contact.businessNameLabel")} <span className="req">*</span>
              </label>
              <input
                type="text"
                id="contact-business-name"
                name="businessName"
                value={projectFields.businessName}
                onChange={(e) =>
                  setProjectFields((prev) => ({ ...prev, businessName: e.target.value }))
                }
                required={showProjectFields}
                disabled={!showProjectFields}
                tabIndex={showProjectFields ? 0 : -1}
                autoComplete="organization"
                placeholder={t("contact.businessNamePlaceholder")}
              />
            </div>
            <div className="field">
              <label htmlFor="contact-project-type">{t("contact.projectTypeLabel")}</label>
              <select
                id="contact-project-type"
                name="projectType"
                value={projectFields.projectType}
                onChange={(e) =>
                  setProjectFields((prev) => ({ ...prev, projectType: e.target.value }))
                }
                disabled={!showProjectFields}
                tabIndex={showProjectFields ? 0 : -1}
              >
                <option value="">{t("contact.projectTypePlaceholder")}</option>
                {PROJECT_TYPE_VALUES.map((value) => (
                  <option key={value} value={value}>
                    {t(`contact.projectTypes.${value}`)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="field">
        <label htmlFor="contact-message">{t("contact.messageLabel")} <span className="req">*</span></label>
        <textarea
          required
          id="contact-message"
          name="message"
          rows={5}
          placeholder={t("contact.messagePlaceholder")}
        />
      </div>

      {status === "error" && <div className="form-error">{errorMessage}</div>}
      <button className="btn btn-primary contact-submit" disabled={status === "submitting"} type="submit">
        {status === "submitting" ? <span className="spinner" /> : t("contact.button")}
      </button>
    </form>
  );
};

export default ContactForm;

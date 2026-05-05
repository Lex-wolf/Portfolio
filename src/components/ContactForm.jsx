import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const ContactForm = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        let message = t('contact.errorGeneric');
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

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="field">
          <label>{t("contact.nameLabel")} <span className="req">*</span></label>
          <input required type="text" name="name" placeholder={t("contact.namePlaceholder")} />
        </div>
        <div className="field">
          <label>{t("contact.emailLabel")} <span className="req">*</span></label>
          <input required type="email" name="email" placeholder={t("contact.emailPlaceholder")} />
        </div>
      </div>
      <div className="field">
        <label>{t("contact.messageLabel")} <span className="req">*</span></label>
        <textarea required name="message" rows={5} placeholder={t("contact.messagePlaceholder")} />
      </div>
      {status === "error" && <div className="form-error">{errorMessage}</div>}
      <button className="btn btn-primary contact-submit" disabled={status === "submitting"}>
        {status === "submitting" ? <span className="spinner" /> : t("contact.button")}
      </button>
    </form>
  );
};

export default ContactForm;

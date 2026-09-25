import { useState } from "react";
import { websitePrices } from "../data/websitesContent";

const initialFields = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  message: "",
  need: "New site",
  lang: "en",
};

const LANG_EMAIL = {
  en: "English",
  es: "Spanish",
  pt: "Portuguese",
  multi: "More than one",
  both: "More than one",
};

const WebsitesQuoteForm = ({
  selectedPlan = "Help me pick",
  careSelected = false,
  onPlanChange,
  onCareChange,
  launchPrice = websitePrices.launch.replace("From ", ""),
  businessPrice = websitePrices.business.replace("From ", ""),
  customPrice = websitePrices.custom.replace("From ", ""),
  copy,
}) => {
  const [fields, setFields] = useState(initialFields);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const updateField = (key) => (event) => {
    setFields((current) => ({ ...current, [key]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const phone = fields.phone.trim();
    const extras = [
      `Need: ${fields.need}`,
      `Plan: ${selectedPlan}${careSelected ? " + Care Plan" : ""}`,
      `Language: ${LANG_EMAIL[fields.lang] ?? fields.lang}`,
    ];
    if (phone) extras.unshift(`Phone: ${phone}`);

    const message = `${extras.join("\n")}\n\n${fields.message.trim()}`;

    const data = {
      name: fields.name.trim(),
      email: fields.email.trim(),
      inquiryType: "project",
      inquiryTypeLabel: "Website quote",
      businessName: fields.businessName.trim(),
      projectType: "new-website",
      projectTypeLabel: fields.need,
      message,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        let messageText = copy.sendError;
        try {
          const body = await response.json();
          if (body.error) messageText = body.error;
        } catch {
          // Non-JSON error body.
        }
        throw new Error(messageText);
      }

      setStatus("success");
      setFields(initialFields);
      onPlanChange?.("Help me pick");
      onCareChange?.(false);
    } catch (error) {
      setErrorMessage(error.message || copy.sendError);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="ws-done show" role="status">
        <div>
          <div className="ws-ck" aria-hidden="true">
            ✓
          </div>
          <h3>{copy.doneTitle}</h3>
          <p>{copy.doneBody}</p>
        </div>
      </div>
    );
  }

  return (
    <form className="ws-form reveal" onSubmit={handleSubmit} noValidate={false}>
      <div className="ws-frow">
        <div className="ws-field">
          <label htmlFor="quote-name">
            {copy.name} <span className="req" aria-hidden="true">*</span>
            <span className="sr-only"> {copy.required}</span>
          </label>
          <input
            required
            type="text"
            id="quote-name"
            name="name"
            autoComplete="name"
            value={fields.name}
            onChange={updateField("name")}
            placeholder="Jordan Lee"
          />
        </div>
        <div className="ws-field">
          <label htmlFor="quote-business">
            {copy.business} <span className="req" aria-hidden="true">*</span>
            <span className="sr-only"> {copy.required}</span>
          </label>
          <input
            required
            type="text"
            id="quote-business"
            name="businessName"
            autoComplete="organization"
            value={fields.businessName}
            onChange={updateField("businessName")}
            placeholder="Harbor Street Café"
          />
        </div>
      </div>

      <div className="ws-frow">
        <div className="ws-field">
          <label htmlFor="quote-email">
            {copy.email} <span className="req" aria-hidden="true">*</span>
            <span className="sr-only"> {copy.required}</span>
          </label>
          <input
            required
            type="email"
            id="quote-email"
            name="email"
            autoComplete="email"
            inputMode="email"
            value={fields.email}
            onChange={updateField("email")}
            placeholder="you@yourbusiness.com"
          />
        </div>
        <div className="ws-field">
          <label htmlFor="quote-phone">
            {copy.phone} <span className="ws-optional">{copy.optional}</span>
          </label>
          <input
            type="tel"
            id="quote-phone"
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            value={fields.phone}
            onChange={updateField("phone")}
            placeholder="(619) 555-0148"
          />
        </div>
      </div>

      <fieldset className="ws-chips-group">
        <legend>{copy.needLegend}</legend>
        <div className="ws-chips">
          {copy.needs.map(([value, label]) => (
            <label key={value}>
              <input
                type="radio"
                name="need"
                value={value}
                checked={fields.need === value}
                onChange={updateField("need")}
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="ws-chips-group">
        <legend>{copy.planLegend}</legend>
        <div className="ws-chips">
          {[
            ["Launch", `Launch · ${launchPrice}`],
            ["Business", `Business · ${businessPrice}`],
            ["Custom", `Custom · ${customPrice}`],
            ["Help me pick", copy.help],
          ].map(([value, label]) => (
            <label key={value}>
              <input
                type="radio"
                name="plan"
                value={value}
                checked={selectedPlan === value}
                onChange={() => onPlanChange?.(value)}
              />
              <span>{label}</span>
            </label>
          ))}
          <label>
            <input
              type="checkbox"
              name="care"
              value="Care plan"
              checked={careSelected}
              onChange={(event) => onCareChange?.(event.target.checked)}
            />
            <span>{copy.care}</span>
          </label>
        </div>
      </fieldset>

      <fieldset className="ws-chips-group">
        <legend>{copy.langLegend}</legend>
        <div className="ws-chips">
          {copy.langs.map(([value, label]) => (
            <label key={value}>
              <input
                type="radio"
                name="lang"
                value={value}
                checked={fields.lang === value}
                onChange={updateField("lang")}
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="ws-field">
        <label htmlFor="quote-message">
          {copy.goal} <span className="req" aria-hidden="true">*</span>
          <span className="sr-only"> {copy.required}</span>
        </label>
        <textarea
          required
          id="quote-message"
          name="message"
          rows={4}
          value={fields.message}
          onChange={updateField("message")}
          placeholder={copy.goalPlaceholder}
        />
      </div>

      {status === "error" && (
        <div className="form-error" role="alert">
          {errorMessage}
        </div>
      )}

      <button className="ws-btn" type="submit" disabled={status === "submitting"}>
        <span>{status === "submitting" ? copy.sending : copy.submit}</span>
        <span className="ws-arr" aria-hidden="true">
          →
        </span>
      </button>
    </form>
  );
};

export default WebsitesQuoteForm;

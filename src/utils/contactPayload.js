const VALID_INQUIRY_TYPES = new Set(["employment", "project", "general"]);

export function normalizeContactPayload(body) {
  const {
    name = "",
    email = "",
    message = "",
    inquiryType = "",
    inquiryTypeLabel = "",
    companyName = "",
    positionTitle = "",
    roleType = "",
    roleTypeLabel = "",
    businessName = "",
    projectType = "",
    projectTypeLabel = "",
  } = body ?? {};

  const trimmedEmail = String(email).trim();
  const trimmedMessage = String(message).trim();
  const trimmedInquiryType = String(inquiryType).trim();
  const trimmedName = String(name).trim();
  const trimmedCompanyName = String(companyName).trim();
  const trimmedPositionTitle = String(positionTitle).trim();
  const trimmedRoleTypeLabel = String(roleTypeLabel).trim();
  const trimmedBusinessName = String(businessName).trim();
  const trimmedProjectTypeLabel = String(projectTypeLabel).trim();
  const trimmedInquiryLabel = String(inquiryTypeLabel).trim();

  if (!trimmedEmail || !trimmedMessage) {
    return { error: "Email and message are required" };
  }

  if (!trimmedInquiryType || !VALID_INQUIRY_TYPES.has(trimmedInquiryType)) {
    return { error: "Inquiry type is required" };
  }

  if (trimmedInquiryType === "employment") {
    if (!trimmedCompanyName) {
      return { error: "Company name is required for employment inquiries" };
    }
    if (!trimmedPositionTitle) {
      return { error: "Position title is required for employment inquiries" };
    }
  }

  if (trimmedInquiryType === "project" && !trimmedBusinessName) {
    return { error: "Business name is required for project inquiries" };
  }

  const inquiryLabel = trimmedInquiryLabel || trimmedInquiryType;
  const lines = [
    `Inquiry: ${inquiryLabel}`,
    trimmedInquiryType === "employment" ? `Company: ${trimmedCompanyName}` : null,
    trimmedInquiryType === "employment" ? `Position Title: ${trimmedPositionTitle}` : null,
    trimmedInquiryType === "employment" && (trimmedRoleTypeLabel || roleType)
      ? `Role Type: ${trimmedRoleTypeLabel || roleType}`
      : null,
    trimmedInquiryType === "project" ? `Business: ${trimmedBusinessName}` : null,
    trimmedInquiryType === "project" && (trimmedProjectTypeLabel || projectType)
      ? `Project Type: ${trimmedProjectTypeLabel || projectType}`
      : null,
    "",
    `Name: ${trimmedName || "Not provided"}`,
    `Email: ${trimmedEmail}`,
    "",
    trimmedMessage,
  ].filter((line) => line !== null);

  return {
    payload: {
      name: trimmedName,
      email: trimmedEmail,
      message: trimmedMessage,
      inquiryType: trimmedInquiryType,
      inquiryTypeLabel: inquiryLabel,
      companyName: trimmedCompanyName,
      positionTitle: trimmedPositionTitle,
      roleType: String(roleType).trim(),
      roleTypeLabel: trimmedRoleTypeLabel,
      businessName: trimmedBusinessName,
      projectType: String(projectType).trim(),
      projectTypeLabel: trimmedProjectTypeLabel,
    },
    subject: `Portfolio: ${inquiryLabel} — ${trimmedName || trimmedEmail}`,
    text: lines.join("\n"),
  };
}

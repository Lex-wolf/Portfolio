function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function detailRow(label, value) {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:10px 0 4px;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#71B7D5;">${escapeHtml(label)}</td>
    </tr>
    <tr>
      <td style="padding:0 0 14px;font-size:15px;line-height:1.5;color:#E8F4F8;">${escapeHtml(value)}</td>
    </tr>`;
}

export function buildContactEmailHtml(payload) {
  const {
    inquiryTypeLabel,
    inquiryType,
    name,
    email,
    message,
    companyName,
    positionTitle,
    roleTypeLabel,
    roleType,
    businessName,
    projectTypeLabel,
    projectType,
  } = payload;

  const roleLabel = roleTypeLabel || roleType;
  const projectLabel = projectTypeLabel || projectType;

  const detailRows = [
    inquiryType === "employment" ? detailRow("Company", companyName) : "",
    inquiryType === "employment" ? detailRow("Position", positionTitle) : "",
    inquiryType === "employment" && roleLabel ? detailRow("Role type", roleLabel) : "",
    inquiryType === "project" ? detailRow("Business", businessName) : "",
    inquiryType === "project" && projectLabel ? detailRow("Project type", projectLabel) : "",
    detailRow("Name", name || "Not provided"),
    detailRow("Email", email),
  ].join("");

  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>New portfolio inquiry</title>
</head>
<body style="margin:0;padding:0;background:#08171E;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#08171E;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:#042B44;border:1px solid rgba(161,204,220,0.12);border-radius:18px;overflow:hidden;">
          <tr>
            <td style="padding:28px 28px 18px;background:linear-gradient(135deg,#042B44 0%,#096B90 100%);">
              <div style="font-size:13px;letter-spacing:0.14em;text-transform:uppercase;color:#71B7D5;margin-bottom:10px;">alex.curiel</div>
              <h1 style="margin:0;font-size:24px;line-height:1.25;color:#E8F4F8;font-weight:700;">New contact form message</h1>
              <div style="margin-top:16px;display:inline-block;padding:8px 14px;border-radius:999px;background:rgba(158,41,30,0.22);border:1px solid rgba(158,41,30,0.45);font-size:13px;font-weight:600;color:#F4B4AD;">
                ${escapeHtml(inquiryTypeLabel)}
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 28px 8px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                ${detailRows}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 28px 28px;">
              <div style="font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#71B7D5;margin-bottom:10px;">Message</div>
              <div style="padding:18px 20px;border-radius:14px;background:#08171E;border:1px solid rgba(161,204,220,0.10);font-size:15px;line-height:1.7;color:#A1CCDC;">
                ${safeMessage}
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:0 28px 28px;">
              <a href="mailto:${escapeHtml(email)}" style="display:inline-block;padding:14px 22px;border-radius:12px;background:#9E291E;color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;">
                Reply to ${escapeHtml(name || email)}
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 28px 22px;border-top:1px solid rgba(161,204,220,0.10);font-size:12px;line-height:1.5;color:#71B7D5;">
              Sent from alexcuriel.com contact form
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

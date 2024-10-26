// Modules
import * as brevo from "@getbrevo/brevo";

// Start env vars
const BREVO_API_KEY: string | undefined = process.env.BREVO_API_KEY as string;
// End env vars

// Utils
import { loadEmailTemplate } from "../utils/emailTemplateLoader";

const apiInstance = new brevo.TransactionalEmailsApi();

if (BREVO_API_KEY) {
  apiInstance.setApiKey(
    brevo.TransactionalEmailsApiApiKeys.apiKey,
    BREVO_API_KEY
  );
} else {
  throw new Error("La clave de API de Brevo no está definida.");
}

const smtpEmail = new brevo.SendSmtpEmail();

export const sendEmail = async (title: string, to: string, content: string) => {
  smtpEmail.subject = title;
  smtpEmail.to = [{ email: to, name: "Usuario Uno" }];
  smtpEmail.htmlContent = loadEmailTemplate(title, to, content);
  smtpEmail.sender = { name: "PuertoDev", email: "admodevcodes@outlook.com" };

  try {
    await apiInstance.sendTransacEmail(smtpEmail);
  } catch (error) {
    console.error("Error enviando el correo electrónico:", error);
  }
};

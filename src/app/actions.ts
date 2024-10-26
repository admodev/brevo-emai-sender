// Libs
import { sendEmail } from "./lib/brevo";

export const handleEmailForm = async (formData: FormData): Promise<void> => {
  "use server";

  const title: FormDataEntryValue | null = formData.get("title");
  const to: FormDataEntryValue | null = formData.get("to");
  const content: FormDataEntryValue | null = formData.get("content");

  // validacion tonta, en un caso de uso real reemplazar con error handling...
  if (!title || !to || !content) {
    throw new Error(
      "Error, no se obtuvieron todos los datos para enviar el e-mail!"
    );
  }

  await sendEmail(title.toString(), to.toString(), content.toString());
};

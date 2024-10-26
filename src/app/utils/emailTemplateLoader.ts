import * as fs from "fs";

export const loadEmailTemplate = (
  title: string,
  to: string,
  content: string
): string => {
  let template = fs.readFileSync("public/email.tpl.html", "utf8");

  template = template.replace("{{title}}", title);
  template = template.replace("{{to}}", to);
  template = template.replace("{{content}}", content);

  return template;
};

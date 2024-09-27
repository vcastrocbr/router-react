import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params: { contactId } }) {
  await deleteContact(contactId);
  return redirect("/");
}
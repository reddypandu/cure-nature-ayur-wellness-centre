// Updates the document title and description for each routed page.
import { useEffect } from "react";

export function Seo({ title, description }) {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]').content = description;
  }, [title, description]);
  return null;
}

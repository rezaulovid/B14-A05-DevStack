import { use } from "react";
import type { Ilanguages } from "../../types/languages";
import AvailableLanguages from "./AvailableLanguages";

interface LanguagesProps {
  languagesPromise: Promise<Ilanguages[]>;
}

const Languages = ({ languagesPromise }: LanguagesProps) => {
  const languages = use(languagesPromise);

  return <AvailableLanguages languages={languages} />;
};

export default Languages;
import React from "react";
import LocaleContext from "../contexts/LocaleContext";
import { MdGTranslate } from "react-icons/md";

function LocaleToggle() {
  const { toggleLocale} = React.useContext(LocaleContext);

  return (
    <button onClick={toggleLocale} className="toggle-locale">
      <MdGTranslate/>
    </button>
  );
}

export default LocaleToggle;

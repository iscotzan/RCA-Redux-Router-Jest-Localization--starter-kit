import React from "react";
import { withLocalize } from "react-localize-redux";
import ReactFlagsSelect from 'react-flags-select';
//import css module
import 'react-flags-select/css/react-flags-select.css';

const LanguageToggle = ({ languages, activeLanguage, setActiveLanguage }) => {
let countries = [];
let customLabels = {};

for (const lang in languages){
    const {code, name} = languages[lang];
    countries.push(code);
    customLabels[code] = name;
}
const onSelectFlag = (selected_lan_code) => {
setActiveLanguage(selected_lan_code);
}
return (
  <ul className="selector">

    {/* //     <button onClick={() => setActiveLanguage(lang.code)}> */}
  
    <ReactFlagsSelect 
    countries={countries} 
    customLabels={customLabels}
    defaultCountry="GB"
    placeholder="Select Language"
    onSelect={(selected_lan_code) => onSelectFlag(selected_lan_code)}
     />
   
  </ul>
)};

export default withLocalize(LanguageToggle);
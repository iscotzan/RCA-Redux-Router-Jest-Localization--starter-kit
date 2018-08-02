//this is an option to rearrange translations in a clearer way, will need to pass through the
//TransformTranslationFormat function to conform to the default format
import transformFunction from "../../../common/TransformTranslationFormat";
const customTranslation = {
  en: {
    title: "About Page"
  },
  fr: {
    title: "à propos de page"
  },
  es: {
    title: "Sobre page"
  },
  ru: {
    title: "О странице"
  },
  he: {
    title: "עמוד אודות"
  }
};

const translation = transformFunction(customTranslation);
export default translation;

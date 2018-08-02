//this is an option to rearrange translations in a clearer way, will need to pass through the
//TransformTranslationFormat function to conform to the default format
import transformFunction from "../../../common/TransformTranslationFormat";
const customTranslation = {
    en: {
      getStartedMessage: "To get started, edit <code>src/App.js</code> and save to reload.",
    },
    fr: {
      getStartedMessage: "pour commencer, éditez <code>src/App.js</code> et sauvegardez pour recharger.",
    },
    es: {
      getStartedMessage: "Para empezar, edite <code>src/App.js</code> y guarde para recargar.",
    },
    ru: {
       getStartedMessage: "Для начала отредактируйте <code>src/App.js</code> и сохраните для перезагрузки.",
    },
    he: {
      getStartedMessage: "ושמור על מנת לטעון מחדש <code>src/App.js</code> על מנת להתחיל, ערוך את",
    }
  };

const translation = transformFunction(customTranslation);
export default translation;

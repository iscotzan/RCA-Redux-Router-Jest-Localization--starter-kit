// @flow
import React from "react";
import { withLocalize } from "react-localize-redux";
// import aboutTranslations from "./translations/about.json";
import aboutTranslations from "./translations/about.translations";
import { Translate } from "react-localize-redux";

type Props = { addTranslation: Function };

class About extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.props.addTranslation(aboutTranslations);
  }
  render() {
    return (
      <p className="App-intro">
        <Translate id="translations.title">This is an About page.</Translate>
      </p>
    );
  }
}

export default withLocalize(About);

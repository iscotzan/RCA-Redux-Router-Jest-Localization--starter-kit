// @flow
import React from 'react';
import { withLocalize } from "react-localize-redux";
import homeTranslation from "./translations/home.translations";
import { Translate } from "react-localize-redux";

type Props = {addTranslation: Function};

class Home extends React.Component<Props> {
   constructor(props) {
    super(props);
    this.props.addTranslation(homeTranslation);
  }
  render() {
    return (
      <p className="App-intro">
          <Translate id="translations.getStartedMessage" options={{ renderInnerHtml: true }} />
      </p>
    );
  }
};

export default withLocalize(Home);

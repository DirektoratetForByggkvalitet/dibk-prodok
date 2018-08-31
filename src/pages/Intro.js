import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Primitives } from 'losen';
import { IntroMain } from '../primitives/IntroMain';

function Intro({ close, data }) {
  if (Object.keys(data).length !== 0) {
    close();
  }
  return (
    <Primitives.Wizard>
      <IntroMain>
        <Primitives.Heading.H1>
          Produktdokumentasjon
        </Primitives.Heading.H1>
        <Primitives.Paragraphs.P>
          Denne veiviseren gir informasjon til kommuner om dokumentasjon av 20 byggevarer. Ved å svare på en rekke spørsmål får kommunen svar på hva som kreves av dokumentasjon og hva som eventuelt mangler av dokumentasjon ved tilsyn.
        </Primitives.Paragraphs.P>
        <Primitives.Button.MainButton type="button" onClick={() => close()}>
          Start veiviseren
        </Primitives.Button.MainButton>
      </IntroMain>
    </Primitives.Wizard>
  );
}

Intro.propTypes = {
  close: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default connect(state => ({ data: state['@WIZARD_STATE'] }))(Intro);

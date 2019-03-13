import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Primitives } from 'losen';
import { IntroMain } from '../primitives/IntroMain';

function Intro({ close, data: { $computed, ...data } }) {
  if (Object.keys(data).length > 0) {
    close();
  }

  return (
    <Primitives.Wizard>
      <IntroMain>
        <Primitives.Heading.H1>Tilsyn med produktdokumentasjon</Primitives.Heading.H1>
        <Primitives.Paragraphs.Lead>
          Denne veiviseren hjelper deg i kommunen med å føre tilsyn med produktdokumentasjon. Svar på spørsmålene for å finne ut om dokumentasjonen er i orden.
        </Primitives.Paragraphs.Lead>
        <section>
          <div>
            <Primitives.Heading.H2>Før du begynner</Primitives.Heading.H2>
            <ol>
              <li>Bestem deg for hvilket produkt eller hvilken byggevare du vil føre tilsyn med.</li>
              <li>Bestem deg for hvilke egenskaper ved produktet du skal føre tilsyn med.</li>
              <li>Be om all relevant produktdokumentasjon og prosjekteringsgrunnlag fra ansvarlig søker.</li>
            </ol>
          </div>
        </section>
        <Primitives.Heading.H2>Har du mottatt produktdokumentasjonen?</Primitives.Heading.H2>
        <Primitives.Paragraphs.P>
          Da er det bare å sette i gang med veiviseren! Når du har fullført veiviseren får du en rapport som viser svarene dine. Denne kan du skrive ut eller lagre for å dokumentere tilsynet.
        </Primitives.Paragraphs.P>
        <Primitives.Paragraphs.P>
        Du trenger <strong>kun</strong> å svare på de spørsmålene som er relevante for ditt tilsyn, og kan hoppe over de som ikke er relevante.
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

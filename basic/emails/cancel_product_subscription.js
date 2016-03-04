var Styles           = require('../includes/styles');
var StandardTemplate = require('../templates/standard')
var Texts            = require('../macros/texts');
var Header           = Texts.headerminimal_pragraph;

function cancelProductSubscription () {

	var output = `
    ${	Header(
      'Hej [[firstName]].',
      'Vi bekræfter hermed, at du pr. [[expireDate]] har afmeldt dig dit abonnement på [[productName]] på BoligPortal. Vi vil ikke trække yderligere betaling på dit betalingskort.'
    )}
    <mj-section ${Styles.bp_section}}>
      <mj-column width="100%">
        <mj-text ${Styles.bp_text}}>
          <p>Vi håber, du har haft held med dit boligsalg og ønsker dig velkommen retur en anden gang.</p>

          <p>Har du spørgsmål, er du velkommen til at kontakte os på 7020 8082 eller <a {{bp_link|safe}} href="mailto:info@boligportal.dk">info@boligportal.dk</a>.</p>

          <p>Har du fået solgt din bolig, kan du her få hjælp og rådgivning til den sidste del af dit ejendomssalg:</p>

          <ul>
               <li><a ${Styles.bp_link} href="http://www.boligportal.dk/ejerbolig/saelgselv_guide">Sælgselv guide - få overblik over salgsprocessen</a></li>
               <li><a ${Styles.bp_link} href="http://www.boligportal.dk/juridisk_hjaelp_bolighandel/saelg_bolig_selv">Få hjælp til købsaftalen og tinglysning</a></li>
               <li><a ${Styles.bp_link} href="http://www.boligportal.dk/byggeteknisk_service_bolighandel">Brug for en ejerskifteforsikring - få de nødvendige dokumenter</a></li>
          </ul>
        </mj-text>
      </mj-column>
    </mj-section>
	`

 return StandardTemplate(output)

};
var output = cancelProductSubscription()
module.exports = output;

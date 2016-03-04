/// ---- file break ----
//// templates/styles.js
/// ---- file break ----


var styles = {};
styles.bp_color_primary = '#0d9d99';
styles.bp_color_green = '#64b472';
styles.bp_color_dust_green = '#629f85';
styles.bp_color_sky_blue = '#8eb9c6';
styles.bp_color_orange = '#ee7134';
styles.bp_text = 'font-family="Helvetica" color="#34495e" font-size="15px" line-height="22px"';
styles.bp_text_h2 = 'font-family="Helvetica" font-weight="bold" color="#34495e" font-size="26px" line-height="32px"';
styles.bp_text_h4 = 'font-family="Helvetica" font-weight="bold" color="#34495e" font-size="22px" line-height="28px"';
styles.bp_section = 'background-color="white" align="left" pading-bottom="0" pading-top="0"';
styles.bp_button = 'background-color="#64b472" color="white" font-family="Helvetica" font-size="15px"';
styles.bp_list = styles.bp_text;
styles.bp_list_header = styles.bp_text_header;
styles.bp_link = 'style="color:#0d9d99;"';

//module.exports = styles

/// ---- file break ----
//// templates/master.js
/// ---- file break ----

function MasterTemplate(myInnerTemplate){
  return `
  <mj-body background-color="#fafafa" padding="20px">
    <mj-section padding-bottom="0" background-color="white">
      <mj-column width="100%">
        <mj-image width="120" align="left" src="http://www.boligportal.dk/images-sp/logo/logo-email2x.png"></mj-image>

        <mj-divider
            padding-top="6"
            padding-bottom="0"
            padding-left="0"
            padding-right="0"
            border-width="1px"
            border-color="#efefef"/>

      </mj-column>
    </mj-section>
    ${myInnerTemplate}
  </mj-body>
  `
}
// module.exports = MasterTemplate;
/// ---- file break ----
//// templates/standard.js
/// ---- file break ----

// var MasterTemplate = require('./templates/master')
// var styles = require('./templates/styles')
function StandardTemplate(myInnerTemplate){
  var t = MasterTemplate;
  return t(`
    ${myInnerTemplate()}
    <mj-section background-color="#fafafa" ${styles.bp_section}}>
      <mj-column ${styles.bp_column}}>
      <mj-text align="center" color="#656565" font-size="15px" ${styles.bp_text}}>
          <strong>Brug for hjælp?</strong> Kontakt os på tlf. <a href="tel:70208082" style="color: #333333" >70&nbsp;20&nbsp;80&nbsp;82</a> eller <a href="mailto:info@boligportal.dk" style="color: #333333">info@boligportal.dk</a>
          <br>
          <br>
          <a href="https://www.facebook.com/boligportal" target="_blank"><img align="none" alt="Facebook" height="32" src="http://www.boligportal.dk/info/app/uploads/bp-facebook-icon.png" style="width: 33px; height: 32px; margin: 0px 6px 0px 0px;" width="33"></a><a href="https://twitter.com/boligportal" target="_blank"><img align="none" height="32" src="http://www.boligportal.dk/info/app/uploads/bp-twitter-icon.png" style="width: 32px; height: 32px; margin: 0px;" width="32"></a>
        </mj-text>
      </mj-column>
    </mj-section>


  `);
}

// module.exports = StandardTemplate;
/// ---- file break ----
//// macros/buttons.js
/// ---- file break ----
///
/// var styles = require('inlcudes/styles');
var Buttons ={}
Buttons.primary = function(text, url){
  return `
  <mj-section ${styles.bp_section}>
    <mj-column>
      <mj-button href="${ url }" ${styles.bp_button}>
        ${ text }
      </mj-button>
    </mj-column>
  </mj-section>
 `
}
// module.exports = Buttons;


/// ---- file break ----
//// macros/texts.js
/// ---- file break ----
///
/// var styles = require('templates/styles');
var Texts ={}
Texts.headerminimal_pragraph = function(headerminimal, text){
  return `
  <mj-section ${styles.bp_section}>
    <mj-column ${styles.bp_section}>
      <mj-text ${styles.bp_section}>
        <strong>${headerminimal}</strong><br/>${text}
      </mj-text>
    </mj-column>
  </mj-section>
 `
}

// module.exports = Texts;
/// ---- file break ----
//// emails/cancel_product_subscription.js
/// ---- file break ----
///
/// var styles = require('inlcudes/styles');
// var StandardTemplate = require('./templates/standard')
var output = StandardTemplate(function(){
  var header = Texts.headerminimal_pragraph
return `
    ${
    header(
      'Hej [[firstName]].',
      'Vi bekræfter hermed, at du pr. [[expireDate]] har afmeldt dig dit abonnement på [[productName]] på BoligPortal. Vi vil ikke trække yderligere betaling på dit betalingskort.'
    )
    }
    <mj-section ${styles.bp_section}}>
      <mj-column width="100%">
        <mj-text ${styles.bp_text}}>
          <p>Vi håber, du har haft held med dit boligsalg og ønsker dig velkommen retur en anden gang.</p>

          <p>Har du spørgsmål, er du velkommen til at kontakte os på 7020 8082 eller <a {{bp_link|safe}} href="mailto:info@boligportal.dk">info@boligportal.dk</a>.</p>

          <p>Har du fået solgt din bolig, kan du her få hjælp og rådgivning til den sidste del af dit ejendomssalg:</p>

          <ul>
               <li><a ${styles.bp_link} href="http://www.boligportal.dk/ejerbolig/saelgselv_guide">Sælgselv guide - få overblik over salgsprocessen</a></li>
               <li><a ${styles.bp_link} href="http://www.boligportal.dk/juridisk_hjaelp_bolighandel/saelg_bolig_selv">Få hjælp til købsaftalen og tinglysning</a></li>
               <li><a ${styles.bp_link} href="http://www.boligportal.dk/byggeteknisk_service_bolighandel">Brug for en ejerskifteforsikring - få de nødvendige dokumenter</a></li>
          </ul>
        </mj-text>
      </mj-column>
    </mj-section>
`
});
/// module.exports = output
console.log(output)

/// and it compiles like this!
// var mjml = require( 'mjml' );
// htmlOutput = mjml.mjml2html(output)
//
// console.log(htmlOutput);
module.exports = output;

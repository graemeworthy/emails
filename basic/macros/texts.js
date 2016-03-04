var Styles = require('../includes/styles');

var Texts = {}

Texts.headerminimal_pragraph = function(headerminimal, text){
  var output = `
  <mj-section ${Styles.bp_section}>
    <mj-column ${Styles.bp_section}>
      <mj-text ${Styles.bp_section}>
        <strong>${headerminimal}</strong><br/>${text}
      </mj-text>
    </mj-column>
  </mj-section>
 `;
 return output;
}

module.exports = Texts;

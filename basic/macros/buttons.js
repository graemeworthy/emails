var Styles = require('./basic/inlcudes/styles');
var Buttons = {}

Buttons.primary = function(text, url) {
  var output =  `
  <mj-section ${Styles.bp_section}>
    <mj-column>
      <mj-button href="${ url }" ${Styles.bp_button}>
        ${ text }
      </mj-button>
    </mj-column>
  </mj-section>
 `
 return output;
}

module.exports = Buttons;

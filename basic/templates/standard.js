var MasterTemplate = require('../templates/master');
var Styles         = require('../includes/styles');

function StandardTemplate(myInnerTemplate) {

  var output = `
    ${myInnerTemplate}
    <mj-section background-color="#fafafa" ${Styles.bp_section}}>
      <mj-column ${Styles.bp_column}}>
      <mj-text align="center" color="#656565" font-size="15px" ${Styles.bp_text}}>
          <strong>Brug for hjælp?</strong> Kontakt os på tlf. <a href="tel:70208082" style="color: #333333" >70&nbsp;20&nbsp;80&nbsp;82</a> eller <a href="mailto:info@boligportal.dk" style="color: #333333">info@boligportal.dk</a>
          <br>
          <br>
          <a href="https://www.facebook.com/boligportal" target="_blank"><img align="none" alt="Facebook" height="32" src="http://www.boligportal.dk/info/app/uploads/bp-facebook-icon.png" style="width: 33px; height: 32px; margin: 0px 6px 0px 0px;" width="33"></a><a href="https://twitter.com/boligportal" target="_blank"><img align="none" height="32" src="http://www.boligportal.dk/info/app/uploads/bp-twitter-icon.png" style="width: 32px; height: 32px; margin: 0px;" width="32"></a>
        </mj-text>
      </mj-column>
    </mj-section>


  `;
  return MasterTemplate(output);
}

module.exports = StandardTemplate;

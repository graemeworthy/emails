function MasterTemplate(myInnerTemplate) {
  var output = `
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
  `;
	return output;
}

module.exports = MasterTemplate;

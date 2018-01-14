'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class Vitrum3SatEUDevice extends ZwaveDevice {
	async onMeshInit() {
		//this.enableDebug();

		if(Object.keys(this.node.CommandClass).length < 5)
		{
			this.registerCapability('onoff', 'BASIC');
			this.registerCapability('onoff', 'SWITCH_MULTILEVEL');
			this.registerCapability('dim', 'BASIC');
			this.registerCapability('dim', 'SWITCH_MULTILEVEL');

			this.registerReportListener('BASIC', 'BASIC_SET', ( rawReport, parsedReport ) => {
				//console.log('Value: ', rawReport.Value / 99);
				this.setCapabilityValue('dim', rawReport.Value / 99);
			});
		}
	}
}

module.exports = Vitrum3SatEUDevice;

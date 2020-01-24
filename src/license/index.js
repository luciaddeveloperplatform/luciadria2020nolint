import {setLicenseText} from "@luciad/ria/util/License";

const licenseText = require('!!raw-loader!./luciadria_development.txt').default;
setLicenseText(licenseText);

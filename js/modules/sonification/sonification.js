/**
 * (c) 2009-2018 Øystein Moseng
 *
 * Sonification module for Highcharts
 *
 * License: www.highcharts.com/license
 */

'use strict';
import H from '../../parts/Globals.js';
import Instrument from 'Instrument.js';
import instruments from 'instrumentDefinitions.js';
import Earcon from 'Earcon.js';
import pointSonify from 'pointSonify.js';
import utilities from 'utilities.js';

// Expose on the Highcharts object
H.sonification = {
    Instrument: Instrument,
    instruments: instruments,
    Earcon: Earcon,
    utilities: utilities
};

H.Point.prototype.sonify = pointSonify;

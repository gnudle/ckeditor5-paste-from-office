/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import simpleText from './simple-text/input.html';

import simpleTextNormalized from './simple-text/normalized.html';

import simpleTextModel from './simple-text/model.html';

export const fixtures = {
	input: {
		simpleText
	},
	normalized: {
		simpleText: simpleTextNormalized
	},
	model: {
		simpleText: simpleTextModel
	}
};

export const browserFixtures = {};

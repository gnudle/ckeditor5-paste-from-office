/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module paste-from-office/pastefromoffice
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import { _inputTransformationListener } from './utils';

/**
 * The Paste from Office plugin.
 *
 * This plugin handles content pasted from Office apps (for now only Word) and transforms it (if necessary)
 * to a valid structure which can then be understood by the editor features.
 *
 * For more information about this feature check the {@glink api/paste-from-office package page}.
 *
 * @extends module:core/plugin~Plugin
 */
export default class PasteFromOffice extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'PasteFromOffice';
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;

		this.listenTo(
			editor.plugins.get( 'Clipboard' ),
			'inputTransformation',
			_inputTransformationListener,
			{ priority: 'high' }
		);
	}
}


import { CreativeButton } from 'minter/sidebar_buttons/CreativeButton.js'
import { ImageView } from 'minter/mobjects/ImageView.js'

export class ListFunctionsButton extends CreativeButton {

	defaults(): object {
		return {
			creations: ['list', 'sum', 'mean'],
			iconSize: 25
		}
	}

	mutabilities(): object {
		return {
			creations: 'never'
		}
	}
}
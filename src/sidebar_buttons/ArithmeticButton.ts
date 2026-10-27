
import { CreativeButton } from 'minter/sidebar_buttons/CreativeButton.js'
import { ImageView } from 'minter/mobjects/ImageView.js'

export class ArithmeticButton extends CreativeButton {

	defaults(): object {
		return {
			creations: ['add', 'subtract', 'multiply', 'divide'],
			iconSize: 20
		}
	}

	mutabilities(): object {
		return {
			creations: 'never'
		}
	}

}
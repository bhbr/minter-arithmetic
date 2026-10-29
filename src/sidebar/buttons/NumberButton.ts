
import { CreativeButton, ImageView } from '@bhbr/minter'

export class NumberButton extends CreativeButton {

	defaults(): object {
		return {
			creations: ['number', 'slider', 'stepper'],
			iconSize: 25
		}
	}

	mutabilities(): object {
		return {
			creations: 'never'
		}
	}
}
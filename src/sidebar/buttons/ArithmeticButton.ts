
import { CreativeButton, ImageView } from '@bhbr/minter'

export class ArithmeticButton extends CreativeButton {

	defaults(): object {
		return {
			creations: ['add', 'subtract', 'multiply', 'divide'],
			iconLocation: '../../minter-arithmetic/assets',
			iconSize: 20
		}
	}

	mutabilities(): object {
		return {
			creations: 'never'
		}
	}

}
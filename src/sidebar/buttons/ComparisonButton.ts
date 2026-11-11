
import { CreativeButton, ImageView } from '@bhbr/minter'

export class ComparisonButton extends CreativeButton {

	defaults(): object {
		return {
			creations: ['less than', 'less or equal', 'greater than', 'greater or equal', 'equal', 'not equal'],
			iconLocation: '../../minter-arithmetic/assets',
			iconSize: 25,
		}
	}

	mutabilities(): object {
		return {
			creations: 'never'
		}
	}

}
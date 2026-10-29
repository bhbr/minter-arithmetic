
import { CreativeButton, ImageView } from '@bhbr/minter'

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
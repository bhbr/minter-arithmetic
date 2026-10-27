
import { Sidebar } from 'minter/Sidebar.js'
import { DragButton } from 'minter/sidebar_buttons/DragButton.js'
import { LinkButton } from 'minter/sidebar_buttons/LinkButton.js'
import { ControlsButton } from 'minter/sidebar_buttons/ControlsButton.js'
import { EraseButton } from 'minter/sidebar_buttons/EraseButton.js'
import { ArithmeticButton } from './sidebar_buttons/ArithmeticButton.js'
import { ComparisonButton } from './sidebar_buttons/ComparisonButton.js'
import { NumberButton } from './sidebar_buttons/NumberButton.js'
import { ListFunctionsButton } from './sidebar_buttons/ListFunctionsButton.js'

export class MathSidebar extends Sidebar {

	defaults(): object {
		return {
			availableButtonClasses: [
				DragButton,
				LinkButton,
				ControlsButton,
				EraseButton,
				ArithmeticButton,
				ComparisonButton,
				NumberButton,
				ListFunctionsButton
			],
			buttons: [
				new DragButton(),
				new LinkButton(),
				new ControlsButton(),
				new ArithmeticButton(),
				new ComparisonButton(),
				new NumberButton(),
				new ListFunctionsButton(),
				new EraseButton()
			]
		}
	}

}

let s = new MathSidebar()

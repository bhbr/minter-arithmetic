
import { NumberBox } from './NumberBox.js'
import { Rectangle } from 'minter/shapes/Rectangle.js'
import { TextLabel } from 'minter/ui/TextLabel.js'
import { Color } from 'minter/classes/Color.js'
import { numberArraySum } from 'minter/functions/math.js'
import { log } from 'minter/functions/logging.js'
import { prettyPrint } from 'minter/functions/various.js'

export class NumberValuedFunctionBox extends NumberBox {
	
	argument: Array<number>
	functionSign: Rectangle
	functionLabel: TextLabel
	name: string

	defaults(): object {
		return {
			name: 'f',
			argument: null,
			functionSign: new Rectangle({
				width: 50,
				height: 20,
				fillColor: Color.black(),
				fillOpacity: 1.0
			}),
			functionLabel: new TextLabel(),
			inputProperties: [
				{ name: 'argument', displayName: 'list', type: 'Array<number>' }
			],
			outputProperties: [
				{ name: 'value', displayName: null, type: 'number' }
			]
		}
	}

	setup() {
		super.setup()
		this.functionSign.update({
			anchor: [this.frameWidth / 2 - this.functionSign.frameWidth / 2, -this.functionSign.frameHeight]
		})
		this.functionLabel.update({
			text: this.name,
			fontSize: 12,
			frameWidth: this.functionSign.width,
			frameHeight: this.functionSign.height
		})
		this.functionSign.add(this.functionLabel)
		this.insertBehind(this.functionSign, this.inputList)
		this.inputElement.disabled = true
	}

	result(): number {
		return NaN
	}

	update(args: object = {}, redraw: boolean = true) {
		let hasNewValue = (args['argument'] !== undefined)
		super.update(args, !hasNewValue)
		if (hasNewValue) {
			super.update({ value: this.result() }, redraw)
		}
	}






}
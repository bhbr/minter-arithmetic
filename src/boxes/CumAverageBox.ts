
import { NumberListValuedFunctionBox } from './NumberListValuedFunctionBox.js'
import { numberArrayCumAverage, DraggingCreator } from '@bhbr/minter'

export class CumAverageBox extends NumberListValuedFunctionBox {
	
	declare argument: Array<number>

	defaults(): object {
		return {
			name: 'cumavg',
			argument: [],
			outputProperties: [
				{ name: 'value', type: 'Array<number>' }
			]
		}
	}
	
	result(): Array<number> {
		return numberArrayCumAverage(this.argument) 
	}

}


export class CumAverageBoxCreator extends DraggingCreator {
	defaults(): object {
		return {
			helpText: 'Cumulative averages of a list of numbers.'
		}
	}
	declare creation: CumAverageBox
	createMobject(): CumAverageBox {
		return new CumAverageBox()
	}
}
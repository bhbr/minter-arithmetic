
import { NumberListValuedFunctionBox } from './NumberListValuedFunctionBox.js'
import { numberArrayCumSum, DraggingCreator } from '@bhbr/minter'

export class CumSumBox extends NumberListValuedFunctionBox {
	
	declare argument: Array<number>

	defaults(): object {
		return {
			name: 'cumsum',
			argument: [],
			outputProperties: [
				{ name: 'value', type: 'Array<number>' }
			]
		}
	}
	
	result(): Array<number> {
		return numberArrayCumSum(this.argument) 
	}

}

export class CumSumBoxCreator extends DraggingCreator {
	defaults(): object {
		return {
			helpText: 'Cumulative sums of a list of numbers.'
		}
	}
	declare creation: CumSumBox
	createMobject(): CumSumBox {
		return new CumSumBox()
	}
}

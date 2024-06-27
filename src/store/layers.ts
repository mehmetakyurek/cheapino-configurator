import { createStore } from "solid-js/store";
import { KeyAttributes, Layer } from "../App";
import { parseKey } from "../Keyboard";
import { layers as l } from "../layers.json"

const [state, setState] = createStore({
	layers: parseLayers(l),
	selected: 0
})

export function setLayerIndex(layer: number) {
	setState("selected", layer)
}
const emptyKey: KeyAttributes = {
	value: undefined,
	code: undefined,
	name: undefined,
	modifier: undefined,
	size: undefined
}
export function setLayer(keyIndex: number, key: KeyAttributes, removeContainer = false, layerIndex = -1) {
	setState("layers", [(layerIndex > -1 ? layerIndex : state.selected)], [keyIndex], removeContainer ? { ...emptyKey, ...key } : key)
}

export function parseLayers(layers: Array<Array<string>>): Array<Layer> {
	const ret = Array<Layer>(16).fill(Array<KeyAttributes>(36).fill({ name: "..." }))
	let index = 0;
	for (const layer of layers) {
		ret[index] = []
		for (const keycode of layer) {
			ret[index].push(parseKey(keycode))
		}
		index = index + 1;
	}
	return ret
}
export { state }

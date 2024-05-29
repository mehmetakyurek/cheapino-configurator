import "./App.css";
import { layers as l } from "./layers.json"
import { Cheapino, keyTable, parseKey } from "./Keyboard";
import { For, JSXElement, createSignal } from "solid-js";
import KeyTable from "./KeyTable";
import quantum from "./keycodes/quantum";

export type Layer = Array<KeyAttributes>;

function parseLayers(layers: Array<Array<string>>): Array<Layer> {
	const ret = Array<Layer>(16).fill([])
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

function App() {
	const [layers, setLayers] = createSignal(parseLayers(l));
	const [layerIndex, setLayerIndex] = createSignal(0)
	const layer = () => layers()[layerIndex()]
	return <div class="h-full p-5 grid grid-rows-[min-content_min-content_1fr] justify-items-center justify-center gap-20 bg-background">
		<Cheapino layer={layer()} />
		<LayerSwitch layerLength={layers().length} onClick={i => setLayerIndex(i)} />
		<KeyTable />

	</div>
}
function LayerSwitch(props: { layerLength: number, onClick: (layer: number) => void }) {
	const layers = [] as Array<JSXElement>
	for (let a = 0; a <= 15; a++) {
		layers.push(<button onClick={() => props.onClick(a)}>{a}</button>)
	}
	return <div class="flex gap-2">
		{layers}
	</div>
}

export function getName(code: string): string | undefined {
	return keyTable.find(e => e.code === code)?.name
}

export type KeyAttributes = {
	name?: string,
	code?: string,
	value?: string,
	modifier?: string
	size?: number
}
export default App;

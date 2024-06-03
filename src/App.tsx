import "./App.css";
import { Cheapino, keyTable, parseKey } from "./Keyboard";
import { JSXElement, createSignal } from "solid-js";
import KeyTable from "./KeyTable";
import { setLayerIndex, state } from "./store/layers";

export type Layer = Array<KeyAttributes>;

function App() {
	return <div class="h-full p-5 grid grid-rows-[min-content_min-content_1fr] justify-items-center justify-center gap-20 bg-background">
		<Cheapino layer={state.layers[state.selected]} />
		<LayerSwitch layerLength={state.layers.length} onClick={i => setLayerIndex(i)} />
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

import { Component, For, JSXElement, Match, Show, Switch, createEffect, createSignal } from "solid-js";
import { rows } from "./keys.json";
import { JSX } from "solid-js";
import ansi from "./keycodes/ansi.ts"
import quantum from "./keycodes/quantum";
import kbSettings from "./keycodes/kb-settings.ts";
import appMediaMouse from "./keycodes/app-media-mouse.ts";
import { KeyAttributes, Layer, getName } from "./App.tsx";
export const keyTable = [...ansi, ...quantum, ...kbSettings, ...appMediaMouse]

let keys: Array<typeof rows[0]["keys"][0]> = []
for (let k in rows) {
	keys = keys.concat(...rows[k].keys)
}
const paddings = [37, 7, 0, 7, 14, 14, 7, 0, 7, 37] as const
const thumbRotate = [-7, 0, 7, -7, 0, 7] as const

export function Cheapino(props: { layer: Layer }) {
	const cols = () => LayerToColumns(props.layer, 10, 3);
	return <div class="flex flex-col items-center text-[clamp(3rem,2.8vw,6rem)] ">
		<Columns keys={cols()} />
		<Thumb keys={props.layer.slice(30)} />
	</div>;
}
export function Thumb(props: { keys: KeyAttributes[] }) {
	return <div class="flex text-[inherit] gap-[0.1em] justify-start [&>*:nth-child(3)]:pr-[1em] ">
		<For each={props.keys}>
			{(key, i) => <div style={{
				transform: "rotate(" + thumbRotate[i()] + "deg) translateY(" + (Math.abs(thumbRotate[i()])) + "px)"


			}}> <Key {...key} /></div>}
		</For>

	</div>;
}

function KeyContainer(props: { col: number, row: number, children: JSX.Element }) {
	const drop = (prop: typeof props, e: DragEvent) => {
		e.preventDefault()
	}
	return <div onDrop={[drop, props]}>{props.children}</div>
}


export function Columns(props: { keys: KeyAttributes[][] }) {
	return <div class="flex [&>*:nth-child(5)]:pr-[4em] flex-row gap-[0.1em] w-min">
		<For each={props.keys}>{(col, index) => <Column paddingTop={paddings[index()]}>
			<For each={col}>{(key, i) =>
				<KeyContainer col={index()} row={i()}>
					<Key {...key} />
				</KeyContainer>}
			</For>
		</Column>
		}</For>
	</div>
}

function Column(props: { children: JSX.Element, paddingTop: number }) {
	return <div style={{ "padding-top": props.paddingTop.toString() + "px" }} class="flex flex-col gap-[0.1em]">
		{props.children}
	</div>;
}
export function Key(props: KeyAttributes) {
	const name = () => (props.code !== undefined ? (getName(props.code)) : "")
	return <div
		class="w-[1em] h-[1em] flex flex-col items-center capitalize whitespace-pre-wrap overflow-hidden leading-4 select-none justify-center text-center bg-key text-key-text rounded-[.15em]"
		classList={{
			["w-[" + Number(props.size) / 1000 + "]"]: (props.size !== undefined)
		}}
		draggable={(name()?.length ?? 0) > 0 || props.modifier != undefined}
		onDragStart={(e) => {
			e.dataTransfer?.setData("key", JSON.stringify(props))
		}}
		onDragEnter={(e) => {
			e.preventDefault()
		}}
		onDragOver={e => e.preventDefault()}
		onDrop={(e) => {
			e.preventDefault()
			const key = JSON.parse(e.dataTransfer?.getData("key")!) as KeyAttributes
			console.log(key)
		}}
		style={{ width: props.size + "em", height: props.size + "em" }}>
		<Switch>
			<Match when={props.value != undefined}>
				<LT {...props} />
			</Match>
			<Match when={props.modifier !== undefined}>
				<div class="text-[0.2em] text-key w-full"
					classList={{ [(isLayer(props.modifier!) ? "bg-layer-key" : "bg-container-key")]: true }}>{props.modifier}
				</div>
				<Key name={name()} code={props.code} />
			</Match>
			<Match when={props.modifier === undefined}>
				<div class="text-[0.2em]">{name() || props.name || props.code}</div>
			</Match>
		</Switch>
	</div >
}

function InnerKey(props: { code: string }) {
	const name = () => getName(props.code);
	console.log(props.code, name())
	return <div>{name()}</div>
}

function LT(props: KeyAttributes) {
	return <>
		<div class="bg-layer-key text-[0.2em] flex justify-around w-full text-key">
			<div>{props.modifier}</div>
			<div>{props.value}</div>
		</div>
		<Key code={props.code}></Key>
	</>
}

function isLayer(code: string): boolean {
	return quantum.find(e => e.name === code && e.type === "layer") != undefined
}


export function parseKey(key: string): KeyAttributes {
	const isContainer = key.includes("(")
	const res: KeyAttributes = {}
	if (isContainer) {
		if (key.includes(",")) {
			[res.modifier, res.value] = key.split("(")
			if (res.value)
				[res.value, res.code] = (res.value).split(",");
			if (res.code)
				res.code = res.code.replace(")", "")
		} else {
			[res.modifier, res.code] = key.split("(")
			res.modifier = res.modifier.replace("(", "");
			res.code = res.code.replace(")", "");
		}
		return res
	} else return { code: key }
}

export function LayerToColumns(layer: Layer, colCount: number, rowLength: number): KeyAttributes[][] {
	const cols: KeyAttributes[][] = []
	for (let i = 0; i < colCount; i++) {
		cols.push([])
	}
	layer.map((k, i) => {
		if (i < colCount * rowLength) {
			cols[Math.floor(i % 10)].push(k)
		}
	})
	return cols
}

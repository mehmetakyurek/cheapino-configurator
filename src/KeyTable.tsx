import { For, Match, Show, Signal, Switch, createSignal } from "solid-js"
import { Key, parseKey } from "./Keyboard"

import quantum from "./keycodes/quantum"
import appMedia from "./keycodes/app-media-mouse"
import kbSettings from "./keycodes/kb-settings"
import ansi from "./keycodes/ansi"

const dataForTabs = [ansi, quantum, appMedia, kbSettings]

const tabs = ["ANSI", "Quantum", "App, Media, Mouse", "Keyboard Settings"] as const

export default function KeyTable() {
	const [selectedTab, setSelectedTab] = createSignal(1);
	return <div class="flex flex-wrap w-[80%] max-w-[1200px] gap-y-5 content-start">
		<Tabs tab={[selectedTab, setSelectedTab]} />
		<div class="text-[50px] flex flex-wrap w-full gap-3">
			<For each={dataForTabs[selectedTab()]}>{k => <Show when={k.code}>
				<Key{...parseKey(k.code!)} />
			</Show>
			}
			</For>
		</div>
	</div>
}

// <Switch>
// 	<Match when={selectedTab() === 1}><Quantum /></Match>
// 	<Match when={selectedTab() === 2}><AppMediaMouse /></Match>
// </Switch>
function AppMediaMouse() {
	return <For each={appMedia}>{(key => <Show when={key.code}>
		<Key{...parseKey(key.code!)} />
	</Show>)}

	</For>
}

function Tabs(props: { tab: Signal<number> }) {
	const [selectedTab, setSelected] = props.tab
	return <div class="w-full flex  ">
		<For each={tabs}>{(key, index) =>
			<div
				class="w-full p-1 text-center border-b-stroke border-b select-none cursor-pointer" classList={{ "bg-tab-selected": index() == selectedTab() }}
				onclick={() => setSelected(index())}
			>
				{key}
			</div>}
		</For>
	</div>
}
function Quantum() {
	return <For each={quantum}>{k => <Show when={k.code}>
		<InnerKey {...parseKey(k.code!)} />
	</Show>
	}
	</For>
}

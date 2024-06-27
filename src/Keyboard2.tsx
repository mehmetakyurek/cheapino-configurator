import { Layer } from "./App";

import ansi from "./keycodes/ansi.ts"
import quantum from "./keycodes/quantum";
import kbSettings from "./keycodes/kb-settings.ts";
import appMediaMouse from "./keycodes/app-media-mouse.ts";
import { For } from "solid-js";
export const keyTable = [...ansi, ...quantum, ...kbSettings, ...appMediaMouse]

const KEY_COUNT = 36
const THUMB_KEY_COUNT = 6
const COLUMN_COUNT = 10
const ROW_COUNT = 3 // doesn't include thumb row

export function Cheapino(props: { layer: Layer }) {
	const rows = Array.from({ length: ROW_COUNT },
		(_, i) => Array.from({ length: COLUMN_COUNT }, () => <Key ></Key>))
	return <div class="bg-background text-[50px] flex flex-col gap-3">
		<For each={rows}>
			{(el, i) => <div
				class="flex gap-3 rounded [&>:nth-child(5)]:mr-[3em] [&>:nth-child(10n+2)]:-translate-y-5  keyboard-rows"
			>
				<For each={el}>
					{(e, i) => el}
				</For>
			</div>}
		</For>
	</div>
}

function Key(props: KeyAttributes) {
	return <div class="size-[1em] bg-sky-50 ">

	</div>
}


export default [
  { name: '', code: 'KC_NO', title: 'Do nothing' },
  {
    name: '▽',
    code: 'KC_TRNS',
    title: 'Use the next lowest non-transparent key'
  },
  { name: 'Reset', code: 'QK_BOOT', title: 'Reset the keyboard' },
  { name: 'Debug', code: 'DB_TOGG', title: 'Toggle debug mode' },
  {
    name: 'EEPROM Reset',
    code: 'EE_CLR',
    title: 'Resets EEPROM state',
    width: 1500
  },
  {
    name: 'Repeat',
    code: 'QK_REP',
    title: 'Repeat last key pressed',
    width: 1500
  },
  {
    name: 'Alt Repeat',
    code: 'QK_AREP',
    title: 'Perform alternate of last key pressed',
    width: 1500
  },
  { width: 1000 },
  {
    name: 'Any',
    code: 'text',
    type: 'text',
    title: 'Manually enter any QMK keycode'
  },

  {
    label: 'Layer and Layer Tap functions',
    icon: 'exclamation-triangle',
    iconClass: 'warning',
    width: 'label',
    title:
      'Note: Layer keys overwrite the key on the target layer to KC_TRNS to avoid layer lock'
  },

  {
    name: 'MO',
    code: 'MO(layer)',
    type: 'layer',
    layer: 0,
    title: 'Momentary turn layer on. AKA FN'
  },
  {
    name: 'TG',
    code: 'TG(layer)',
    type: 'layer',
    layer: 0,
    title: 'Toggle layer on/off'
  },
  {
    name: 'TO',
    code: 'TO(layer)',
    type: 'layer',
    layer: 0,
    title: 'Turn on layer when pressed'
  },
  {
    name: 'TT',
    code: 'TT(layer)',
    type: 'layer',
    layer: 0,
    title:
      "Normally acts like MO unless it's tapped multple times which toggles layer on"
  },
  {
    name: 'DF',
    code: 'DF(layer)',
    type: 'layer',
    layer: 0,
    title: 'Sets the default layer'
  },
  {
    name: 'OSL',
    code: 'OSL(layer)',
    type: 'layer',
    layer: 0,
    title: 'Switch to layer for one keypress'
  },


  {
    label:
      'Mod key combinations (A = Alt, C = Control, G = Windows/Command/GUI, S = Shift)',
    width: 'label'
  },

  { name: 'LSft', code: 'LSFT(kc)', type: 'container', title: 'Left Shift' },
  { name: 'LCtl', code: 'LCTL(kc)', type: 'container', title: 'Left Control' },
  { name: 'LAlt', code: 'LALT(kc)', type: 'container', title: 'Left Alt' },
  { name: 'LGui', code: 'LGUI(kc)', type: 'container', title: 'Left GUI' },
  { width: 250 },
  { name: 'RSft', code: 'RSFT(kc)', type: 'container', title: 'Right Shift' },
  { name: 'RCtl', code: 'RCTL(kc)', type: 'container', title: 'Right Control' },
  { name: 'RAlt', code: 'RALT(kc)', type: 'container', title: 'Right Alt' },
  { name: 'RGui', code: 'RGUI(kc)', type: 'container', title: 'Right GUI' },
  { width: 0 },
  {
    name: 'LSft_T',
    code: 'LSFT_T(kc)',
    type: 'cgntainer',
    title: 'Left Shift when held, kc when tapped'
  },
  {
    name: 'LCtl_T',
    code: 'LCTL_T(kc)',
    type: 'container',
    title: 'Left Control when held, kc when tapped'
  },
  {
    name: 'LAlt_T',
    code: 'LALT_T(kc)',
    type: 'container',
    title: 'Left Alt when held, kc when tapped'
  },
  {
    name: 'LGui_T',
    code: 'LGUI_T(kc)',
    type: 'container',
    title: 'Left GUI when held, kc when tapped'
  },
  { width: 250 },
  {
    name: 'RSft_T',
    code: 'RSFT_T(kc)',
    type: 'container',
    title: 'Right Shift when held, kc when tapped'
  },
  {
    name: 'RCtl_T',
    code: 'RCTL_T(kc)',
    type: 'container',
    title: 'Right Control when held, kc when tapped'
  },
  {
    name: 'RAlt_T',
    code: 'RALT_T(kc)',
    type: 'container',
    title: 'Right Alt when held, kc when tapped'
  },
  {
    name: 'RGui_T',
    code: 'RGUI_T(kc)',
    type: 'container',
    title: 'Right GUI when held, kc when tapped'
  },
  { width: 250 },
  {
    name: 'C_S_T',
    code: 'C_S_T(kc)',
    type: 'container',
    title: 'Left Control + Left Shift when held, kc when tapped'
  },
  {
    name: 'LCA_T',
    code: 'LCA_T(kc)',
    type: 'container',
    title: 'Left Control + Left Alt when held, kc when tapped'
  },
  {
    name: 'SGUI_T',
    code: 'SGUI_T(kc)',
    type: 'container',
    title: 'Left Shift + Left GUI when held, kc when tapped'
  },
  { width: 250 },
  {
    name: 'LCAG_T',
    code: 'LCAG_T(kc)',
    type: 'container',
    title: 'Left Control, Alt and GUI when held, kc when tapped'
  },
  {
    name: 'RCAG_T',
    code: 'RCAG_T(kc)',
    type: 'container',
    title: 'Right Control, Alt and GUI when held, kc when tapped'
  },
  { width: 250 },
  {
    name: 'Meh_T',
    code: 'MEH_T(kc)',
    type: 'container',
    title: 'Left Control, Shift and Alt when held, kc when tapped'
  },
  {
    name: 'All_T',
    code: 'ALL_T(kc)',
    type: 'container',
    title: 'Left Control, Shift, Alt and GUI when held, kc when tapped'
  },
  { width: 0 },
  {
    name: 'LCA',
    code: 'LCA(kc)',
    type: 'container',
    title: 'Left Control + Left Alt'
  },
  {
    name: 'LSA',
    code: 'LSA(kc)',
    type: 'container',
    title: 'Left Shift + Left Alt'
  },
  {
    name: 'SGUI',
    code: 'SGUI(kc)',
    type: 'container',
    title: 'Left Shift + Left GUI'
  },
  {
    name: 'LAG',
    code: 'LAG(kc)',
    type: 'container',
    title: 'Left Alt + Left GUI'
  },
  { width: 250 },
  {
    name: 'RCS',
    code: 'RCS(kc)',
    type: 'container',
    title: 'Right Control + Right Shift'
  },
  {
    name: 'RSA',
    code: 'RSA(kc)',
    type: 'container',
    title: 'Right Shift + Right Alt'
  },
  {
    name: 'RSG',
    code: 'RSG(kc)',
    type: 'container',
    title: 'Right Shift + Right GUI'
  },
  {
    name: 'RAG',
    code: 'RAG(kc)',
    type: 'container',
    title: 'Right Alt + Right GUI'
  },
  { width: 250 },
  {
    name: 'LCAG',
    code: 'LCAG(kc)',
    type: 'container',
    title: 'Left Control, Alt and GUI'
  },
  { width: 2250 },
  {
    name: 'Meh',
    code: 'MEH(kc)',
    type: 'container',
    title: 'Left Control, Shift and Alt'
  },
  {
    name: 'Hyper',
    code: 'HYPR(kc)',
    type: 'container',
    title: 'Left Control, Shift, Alt and GUI'
  },

  {
    label: 'One-Shot Mod keys',
    icon: 'exclamation-triangle',
    iconClass: 'warning',
    width: 'label',
    title:
      'Note: One-Shot keys combining left-hand and right-side modifiers will be sent with all right-hand modifiers'
  },

  { label: 'Special action keys', width: 'label' },

  {
    name: '` / ~\nEsc',
    code: 'QK_GESC',
    title: 'Esc normally, but ` when GUI is active or ~ when Shift is active'
  },
  {
    name: 'LS / (',
    code: 'SC_LSPO',
    title: 'Left Shift when held, ( when tapped'
  },
  {
    name: 'RS / )',
    code: 'SC_RSPC',
    title: 'Right Shift when held, ) when tapped'
  },
  {
    name: 'LC / (',
    code: 'SC_LCPO',
    title: 'Left Control when held, ( when tapped'
  },
  {
    name: 'RC / )',
    code: 'SC_RCPC',
    title: 'Right Control when held, ) when tapped'
  },
  {
    name: 'LA / (',
    code: 'SC_LAPO',
    title: 'Left Alt when held, ( when tapped'
  },
  {
    name: 'RA / )',
    code: 'SC_RAPC',
    title: 'Right Alt when held, ) when tapped'
  },
  {
    name: 'RS / Enter',
    code: 'SC_SENT',
    title: 'Right Shift when held, Enter when tapped'
  },
  {
    name: 'CW Toggle',
    code: 'CW_TOGG',
    title: 'Toggle Caps Word (Enable Caps Lock for the next word)',
    width: 1500
  }
];

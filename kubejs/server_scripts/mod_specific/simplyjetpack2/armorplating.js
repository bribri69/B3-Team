onEvent('recipes', e => {
//#simplyjetpacks
  e.shaped('simplyjetpacks:armorplating_te2', ['ABA', 'BEB', 'ABA'], {
    A: '#forge:ingots/iron',
    B: '#forge:ingots/bronze',
	E: 'simplyjetpacks:armorplating_te1'
  })
  e.shaped('simplyjetpacks:armorplating_te3', ['BCB', 'CFC', 'BCB'], {
    C: '#forge:ingots/invar',
    B: '#forge:ingots/bronze',
	F: 'simplyjetpacks:armorplating_te2'
  })
  e.shaped('simplyjetpacks:armorplating_te4', ['CDC', 'DGD', 'CDC'], {
    C: '#forge:ingots/invar',
    D: '#forge:ingots/enderium',
	G: 'simplyjetpacks:armorplating_te3'
  })
})
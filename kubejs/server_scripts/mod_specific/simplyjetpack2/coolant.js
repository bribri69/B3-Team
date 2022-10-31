onEvent('recipes', event => {
	event.remove({id: 'simplyjetpacks:thermal/unit_cryotheum_empty'})
	event.shaped('simplyjetpacks:unit_cryotheum_empty', [
		'STS',
		'TQT',
		'STS'
	], {
		S: '#forge:ingots/signalum',
		T: '#forge:ingots/tin',
		Q: 'ae2:quantum_entangled_singularity'
  })
  })
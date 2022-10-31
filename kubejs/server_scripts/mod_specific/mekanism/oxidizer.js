onEvent('recipes', event => {
    event.custom({
        "type": "mekanism:oxidizing",
        "input": {
            "ingredient": {
                "item": "chemlib:polonium"
				}
        },
        "output": {
            "amount": 10,
			"gas": "mekanism:polonium"
        }
    })
})
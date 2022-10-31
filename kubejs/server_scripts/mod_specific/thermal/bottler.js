onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'simplyjetpacks:unit_glowstone_empty',
            fluid: Fluid.of('thermal:glowstone', 8000),
            output: 'simplyjetpacks:unit_glowstone',
            id: 'kubejs/unit_glowstone'
        },
		{
            input: 'simplyjetpacks:unit_cryotheum_empty',
            fluid: Fluid.of('mekanism:hydrogen_chloride', 1000),
            output: 'simplyjetpacks:unit_cryotheum',
            id: 'kubejs/unit_cryotheum'
        },
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.bottler(recipe.output, [recipe.fluid, recipe.input]).id(recipe.id);
    });
});
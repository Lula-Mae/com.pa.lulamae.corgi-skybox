try
{
    if (model && model.skyBoxes)
    {
        model.skyBoxes.push({text: 'Corgi Skybox by Lula Mae', value: '/pa/sky/terrain/textures/com.pa.lulamae.corgi-skybox/skybox.json'});
    }
}
catch (e)
{
    console.trace(e);
}
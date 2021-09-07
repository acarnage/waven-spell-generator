<script>
import SpellPreview from "./SpellPreview.svelte";


let stypes = ['air','terre','eau','feu','neutre'];
let spellTitle = "Un titre de sort"

let spellDesc = "Inflige 11 dégats.\nConfère autant d'AR  à votre héros."

let cost = 0;
let gauges = {
    'air':0,
    'terre':0,
    'eau':0,
    'feu':0,
    'neutre':0
}

let stype = "air"

var n = 164;
var images = [...Array(n).keys()];
var simage=0

$: console.log(gauges)

$: console.log(spellTitle)

</script>


<div class="flex justify-between w-full ">
    <div class="flex flex-col items-start justify-between h-auto border-gray-800">
        <span class="mb-4 font-semibold">Type du sort :</span>
        {#each stypes as elem}
            <label>
                <input type=radio bind:group={stype} value={elem}>
                {elem}
            </label>
        {/each}
    </div>


    <div class="flex flex-col items-start justify-start h-auto ml-4 border-gray-800">
        <span class="mb-4 font-semibold">Coût :</span>
       
        <label>
            <input type="number" bind:value={cost} step="1">
            Mana
    </div>


    <div class="flex flex-col items-start justify-between h-auto ml-4 border-gray-800">
        <span class="font-semibold">Jauges :</span>
        {#each stypes as elem}
        <label>
            <input type="number" bind:value={gauges[elem]} step="1">
            {elem}
        </label>
        {/each}
    </div>

    <div class="flex flex-col items-start h-auto ml-4 border-gray-800 justify-syart">
        <span class="font-semibold ">Title :</span>
        <label>
            <input class="border border-gray-800" bind:value={spellTitle} type="text" >
            
        </label>
    </div>

    <div class="flex flex-col items-start justify-start h-auto ml-4 border-gray-800">
        <span class="font-semibold">Description :</span>
        <label>
            <textarea class="h-40 border border-gray-800 w-80" bind:value={spellDesc}></textarea>
        </label>
    </div>

    <div class="flex flex-col items-start justify-start h-auto ml-4 border-gray-800">
        <span class="font-semibold">Image :</span>
        <select bind:value={simage} >
            {#each images as image}
                <option value={image}>
                    {image}
                </option>
            {/each}
        </select>
    </div>

</div>


<div class="flex flex-col items-center justify-start ">
<SpellPreview spellTitle={spellTitle} gauges={gauges} cost={cost} stype={stype} spellDesc={spellDesc} simage={simage}></SpellPreview>
</div>
<script>
    import domtoimage from 'dom-to-image';
    import { saveAs } from 'file-saver';
    import WavenIcon from "./WavenIcon.svelte";
    export let spellTitle = "Un Titre"
    export let spellDesc = "Inflige 11 dégats.\nConfère autant d'AR  à votre héros."
    import {lexique} from "./Utils.js";

    export let cost =0
    export let simage =0
    let asGauges
    
    export let gauges = {
    'air':1,
    'terre':0,
    'eau':0,
    'feu':0,
    'neutre':0
    }

    export let stype = "air"

    function testGauges(gauges) {
        var counter = 0
        for (const [key, value] of Object.entries(gauges)){
            if(value > 0) {
                counter += 1
            }
        }
        return counter != 0
    }

$: asGauges= testGauges(gauges)
$: spellDesc = createDsc(spellDesc)
$: console.log(spellTitle) 

function createDsc(desc){
        desc = desc.replaceAll("\\n","<br>")
        for (const entry of lexique.entries()) {
            desc = desc.replaceAll(entry[0],entry[1])
        }
        return desc
    }

function dl(){
    console.log("ok")
    domtoimage.toBlob(document.getElementById('spell'))
    .then(function (blob) {
        saveAs(blob, 'my-spell.png');
    });
}

</script>


<div id="spell" class="flex items-center justify-center w-full ">
    <div class="relative w-40 h-40 ">
    
        <div style="background-image: url('img/sorts/{simage +1}.png')" class="relative z-10 flex items-center justify-center w-full h-full bg-contain bg-blend-color">
            <div class="relative z-10 my-{stype}  mix-blend-color h-36 w-36 rounded-xl">

            </div>

            <div class="absolute top-0 left-0 z-40 flex items-center justify-center w-10 h-10 text-2xl font-bold text-white bg-center bg-no-repeat bg-contain textb" style="background-image: url('img/utils/pa.png')">
                {cost}
            </div>
        </div>
            
    </div>

    <div class="flex flex-col items-center justify-start h-full mr-40 overflow-hidden rounded-xl">
        <div class="relative flex flex-col items-center justify-start w-full pt-1 pb-4 font-bold text-white uppercase bg-[#444444] rounded-t-xl">
            {spellTitle}

            <div class="absolute flex items-center justify-between px-2 text-white bg-black rounded-2xl -bottom-3">
                
                {#if asGauges}
                    {#each Object.entries(gauges) as [name,value]}

                    {#if value >0}
                    <div class="w-7">
                        <WavenIcon name="{name}" value={value} />
                    </div> 
                    {/if}
                   
                      
                    {/each}
                {:else}
                    <div class="w-7">
                        -
                    </div>
                {/if}
            </div>
        </div>
        
        <div class="flex items-center max-w-xs px-4 pt-4 pb-4 text-lg text-gray-100 bg-[#171717] ">
            <div>
                {@html spellDesc}
            </div>
           
        </div>
    </div>





    
</div>

<div on:click={dl} class="flex items-center justify-center p-4 mt-10 text-4xl font-bold text-gray-900 capitalize bg-yellow-600 border-4 border-yellow-700 cursor-pointer rounded-2xl hover:text-white">
    Télécharger l'image
</div>

<style>
 .textb{
    -webkit-text-stroke: 1px black;
 }

 .my-air{
     background-color: purple;
 }
 .my-terre{
     background-color: #2ca70d;
    
 }

 .my-feu{
     background-color: #db3939;
 }

 .my-eau{
     background-color:CornflowerBlue ;
 }

 .my-neutre{
     background-color:goldenrod;
 }
</style>
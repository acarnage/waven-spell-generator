<script>

export let name;
export let value;
export let centered = true;

</script>
{#if centered == true}
    <div class="relative flex items-center justify-center w-full h-full text-white bg-center bg-no-repeat bg-contain" style="background-image: url(../img/utils/{name}.png)">
            <span class="font-bold sm:text-xl">{value}</span>
    </div>
{:else}
    <div class="flex text-white h-7">
        <span class="text-lg font-bold">{value}</span>
        <img class="w-7 h-7" src="img/utils/{name}.png" alt="icon {name}">
    </div>
{/if}
<style>
    span{
        text-shadow: 1px 1px 1px #000;
    }
</style>
<script>
import SpellGenerator from "./SpellGenerator.svelte";
import SpellPreview from "./SpellPreview.svelte";


  
</script>

<main class="flex flex-col items-center justify-start w-screen p-4 mx-auto text-center ">
  <h1 class="text-6xl font-thin leading-loose text-red-500 uppercase">
    SpellGen
  </h1>
  <div class="flex flex-col justify-center w-3/4 space-y-5 item-center">
    <SpellGenerator></SpellGenerator>
  </div>
</main>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .ticon-feu {
	background-image: url("../img/utils/feu.png");
  }
  .ticon-eau {
	background-image: url("../img/utils/eau.png");
  }
  .ticon-air {
	background-image: url("../img/utils/air.png");
  }
  .ticon-terre {
	background-image: url("../img/utils/terre.png");
  }
  .ticon-neutre {
	background-image: url("../img/utils/neutre.png");
  }
  .ticon-pareserve {
	background-image: url("../img/utils/pareserve.png");
  }
  .ticon-evente {
	background-image: url("../img/utils/ico/evente.png");
  }
  .ticon-boueux {
	background-image: url("../img/utils/ico/boueux.png");
  }
  .ticon-mouille {
	background-image: url("../img/utils/ico/mouille.png");
  }
  .ticon-huile {
	background-image: url("../img/utils/ico/huile.png");
  }
  .ticon-pv {
	background-image: url("../img/utils/ico/pv.png");
  }
  .ticon-ar {
	background-image: url("../img/utils/ico/ar.png");
  }
  .ticon-pm {
	background-image: url("../img/utils/ico/pm.png");
  }
  .ticon-bl {
	background-image: url("../img/utils/ico/bl.png");
  }
  .ticon-pa {
	background-image: url("../img/utils/ico/pa.png");
  }
  .ticon-at {
	background-image: url("../img/utils/ico/at.png");
  }
  
  .tooltip-icon{
	width: 20px;
	height:20px;
	background-repeat: no-repeat;
	display: table-cell;
	vertical-align: bottom;
	background-size: 20px 20px;
	}
</style>

import { writable, get } from 'svelte/store';


export const notif = writable(null);


export function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }

  let lexiqueClasse = new Object();
  lexiqueClasse["eniripsa"] = ["Gemme Déphasante","Pinceau Kokoro","Lame Voracius","Ambre Tamashi","Scalpel De L'Apostruker"]
  lexiqueClasse["iop"] = ["Flamboyante Kasaï","Bouvaloir Orok","Justelame Brutale","Larmaguedon Spectral","Glaive Stalaktoss"]
  lexiqueClasse["cra"] = ["Shiru Shaden","Bunelame","Expingole","Arc Piven","Voldorak Vo"]
  lexiqueClasse["sram"] = ["Ken Kartana","Cisaille Orishi","Ecorcheur Shugen","Surin Sourokan","Lame Ouraï"]
  lexiqueClasse["osamodas"] = ["Bâton De Berger","Bâton Flaqueux","Bâton Tofu","Bâton Craqueleur","Bâton Prespic"]
  lexiqueClasse["xelor"] = ["Aiguille Pikuxala","Synchronisateur Tako","Catalysateur Pramium","Sabliaton Jikan","Régulant Gurpapa"]
  lexiqueClasse["sacrieur"] = ["Darde Kan","Bâton Tonfavik","Pilobouli","Ombraden","Gantares Des Cendres"]

  export default lexiqueClasse;

  export let lexiqueGauge = new Object();
  lexiqueGauge["pa_pool"]='<span class="spell_icon ticon-pareserve">'
  lexiqueGauge["air_gauge"]='<span class="spell_icon ticon-air">'
  lexiqueGauge["fire_gauge"]='<span class="spell_icon ticon-feu">'
  lexiqueGauge["earth_gauge"]='<span class="spell_icon ticon-terre">'
  lexiqueGauge["water_gauge"]='<span class="spell_icon ticon-eau">'
  lexiqueGauge["neutral_gauge"]='<span class="spell_icon ticon-neutre">'

  lexiqueGauge["at"]='<span class="comp_icon ticon-at">'
  lexiqueGauge["pm"]='<span class="comp_icon ticon-pm">'
  lexiqueGauge["pv"]='<span class="comp_icon ticon-pv">'

  export const lexique = new Map();
lexique.set(/POUPEE DE DATHURA/g,'<span class="uppercase text-wavencyan font-bold ">poupée de dathura</span>');
lexique.set(/VOL DU CORBEAU NOIR/g,'<span class="uppercase text-wavencyan font-bold ">vol du corbeau noir</span>');
lexique.set(/ESPOIR D'ECHO/g,'<span class="uppercase text-wavencyan font-bold ">espoir d\'écho</span>');
lexique.set(/ESSENCE DU DIEU IOP/g,'<span class="uppercase text-wavencyan font-bold ">ESSENCE DU DIEU IOP</span>');
lexique.set(/ORBE D'INHIBITION/g,'<span class="uppercase text-wavencyan font-bold ">orbe d\'inhibition</span>');
lexique.set(/JALOUSIE D'ATCHAM/g,'<span class="uppercase text-wavencyan font-bold ">jalousie d\'atcham</span>');
lexique.set(/SURCHARGE DE BAKARA/g,'<span class="uppercase text-wavencyan font-bold ">surcharge de bakara</span>');
lexique.set(/FOLIE DU DARK VLAD/g,'<span class="uppercase text-wavencyan font-bold ">folie du dark vlad</span>');
lexique.set(/REPIT D'ALIBERT/g,'<span class="uppercase text-wavencyan font-bold ">repit d\'alibert</span>');
lexique.set(/ECAILLES D'ADAMAÏ/g,'<span class="uppercase text-wavencyan font-bold ">écailles d\'adamaï</span>');
lexique.set(/OMBRES DE JULITH/g,'<span class="uppercase text-wavencyan font-bold ">ombres de julith</span>');
lexique.set(/COURSE DE JORIS/g,'<span class="uppercase text-wavencyan font-bold ">course de joris</span>');
lexique.set(/BOND DE GOULTARD/g,'<span class="uppercase text-wavencyan font-bold ">bond de goultard</span>');
lexique.set(/TRAIT D'EVANGELYNE/g,'<span class="uppercase text-wavencyan font-bold ">trait d\'évangelyne</span>');
lexique.set(/TOFUSMATION/g,'<span class="uppercase text-wavencyan font-bold ">tofusmation</span>');
lexique.set(/HYPNOSE DE TOXINE/g,'<span class="uppercase text-wavencyan font-bold ">hypnose de toxine</span>');
lexique.set(/ARMURE DES 1001 GRIFFES/g,'<span class="uppercase text-wavencyan font-bold ">armures des 1001 griffes</span>');
lexique.set(/ELIACUBE DE NOX/g,'<span class="uppercase text-wavencyan font-bold ">éliacube de nox</span>');
lexique.set(/SOUFFLE DE PHAERIS/g,'<span class="uppercase text-wavencyan font-bold ">souffle de phaeris</span>');
lexique.set(/RONCES D'AMALIA/g,'<span class="uppercase text-wavencyan font-bold ">ronces d\'amalia</span>');
lexique.set(/FUREUR DE TRISTEPIN/g,'<span class="uppercase text-wavencyan font-bold ">fureur de tristepin</span>');
lexique.set(/USH LE TRICHEUR/g,'<span class="uppercase text-wavencyan font-bold ">ush le tricheur</span>');
lexique.set(/SOUFFLE DE GROUGALORAGRAN/g,'<span class="uppercase text-wavencyan font-bold ">souffle de grougaloragran</span>');
lexique.set(/GEL INSTANTANE/g,'<span class="uppercase text-wavencyan font-bold ">gel instantané</span>');
lexique.set(/BOUCLIER DE BUMP/g,'<span class="uppercase text-wavencyan font-bold ">bouclier de bump</span>');
lexique.set(/SOIF D'OROPO/g,'<span class="uppercase text-wavencyan font-bold ">soif d\'oropo</span>');
lexique.set(/INGENIOSITE DE FLOPIN/g,'<span class="uppercase text-wavencyan font-bold ">ingéniosité de flopin</span>');
lexique.set(/PORTAIL DE YUGO/g,'<span class="uppercase text-wavencyan font-bold ">portail de yugo</span>');
lexique.set(/BOMBE/g,'<span class="uppercase text-wavencyan font-bold ">bombe</span>');
lexique.set(/PELLE DE RUEL/g,'<span class="uppercase text-wavencyan font-bold ">pelle de ruel</span>');
lexique.set(/PRECISION/g,'<span class="uppercase text-wavencyan font-bold ">précision</span>');


lexique.set(/MIRES PUISSANTES/g,'<span class="uppercase text-wavencyan font-bold ">mires puissantes</span>');
lexique.set(/MIRE PUISSANTE/g,'<span class="uppercase text-wavencyan font-bold ">mire puissante</span>');
lexique.set(/MIRE DE PROTECTION/g,'<span class="uppercase text-wavencyan font-bold ">mire de protection</span>');
lexique.set(/MIRES SOIGNANTES/g,'<span class="uppercase text-wavencyan font-bold ">mires soignantes</span>');
lexique.set(/MIRES MOTIVANTES/g,'<span class="uppercase text-wavencyan font-bold ">mires motivantes</span>');
lexique.set(/MIRE MOTIVANTES/g,'<span class="uppercase text-wavencyan font-bold ">mire motivantes</span>');

lexique.set(/ARKEÜS/g,'<span class="uppercase text-wavencyan font-bold ">arkeüs</span>');
lexique.set(/ARKEUS/g,'<span class="uppercase text-wavencyan font-bold ">arkeus</span>');
lexique.set(/MIRES SACREES/g,'<span class="uppercase text-wavencyan font-bold ">mires sacrées</span>');
lexique.set(/MIRE SACREE/g,'<span class="uppercase text-wavencyan font-bold ">mire sacrée</span>');
lexique.set(/MIRE DE PIERRE/g,'<span class="uppercase text-wavencyan font-bold ">mire de pierre</span>');

lexique.set(/MIRE REPOUSSANTE/g,'<span class="uppercase text-wavencyan font-bold ">mire repoussante</span>');

lexique.set(/MIRE AERIENNE/g,'<span class="uppercase text-wavencyan font-bold ">mire aérienne</span>');
lexique.set(/APPARITION/g,'<span class="uppercase text-wavencyan font-bold ">apparition</span>');
lexique.set(/SORT/g,'<span class="uppercase text-wavencyan font-bold ">sort</span>');
lexique.set(/DEBUT DU TOUR/g,'<span class="uppercase text-wavencyan font-bold ">début du tour</span>');
lexique.set(/DEBUT DE TOUR/g,'<span class="uppercase text-wavencyan font-bold ">début de tour</span>');

lexique.set(/réserve/g,'<span>réserve <span class="tooltip-icon ticon-pareserve"></span></span>');

lexique.set(/HUILEE/g,'<span class="uppercase text-wavencyan font-bold ">huilée <span class="tooltip-icon ticon-huile"></span></span>');
lexique.set(/HUILE/g,'<span class="uppercase text-wavencyan font-bold ">huilé <span class="tooltip-icon ticon-huile"></span></span>');
lexique.set(/BOUEUX/g,'<span class="uppercase text-wavencyan font-bold ">boueux <span class="tooltip-icon ticon-boueux"></span></span>');
lexique.set(/BOUEUSE/g,'<span class="uppercase text-wavencyan font-bold ">boueuse </span><span class="tooltip-icon ticon-boueux"></span>');
lexique.set(/MOUILLEE/g,'<span class="uppercase text-wavencyan font-bold ">mouillée </span><span class="tooltip-icon ticon-mouille"></span>');
lexique.set(/MOUILLE/g,'<span class="uppercase text-wavencyan font-bold ">mouillé <span class="tooltip-icon ticon-mouille"></span></span>');
lexique.set(/EVENTEE/g,'<span class="uppercase text-wavencyan font-bold ">eventée </span><span class="tooltip-icon ticon-evente"></span>');
lexique.set(/EVENTE/g,'<span class="uppercase text-wavencyan font-bold ">eventé <span class="tooltip-icon ticon-evente"></span></span>');
lexique.set(/ÉVENTÉ/g,'<span class="uppercase text-wavencyan font-bold ">éventé <span class="tooltip-icon ticon-evente"></span></span>');
lexique.set(/MOUILLÉ/g,'<span class="uppercase text-wavencyan font-bold ">mouillé <span class="tooltip-icon ticon-mouille"></span></span>');


lexique.set(/NEUTRE/g,'<span>NEUTRE <span class="tooltip-icon ticon-neutre"></span></span>');
lexique.set(/MIRES/g,'<span class="uppercase text-wavencyan font-bold ">mires</span>');
lexique.set(/MIRE/g,'<span class="uppercase text-wavencyan font-bold ">mire</span>');
lexique.set(/COMBO/g,'<span class="uppercase text-wavencyan font-bold ">combo</span>');
lexique.set(/GELEE/g,'<span class="uppercase text-wavencyan font-bold ">gelée</span>');
lexique.set(/GELE/g,'<span class="uppercase text-wavencyan font-bold ">gelé</span>');
lexique.set(/COUP DE GRÂCE/g,'<span class="uppercase text-wavencyan font-bold ">coup de grâce</span>');
lexique.set(/AUTOUR/g,'<span class="uppercase text-wavencyan font-bold ">autour</span>');
lexique.set(/REBOND/g,'<span class="uppercase text-wavencyan font-bold ">rebond</span>');
lexique.set(/EXPLOSION/g,'<span class="uppercase text-wavencyan font-bold ">explosion</span>');
lexique.set(/DESARME/g,'<span class="uppercase text-wavencyan font-bold ">désarme</span>');
lexique.set(/IMMOBILISE/g,'<span class="uppercase text-wavencyan font-bold ">immobilise</span>');
lexique.set(/INSAISISSABLE/g,'<span class="uppercase text-wavencyan font-bold ">insaisissable</span>');
lexique.set(/ADJACENTE/g,'<span class="uppercase text-wavencyan font-bold ">adjacente</span>');
lexique.set(/ADJACENTS/g,'<span class="uppercase text-wavencyan font-bold ">adjacents</span>');
lexique.set(/ADJACENT/g,'<span class="uppercase text-wavencyan font-bold ">adjacent</span>');
lexique.set(/MEURTRIERE/g,'<span class="uppercase text-wavencyan font-bold ">meutrière</span>');
lexique.set(/NOCTURIENS/g,'<span class="uppercase text-wavencyan font-bold ">nocturiens</span>');
lexique.set(/NOCTURIEN/g,'<span class="uppercase text-wavencyan font-bold ">nocturien</span>');
lexique.set(/SOUTIEN/g,'<span class="uppercase text-wavencyan font-bold ">soutien</span>');
lexique.set(/DEPHASAGE/g,'<span class="uppercase text-wavencyan font-bold ">déphasage</span>');
lexique.set(/DEPHASEE/g,'<span class="uppercase text-wavencyan font-bold ">déphasée</span>');
lexique.set(/DEPHASE/g,'<span class="uppercase text-wavencyan font-bold ">déphasé</span>');
lexique.set(/VOL DE VIE/g,'<span class="uppercase text-wavencyan font-bold ">vol de vie</span>');
lexique.set(/LABORATOIRE DE FLAMMES/g,'<span class="uppercase text-wavencyan font-bold ">laboratoire de flammes</span>');
lexique.set(/LABORATOIRE DE SOIN/g,'<span class="uppercase text-wavencyan font-bold ">laboratoire de soin</span>');
lexique.set(/LABORATOIRE DE PHASE/g,'<span class="uppercase text-wavencyan font-bold ">laboratoire de phase</span>');
lexique.set(/LABORATOIRE DE NOCTURANCIE/g,'<span class="uppercase text-wavencyan font-bold ">laboratoire de nocturancie</span>');
lexique.set(/LABORATOIRES/g,'<span class="uppercase text-white font-semibold ">laboratoires</span>');
lexique.set(/LABORATOIRE/g,'<span class="uppercase text-white font-semibold ">laboratoire</span>');
lexique.set(/COEURS REGENERANTS/g,'<span class="uppercase text-wavencyan font-bold ">coeurs régénérant</span>');
lexique.set(/BOOST METABOLIQUES/g,'<span class="uppercase text-wavencyan font-bold ">boost métaboliques</span>');
lexique.set(/RUFUS LE SENSUEL/g,'<span class="uppercase text-wavencyan font-bold ">rufus le sensuel</span>');
lexique.set(/ARCONE MORTIS/g,'<span class="uppercase text-white font-semibold ">arcone mortis</span>');
lexique.set(/ charge /g,'<span class="uppercase text-white font-semibold "> charge </span>');
lexique.set(/INCIBLABLE/g,'<span class="uppercase text-wavencyan font-bold ">inciblable</span>');
lexique.set(/AME SPECTRALES/g,'<span class="uppercase text-wavencyan font-bold ">âme spectrales</span>');
lexique.set(/AME SPECTRALE/g,'<span class="uppercase text-wavencyan font-bold ">âme spectrale</span>');
lexique.set(/MÊLEE/g,'<span class="uppercase text-wavencyan font-bold ">mêlée</span>');
lexique.set(/MELEE/g,'<span class="uppercase text-wavencyan font-bold ">mêlée</span>');
lexique.set(/EXPLOSION/g,'<span class="uppercase text-wavencyan font-bold ">ecplosion</span>');
lexique.set(/ASSOMME/g,'<span class="uppercase text-wavencyan font-bold ">assome</span>');
lexique.set(/AURAS/g,'<span class="uppercase text-wavencyan font-bold ">auras</span>');
lexique.set(/AURA/g,'<span class="uppercase text-wavencyan font-bold ">aura</span>');
lexique.set(/BOUCLIER/g,'<span class="uppercase text-wavencyan font-bold ">bouclier</span>');
lexique.set(/EPEES DE RIPOSTE/g,'<span class="uppercase text-wavencyan font-bold ">épées de riposte</span>');
lexique.set(/POINGS VOLANTS/g,'<span class="uppercase text-wavencyan font-bold ">poings volants</span>');
lexique.set(/BELATORUS/g,'<span class="uppercase text-white font-semibold "> bélatorus </span>');
lexique.set(/EPEES SANGLANTES/g,'<span class="uppercase text-wavencyan font-bold ">épées sanglantes</span>');
lexique.set(/LEGENDARUS/g,'<span class="uppercase text-wavencyan font-bold ">légendarus</span>');
lexique.set(/JEUNE BOUFTOU/g,'<span class="uppercase text-wavencyan font-bold ">jeune bouftou</span>');
lexique.set(/JEUNE CRAQUELEUR/g,'<span class="uppercase text-wavencyan font-bold ">jeune craqueleur</span>');
lexique.set(/JEUNE FLAQUEUX/g,'<span class="uppercase text-wavencyan font-bold ">jeune flaqueux</span>');
lexique.set(/JEUNE PRESPIC/g,'<span class="uppercase text-wavencyan font-bold ">jeune prespic</span>');
lexique.set(/JEUNE TOFU/g,'<span class="uppercase text-wavencyan font-bold ">jeune tofu</span>');
lexique.set(/ELEVAGE/g,'<span class="uppercase text-wavencyan font-bold ">élevage</span>');
lexique.set(/MATURITE/g,'<span class="uppercase text-wavencyan font-bold ">maturité</span>');
lexique.set(/ATTAQUE/g,'<span class="uppercase text-white font-semibold ">attaque</span>');
lexique.set(/PETRIFIE/g,'<span class="uppercase text-wavencyan font-bold ">pétrifie</span>');
lexique.set(/AMES DE CORBACS/g,'<span class="uppercase text-wavencyan font-bold ">âmes de corbacs</span>');
lexique.set(/AMES DE MARCASSINS/g,'<span class="uppercase text-wavencyan font-bold ">âmes de marcassins</span>');
lexique.set(/DRAGONNEUR/g,'<span class="uppercase text-wavencyan font-bold ">dragonneur</span>');
lexique.set(/SALE BETE INFAME/g,'<span class="uppercase text-wavencyan font-bold ">sale bête infâme</span>');
lexique.set(/AGONIE/g,'<span class="uppercase text-wavencyan font-bold ">agonie</span>');
lexique.set(/GARDE DU CORPS/g,'<span class="uppercase text-wavencyan font-bold ">garde du corps</span>');
lexique.set(/ECORCHUS PELIS/g,'<span class="uppercase text-white font-semibold ">echorchus pelis</span>');
lexique.set(/VIERGE DE FER/g,'<span class="uppercase text-wavencyan font-bold ">vierge de fer</span>');
lexique.set(/POINGS TATOUES/g,'<span class="uppercase text-wavencyan font-bold ">poings tatoués</span>');
lexique.set(/LAME DU TATOUE/g,'<span class="uppercase text-wavencyan font-bold ">lame du tatoué</span>');
lexique.set(/MARTYRICONE/g,'<span class="uppercase text-wavencyan font-bold ">martyricone</span>');
lexique.set(/PIEGES/g,'<span class="uppercase text-wavencyan font-bold ">pièges</span>');
lexique.set(/PIEGE/g,'<span class="uppercase text-wavencyan font-bold ">piège</span>');
lexique.set(/REMBOBINAGE/g,'<span class="uppercase text-wavencyan font-bold ">rembobinage</span>');
lexique.set(/MECANISMES/g,'<span class="uppercase text-wavencyan font-bold ">mécanismes</span>');
lexique.set(/MECANISME/g,'<span class="uppercase text-wavencyan font-bold ">mécanisme</span>');
lexique.set(/MORT/g,'<span class="uppercase text-wavencyan font-bold ">mort</span>');
lexique.set(/CRANES REGENERANTS/g,'<span class="uppercase text-wavencyan font-bold ">crânes régénérants</span>');
lexique.set(/CRANES EXPLOSIFS/g,'<span class="uppercase text-wavencyan font-bold ">crânes explosifs</span>');
lexique.set(/DAGUES PUNITIVES/g,'<span class="uppercase text-wavencyan font-bold ">dagues  punitives</span>');
lexique.set(/OMBRE REPOUSSANTE/g,'<span class="uppercase text-wavencyan font-bold ">ombre repoussante</span>');
lexique.set(/LE GRAND MORNIFLEUR/g,'<span class="uppercase text-wavencyan font-bold ">le grand mornifleur</span>');
lexique.set(/SABLIER VENGEUR/g,'<span class="uppercase text-wavencyan font-bold ">sablier vengeur</span>');
lexique.set(/FIN DU TOUR/g,'<span class="uppercase text-wavencyan font-bold ">fin du tour</span>');
lexique.set(/SINISTRO EAU/g,'<span class="uppercase text-wavencyan font-bold ">sinistro eau</span>');
lexique.set(/SINISTRO TERRE/g,'<span class="uppercase text-wavencyan font-bold ">sinistro terre</span>');
lexique.set(/SINISTRO FEU/g,'<span class="uppercase text-wavencyan font-bold ">sinistro feu</span>');
lexique.set(/SINISTRO AIR/g,'<span class="uppercase text-wavencyan font-bold ">sinistro air</span>');
lexique.set(/SINISTRO NEUTRE/g,'<span class="uppercase text-wavencyan font-bold ">sinistro neutre</span>');
lexique.set(/SINISTROS/g,'<span class="uppercase text-white font-semibold ">sinistros</span>');
lexique.set(/SINISTRO/g,'<span class="uppercase text-wavencyan font-bold ">sinistro</span>');
lexique.set(/COUCOU/g,'<span class="uppercase text-wavencyan font-bold ">coucou</span>');
lexique.set(/CADRAN DE XELOR/g,'<span class="uppercase text-wavencyan font-bold ">cadran de xelor</span>');
lexique.set(/CATALYSEUR TEMPOREL/g,'<span class="uppercase text-wavencyan font-bold ">catalyseur temporel</span>');
lexique.set(/SABLIERS VENGEURS/g,'<span class="uppercase text-wavencyan font-bold ">sabliers vengeurs</span>');
lexique.set(/CHIBI CADRANS/g,'<span class="uppercase text-wavencyan font-bold ">chibi cadrans</span>');
lexique.set(/SARCOPHAGUS/g,'<span class="uppercase text-wavencyan font-bold ">sarcophagus</span>');
lexique.set(/MOMIFICATUS/g,'<span class="uppercase text-wavencyan font-bold ">momificatus</span>');
lexique.set(/BL/g,'<span class="uppercase text-white font-semibold ">bl <span class="tooltip-icon ticon-bl"></span></span>');
lexique.set(/PV/g,'<span class="uppercase text-white font-semibold ">pv <span class="tooltip-icon ticon-pv"></span> </span>');
lexique.set(/AR/g,'<span class="uppercase text-white font-semibold ">ar <span class="tooltip-icon ticon-ar"></span> </span>');
lexique.set(/AT/g,'<span class="uppercase text-white font-semibold ">at <span class="tooltip-icon ticon-at"></span></span>');
lexique.set(/PA/g,'<span class="uppercase text-white font-semibold ">pa <span class="tooltip-icon ticon-pa"></span> </span>');
lexique.set(/PM/g,'<span class="uppercase text-white font-semibold ">pm <span class="tooltip-icon ticon-pm"></span> </span>');
lexique.set(/FEU/g,'<span>FEU <span class="tooltip-icon ticon-feu"></span></span>');
lexique.set(/TERRE/g,'<span>TERRE <span class="tooltip-icon ticon-terre"></span></span>');
lexique.set(/AIR/g,'<span>AIR <span class="tooltip-icon ticon-air"></span></span>');
lexique.set(/EAU/g,'<span>EAU <span class="tooltip-icon ticon-eau"></span></span>');



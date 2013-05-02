
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_bent_man}","click",function(sym,e){sym.gotoAnim();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.audio01=new buzz.sound("media/fart_01",{formats:["ogg","mp3"]});sym.audio02=new buzz.sound("media/fart2_01",{formats:["ogg","mp3"]});sym.audio03=new buzz.sound("media/fart3_01",{formats:["ogg","mp3"]});sym.audio04=new buzz.sound("media/fart4_01",{formats:["ogg","mp3"]});sym.audio05=new buzz.sound("media/fart5_01",{formats:["ogg","mp3"]});sym.audio06=new buzz.sound("media/fart6_01",{formats:["ogg","mp3"]});sym.getRandomInt=function(min,max){  return Math.floor(Math.random()*(max-min+1))+min;}
sym.labelName=function(){var labelPath="fart_lbl_"+sym.getRandomInt(1,6);return labelPath;}
sym.gotoAnim=function(){var fartObject=sym.getComposition().getStage();var myLabel=sym.labelName();console.log(myLabel);fartObject.play(myLabel);}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",13,function(sym,e){sym.getComposition().getStage().audio01.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",513,function(sym,e){sym.getComposition().getStage().audio02.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1013,function(sym,e){sym.getComposition().getStage().audio03.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2391,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1509,function(sym,e){sym.getComposition().getStage().audio04.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2009,function(sym,e){sym.getComposition().getStage().audio06.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2402,function(sym,e){sym.getComposition().getStage().audio05.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'fart_ray_basic'
(function(symbolName){})("fart_ray_basic");
//Edge symbol end:'fart_ray_basic'

//=========================================================

//Edge symbol: 'fart_rays_g'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getComposition().getStage().audio01.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1020,function(sym,e){sym.stop();});
//Edge binding end
})("fart_rays_g");
//Edge symbol end:'fart_rays_g'

//=========================================================

//Edge symbol: 'fart_ray'
(function(symbolName){})("fart_ray");
//Edge symbol end:'fart_ray'

//=========================================================

//Edge symbol: 'cloud_farts_g'
(function(symbolName){})("cloud_farts_g");
//Edge symbol end:'cloud_farts_g'

//=========================================================

//Edge symbol: 'fire_fart'
(function(symbolName){})("fire_fart");
//Edge symbol end:'fire_fart'

//=========================================================

//Edge symbol: 'fartminis'
(function(symbolName){})("fartminis");
//Edge symbol end:'fartminis'

//=========================================================

//Edge symbol: 'fart_whisper'
(function(symbolName){})("fart_whisper");
//Edge symbol end:'fart_whisper'

//=========================================================

//Edge symbol: 'eye'
(function(symbolName){})("eye");
//Edge symbol end:'eye'

//=========================================================

//Edge symbol: 'expr_happy'
(function(symbolName){})("expr_happy");
//Edge symbol end:'expr_happy'

//=========================================================

//Edge symbol: 'expr_side_neutral'
(function(symbolName){})("expr_side_neutral");
//Edge symbol end:'expr_side_neutral'

//=========================================================

//Edge symbol: 'expr_surprised'
(function(symbolName){})("expr_surprised");
//Edge symbol end:'expr_surprised'

//=========================================================

//Edge symbol: 'expr_anger'
(function(symbolName){})("expr_anger");
//Edge symbol end:'expr_anger'

//=========================================================

//Edge symbol: 'expr_suffer'
(function(symbolName){})("expr_suffer");
//Edge symbol end:'expr_suffer'

//=========================================================

//Edge symbol: 'expr_sad'
(function(symbolName){})("expr_sad");
//Edge symbol end:'expr_sad'
})(jQuery,AdobeEdge,"EDGE-1366769845110");
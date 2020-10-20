const oscillators=[];const step=.1;function makeOscillators(context,gain){for(var i=0;i<10;i++){var osc=context.createOscillator();osc.type="square";osc.frequency.value=40+i*.1111;osc.connect(gain);osc.start();oscillators.push(osc)}}function stepOscillators(steps=1){oscillators.forEach((osc=>{osc.frequency.value=osc.frequency.value+step*steps}))}function init(){var context=new(window.AudioContext||window.webkitAudioContext);var gain=context.createGain();gain.gain.value=.6;gain.connect(context.destination);makeOscillators(context,gain);return context}export{init,stepOscillators};
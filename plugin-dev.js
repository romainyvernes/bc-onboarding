/** 
 * Player customization
 * **/

videojs.registerPlugin('pluginDev', function() {
  const player = this;

  // triggered only once when the player first loads
  player.one('play', () => {
    // create overlay and caption elements and get reference for color from 
    // video metadata
    const overlay = document.createElement('div'),
    caption = document.createElement('p'),
    color = player.mediainfo.customFields.color;

    overlay.className = 'vjs-overlay';
    overlay.style.backgroundColor = color.toLowerCase();

    caption.className = 'vjs-caption';
    caption.innerHTML = `I'm colored in ${color}`;

    // add overlay and caption elements to the DOM
    overlay.appendChild(caption);
    player.el().appendChild(overlay);
  });
});

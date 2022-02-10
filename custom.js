/** 
 * Gallery customization
 * **/


// retrieve all videos included in page
const videos = bcGallery.filteredAssemblerData.videos.items;

videos.forEach((video) => {
  // select all DOM elements containing a given video's title
  const titleElements = document.querySelectorAll(
    `[data-video-id="${video.id}"] .home-carousel-title a`
  );
  
  // update color for each title based on color assigned to video in metadata
  titleElements.forEach((titleEl) => {
    titleEl.style.color = video.customFields.color.toLowerCase();
  });
});

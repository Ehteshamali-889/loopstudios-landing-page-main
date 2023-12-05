function updateZoomStyles() {
    const innerWidth = window.innerWidth;
    const outerWidth = window.outerWidth;
    const zoomLevel = outerWidth / innerWidth;

    const loopheader = document.querySelector('.loopheader');
    const zoomIndicator = document.getElementById('zoom-value');

    // Remove existing zoom level classes
    loopheader.classList.forEach(className => {
      if (className.startsWith('zoom-level-')) {
        loopheader.classList.remove(className);
      }
    });

    // Update the zoom indicator
    // zoomIndicator.textContent = (zoomLevel * 100).toFixed(2) + '%';
    // console.log("zoom", zoomLevel);

    // Add appropriate zoom level class
    if (zoomLevel >= 0.89 && zoomLevel <= 0.91) {
      loopheader.classList.add('zoom-level-90');
    } else if (zoomLevel >= 0.80 && zoomLevel < 0.89) {
      loopheader.classList.add('zoom-level-80');
    } else if (zoomLevel >= 0.70 && zoomLevel < 0.80) {
      loopheader.classList.add('zoom-level-70');
    } else if (zoomLevel >= 0.60 && zoomLevel < 0.70) {
      loopheader.classList.add('zoom-level-60');
    }
    else if (zoomLevel >= 0.50 && zoomLevel < 0.60) {
      loopheader.classList.add('zoom-level-50');
    }
    else if (zoomLevel >= 0.40 && zoomLevel < 0.50) {
      loopheader.classList.add('zoom-level-40');
    }else if (zoomLevel >= 0.30 && zoomLevel < 0.40) {
      loopheader.classList.add('zoom-level-30');
    }
    else if (zoomLevel > 1.10 && zoomLevel <= 1.20) {
      loopheader.classList.add('zoom-level-110');
    }
    else if (zoomLevel > 1.20 && zoomLevel <= 1.30) {
      loopheader.classList.add('zoom-level-120');
    }
  }

  // Update zoom styles on load and whenever the window is resized
  window.addEventListener('load', updateZoomStyles);
  window.addEventListener('resize', updateZoomStyles);
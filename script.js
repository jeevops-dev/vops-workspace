// script.js
const appConfig = {
    enableMultiTasking: true // Set to true to enable multi-tasking
  };
  
  const iframeData = [
    { name: 'Nomad Sculpt', url: 'https://nomadsculpt.com/demo/' },
    { name: 'SculptGL', url: 'https://stephaneginier.com/sculptgl/' },
    { name: 'Sculptfab', url: 'https://labs.sketchfab.com/sculptfab/' },
    { name: 'Photopea', url: 'https://www.photopea.com/' },
    { name: 'graphite.rs', url: 'https://editor.graphite.rs/' },
    { name: 'A-Frame', url: 'https://aframe.io/' },
    { name: 'ARMORY3D', url: 'https://armory3d.github.io/armory_examples_browser/#templates-third_person/' },
    { name: 'BABYLON.JS', url: 'https://playground.babylonjs.com/' },
    { name: 'BevyEngine', url: 'https://bevyengine.org/examples/' },
    // Add more names and URLs as needed
  ];
  
  const iframes = [];
  
  function createIframes() {
    iframeData.forEach(({ url }) => {
      const iframe = document.createElement('iframe');
      iframe.src = url;
      iframe.style.display = 'none';
      document.getElementById('iframeContainer').appendChild(iframe);
      iframes.push(iframe);
    });
  }
  
  function changeIframeSrc(url) {
    iframes.forEach(iframe => {
      if (iframe.src === url) {
        iframe.style.display = 'block';
      } else {
        iframe.style.display = 'none';
      }
    });
  
    if (appConfig.enableMultiTasking) {
      console.log("Multitasking enabled for URL: " + url);
      // Add multitasking logic here if needed for each URL
    }
  }
  
  // Function to populate side panel with names of the URLs
  function populateSidePanel() {
    const sideContent = document.getElementById('sideContent');
    const ul = sideContent.querySelector('ul');
  
    iframeData.forEach(({ name, url }) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = "#";
      a.textContent = name; // Display name instead of URL
      a.onclick = () => changeIframeSrc(url);
      li.appendChild(a);
      ul.appendChild(li);
    });
  }
  
  // Function to add docker functionalities
  function setupDocker() {
      const docker = document.getElementById('docker');
      docker.innerHTML = ''; // Clear the content before appending new buttons
  
      const closeButton = document.createElement('i');
      closeButton.classList.add('fas', 'fa-times');
      closeButton.onclick = removeIframe;
  
      const fullscreenButton = document.createElement('i');
      fullscreenButton.classList.add('fas', 'fa-expand');
      fullscreenButton.onclick = toggleFullscreen;
  
      const moveButton = document.createElement('i');
      moveButton.classList.add('fas', 'fa-arrows-alt');
      moveButton.onmousedown = startDrag;
  
      docker.appendChild(closeButton);
      docker.appendChild(fullscreenButton);
      docker.appendChild(moveButton);
  }
  
  function removeIframe() {
    const iframeContainer = document.getElementById('iframeContainer');
    const confirmClose = window.confirm("Are you sure you want to close the iframe?");
    if (confirmClose) {
      iframeContainer.innerHTML = '';
      document.getElementById('docker').style.display = 'none';
    }
  }
  
  // Function to toggle fullscreen
  let isMaximized = false;
  let isDragging = false;
  let offsetX, offsetY;
  
  function toggleFullscreen() {
    const iframe = document.querySelector('#iframeContainer iframe');
    const docker = document.getElementById('docker');
  
    if (!isMaximized) {
      iframe.classList.add('maximized');
      document.documentElement.requestFullscreen(); // Enter fullscreen
    } else {
      iframe.classList.remove('maximized');
      document.exitFullscreen(); // Exit fullscreen
      document.getElementById('sidePanel').style.display = 'flex';
    }
  
    docker.style.display = isMaximized ? 'grid' : 'none';
    isMaximized = !isMaximized;
  }
  
  function startDrag(e) {
    isDragging = true;
    const docker = document.getElementById('docker');
    const boundingBox = docker.getBoundingClientRect();
  
    offsetX = e.clientX - boundingBox.left;
    offsetY = e.clientY - boundingBox.top;
  
    initialX = docker.offsetLeft; // Store initial horizontal position
  }
  
  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const docker = document.getElementById('docker');
      const newX = e.clientX - offsetX;
  
      // Calculate the change in horizontal position
      const moveX = newX - initialX;
  
      docker.style.left = `${moveX}px`; // Update horizontal position only
    }
  });
  
  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
  
  // Call functions to create iframes, populate side panel, and set up docker
  createIframes();
  populateSidePanel();
  setupDocker();
  
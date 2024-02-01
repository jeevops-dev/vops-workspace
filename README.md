# VOps Workspace
This project provides a customizable workspace with multiple web apps in iframes.

## Features
- Side panel for selecting web apps

- Iframes to display web apps

- Docker with buttons for closing, fullscreen, move

- Draggable docker

- Fullscreen mode

- Option to enable multitasking for apps

## Usage
The side panel contains clickable links to open different web apps in the iframe container.

The docker at the bottom right provides the following functions:


- Close button: Closes the iframe

- Fullscreen button: Toggle fullscreen mode for the iframe

- Move button: Click and drag to move the docker around

Drag the docker to reposition it.

Double click the fullscreen button to make the iframe fill the entire viewport.

Configuration
The `appConfig` object contains a setting for `enableMultiTasking` which can be set to `true` to enable multitasking behavior for the web apps.

The `iframeData` array contains the name and URL for each web app. Update this array to customize the apps available in the workspace.

# Customization

- Update the iframeData array to add/remove apps

- Update the logo and title in the header

- Customize the side panel and docker styling

- Add logic in changeIframeSrc to enable multitasking for specific apps

- Call additional functions from the docker buttons

# Credits

## Uses the following open source libraries and web apps:

- Nomad Sculpt - https://nomadsculpt.com/demo/
- SculptGL - https://stephaneginier.com/sculptgl/
- Sculptfab - https://labs.sketchfab.com/sculptfab/
- Photopea - https://www.photopea.com/
- A-Frame - https://aframe.io/
- ARMORY3D - https://armory3d.github.io/armory_examples_browser/#templates-third_person/
- BABYLON.JS - https://playground.babylonjs.com/
- BevyEngine - https://bevyengine.org/examples/

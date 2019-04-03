// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  const firstPanel = new Surface(1000, 600, Surface.SurfaceShape.Flat);
  firstPanel.setAngle(0, 0);
  
  const secondPanel = new Surface(1000, 600, Surface.SurfaceShape.Flat);
  secondPanel.setAngle(3.1, 0);
  
  r360.renderToSurface(
    r360.createRoot('Hello360'),
    firstPanel,
  );
  r360.renderToSurface(
    r360.createRoot('Card'),
    secondPanel,
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};


/**
 * The default configuation for the ParticleField component
 *
 * Any option passed in via props will overwrite the default config
 */
export const particleConfig = {
  // Display reference cube, useful for orienting the field
  showCube: false,
  // '2D' or '3D' particle field
  dimension: '2D',
  // 'bounce' or 'passthru'
  // 'bounce' will make particles behave like balls thrown at a wall when hitting canvas boundaries
  // 'passthru' particles will disappear after hitting canvas boundaries and be added back into the scene elsewhere
  boundaryType: 'bounce',
  // Maximum velocity of particles
  velocity: 1.25,
  // Toggles antialiasing -- must be set during construction, cannot be changed after initial render
  // Slight performance optimization to set false, although lines will appear more jagged
  antialias: false,
  // Min/Max multipliers which constraint how particles move in each direction
  // The default values here allow for particles to move in completely random x, y, z directions
  // See the "Snowfall" preset for an example of how to use these values
  direction: {
    xMin: -1,
    xMax: 1,
    yMin: -1,
    yMax: 1,
    zMin: -1,
    zMax: 1,
  },
  lines: {
    visible: false,
  },
  particles: {
    // 'rainbow' or 'solid' color of particles
    colorMode: 'solid',
    // Color of lines if colorMode: 'solid', must be hex color
    color: '#ffffff',
    // Transparency of particles
    transparency: 0.9,
    // 'square' or 'circle' shape of particles
    shape: 'circle',
    // The exact number of particles to render
    count: 40,
    // The minimum particle size
    minSize: 10,
    // The maximum particle size
    maxSize: 30,
    // true/false render particles
    visible: true,
  },
  /*
   * The camera rig is comprised of Three.js OrbitControls
   * Pass any valid OrbitControls properties, consult docs for more info
   *
   * https://threejs.org/docs/#examples/controls/OrbitControls
   */
  cameraControls: {
    // Enable or disable all camera interaction (click, drag, touch etc)
    enabled: false,
    // Enable or disable smooth dampening of camera movement
    enableDamping: true,
    dampingFactor: 0.2,
    // Enable or disable zooming in/out of camera
    enableZoom: false,
    // Enable or disable constant rotation of camera around scene
    autoRotate: false,
    // Rotation speed -- higher is faster
    autoRotateSpeed: 0.3,
    // If true, camera position will be reset whenever any option changes (including this one)
    // Useful when turning off autoRotate, the camera will return to FOV where scene fits to canvas
    resetCameraFlag: false,
  },
};

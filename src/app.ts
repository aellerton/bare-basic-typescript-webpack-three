// Import this way for compatibility with the usual THREE way
import * as THREE from 'three';

// Or import this way if you prefer
//import {Scene} from 'three';


// This is only here to prove import and use of a local class
import {Person} from './example';

let p = new Person('Cube', 'McCubert');

console.log('The typescript app is loaded...');

document.write(`Message from ${p.name}: Typescript is working`);

var scene, camera, renderer;
var geometry, material, mesh;
 
init();
animate();
 
function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
  camera.position.z = 1000;
  geometry = new THREE.BoxGeometry( 200, 200, 200 );
  material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
  mesh = new THREE.Mesh( geometry, material );
  scene.add( mesh );
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  console.log(THREE);
  console.log(THREE.TrackballControls);
  var controls = new THREE.TrackballControls(scene, renderer.domElement);
}
 
function animate() {
  requestAnimationFrame( animate );
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.02;
  renderer.render( scene, camera );
}


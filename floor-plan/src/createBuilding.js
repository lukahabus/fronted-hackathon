import React, { Component } from "react";
import * as THREE from "three";

export default class Building extends React.Component {
  componentDidMount() { 
    var scene = new THREE.Scene();
    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();
    scene.background = new THREE.Color(0xffffff);
    var camera = new THREE.PerspectiveCamera( 100, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize( window.innerWidth, window.innerHeight );

    this.mount.appendChild( renderer.domElement );
    var geometry = new THREE.BoxGeometry( 2,2,2);
    var material = new THREE.MeshBasicMaterial( { color: 0xd3d3d3d3} );

    for(var i = 0; i < 8; i++){
      var mesh = new THREE.Mesh(geometry, material);
      if (i === 0){
        mesh.position.set(0, -2, 0);
        mesh.scale.set(1.25,0.25,1);
        mesh.rotation.y = THREE.MathUtils.degToRad(50);
        scene.add(mesh);
      }
      else{
        mesh.position.set(0,(-2+(2*0.25 + 0.1)*i),0);
        mesh.scale.set(1.25,0.25,1);
        mesh.rotation.y = THREE.MathUtils.degToRad(50);
        scene.add(mesh);
      }
    }
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame( animate );
      renderer.render( scene, camera );
    };
    animate(); //animation for rotating object
  }
  render() {
    return (
      <div ref={ref => (this.mount = ref)} />
    )
  }
}
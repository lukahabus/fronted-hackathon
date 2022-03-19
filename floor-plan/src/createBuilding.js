class BuildingCreator(){
    componentDidMount() {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 125, window.innerWidth/window.innerHeight, 0.1, 1000 );
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        // document.body.appendChild( renderer.domElement );
        // use ref as a mount point of the Three.js scene instead of the document.body
        this.mount.appendChild( renderer.domElement );
        var geometry = new THREE.BoxGeometry( 5, 2.5, 0.5 );
        var material = new THREE.MeshBasicMaterial( { color: 0xd3d3d3d3 } );
        var building = new THREE.Mesh( geometry, material );
        scene.add( building );
        camera.position.z = 5;
        var animate = function () {
          requestAnimationFrame( animate );
          building.rotation.x = 2;
          building.rotation.z = -1;
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
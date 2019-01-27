
var scene = new THREE.Scene();
var mainCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

var keys = new Keyboard();

var cameraObj = new THREE.Object3D();
cameraObj.add(mainCamera);
console.log('camera move');

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, mainCamera);

    if(keys.held['w']){
        cameraObj.translateZ(-0.02);
    }
    if(keys.held['a']){
        cameraObj.translateX(-0.02);
    }    
    if(keys.held['d']){
        cameraObj.translateX(0.02);
    }
    if(keys.held['s']){
        cameraObj.translateZ(-0.02);
    }
    if(keys.held['ArrowLeft']){
        cameraObj.rotateY(0.02);
    }    
    if(keys.held['ArrowRight']){
        cameraObj.rotateY(-0.02);
    }    
    if(keys.held['ArrowUp']){
        cameraObj.rotateX(0.02);
    }    
    if(keys.held['ArrowDown']){
        cameraObj.rotateX(-0.02);
    }     
    console.log(keys.held);

}

document.body.appendChild(renderer.domElement);

var cubeGeometry = new THREE.BoxGeometry(2.0, 2.0, 2.0);
var cylinderGeometry = new THREE.CylinderGeometry(3,3,3);

var cubeMaterial = new THREE.MeshPhongMaterial({color: 'white'});

var cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
cubeMesh.translateZ(-6);
cubeMesh.rotateY(THREE.Math.degToRad(30));

var directionalLight = new THREE.DirectionalLight(0xfffcdd, 0.5);
directionalLight.position.set(20, 10, 10);
var ambientLight = new THREE.AmbientLight(0xfffcdd, 0.2);

scene.add(cubeMesh);

var sphereMesh = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 20), new THREE.MeshPhongMaterial({color: 'white'}));
sphereMesh.translateZ(-6);
sphereMesh.translateX(-2.5);

scene.add(cameraObj);
scene.add(sphereMesh);

scene.add(directionalLight);
scene.add(ambientLight);


animate();
console.log('Hello World!');
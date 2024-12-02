import * as THREE from 'three';

const canvas = document.querySelector('canvas');
console.log( "executing" );

const main = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    if (!canvas) {
        throw new Error("'canvas' element not found");
    }

    const renderer = new THREE.WebGLRenderer({ canvas });
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);
    camera.position.z = 5;

    const animate = () => {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
    };

    animate();

    const updateProjectionMatrix = () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    };

    window.addEventListener('load', updateProjectionMatrix);
    window.addEventListener('resize', updateProjectionMatrix);
};

main();
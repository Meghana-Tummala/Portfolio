import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
//import * as THREE from 'three'

export function loadGLTFModel(
    scene,
    glbPath,
    options = {receiveShadow:true, castShadow: true}
) {
    const {receiveShadow, castShadow} = options
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader()

        loader.load(
            glbPath,
            gltf => {
                const obj = gltf.scene
                obj.name = 'voxelScene'
                obj.position.set(0,0,0)
                obj.rotation.y = Math.PI
                obj.scale.set(1.5, 1.5, 1.5);
                obj.receiveShadow = receiveShadow
                obj.castShadow = castShadow
                scene.add(obj)
                console.log("GLTF loaded:", obj);

                obj.traverse(function (child) {
                    if(child.isMesh) {
                        child.castShadow = castShadow
                        child.receiveShadow = receiveShadow

                        if (child.material) {
                            child.material.wireframe = false
                            child.material.needsUpdate = true
                        }
                    }
                    
                })

                
                  console.log('Materials in model:', obj.children.map(c => c.material))
                  

                resolve(obj)
                
            },
            undefined,
            function (error){
                reject(error)
            }
        )
    })
}
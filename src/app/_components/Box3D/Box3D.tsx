'use client'
import { Environment, OrbitControls } from "@react-three/drei"
import { Canvas, useLoader } from "@react-three/fiber"
import { Dispatch, SetStateAction, Suspense, useEffect, useState } from "react"
import { GLTFLoader } from "three/examples/jsm/Addons.js"
import * as THREE from 'three'
import { ControlBox } from "../ControlBox/ControlBox"
interface Box3DProps{
    fileName : string
}


const Model = ({fileName, setCubes}:{fileName: string; setCubes:Dispatch<SetStateAction<THREE.Mesh[]>>})  => {
    // const [cubes, setCubes] = useState<THREE.Mesh[]>([])
    const gltf = useLoader(
        GLTFLoader, 
        `/static/models/${fileName}.glb`,
        undefined,
        (error) => {
            console.error('Error loading model:', error)
        }
    )

    useEffect(()=>{
        //모델 객체 순회하면서 3dObject반환
        gltf.scene.traverse((obj)=>{
            //mesh Object만 state에 담음
            if(obj instanceof THREE.Mesh){
                setCubes(prev => ([...prev,obj]))
            }
        })
    },[gltf.scene])

    return gltf ? <primitive object={gltf.scene} /> : null
}



const Box3D = ({fileName }: Box3DProps) => {
    const [cubes, setCubes] = useState<THREE.Mesh[]>([])

    // const gltf = useLoader(GLTFLoader, `/models/${fileName}.glb`)

    // useEffect(()=>{
    //     //모델 객체 순회하면서 3dObject반환
    //     gltf.scene.traverse((obj)=>{
    //         //mesh Object만 state에 담음
    //         if(obj instanceof THREE.Mesh){
    //             setCubes(prev => ([...prev,obj]))
    //         }
    //     })
    // },[gltf.scene])

    return(
        <>
            <div className="flex w-full h-screen">
                <Suspense fallback={'Loading....'}>
                    <Canvas 
                    camera={{ position: [0, 5, 20] }}>
                        
                            <OrbitControls/>
                            <Environment preset="sunset"/>
                            <Model fileName={fileName} setCubes={setCubes}/>
                            <axesHelper scale={30}/>
                        
                    </Canvas>
                </Suspense>
                <ControlBox meshes={cubes}/>
            </div>

        </>
        
    )
}

export default Box3D
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 man.gltf --transform 
Files: man.gltf [9.16MB] > D:\portfolio\deadbeta\public\models\man-transformed.glb [939.44KB] (90%)
Author: Pixel_Monster (https://sketchfab.com/ar.jethin)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/indian-man-in-suit-985dd9756d89464b9380414b5b12d8aa
Title: Indian Man in suit
*/

"use client";
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export function Man(props) {
  const group = useRef();
  const { camera } = useThree()
  camera.position.set(0,0,3)
  const { nodes, materials, animations } = useGLTF(
    "/models/man-transformed.glb"
  );
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}  position={[0, -1.5, 0]}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.AvatarBody}
          skeleton={nodes.Object_7.skeleton}
          scale={1.83}
        />
        <skinnedMesh
          name="Object_8"
          geometry={nodes.Object_8.geometry}
          material={materials.AvatarEyelashes}
          skeleton={nodes.Object_8.skeleton}
          scale={1.83}
        />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials.AvatarHead}
          skeleton={nodes.Object_9.skeleton}
          scale={1.83}
        />
        <skinnedMesh
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={materials.AvatarLeftCornea}
          skeleton={nodes.Object_10.skeleton}
          scale={1.83}
        />
        <skinnedMesh
          name="Object_11"
          geometry={nodes.Object_11.geometry}
          material={materials.AvatarLeftEyeball}
          skeleton={nodes.Object_11.skeleton}
          scale={1.83}
        />
        <skinnedMesh
          name="Object_12"
          geometry={nodes.Object_12.geometry}
          material={materials.AvatarRightCornea}
          skeleton={nodes.Object_12.skeleton}
          scale={1.83}
        />
        <skinnedMesh
          name="Object_13"
          geometry={nodes.Object_13.geometry}
          material={materials.AvatarLeftEyeball}
          skeleton={nodes.Object_13.skeleton}
          scale={1.83}
        />
        <skinnedMesh
          name="Object_14"
          geometry={nodes.Object_14.geometry}
          material={materials.AvatarTeethLower}
          skeleton={nodes.Object_14.skeleton}
          scale={1.83}
        />
        <skinnedMesh
          name="Object_15"
          geometry={nodes.Object_15.geometry}
          material={materials.AvatarTeethLower}
          skeleton={nodes.Object_15.skeleton}
          scale={1.83}
        />
        <skinnedMesh
          name="Object_16"
          geometry={nodes.Object_16.geometry}
          material={materials.glasses}
          skeleton={nodes.Object_16.skeleton}
          scale={1.83}
        />
        <skinnedMesh
          name="Object_17"
          geometry={nodes.Object_17.geometry}
          material={materials.outfit}
          skeleton={nodes.Object_17.skeleton}
          scale={1.83}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/man-transformed.glb");

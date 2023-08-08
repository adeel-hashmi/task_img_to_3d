import { OrbitControls } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import { useEffect, useRef, useState } from "react";

function Model() {

    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0,
        depth: 0,
    });

    const mesh = useRef(null);

    useEffect(() => {
        if (mesh.current) {
            const boundingBox = mesh.current.geometry.boundingBox;
            setDimensions({
                width: boundingBox.max.x - boundingBox.min.x,
                height: boundingBox.max.y - boundingBox.min.y,
                depth: boundingBox.max.z - boundingBox.min.z,
            });
        }
    }, [mesh]);

    return (
        <div style={{ height: '500px', width: 'auto' }}>
            <Canvas>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]}/>
                <mesh>
                    <boxGeometry args={[2, 2, 2]} />
                    {/* <mesh.attrs.computeBoundingBox /> */}
                </mesh>
            </Canvas>
            <div>
                Dimensions: {dimensions.width} x {dimensions.height} x {dimensions.depth}
            </div>
        </div>

    )
}

export default Model
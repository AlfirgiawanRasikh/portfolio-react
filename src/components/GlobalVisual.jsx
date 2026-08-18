import { useEffect, useRef } from "react";
import * as THREE from "three";

function GlobalVisual() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) return;

        /*
        ============================================
        SCENE
        ============================================
        */

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(
            42,
            window.innerWidth / window.innerHeight,
            0.1,
            100
        );

        camera.position.set(0, 0, 8);

        /*
        ============================================
        RENDERER
        ============================================
        */

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });

        renderer.setPixelRatio(
            Math.min(window.devicePixelRatio, 2)
        );

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

        renderer.setClearColor(0x000000, 0);

        container.appendChild(renderer.domElement);

        /*
        ============================================
        MAIN GROUP
        ============================================
        */

        const system = new THREE.Group();

        system.position.x = 1.15;

        scene.add(system);

        /*
        ============================================
        ORBIT SYSTEM
        ============================================
        */

        const orbitLines = [];

        function createOrbit({
            radiusX,
            radiusY,
            rotationX,
            rotationY,
            rotationZ,
            opacity,
            speed,
        }) {
            const curve = new THREE.EllipseCurve(
                0,
                0,
                radiusX,
                radiusY,
                0,
                Math.PI * 2,
                false,
                0
            );

            const points = curve
                .getPoints(220)
                .map(
                    (point) =>
                        new THREE.Vector3(
                            point.x,
                            point.y,
                            0
                        )
                );

            const geometry =
                new THREE.BufferGeometry().setFromPoints(
                    points
                );

            const material =
                new THREE.LineBasicMaterial({
                    color: 0xffffff,
                    transparent: true,
                    opacity,
                });

            const orbit = new THREE.LineLoop(
                geometry,
                material
            );

            orbit.rotation.set(
                rotationX,
                rotationY,
                rotationZ
            );

            orbit.userData = {
                baseX: rotationX,
                baseY: rotationY,
                baseZ: rotationZ,

                speed,

                phase:
                    Math.random() *
                    Math.PI *
                    2,
            };

            orbitLines.push(orbit);

            system.add(orbit);
        }

        /*
        ============================================
        ORBITS
        ============================================
        */

        createOrbit({
            radiusX: 2.8,
            radiusY: 1.15,
            rotationX: 0.3,
            rotationY: 0.4,
            rotationZ: 0.1,
            opacity: 0.16,
            speed: 0.23,
        });

        createOrbit({
            radiusX: 2.55,
            radiusY: 1,
            rotationX: -0.8,
            rotationY: 0.2,
            rotationZ: 0.6,
            opacity: 0.13,
            speed: -0.17,
        });

        createOrbit({
            radiusX: 2.9,
            radiusY: 1.4,
            rotationX: 1.05,
            rotationY: -0.4,
            rotationZ: 0.1,
            opacity: 0.1,
            speed: 0.12,
        });

        createOrbit({
            radiusX: 2.3,
            radiusY: 0.9,
            rotationX: 0.25,
            rotationY: 1.15,
            rotationZ: 0.7,
            opacity: 0.14,
            speed: -0.2,
        });

        createOrbit({
            radiusX: 2.65,
            radiusY: 1.25,
            rotationX: -0.45,
            rotationY: -0.9,
            rotationZ: 0.4,
            opacity: 0.11,
            speed: 0.14,
        });

        createOrbit({
            radiusX: 2.15,
            radiusY: 1.05,
            rotationX: 0.9,
            rotationY: 0.75,
            rotationZ: -0.8,
            opacity: 0.11,
            speed: -0.16,
        });

        createOrbit({
            radiusX: 3,
            radiusY: 1.3,
            rotationX: -1,
            rotationY: 0.55,
            rotationZ: -0.35,
            opacity: 0.08,
            speed: 0.11,
        });

        createOrbit({
            radiusX: 1.9,
            radiusY: 0.85,
            rotationX: 0.5,
            rotationY: -0.3,
            rotationZ: 1.1,
            opacity: 0.15,
            speed: -0.25,
        });

        /*
        ============================================
        OUTER CORE
        ============================================
        */

        const coreGeometry =
            new THREE.IcosahedronGeometry(
                1.15,
                2
            );

        const coreEdges =
            new THREE.EdgesGeometry(
                coreGeometry
            );

        const coreMaterial =
            new THREE.LineBasicMaterial({
                color: 0xffffff,
                transparent: true,
                opacity: 0.17,
            });

        const core =
            new THREE.LineSegments(
                coreEdges,
                coreMaterial
            );

        system.add(core);

        /*
        ============================================
        INNER CORE
        ============================================
        */

        const innerGeometry =
            new THREE.IcosahedronGeometry(
                0.68,
                1
            );

        const innerEdges =
            new THREE.EdgesGeometry(
                innerGeometry
            );

        const innerMaterial =
            new THREE.LineBasicMaterial({
                color: 0xffffff,
                transparent: true,
                opacity: 0.13,
            });

        const innerCore =
            new THREE.LineSegments(
                innerEdges,
                innerMaterial
            );

        system.add(innerCore);

        /*
        ============================================
        CENTRAL POINT
        ============================================
        */

        const centerGeometry =
            new THREE.SphereGeometry(
                0.055,
                12,
                12
            );

        const centerMaterial =
            new THREE.MeshBasicMaterial({
                color: 0xffffff,
            });

        const centerPoint =
            new THREE.Mesh(
                centerGeometry,
                centerMaterial
            );

        system.add(centerPoint);

        /*
        ============================================
        PARTICLE CLOUD
        ============================================
        */

        const particleCount = 1800;

        const particlePositions =
            new Float32Array(
                particleCount * 3
            );

        for (
            let i = 0;
            i < particleCount;
            i++
        ) {
            const i3 = i * 3;

            const radius =
                2.3 +
                Math.random() *
                    4;

            const theta =
                Math.random() *
                Math.PI *
                2;

            const phi =
                Math.acos(
                    2 *
                        Math.random() -
                        1
                );

            particlePositions[i3] =
                radius *
                Math.sin(phi) *
                Math.cos(theta);

            particlePositions[i3 + 1] =
                radius *
                Math.sin(phi) *
                Math.sin(theta);

            particlePositions[i3 + 2] =
                radius *
                Math.cos(phi);
        }

        const particleGeometry =
            new THREE.BufferGeometry();

        particleGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(
                particlePositions,
                3
            )
        );

        const particleMaterial =
            new THREE.PointsMaterial({
                color: 0xffffff,

                size: 0.018,

                transparent: true,

                opacity: 0.28,

                depthWrite: false,
            });

        const particles =
            new THREE.Points(
                particleGeometry,
                particleMaterial
            );

        system.add(particles);

        /*
        ============================================
        BACKGROUND STARS
        ============================================
        */

        const starCount = 1100;

        const starPositions =
            new Float32Array(
                starCount * 3
            );

        for (
            let i = 0;
            i < starCount;
            i++
        ) {
            const i3 = i * 3;

            starPositions[i3] =
                (Math.random() - 0.5) *
                35;

            starPositions[i3 + 1] =
                (Math.random() - 0.5) *
                22;

            starPositions[i3 + 2] =
                (Math.random() - 0.5) *
                20;
        }

        const starGeometry =
            new THREE.BufferGeometry();

        starGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(
                starPositions,
                3
            )
        );

        const starMaterial =
            new THREE.PointsMaterial({
                color: 0xffffff,

                size: 0.012,

                transparent: true,

                opacity: 0.16,

                depthWrite: false,
            });

        const stars =
            new THREE.Points(
                starGeometry,
                starMaterial
            );

        scene.add(stars);

        /*
        ============================================
        MOUSE
        ============================================
        */

        const targetMouse = {
            x: 0,
            y: 0,
        };

        const mouse = {
            x: 0,
            y: 0,
        };

        const handleMouseMove = (
            event
        ) => {
            targetMouse.x =
                (
                    event.clientX /
                    window.innerWidth
                ) *
                    2 -
                1;

            targetMouse.y =
                -(
                    (
                        event.clientY /
                        window.innerHeight
                    ) *
                        2 -
                    1
                );
        };

        window.addEventListener(
            "mousemove",
            handleMouseMove
        );

        /*
        ============================================
        SCROLL
        ============================================
        */

        let targetScroll = 0;
        let scroll = 0;

        const handleScroll = () => {
            const maxScroll =
                document.documentElement
                    .scrollHeight -
                window.innerHeight;

            targetScroll =
                maxScroll > 0
                    ? window.scrollY /
                      maxScroll
                    : 0;
        };

        window.addEventListener(
            "scroll",
            handleScroll
        );

        handleScroll();

        /*
        ============================================
        RESIZE
        ============================================
        */

        const handleResize = () => {
            camera.aspect =
                window.innerWidth /
                window.innerHeight;

            camera.updateProjectionMatrix();

            renderer.setSize(
                window.innerWidth,
                window.innerHeight
            );

            renderer.setPixelRatio(
                Math.min(
                    window.devicePixelRatio,
                    2
                )
            );
        };

        window.addEventListener(
            "resize",
            handleResize
        );

        /*
        ============================================
        ANIMATION
        ============================================
        */

        renderer.setAnimationLoop(
            (time) => {
                const elapsed =
                    time * 0.001;

                /*
                 * Smooth cursor
                 */

                mouse.x +=
                    (
                        targetMouse.x -
                        mouse.x
                    ) *
                    0.045;

                mouse.y +=
                    (
                        targetMouse.y -
                        mouse.y
                    ) *
                    0.045;

                /*
                 * Smooth scroll
                 */

                scroll +=
                    (
                        targetScroll -
                        scroll
                    ) *
                    0.035;

                /*
                 * GLOBAL ROTATION
                 */

                system.rotation.y =
                    elapsed * 0.075 +
                    mouse.x * 0.18;

                system.rotation.x =
                    Math.sin(
                        elapsed * 0.25
                    ) *
                        0.09 +
                    mouse.y * 0.1;

                system.rotation.z =
                    scroll * 0.2;

                /*
                 * GLOBAL POSITION
                 */

                system.position.x =
                    1.15 +
                    mouse.x *
                        0.18 -
                    scroll *
                        0.35;

                system.position.y =
                    mouse.y *
                        0.12 -
                    scroll *
                        0.12;

                /*
                 * BREATHING
                 */

                const breathing =
                    1 +
                    Math.sin(
                        elapsed * 0.9
                    ) *
                        0.025 +
                    scroll *
                        0.08;

                system.scale.setScalar(
                    breathing
                );

                /*
                 * ORBITS
                 */

                orbitLines.forEach(
                    (
                        orbit,
                        index
                    ) => {
                        const data =
                            orbit.userData;

                        orbit.rotation.x =
                            data.baseX +
                            Math.sin(
                                elapsed *
                                    0.38 +
                                    data.phase
                            ) *
                                0.09 +
                            mouse.y *
                                0.08;

                        orbit.rotation.y =
                            data.baseY +
                            Math.cos(
                                elapsed *
                                    0.32 +
                                    data.phase
                            ) *
                                0.1 +
                            mouse.x *
                                0.09;

                        orbit.rotation.z =
                            data.baseZ +
                            elapsed *
                                data.speed +
                            scroll *
                                0.28;

                        /*
                         * Each ring breathes
                         * slightly differently
                         */

                        const scale =
                            1 +
                            Math.sin(
                                elapsed *
                                    0.6 +
                                    index
                            ) *
                                0.02;

                        orbit.scale.setScalar(
                            scale
                        );
                    }
                );

                /*
                 * CORE
                 */

                core.rotation.x =
                    elapsed * 0.21;

                core.rotation.y =
                    elapsed * 0.28;

                core.rotation.z =
                    -elapsed * 0.08;

                innerCore.rotation.x =
                    -elapsed * 0.31;

                innerCore.rotation.y =
                    elapsed * 0.24;

                innerCore.rotation.z =
                    elapsed * 0.12;

                /*
                 * PARTICLES
                 */

                particles.rotation.y =
                    elapsed * 0.025;

                particles.rotation.x =
                    elapsed * 0.009 +
                    scroll * 0.12;

                /*
                 * STARS
                 */

                stars.rotation.y =
                    -elapsed * 0.004;

                stars.rotation.x =
                    scroll * 0.05;

                /*
                 * CAMERA PARALLAX
                 */

                camera.position.x =
                    mouse.x * 0.3;

                camera.position.y =
                    mouse.y * 0.2;

                camera.position.z =
                    8 -
                    scroll * 0.25;

                camera.lookAt(
                    system.position.x *
                        0.12,
                    system.position.y *
                        0.1,
                    0
                );

                renderer.render(
                    scene,
                    camera
                );
            }
        );

        /*
        ============================================
        CLEANUP
        ============================================
        */

        return () => {
            renderer.setAnimationLoop(
                null
            );

            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );

            window.removeEventListener(
                "scroll",
                handleScroll
            );

            window.removeEventListener(
                "resize",
                handleResize
            );

            scene.traverse(
                (object) => {
                    if (
                        object.geometry
                    ) {
                        object.geometry.dispose();
                    }

                    if (
                        object.material
                    ) {
                        if (
                            Array.isArray(
                                object.material
                            )
                        ) {
                            object.material.forEach(
                                (
                                    material
                                ) =>
                                    material.dispose()
                            );
                        } else {
                            object.material.dispose();
                        }
                    }
                }
            );

            renderer.dispose();

            if (
                renderer.domElement
                    .parentNode ===
                container
            ) {
                container.removeChild(
                    renderer.domElement
                );
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="global-visual"
            aria-hidden="true"
        />
    );
}

export default GlobalVisual;
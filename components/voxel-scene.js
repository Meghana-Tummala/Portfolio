import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../libs/model'
import { Spinner, Box } from '@chakra-ui/react'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const SceneSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
    zIndex="20"
  />
)

const SceneContainer = ({ children, innerRef }) => (
  <Box
    ref={innerRef}
    position="fixed"
    top="0"
    left="0"
    w="100vw"
    h="100vh"
    zIndex="0"
    overflow="hidden"
  >
    {children}
  </Box>
)

const VoxelScene = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const refRenderer = useRef()

  const handleWindowResize = useCallback(() => {
    const renderer = refRenderer.current
    const container = refContainer.current
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight
      renderer.setSize(scW, scH)
    }
  }, [])

  useEffect(() => {
    const container = refContainer.current
    if (container) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      refRenderer.current = renderer

      const scene = new THREE.Scene()
      


      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
      scene.add(ambientLight)

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
      directionalLight.position.set(5, 10, 7.5)
      directionalLight.castShadow = true
      scene.add(directionalLight)

      const target = new THREE.Vector3(-0.5, 1.2, 0)
      const initialCameraPosition = new THREE.Vector3(
        0, 2, 20
      )

      const scale = scH * 0.003 + 3.5
      const camera = new THREE.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000)
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.target = target
      controls.enableZoom = true
      controls.enablePan = false
      controls.autoRotate = true
      controls.autoRotateSpeed = 1.5
      controls.update()

      let frame = 0

      const animate = () => {
        requestAnimationFrame(animate)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20
          camera.position.y = 10
          camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        renderer.render(scene, camera)
      }

      loadGLTFModel(scene, '/scene.gltf', {
        receiveShadow: false,
        castShadow: false
      }).then(() => {
        setLoading(false)
        animate()
      })

      return () => {
        renderer.domElement.remove()
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [handleWindowResize])

  return (
    <SceneContainer innerRef={refContainer}>
      {loading && <SceneSpinner />}
    </SceneContainer>
  )
}

export default VoxelScene

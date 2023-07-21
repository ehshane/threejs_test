import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import { SVGLoader } from 'three/addons/loaders/SVGLoader.js';

THREE.ColorManagement.enabled = false

const svg = `<svg width="202px" height="37px" viewBox="0 0 202 37" version="1.1" id="header-logo">
<title>evanshunt logo</title>
<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
	<g className="ComponentsNavLogo" transform="translate(-58.000000, -53.000000)" fill="#ffffff">
		<g transform="translate(58.000000, 53.000000)">
			<path d="M98.6013254,0.231951922 C103.054973,0.654923073 105.538066,2.53426754 106.240543,6.00049537 C106.630072,7.92373867 106.579421,9.93299994 106.735594,12.0187876 L101.584896,12.0187876 C101.515552,10.6834326 101.496257,9.3955359 101.371439,8.11713081 C101.142907,5.76201794 99.9538209,4.57022405 97.8638746,4.50259613 C95.3078209,4.41954429 94.0825552,5.35625039 93.6043881,7.76060113 C92.7885493,11.8562432 93.7714149,13.7652491 97.6250925,15.5722198 C99.1307463,16.2787537 100.666549,16.9283377 102.134215,17.7048724 C104.659516,19.0408205 106.317725,21.0886416 106.467266,23.956303 C106.588466,26.2776019 106.590275,28.6487319 106.241146,30.9385897 C105.840161,33.5689601 104.093916,35.3498288 101.478167,36.1625504 C99.1235104,36.894593 96.718806,36.9829839 94.3165134,36.3897565 C90.7733731,35.5135596 88.9354746,33.4556537 88.4922806,29.5765395 C88.2884716,27.7879589 88.4579104,25.9590387 88.4579104,24.0494397 L93.3710328,24.0494397 C93.3897254,24.467665 93.4072119,24.921484 93.4307284,25.375303 C93.4970567,26.6258264 93.4626866,27.8923669 93.6556418,29.1245003 C94.0270806,31.5033422 95.301791,32.473269 97.7360418,32.4127599 C99.8627701,32.3593694 101.089242,31.1788468 101.372645,28.9044129 C101.425707,28.474323 101.443194,28.0400805 101.498066,27.6099906 C101.902066,24.4190203 100.482639,22.3095036 97.566,21.0079627 C95.9276896,20.2771065 94.3171164,19.4738766 92.7487522,18.6071713 C89.7452836,16.9467277 88.3457552,14.3359339 88.4120836,10.9847922 C88.4446448,9.34689125 88.4157015,7.66212538 88.7895522,6.08354721 C89.8863821,1.44628845 93.9131164,-0.213561872 98.6013254,0.231951922 Z M159.811546,1.03280894 L159.811546,36.0053451 L155.40674,36.0053451 C155.304233,35.3260997 155.196299,34.6160065 155.080525,33.8507431 C154.923749,33.9278627 154.79471,33.9533715 154.722955,34.0310843 C152.350209,36.5861148 149.459499,37.4071415 146.384275,36.2895011 C143.234281,35.1451654 142.047003,32.5972536 141.884197,29.5611156 C141.793922,27.8807566 141.786341,26.1963297 141.795975,24.5111557 L141.815151,21.9832493 C141.81777,21.5619766 141.819419,21.1407609 141.819075,20.7196541 C141.814251,14.4777152 141.816663,8.23518306 141.820281,1.99265091 C141.820281,1.69900333 141.854048,1.40535576 141.875755,1.04289381 L146.855206,1.04289381 L146.855206,2.53070818 C146.855809,10.7237721 146.848573,18.916836 146.86606,27.1098999 C146.867869,27.9688932 146.91671,28.8492427 147.10846,29.6827273 C147.508842,31.4262226 148.477839,32.3018263 149.98711,32.4655571 C151.930531,32.6767461 153.444024,32.0158907 154.068113,30.3228196 C154.536633,29.0509401 154.792299,27.6354994 154.803755,26.280568 C154.870687,18.3918297 154.836919,10.501905 154.837522,2.61257356 L154.837522,1.03280894 L159.811546,1.03280894 Z M10.1036179,0.224833193 C15.593194,0.683991217 18.0069433,3.39088794 18.0859343,8.79696943 C18.138997,12.4352332 18.0955821,16.0752767 18.0955821,19.9087123 L5.04216119,19.9087123 C5.04216119,20.4776174 5.03010149,20.9753352 5.04457313,21.4724597 C5.12537313,24.1953736 5.04819104,26.9366775 5.35269851,29.6358623 C5.57459701,31.5917331 6.93854925,32.4127599 9.02608358,32.4169124 C11.108191,32.4198786 12.3708418,31.6124961 12.7193672,29.6382352 C13.0395522,27.8193999 13.010609,25.9412419 13.1432657,23.9735066 L17.9593075,23.9735066 C17.9593075,26.1862448 18.1986925,28.3355078 17.9080537,30.4135834 C17.3521015,34.398292 14.5464119,36.508402 9.8292597,36.7308623 C8.56721194,36.7907782 7.26114627,36.6822176 6.02683582,36.4194179 C2.25576716,35.6185608 0.072358209,32.9614952 0.0391940299,29.0764488 C-0.0174865672,22.3545889 0.0554746269,15.6321358 0.000602985075,8.90968264 C-0.0548716418,2.14214422 4.42168955,-0.250935199 10.1036179,0.224833193 Z M54.5140716,0.469836118 C58.2688597,1.31696488 60.5493493,3.97106436 60.598794,7.7795844 C60.682006,14.1520334 60.639194,20.526262 60.6464299,26.8998974 L60.6480504,29.1408511 L60.6480504,29.1408511 L60.6474474,33.6521232 C60.6472213,34.4097117 60.6470328,35.1709707 60.6470328,35.937124 L56.116203,35.937124 C55.9992239,35.3207607 55.874406,34.6599053 55.7278806,33.8881164 C55.4921134,34.0856612 55.2672,34.2458326 55.0766567,34.4392247 C52.8299343,36.7189977 50.0875582,37.1686641 47.1787582,36.185093 C44.2404119,35.1908439 42.8282209,32.8345445 42.6557672,29.8992553 C42.4875343,27.0482043 42.5279343,24.1757971 42.6527522,21.3194071 C42.7600836,18.8622591 43.9913791,16.9437616 46.4666328,16.2479058 C48.9038985,15.5633214 51.431009,15.1872152 53.9207343,14.6865313 C54.4338746,14.5833097 54.9566627,14.5281396 55.5572358,14.4391554 C55.5572358,12.3088758 55.6802448,10.2272407 55.5264836,8.16636868 C55.3323224,5.56387999 53.8664657,4.41301879 51.2302149,4.50259613 C49.0226866,4.57793601 47.7268716,5.98922405 47.6406448,8.47721985 C47.5972299,9.73070939 47.632806,10.9865718 47.632806,12.4079447 L42.3982925,12.4079447 C42.6045134,10.0320689 42.580394,7.68466802 43.0633851,5.44404805 C43.6054687,2.92995023 45.4952239,1.39289799 47.9855522,0.65788921 C50.137003,0.0231358694 52.3318687,-0.022542642 54.5140716,0.469836118 Z M183.34726,6.76753842 C183.432884,7.45449578 183.473284,8.151538 183.473887,8.8438344 C183.482931,17.5583452 183.481725,26.272856 183.479313,34.9873669 C183.479313,35.2893196 183.447355,35.5906791 183.424442,35.9875483 L178.42871,35.9875483 L178.42871,34.458208 C178.42871,26.3505688 178.436549,18.2429297 178.417254,10.1352905 C178.415445,9.18849953 178.372633,8.2185727 178.159779,7.3014431 C177.761206,5.58286326 176.748794,4.72209027 175.219624,4.58386829 C173.309367,4.41242556 171.856173,5.04421276 171.238716,6.68507981 C170.760549,7.95517972 170.469307,9.36824744 170.457248,10.720806 C170.386096,18.6546295 170.421672,26.5890463 170.421672,34.523463 L170.421672,36.0267013 L170.421672,36.0267013 L165.437397,36.0267013 L165.437397,1.06780936 L169.918782,1.06780936 C170.012245,1.77137708 170.10631,2.47850417 170.226907,3.39088794 C171.663821,1.65154514 173.265952,0.54992182 175.427654,0.39330978 C179.834269,0.0741534277 182.811206,2.44587666 183.34726,6.76753842 Z M201.983719,1.05179222 L201.983719,5.20201126 L196.97231,5.20201126 L196.97231,35.9875483 L191.871057,35.9875483 L191.871057,5.22692681 L186.841558,5.22692681 L186.841558,1.05179222 L201.983719,1.05179222 Z M123.3816,1.03636831 L123.3816,15.7484084 L131.429039,15.7484084 L131.429039,1.05001254 L136.472406,1.05001254 L136.472406,35.9786499 L131.529134,35.9786499 L131.529134,20.2735471 L123.452752,20.2735471 L123.452752,35.9863618 L118.455815,35.9863618 L118.455815,1.03636831 L123.3816,1.03636831 Z M39.7801313,0.978825245 C38.0362985,12.6339644 36.2997015,24.2446115 34.5444119,35.9733108 L26.217791,35.9733108 C24.4444119,24.3377482 22.6746507,12.7205756 20.887403,0.993062703 L25.9193134,0.993062703 C27.3568299,10.90352 28.7997731,20.8578761 30.2433194,30.8128255 C30.3168836,30.8181645 30.3910507,30.8235036 30.4652179,30.8288426 C31.8900716,20.9065208 33.3149254,10.9847922 34.7518388,0.978825245 L39.7801313,0.978825245 Z M83.8583403,7.32932479 C83.9916,12.8332888 83.9192418,18.3419986 83.9282866,23.8483356 C83.9343164,27.8360103 83.9294925,31.8242782 83.9294925,35.9133949 L78.8915522,35.9133949 L78.8915522,34.5377005 C78.8915522,26.3422636 78.8969791,18.1468268 78.8825075,9.95138999 C78.8813015,9.09121023 78.8680358,8.20730138 78.6768896,7.37559653 C78.2403284,5.4754891 77.2405791,4.60463125 75.6004597,4.50793518 C73.567194,4.38751001 72.1646507,5.12429847 71.5399582,6.91050623 C71.1612836,7.9937395 70.9490328,9.1879063 70.941797,10.3346149 C70.8917493,18.3562361 70.9146627,26.3778573 70.9140597,34.4000717 L70.9140597,35.9169542 L65.9490806,35.9169542 L65.9490806,0.96162165 L70.3418269,0.96162165 C70.458203,1.68595233 70.5721672,2.39307942 70.7144716,3.2775815 C72.1513851,1.60823954 73.7233672,0.458564797 75.9013493,0.325681854 C80.5895582,0.037966555 83.7455821,2.68732022 83.8583403,7.32932479 Z M55.7327045,18.6682737 C53.6138149,19.1238724 51.8018448,19.4115877 50.056806,19.9205768 C48.5963761,20.3471073 47.6973254,21.4374593 47.6514985,22.9893423 C47.5942149,24.9327553 47.551403,26.8838803 47.6641612,28.8225475 C47.8137015,31.38529 49.5340179,32.6992887 52.1087642,32.3860646 C53.6632597,32.1968251 55.0446985,30.9807089 55.2364478,29.0034819 C55.5596478,25.6707302 55.5753254,22.3089104 55.7327045,18.6682737 Z M9.03392239,4.49724403 C7.09592836,4.49369772 5.65539701,5.2180284 5.43832239,6.88321777 C5.06266269,9.76630304 5.06326567,12.6968465 4.90528358,15.6202712 L12.8423761,15.6202712 C12.9105134,15.4737441 12.9762388,15.3984042 12.9768418,15.3224711 C12.9931224,13.5451617 13.0419642,11.7666659 12.9973433,9.990543 C12.9720179,8.95951375 12.9213672,7.89822989 12.6542448,6.91050623 C12.2128597,5.27497823 10.9309134,4.50140967 9.03392239,4.49724403 Z"></path>
		</g>
	</g>
</g>
</svg>
`

// Textures
const textureLoader = new THREE.TextureLoader();
const normalMap = textureLoader.load('/textures/door/dark gray_NORM.jpg');
normalMap.repeat.set(4, 4);
normalMap.wrapS = THREE.MirroredRepeatWrapping;
normalMap.wrapT = THREE.MirroredRepeatWrapping;

const plasticMatcap = textureLoader.load('/textures/matcaps/plasticy4.png');
/**
 * Base
 */
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()


// const material = new THREE.MeshMatcapMaterial({
// 	matcap: plasticMatcap
// })

const material = new THREE.MeshStandardMaterial({
	color: 0xffffff
});


// svg text object
const svgData = new SVGLoader().parse(svg);
const svgGroup = new THREE.Group();

svgData.paths.forEach((path, i) => {
	const shapes = path.toShapes(true);
	shapes.forEach((shape, j) => {
		const geometry = new THREE.ExtrudeGeometry(shape, {
			depth: 20,
			bevelEnabled: true
		});

		const mesh = new THREE.Mesh(geometry, material);
		mesh.castShadow = true;
		svgGroup.add(mesh);
	})
});

const svgScale = 0.05;
svgGroup.scale.x *= svgScale;
svgGroup.scale.y *= -svgScale;
svgGroup.scale.z *= svgScale;

svgGroup.position.x = -5;
svgGroup.position.y = 1;
scene.add(svgGroup);

// wall object

const wallSize = 13
const wallGeometry = new THREE.BoxGeometry(wallSize, wallSize, 0.5);
const wallMaterial = new THREE.MeshStandardMaterial({color: '#c43328'});
wallMaterial.normalMap = normalMap;
wallMaterial.normalScale.set(0.1, 0.1);

const wallMesh = new THREE.Mesh(wallGeometry, wallMaterial);
wallMesh.position.z = -0.25
wallMesh.receiveShadow = true;
scene.add(wallMesh);

// light fixtures

const lightFixture = new THREE.Group();

const wallArmGeometry = new THREE.BoxGeometry(0.25, .25, 5);
const wallArmMesh = new THREE.Mesh(wallArmGeometry, material);
wallArmMesh.position.y = 7.5;
wallArmMesh.position.z = 2.5;
// lightFixture.add(wallArmMesh);

const horizontalBracketGeometry = new THREE.BoxGeometry(7, 0.25, 0.5);
const horizontalBracketMesh = new THREE.Mesh(horizontalBracketGeometry, material);

horizontalBracketMesh.position.y = 7.5;
horizontalBracketMesh.position.z = 5;

lightFixture.add(horizontalBracketMesh);

const mainEnclosureGeometry = new THREE.CylinderGeometry(1, 1, 3, 20, 3);
const enclosureHoodGeometry = new THREE.CylinderGeometry(1, 2, 1, 20, 20);
const hoodMaterial = new THREE.MeshStandardMaterial({color: 0xffffff});

//// 1
const lightEnclosure1 = new THREE.Group();
const mainEnclosureMesh1 = new THREE.Mesh(mainEnclosureGeometry, material);
mainEnclosureMesh1.scale.set(0.3, 0.3, 0.3);

const encloseureHoodMesh1 = new THREE.Mesh(enclosureHoodGeometry, hoodMaterial);
encloseureHoodMesh1.position.y = -0.5;
encloseureHoodMesh1.scale.set(0.3, 0.3, 0.3);

const pLight1 = new THREE.PointLight(0xffffff, 1, 3);
pLight1.position.y = -0.995;

lightEnclosure1.add(mainEnclosureMesh1);
lightEnclosure1.add(encloseureHoodMesh1);
lightEnclosure1.add(pLight1);
lightEnclosure1.position.y = 7;
lightEnclosure1.position.z = 5;
lightEnclosure1.rotation.x = Math.PI / 5;

lightFixture.add(lightEnclosure1);

/////2
const lightEnclosure2 = new THREE.Group();
const mainEnclosureMesh2 = mainEnclosureMesh1.clone();
const encloseureHoodMesh2 = encloseureHoodMesh1.clone();
const pLight2 = pLight1.clone();

lightEnclosure2.add(mainEnclosureMesh2);
lightEnclosure2.add(encloseureHoodMesh2);
lightEnclosure2.add(pLight2);
lightEnclosure2.up.set(1, 0, 0);
lightEnclosure2.position.x = 3;
lightEnclosure2.position.y = 7;
lightEnclosure2.position.z = 5;
lightEnclosure2.rotation.set(-2.2128, -0.6681, -2.6762)
lightFixture.add(lightEnclosure2);

///// 3
const lightEnclosure3 = new THREE.Group();
const mainEnclosureMesh3 = mainEnclosureMesh1.clone();
const encloseureHoodMesh3 = encloseureHoodMesh1.clone();
const pLight3 = pLight1.clone();

lightEnclosure3.add(mainEnclosureMesh3);
lightEnclosure3.add(encloseureHoodMesh3);
lightEnclosure3.add(pLight3);
lightEnclosure3.position.x = -3;
lightEnclosure3.position.y = 7;
lightEnclosure3.position.z = 5;
lightEnclosure3.rotation.set(-2.2128, 3.8116, -2.6762)
lightFixture.add(lightEnclosure3);

scene.add(lightFixture);

/**
 * Sizes
 */
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight
}

window.addEventListener('resize', () =>
{
	// Update sizes
	sizes.width = window.innerWidth
	sizes.height = window.innerHeight

	// Update camera
	camera.aspect = sizes.width / sizes.height
	camera.updateProjectionMatrix()

	// Update renderer
	renderer.setSize(sizes.width, sizes.height)
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 150;

scene.add(camera);

const ambientLight = new THREE.AmbientLight('#ffffff', 0.05);

scene.add(ambientLight);

const SHADOW_MAP_HEIGHT = 2048;
const SHADOW_MAP_WIDTH = 2048;

// Directional lights
const light1 = new THREE.DirectionalLight('#ffffff', 0);
light1.position.set(0, 7, 5);
light1.castShadow = true;
light1.shadow.mapSize.width = SHADOW_MAP_WIDTH;
light1.shadow.mapSize.height = SHADOW_MAP_HEIGHT;
scene.add(light1);

const light2 = new THREE.DirectionalLight('#ffffff', 0);
light2.position.set(3, 7, 5);
light2.castShadow = true;
light2.shadow.mapSize.width = SHADOW_MAP_WIDTH;
light2.shadow.mapSize.height = SHADOW_MAP_HEIGHT;
scene.add(light2);

const light3 = new THREE.DirectionalLight('#ffffff', 0);
light3.position.set(-3, 7, 5);
light3.castShadow = true;
light3.shadow.mapSize.width = SHADOW_MAP_WIDTH;
light3.shadow.mapSize.height = SHADOW_MAP_HEIGHT;
scene.add(light3);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enabled = false;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
	canvas: canvas
})
renderer.outputColorSpace = THREE.LinearSRGBColorSpace
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

/**
 * Animate
 */
const clock = new THREE.Clock()
let arrivalTime = 0;
let completed = false;

const tick = () =>
{
	const elapsedTime = clock.getElapsedTime();


	if (!completed && camera.position.z > 15) {
		camera.position.z -= 0.5;
	} else {
		if (arrivalTime === 0) {
			arrivalTime = elapsedTime;
			// console.log('new arrival time', arrivalTime);
		} else {
			// console.log(elapsedTime, arrivalTime);
			if (elapsedTime > arrivalTime + 1) {
				light1.intensity = 0.5;
				light2.intensity = 0.5;
				light3.intensity = 0.5;
				ambientLight.intensity = 0.3;
				controls.enabled = true;
				completed = true;
			}
		}
	}

	// Update controls
	controls.update()

	// Render
	renderer.render(scene, camera)

	// Call tick again on the next frame
	window.requestAnimationFrame(tick)
}

tick()

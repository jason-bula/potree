
import * as THREE from "../../libs/three.js/build/three.module.js";

export const ClassificationScheme = {

	other	: {
		0:       { visible: true, name: 'never classified'  , color: [0.5,  0.5,  0.5,  1.0] },
		1:       { visible: true, name: 'unclassified'      , color: [0.5,  0.5,  0.5,  1.0] },
		2:       { visible: true, name: 'ground'            , color: [0.63, 0.32, 0.18, 1.0] },
		3:       { visible: true, name: 'low vegetation'    , color: [0.0,  1.0,  0.0,  1.0] },
		4:       { visible: true, name: 'medium vegetation' , color: [0.0,  0.8,  0.0,  1.0] },
		5:       { visible: true, name: 'high vegetation'   , color: [0.0,  0.6,  0.0,  1.0] },
		6:       { visible: true, name: 'building'          , color: [1.0,  0.66, 0.0,  1.0] },
		7:       { visible: true, name: 'low point(noise)'  , color: [1.0,  0.0,  1.0,  1.0] },
		8:       { visible: true, name: 'key-point'         , color: [1.0,  0.0,  0.0,  1.0] },
		9:       { visible: true, name: 'water'             , color: [0.0,  0.0,  1.0,  1.0] },
		12:      { visible: true, name: 'overlap'           , color: [1.0,  1.0,  0.0,  1.0] },
		DEFAULT: { visible: true, name: 'default'           , color: [0.3,  0.6,  0.6,  0.5] },
	},



	DEFAULT	: {
		0:       { visible: true, name: 'road'  			, color: [0.5, 0.3, 0.5] },
		1:       { visible: true, name: 'sidewalk'      	, color: [1. , 0.1, 0.9] },
		2:       { visible: true, name: 'building'          , color: [0.3, 0.3, 0.3] },
		3:       { visible: true, name: 'wall'    			, color: [0.4, 0.4, 0.6] },
		4:       { visible: true, name: 'fence' 			, color: [0.7, 0.6, 0.6] },
		5:       { visible: true, name: 'pole'   			, color: [0.6, 0.6, 0.6] },
		6:       { visible: true, name: 'traffic ligh'      , color: [1. , 0.7, 0.1] },
		7:       { visible: true, name: 'traffic sign'	    , color: [0.9, 0.9, 0. ] },
		8:       { visible: true, name: 'vegetation'        , color: [0.4, 0.6, 0.1] },
		9:       { visible: true, name: 'terrain'           , color: [0.6, 1. , 0.6] },
		12:      { visible: true, name: 'sky'	            , color: [0.3, 0.5, 0.7] },
		13:      { visible: true, name: 'person'	        , color: [0.9, 0.1, 0.2] },
		14:      { visible: true, name: 'rider'	            , color: [1. , 0. , 0. ] },
		15:      { visible: true, name: 'car'	            , color: [0. , 0. , 0.6] },
		16:      { visible: true, name: 'truck'	            , color: [0. , 0. , 0.3] },
		17:      { visible: true, name: 'bus'	            , color: [0. , 0.2, 0.4] },
		18:      { visible: true, name: 'train'	            , color: [0. , 0.3, 0.4] },
		19:      { visible: true, name: 'motorcycle'	    , color: [0. , 0. , 0.9] },
		20:      { visible: true, name: 'bicycle'	        , color: [0.5, 0. , 0.1] },

		DEFAULT: { visible: true, name: 'default'            , color: [0.3,  0.6,  0.6,  0.5] },
	}
};

Object.defineProperty(ClassificationScheme, 'RANDOM', {
	get: function() { 

		let scheme = {};

		for(let i = 0; i <= 255; i++){
			scheme[i] = new THREE.Vector4(Math.random(), Math.random(), Math.random());
		}

		scheme["DEFAULT"] = new THREE.Vector4(Math.random(), Math.random(), Math.random());

		return scheme;
	}
});
import Vue from 'vue';

import ModelThree from './model-three.vue';
import ModelGltf from './model-gltf.vue';

// alias
const ModelJson = './legacythree2gltf.js model.json --optimize';
/*const ModelJson = Vue.extend(ModelThree, {
  name: 'model-json',
});*/

const components = [
  ModelThree,
  ModelJson,
  ModelGltf,
];

/* eslint-disable no-shadow */
const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ModelThree,
  ModelJson,
  ModelGltf,
};

export {
  install,
  ModelThree,
  ModelJson,
  ModelGltf,
};

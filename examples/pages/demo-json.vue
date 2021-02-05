<template>
    <div>
      <model-three :backgroundAlpha="0" @on-load="onLoad" src="static/models/json/scene.json"></model-three>
      <div class="example-loading" v-show="loading"></div>
    </div>
</template>

<script>
import ModelThree from '../../src/model-three.vue';

const code = `
<template>
    <model-three src="static/models/json/scene.json"></model-three>
</template>

<script>
    import { ModelThree } from 'vue-3d-model'

    export default {
        components: {
            ModelThree
        }
    }
<\/script>
`;

const htmlCode = `
<body>
    <div id="app">
        <model-three src="static/models/json/scene.json"></model-three>
    </div>
    #scripts#
    <script>
        new Vue({
            el: '#app'
        })
    <\/script>
</body>
`;

export default {
  name: 'demo-json',
  data() {
    return {
      code,
      htmlCode,
      loading: true,
    };
  },
  methods: {
    onLoad() {
      this.loading = false;
    },
  },
  components: {
    ModelThree,
  },
};
</script>

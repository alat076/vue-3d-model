<template>
  <demo-block :vue-code="code" :html-code="htmlCode">
    <template slot="preview">
      <div class="example-loading" v-show="loading"></div>
    </template>
  </demo-block>
</template>

<script>
import DemoBlock from '../components/demo-block.vue';

const code = `
<template>
    <model-collada src="static/models/collada/elf.dae"></model-collada>
</template>

<script>
    import { ModelCollada } from 'vue-3d-model'

    export default {
        components: {
            ModelCollada
        }
    }
<\/script>
`;

const htmlCode = `
<body>
    <div id="app">
        <model-collada src="static/models/collada/elf.dae"></model-collada>
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
  name: 'demo-basic',
  data() {
    return {
      code,
      htmlCode,
      loading: true,
      rotation: {
        x: -Math.PI / 2,
        y: 0,
        z: 0,
      },
    };
  },
  methods: {
    onLoad() {
      this.loading = false;
    },
  },
  components: {
    DemoBlock,
  },
};
</script>

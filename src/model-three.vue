<script>
import { ObjectLoader } from 'three';
import { Geometry, Renderer } from 'zincjs';
import mixin from './model-mixin.vue';

export default {
  name: 'model-three',
  mixins: [mixin],
  data() {
    const loader = new ObjectLoader();
    const geometry = new Geometry();
    const renderer = new Renderer();
    loader.setCrossOrigin(this.crossOrigin);
    loader.setRequestHeader(this.requestHeader);

    return {
      loader,
      geometry,
      renderer,
    };
  },
};
</script>

<template>
    <div class="examples-content">
        <ul class="examples-menu">
            <li class="examples-menu-title">Examples</li>
            <li class="examples-menu-item">
                <router-link to="demo-basic">basic</router-link>
            </li>
            <li class="examples-menu-item">
                <router-link to="demo-rotate">rotate</router-link>
            </li>
            <li class="examples-menu-item">
                <router-link to="demo-controls">controls</router-link>
            </li>
            <li class="examples-menu-item">
                <router-link to="demo-background">background</router-link>
            </li>
            <li class="examples-menu-item">
                <router-link to="demo-snapshot">snapshot</router-link>
            </li>
            <li class="examples-menu-title">Events</li>
            <li class="examples-menu-item">
                <router-link to="demo-event">mousemove</router-link>
            </li>
            <li class="examples-menu-title">Model Formats</li>
            <li class="examples-menu-item">
                <router-link to="demo-json">JSON Model (.json)</router-link>
            </li>
            <li class="examples-menu-item">
                <router-link to="demo-gltf">glTF Model (.gltf)</router-link>
            </li>
        </ul>
        <div class="examples-pages">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
  name: 'LeftSide',
};
</script>

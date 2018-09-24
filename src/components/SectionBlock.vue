<template>
    <div class="section-block">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'section-block'
}
</script>

<style>
.section-block {
    width: 100vw;
    height: calc(100vh - 50px);
    min-height: 450px;
    overflow: hidden;
}
</style>

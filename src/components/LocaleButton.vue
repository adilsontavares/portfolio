<template>
    <button class="locale-button button" :style="{ 'background-image': `url(/static/img/locale/${language}.png)` }" />
</template>

<script>
export default {
    name: 'locale-button',
    props: {
        language: {
            required: true,
            type: String
        }
    }
}
</script>

<style scoped>
button.locale-button {
    display: inline-block;
    background-size: contain;
    width: 45px;
    height: 45px;
    border: none;
    border-radius: 22.5px;
    margin-right: 12px;
    padding: 0;
}
</style>

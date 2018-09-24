<template>
    <div>
        <welcome /> 
        <timeline />
    </div>
</template>

<script>
import Welcome from './Welcome'
import Timeline from './Timeline'

export default {
    name: 'home',
    components: {
        Welcome,
        Timeline
    }
}
</script>

<template>
    <div class="section">
        <div class="shape"> </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

#fullpage {
    height: 100vh;
}

.section {
    padding-right: 50px;
    padding-left: 100px;
    position: relative;
}

.shape {
    position: absolute;
    left: 0;
    top:0;
    width: 100px;
    height: 100vh;
    /* Hier die Netze und die Seite der Navigation stylen! */
}
</style>
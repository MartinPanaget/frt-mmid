<template>
    <div class="header section">
        <div class="general">
            <h2>Wahrnehmung von FRT in ver. Bereichen</h2>
        </div>
        <PackedBubbles></PackedBubbles>
    </div>
</template>

<script>
import PackedBubbles from './charts/PackedBubbles.vue';

export default {
  name: 'Awareness',
  components: {
    PackedBubbles
  }
}
</script>

<style scoped>
    h2 {
        /* font-family: 'Avenir Next Codensed'; */
        font-size: 25px;
        font-weight: normal;
        text-align: center;
        padding: 3rem 0 3rem 0;
    }
</style>
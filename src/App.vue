<template>
  <full-page :options="options" id="fullpage">
    <Header></Header>
    <PerceptionFrtAreas></PerceptionFrtAreas>
    <SocialAcceptance></SocialAcceptance>
    <Footer></Footer>
  </full-page>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import PerceptionFrtAreas from './components/PerceptionFrtAreas.vue'
import SocialAcceptance from './components/SocialAcceptance.vue'

export default {
  name: 'App',
  components: {
    Header,
    PerceptionFrtAreas,
    SocialAcceptance,
    Footer
  },
  data() {
    return {
      options: {
        licenseKey: "YOUR_KEY_HERE",
        navigation: true,
        navigationPosition: "left",
        setAllowScrolling: true,
        navigationTooltips: [
          "Startseite",
          "Seite 1",
          "Seite 2",
          "Impressum",
        ],
        showActiveTooltip: true,
        anchors: [
          "Home",
          "page1",
          "page2",
          "Footer"
        ],
        scrollHorizontally: true,
        onLeave: this.leaveSection,
        onSlideLeave: this.leaveSlide
      }
    };
  },
  methods: {
    },
}
</script>

<style>
#fp-nav ul li a span,
.fp-slidesNav ul li a span {
    background: red;
}
</style>

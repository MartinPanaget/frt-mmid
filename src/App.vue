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
import 'fullpage.js/dist/fullpage.css'

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
@font-face {
  font-family: 'Avenir Regular';
  src: url('/fonts/Avenir/AvenirNextLTPro-Regular.otf') format('opentype')
}

@font-face {
  font-family: 'Avenir Bold';
  src: url('/fonts/Avenir/AvenirNextLTPro-Bold.otf') format('opentype')
}

@font-face {
  font-family: 'Avenir Italien';
  src: url('/fonts/Avenir/AvenirNextLTPro-It.otf') format('opentype')
}

#fp-nav ul li a span,
.fp-slidesNav ul li a span {
    background: red;
}

body {
  background-color:#5F5E5E ;
  font-family: 'Avenir','Helvetica', sans-serif;
  color: white;
}
</style>

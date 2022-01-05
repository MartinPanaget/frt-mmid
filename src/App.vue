<template>
  <full-page :options="options" id="fullpage">
    <Header></Header>
    <Awareness></Awareness>
    <SocialAcceptance></SocialAcceptance>
    <Footer></Footer>
  </full-page>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Awareness from './components/Awareness.vue'
import SocialAcceptance from './components/SocialAcceptance.vue'
import 'fullpage.js/dist/fullpage.css'

export default {
  name: 'App',
  components: {
    Header,
    Awareness,
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
  font-family: 'Avenir';
  src: url('/fonts/Avenir/CarroisGothic-Regular.otf') format('truetype')
}

/*@font-face {
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
}*/

body {
  background-color:#5F5E5E ;
  font-family: 'Avenir','Helvetica', sans-serif;
  color: white;
}

#fp-nav ul li a span,
.fp-slidesNav ul li a span {
    background: white;
}

#fp-nav ul li .fp-tooltip{
  border-bottom: 1px solid #00FFFF;
}

#fp-nav ul li .fp-tooltip.fp-left {
    left: 10px;
    padding-left: 10px;
}

.frame{
  width: 80%;
  margin: auto;
}

h1{
  padding-top: 180px;
  font-size: 85px;
  color: #00FFFF;
  text-shadow: rgba(0,255,255,0.9) 0px 0px 9px;
}

.big{
  font-size: 85px;
  color: #00FFFF;
  text-shadow: rgba(0,255,255,0.9) 0px 0px 9px;
}



.fp-tableCell{
  vertical-align: top;
}

/* highlighted edges */
.highlight-span{
  font-size: 22px;
}

.highlight-green{
  width: 25%;
  padding: 2rem;
  position: relative;
  margin: 20px;
  box-sizing: content-box;
  border: 2px solid transparent;

}
.highlight-green::before, .highlight-green::after, .highlight-span::before, .highlight-span::after {
    display: block;
    content: "";
    width: 50px;
    height: 50px;
    position: absolute;
}

.highlight-green::before {
    top: -2px;
    left: -2px;
    border-top: 15px solid #00FFFF;
    border-left: 15px solid #00FFFF;
}
.highlight-green::after {
    top: -2px;
    right: -2px;
    border-top: 15px solid #00FFFF;
    border-right: 15px solid #00FFFF;
}
.highlight-span::before {
    bottom: -2px;
    left: -2px;
    border-bottom: 15px solid #00FFFF;
    border-left: 15px solid #00FFFF;
}
.highlight-span::after {
    bottom: -2px;
    right: -2px;
    border-bottom: 15px solid #00FFFF;
    border-right: 15px solid #00FFFF;
}

</style>

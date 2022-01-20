<template>
  <full-page :options="options" id="fullpage">
    <Header></Header>
    <InfoView></InfoView>
    <Perception></Perception>
    <Awareness></Awareness>
    <SocialAcceptance></SocialAcceptance>
    <Footer></Footer>
  </full-page>
</template>

<script>
import Header from './components/Header.vue'
import InfoView from './components/InfoView.vue'
import Footer from './components/Footer.vue'
import Perception from './components/Perception.vue'
import Awareness from './components/Awareness.vue'
import SocialAcceptance from './components/SocialAcceptance.vue'
import 'fullpage.js/dist/fullpage.css'

// import bg from '/assez'


export default {
  name: 'App',
  components: {
    Header,
    InfoView,
    Perception,
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
          "Seite 3",
          "Seite 4",
          "Impressum",
        ],
        showActiveTooltip: true,
        anchors: [
          "Home",
          "page1",
          "page2",
          "page3",
          "page4",
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

/* background section */
#section1{
  background-image: url("./assets/backgrounds/hg-infodesign-v1.png");
}
#section2{
  background-image: url("./assets/backgrounds/hg-infodesign-v2.png");
}
#section3{
  background-image: url("./assets/backgrounds/hg-infodesign-v3.png");
}
#section4{
  background-image: url("./assets/backgrounds/hg-infodesign-v4.png");
}
#section5{
  background-image: url("./assets/backgrounds/hg-infodesign-v5.png");
}
#section6{
  background-image: url("./assets/backgrounds/hg-infodesign-v6.png");
}
.section{
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
}

/* body */
body {
  font-family: 'Montserrat', sans-serif;
  color: white;
}

/* navigation */
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

h1{
  padding-top: 180px;
  font-size: 85px;
  color: #00FFFF;
  text-shadow: rgba(0,255,255,0.9) 0px 0px 9px;
}

h2 {
      /* font-family: 'Avenir Next Codensed'; */
      font-size: 25px;
      font-weight: normal;
      padding: 3rem 0 3rem 3rem;
      text-transform:uppercase;
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

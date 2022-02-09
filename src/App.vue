<template>
  <div>
    <Navbar></Navbar>
    <full-page :options="options" id="fullpage">
      <Header></Header>
      <InfoView></InfoView>
      <Perception></Perception>
      <Awareness></Awareness>
      <SocialAcceptanceO></SocialAcceptanceO>
      <SocialAcceptanceD></SocialAcceptanceD>
      <Footer></Footer>
    </full-page>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue'
import Header from './components/Header.vue'
import InfoView from './components/InfoView.vue'
import Footer from './components/Footer.vue'
import Perception from './components/Perception.vue'
import Awareness from './components/Awareness.vue'
import SocialAcceptanceO from './components/SocialAcceptanceO.vue'
import SocialAcceptanceD from './components/SocialAcceptanceD.vue'
import 'fullpage.js/dist/fullpage.css'
import { EventBus } from './others/eventBus'

// import bg from '/assez'


export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    InfoView,
    Perception,
    Awareness,
    SocialAcceptanceO,
    SocialAcceptanceD,
    Footer
  },
  data() {
    return {
      options: {
        licenseKey: "YOUR_KEY_HERE",
        navigation: false,
        navigationPosition: "left",
        setAllowScrolling: true,
        navigationTooltips: ['Start', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage','Imprint'],
        showActiveTooltip: true,
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage'],
        menu: '#navbar',
        scrollHorizontally: true,
        onLeave: this.leaveSection,
        onSlideLeave: this.leaveSlide
      }
    };
  },
  mounted(){
    this.onLoad();

  },
  methods: {
    leaveSection(origin, destination) {
			const event = {
				origin: origin.anchor, 
				destination: destination.anchor
			}
			EventBus.$emit('sectionChange', event)
    },
    leaveSlide(section, origin, destination, direction) {
      const event = {
        section: section.anchor,
        origin: origin.index,
        destination: destination.index
      }
			EventBus.$emit('slideChange', event)
			/*eslint no-unused-vars: 0*/
    },
    onLoad(){
      sessionStorage.removeItem('p2-visited');
      sessionStorage.removeItem('p3-visited');
      sessionStorage.removeItem('p4-visited');
      sessionStorage.removeItem('p5-visited');
      sessionStorage.removeItem('p6-visited');
    }
  },
}
</script>

<style>
@import url('https://use.typekit.net/zez5hmn.css');


/* background section */

.section{
  background-repeat: no-repeat;
  background-size: cover;
}
#section1{
  background-image: url("./assets/backgrounds/hg-infodesign-v1.png");
  background-position: center;

}
#section2{
  background-image: url("./assets/backgrounds/hg-infodesign-v2.png");
  background-position: bottom;

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
#section6 {
  background-image: url("./assets/backgrounds/hg-infodesign-v6.png");
}
#section7{
  background-image: url("./assets/backgrounds/hg-infodesign-v7.png");
}


/* body */
body {
  font-family: 'futura-pt-condensed',sans-serif;
  font-weight: 500;
  font-style: normal;
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
  padding-top: 100px;
  line-height: 120px;
  font-size: 130px;
  color: #00FFFF;
  /* text-shadow: rgba(0,255,255,0.9) 0px 0px 9px; */
  margin-bottom: 0px;
}

.sub-title{
  font-size: 61px;
  text-transform:uppercase;
  margin-top: 5px;
  text-shadow: rgba(0,0,0,0.2) 0px 5px 5px;
}

.project-info{
  font-size: 20px;
  text-transform:uppercase;
  margin-top: 80px;
}

h2 {
      /* font-family: 'Avenir Next Codensed'; */
      font-size: 40px;
      font-weight: normal;
      padding: 1rem 0 1rem 3rem;
      text-transform:uppercase;
      text-shadow: 0 0 50px #00FFFF;
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


</style>

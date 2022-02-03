<template>
    <Wrapper id="section6" class="footer">
      <div class="frame">
          <p class="big">IMPRINT<p>
          <div class="footer-content">
            <div class="highlight-green">
              <p class="headline-projectinformation">PROJECTINFORMATIONS:</p> 
              <p class="project-information">
                SEMESTER PROJECT "INTERACTIVE INFORMATIONSDESIGN" <br> 
                LECTURER DIPL.-DES. LOTHAR B. BLUM <br>
                ALISCHA THOMAS, KATHARINA BARTH, LARISSA EIRICH, MARTIN PANAGET <br> 
                DHBW MOSBACH FACULTY OF ONLINE MEDIA <br>
                11.02.2022
              </p>
            </div>
            <div class="highlight-blue">
              <p class="headline-studyinfortion">ABOUT THE STUDY:</p> 
              <p class="study-information">
                 <a href="https://doi.org/10.1177/09636625211001555" target="_blank" rel="external">BETWEEN SECURITY AND CONVENIENCE</a> <br> 
                PUBLIC UNDERSTANDING OF SCIENCE <br>
                2021, VOL. 30(6) 671-690
              </p>
            </div>
            <!-- <div class="highlight-blue">
              <p id="headline-projectinformation">ABOUT THE STUDY:</p>
              <p id="study-information">
                <a href="https://doi.org/10.1177/09636625211001555" target="_blank" rel="external">BETWEEN SECURITY AND CONVENIENCE</a> <br> 
                PUBLIC UNDERSTANDING OF SCIENCE <br>
                2021, VOL. 30(6) 671-690
              </p>
            </div> -->
          </div>
      </div>
    </Wrapper>
    
</template>

<script>
import Wrapper from './Wrapper.vue'
export default {
  components: { Wrapper },
  name: 'Footer'
}
</script>

<style scoped>
/* PROJECTINFORMATION */
  .headline-projectinformation{
    text-align: center;
    font-size: 61px;
    text-transform:uppercase;
    margin-top: 82px;
    margin-bottom: 10px;
    text-shadow: rgba(0,0,0,0.2) 0px 5px 5px;
  }  
  .highlight-green {
    background-image: url('../assets/data/imprint/glow-yellow.svg');
    background-size:contain;
    background-repeat: no-repeat;
  }
  .project-information{
    font-size: 28px;
    padding-left: 110px;
    margin-bottom: 113px;
  }

  /* ABOUT THE STUDY */
  a {
    color: inherit;
  }
  a:hover{
    text-decoration-color: #00FFFF;
  }
  .highlight-blue {
    background-image: url('../assets/data/imprint/glow-blue.svg');
    /* background-position: center; */
    background-size:contain;
    background-repeat: no-repeat;
  }
  .headline-studyinfortion{
    /* text-align: center; */
    padding-left: 140px;
    font-size: 61px;
    text-transform:uppercase;
    margin-top: 112px;
    margin-bottom: 50px;
    text-shadow: rgba(0,0,0,0.2) 0px 5px 5px;
  }  
  .study-information{
    font-size: 28px;
    padding-left: 143px;
  }
  .footer-content {
    display: grid;
    grid-template-columns: 50% 40%;
    grid-column-gap: 0%;
  }

  

</style>
<template>
    <Wrapper id="section6" class="footer">
      <div class="frame">
          <p class="big">IMPRINT<p>
          <div class="footer-content">
            <div class="highlight-green">
              <span class="highlight-span">
              <p class="sub-title">PROJECTINFORMATIONS:</p> 
              SEMESTER PROJECT "INTERACTIVE INFORMATIONSDESIGN" <br> 
              LECTURER DIPL.-DES. LOTHAR B. BLUM <br>
              ALISCHA THOMAS, KATHARINA BARTH, LARISSA EIRICH, MARTIN PANAGET <br> 
              DHBW MOSBACH FACULTY OF ONLINE MEDIA <br>
              11.02.2022
              </span>
            </div>
            <div class="highlight-blue">
              <span class="highlight-span">
              <p class="sub-title">ABOUT THE STUDY:</p>
              <a href="https://doi.org/10.1177/09636625211001555" target="_blank" rel="external">BETWEEN SECURITY AND CONVENIENCE</a> <br> 
              PUBLIC UNDERSTANDING OF SCIENCE <br>
              2021, VOL. 30(6) 671-690
              </span>
            </div>
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
  .highlight-green p{
    text-align: center;
  }
  
  a {
    color: inherit;
  }

  /*.highlight-green {
    background-image: url('../assets/backgrounds/test-v6.svg');
    background-position: center;
    background-size: 900px 200px;
    background-repeat: no-repeat;
  }*/

  .footer-content {
    display: grid;
    grid-template-columns: 55% 30%;
    grid-column-gap: 10%;
  }

  .highlight-blue {
    margin-top: 300px;
  }

  .highlight-blue p{
    text-align: center;
  }
</style>
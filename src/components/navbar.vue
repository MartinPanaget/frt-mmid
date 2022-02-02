<template>
    <div>
        <svg version="1.1" id="navbar" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 221.4 1082" style="enable-background:new 0 0 221.4 1082;" xml:space="preserve">
            <g id="Ebene_2_00000065043653410402934950000010332361222512565633_">
                <g transform="translate(-14.557 40.133)">
                    <g transform="translate(1.154 -52.126)">
                        <!-- nav 6 -->
                        <a href="#sixthPage"><circle data-menuanchor="sixthPage" class="cls-1 nav-item nav6" cx="74.5" cy="559.6" r="18.1"/></a>
                        <!-- nav 7 -->
                        <a href="#seventhPage"><circle data-menuanchor="seventhPage" class="cls-1 nav-item nav7" cx="57.7" cy="656.2" r="18.1"/></a>
                        <path class="st0" d="M187.9,12h-3l-76.7,68.8l19.3,89.9L97,261.1v0.2l-1.2,96.3l-37.3,84.9l-0.1,0.2l15.4,119L-2.6,993.3v9
                            l78.4-440.4L60.4,443.1l37.3-84.9l0.1-0.2l1.2-96.4l30.5-90.5l0.1-0.3l-19.2-89.3L187.9,12z"/>
                    </g>
                </g>
                <g id="Ebene_1-2">
                    <g class="st1">
                        <circle class="st0" cx="44.5" cy="70.9" r="10.4"/>
                        <circle class="st0" cx="25.8" cy="233.4" r="10.4"/>
                        <circle class="st0" cx="49.9" cy="858.4" r="10.4"/>
                        
                        <ellipse transform="matrix(6.652060e-02 -0.9978 0.9978 6.652060e-02 -865.8017 1038.5662)" class="st0" cx="122.2" cy="982" rx="10.4" ry="10.4"/>
                        
                        <ellipse transform="matrix(7.935300e-03 -1 1 7.935300e-03 -970.5533 1002.3333)" class="st0" cx="19.9" cy="990.3" rx="10.4" ry="10.4"/>
                        <circle class="st0" cx="49.9" cy="1037.9" r="10.4"/>
                        
                        <ellipse transform="matrix(1 -8.770254e-03 8.770254e-03 1 -9.318 0.2172)" class="st0" cx="20.1" cy="1062.5" rx="10.4" ry="10.4"/>
                        <polygon class="st0" points="26.1,1081.7 21.1,1063.4 21.1,991.1 48.7,866.1 49.7,1038.6 51.7,1038.6 50.6,857.2 48.6,857 19.1,990.8 19.1,1063.7 24,1081.7 			"/>
                        <polygon class="st0" points="121.6,981.1 50.2,1037.8 0,1073.6 0,1076.1 51.4,1039.4 122.8,982.7 			"/>
                        <polygon class="st0" points="51.7,1038.3 51.7,1038.2 0,954.3 0,958.2 49.8,1039.1 65.3,1081.7 67.4,1081.7 			"/>
                        <polygon class="st0" points="0,890 50.1,858 49.1,856.3 0,887.7 			"/>
                        <polygon class="st0" points="123,981.3 50.5,856.8 0,723.8 0,729.4 48.7,857.6 121.3,982.4 121.4,982.5 194.1,1049.6 195.4,1048.1 			"/>
                        <polygon class="st0" points="0,570.3 47.7,553.1 47,551.2 0,568.2 			"/>
                        <polygon class="st0" points="0,413.4 0,415.5 45.9,431.8 46.5,429.9 			"/>
                        <path class="st0" d="M116.8,158.9L43.2,65.5L24.8,232.3L0,252.8v2.6l25.6-21.1l55.7,113.5L0,299.9v2.3l81.5,48L0,389.3v2.2l85-40.7L27.2,233L116.8,158.9z M44.7,70.6l69.3,88l-87,71.9L44.7,70.6z"/>
                        <polygon class="st0" points="144,1082 187.1,1054.5 186,1052.8 140.3,1082 			"/>
                        <polygon class="st0" points="0,72 108.6,70.2 108.6,68.2 0,70 			"/>
                    </g>
                    <!-- nav 1 -->
                    <a href="#firstPage"><circle data-menuanchor="firstPage" class="cls-1 nav-item nav1 active" cx="102.9" cy="70.3" r="18.1"/></a>
                    <!-- nav 2 -->
                    <a href="#secondPage"><circle data-menuanchor="secondPage" class="cls-1 nav-item nav2" cx="114.2" cy="163.3" r="18.1"/></a>
                    <!-- nav 3 -->
                    <a href="#thirdPage"><circle data-menuanchor="thirdPage" class="cls-1 nav-item nav3" cx="87" cy="251.7" r="18.1"/></a>
                    <!-- nav 4 -->
                    <a href="#fourthPage"><circle data-menuanchor="fourthPage" class="cls-1 nav-item nav4" cx="82.5" cy="349.2" r="18.1"/></a>
                    <!-- nav 5 -->
                    <a href="#fifthPage"><circle data-menuanchor="fifthPage" class="cls-1 nav-item nav5" cx="46.2" cy="433.13" r="18.14"/></a>
                    <!-- Info Button  -->
                    <circle id="more" @mouseover="infoIn" @mouseout="infoOut" class="cls-4 info" cx="191.3" cy="1049.9" r="14.7"/>
                </g>
            </g>
        </svg>
        <div id="info-div" v-show="infoActive">

        </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
   data(){
      return{
          infoActive: false,
      }
  },
  methods:{
    infoIn: function(){
            this.infoActive = true;   
        },
    infoOut: function(){
           this.infoActive = false;    
        }
  }
}


</script>

<style scoped>

#info-div{
    position: fixed;
    bottom: 55px;
    left: 65px;
    z-index: 20;
    width: 200px;
    height: 210px;
    background-color: #5F5E5E;
}

#navbar{
  position: fixed;
  top: 0;
  z-index: 10;
  height: 100%;
  /* width:100px */
}

.st0{fill:#FFFFFF;}
	.st1{opacity:0.1;}
	.st2{fill:#00FFFF;}

.cls-1{
    fill:#fff;
    filter: drop-shadow(0 0 6px rgb(0 255 255 / 0));
    }
.cls-1.active{
    fill:aqua;
    filter: drop-shadow(0 0 6px rgb(0 255 255 / 0.8));
    transition: filter 0.1s ease-in-out;
    
}

.cls-2{opacity:0.1;}
.cls-3{opacity:0.75;}
.cls-4{fill:aqua;}

#more:hover{
    filter: drop-shadow(0 0 6px rgb(0 255 255 / 0.8));
    transition: filter 0.1s ease-in-out;
}
</style>
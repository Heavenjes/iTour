<template>
  <div id="home">
    <div class="row">
      <div class="col-sm">
        <h1 id="hometext">&nbsp;&nbsp;&nbsp;&nbsp;DREAM,</h1>
        <h1 id="hometext">&nbsp;DISCOVER,</h1>
        <h1 id="hometext">EXPERINCE!</h1>
      </div>
      <div class="col-sm">
        <img id="image1" src="@/assets/image4.jpg" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img id="image2" src="@/assets/image5.jpg" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img id="image3" src="@/assets/image2.jpg" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img id="image4" src="@/assets/image3.jpg" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
      </div>
    </div>
  </div>
</template>

<style scoped>
#hometext {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
  font-weight: bold !important;
  font-size: 80px !important;
  margin-left: 200px !important;
}
#home {
  margin-top: 90px !important;
}
#image1 {
  width: 450px !important;
   margin-top: 0% !important;
  -ms-transform: rotate(20deg); /* IE 9 */
  -webkit-transform: rotate(20deg); /* Safari 3-8 */
  transform: rotate(20deg);
}
#image2 {
  width: 330px !important;
  margin-top: 6% !important;
  margin-left:5px;
  -ms-transform: rotate(20deg); /* IE 9 */
  -webkit-transform: rotate(20deg); /* Safari 3-8 */
  transform: rotate(20deg);
}

#image3 {
  width: 300px !important;
  margin-top: 0% !important;
  margin-left:290px;
 -ms-transform: rotate(20deg); /* IE 9 */
 -webkit-transform: rotate(20deg); /* Safari 3-8 */
  transform: rotate(20deg);
}

#image4{
  width: 340px !important;
  margin-top: 0% !important;
  margin-left:161px;
 -ms-transform: rotate(20deg); /* IE 9 */
 -webkit-transform: rotate(20deg); /* Safari 3-8 */
  transform: rotate(20deg);
}
</style>
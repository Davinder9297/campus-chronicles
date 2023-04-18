import React from 'react'

const AboutPCarousal = () => {
  return (
    <div id="carouselExampleControls" className="order-1 carousel slide w-full flex justify-center" data-bs-ride="carousel">
        <div className='max-w-[1410px] justify-center flex w-full'>
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner  ">
      <div className="carousel-item active relative float-left w-full " data-bs-interval="900">
        <img src="/p2.gif" className="block w-full h-[96vh] xsm:h-40" alt="..."/>
      </div>
      <div className="carousel-item  relative float-left w-full" data-bs-interval="900">
        <img src="/p3.gif" className="block w-full h-[96vh] xsm:h-40" alt="..."/>
      </div>
      {/* <div className="carousel-item relative float-left w-full" data-bs-interval="1500">
        <img src="2.jpg" className="block w-full h-[350px] xsm:h-40" alt="..."/>
      </div> */}
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div> 
  </div> 
//   <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
//   <ol class="carousel-indicators">
//     <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//   </ol>
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img class="d-block w-100 h-[96vh] " src="p3.gif" alt="First slide"/>
//     </div>
//     <div class="carousel-item">
//       <img class="d-block w-100 h-[96vh] " src="p2.gif" alt="Second slide"/>
//     </div>
//     {/* <div class="carousel-item">
//       <img class="d-block w-100" src="..." alt="Third slide"/>
//     </div> */}
//   </div>
//   <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="sr-only">Previous</span>
//   </a>
//   <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="sr-only">Next</span>
//   </a>
// </div>
  )
}

export default AboutPCarousal
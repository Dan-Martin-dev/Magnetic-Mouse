
const Home = () => {
  return (
    <div>

      {/* slider container */}
      <div className="slider-container">
        <div className="slider">

          {/* items */}
          <div className="slide" id="slide-1">
            <img src="./images/img-1.jpg" alt="" />
          </div>

          <div className="slide" id="slide-2">
            <img src="./images/img-2.jpg" alt="" />
          </div>

          <div className="slide" id="slide-3">
            <img src="./images/img-3.jpg" alt="" />
          </div>

          <div className="slide" id="slide-4">
            <img src="./images/img-4.jpg" alt="" />
          </div>

          <div className="slide" id="slide-5">
            <img src="./images/img-5.jpg" alt="" />
          </div>

          <div className="slide" id="slide-6">
            <img src="./images/img-6.jpg" alt="" />
          </div>

        </div>
      </div>
       
    </div>
  )
}

export default Home
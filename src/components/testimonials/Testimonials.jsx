import "./testimonial.scss"

export default function Testimonial() {
  return (
    <div className="testimonial" id="testimonial">
      <h1>Testimonials</h1>
      <div className="container">
        <div className="card">
          <div className="top">
            <img src="https://www.stylevore.com/wp-content/uploads/2019/12/b7a34741a097ab465bd37aac83110fe3.jpg" className="left user" alt="professional woman" />
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfYYjpR9PSe6HzwooCkC50psOk0UZwnUFwDt1_39ZuK5a3oVIMi8_k6asdmPG4rQ2NNU&usqp=CAU" className="right" alt="epicodus"/>
          </div>
          <div className="center"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt dolorum, itaque obcaecati quisquam eligendi dicta dolores amet consequatur eaque!</div>
          <div className="bottom">
            <h3>Alex Murphy</h3>
            <h4>Software Instructor and Developer</h4>
          </div>

        </div>
      </div>
      
    </div>
  )
}

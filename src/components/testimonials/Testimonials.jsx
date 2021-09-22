import "./testimonial.scss"

export default function Testimonial() {

  const reviews = [
    {
      id:0,
      name: "Janet Legend",
      title: "Junior Developer",
      img: 
        "https://d5t4h5a9.rocketcdn.me/wp-content/uploads/2020/11/Professional-Headshot-Poses-Blog-Post.jpg",
      icon: 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfYYjpR9PSe6HzwooCkC50psOk0UZwnUFwDt1_39ZuK5a3oVIMi8_k6asdmPG4rQ2NNU&usqp=CAU",
      desc: 
        "lorem ipsum  for the win of course if they didnt want that it would fall apart and this wouldnt be the best example."
    },
    {
      id:1,
      name: "Kylie Shame",
      title: "Veterinarian",
      img: 
        "https://snworksceo.imgix.net/dpn/d4fef529-1504-4442-9fc0-cb32d59969f1.sized-1000x1000.jpg?w=1000",
      icon: 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfYYjpR9PSe6HzwooCkC50psOk0UZwnUFwDt1_39ZuK5a3oVIMi8_k6asdmPG4rQ2NNU&usqp=CAU",
      desc: 
        "He was greate because he was my friend and I never had to do anything  because I knew he was getting paid to do it for me. It was like being a business owener."
    },
    {
      id:2,
      name: "Aron Yessik",
      title: "Carpenter",
      img: 
        "https://www.stlukesonline.org/~/media/stlukes/provider%20images/fearday-aaron-hs.jpg",
      icon: 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfYYjpR9PSe6HzwooCkC50psOk0UZwnUFwDt1_39ZuK5a3oVIMi8_k6asdmPG4rQ2NNU&usqp=CAU",
      desc: 
        "lorem ipsum  for the win of course if they didnt want that it would fall apart and this wouldnt be the best example."
    }
  ]
  return (
    <div className="testimonial" id="testimonial">
      <h1>Testimonials</h1>
      <div className="container">
        {reviews.map((r) => (
        <div className="card">
          <div className="top">
          {/* <img src="" className="left" alt="" /> */}
          <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfYYjpR9PSe6HzwooCkC50psOk0UZwnUFwDt1_39ZuK5a3oVIMi8_k6asdmPG4rQ2NNU&usqp=CAU" className="right" alt="epicodus"/>
          <img src={r.img} className="user" alt="professional man" />
          <img  src={r.icon} className="right" alt="epicodus"/>
          </div>
          <div className="center"> {r.desc}</div>
          <div className="bottom">
            <h3>{r.name}</h3>
            <h4>{r.title}</h4>
          </div>
        </div>
      ))}
      </div>
      
    </div>
  )
}

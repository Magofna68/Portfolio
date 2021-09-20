import "./works.scss"
import {ArrowForwardIosIcon, ArrowBackIosIconNew} from '@material-ui/icons'
import Arrow from "../../public/assets/arrow.png";


export default function Works() {

  const data = [
    {
      id: "4",
      title: "fantastic",
      icon: "https://cdn.mos.cms.futurecdn.net/izXa9hiiSTbnNtwSp2ixKC.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, optio labore? Cupiditate.",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpaperaccess.com%2Fnature-scenes&psig=AOvVaw3QM3tV20q9llLES9cLQKnK&ust=1632083094748000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPiR472tifMCFQAAAAAdAAAAABAD",
    },
    {
      id: "2",
      title: "two",
      icon: "https://cdn.mos.cms.futurecdn.net/izXa9hiiSTbnNtwSp2ixKC.jpg",
      img: "http://massisan.cgsociety.org/art/landscape-vue-visualization-photoshop-environment-design-nature-white-beach-3d-1232045",
    },
    {
      id: "3",
      title: "three",
      icon: "https://cdn.mos.cms.futurecdn.net/izXa9hiiSTbnNtwSp2ixKC.jpg",
      img: "http://imgs.abduzeedo.com/files/articles/beautiful-3d-nature-scenes/1229926_large.jpg",
    },
    {
      id: "1",
      title: "yes",
      icon: "https://cdn.mos.cms.futurecdn.net/izXa9hiiSTbnNtwSp2ixKC.jpg",
      img: "http://imgs.abduzeedo.com/files/articles/beautiful-3d-nature-scenes/1293669_large.jpg",
    },
]

  return (
    <div className="works" id="works">
        <div className="slider">
          {data.map((d) => (
            <div className="container">
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                    {/* <img src="https://cliparting.com/wp-content/uploads/2018/03/cool-pictures-2018-2.jpg" alt="" /> */}
                  </div>
                  <h2>{d.title}</h2>
                  {/* <h2>Title</h2> */}

                  <p>{d.desc}</p>
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, optio labore? Cupiditate.</p> */}
                  <span>Projects</span>
                </div>
              </div>
                <div className="right">
                  <img 
                    src={d.img} 
                    alt="mars rover"
                  />
                </div>
              </div>
            </div>
          ))}
          </div>
          <img 
            className="arrow left"
            src={Arrow} 
            alt="page left"
          />
          <img 
            className="arrow right"
            src={Arrow} 
            alt="page right"
          />
        </div>
  )
}

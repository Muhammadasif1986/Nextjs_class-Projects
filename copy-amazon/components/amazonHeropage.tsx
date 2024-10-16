import Link from "next/link";
export default function Heropage() {
  return (
    <div>
      <div className="hero-section" style={{backgroundImage:"url('/images/hero-image.jpg');"}}>
        <div className="hero-msg Border">
          <p>
            You can Purchase a Millions product by fasting local Deliveries{" "}
            <Link href="">Click her for fast purchase</Link>
          </p>
        </div>
      </div>
      <div className="purchase-sector">
        <div className="box1 box">
          <div className="box-content">
            <h2 className="box-head">Deal in PCs</h2>
            <Link href={"./todays-deals"}><div
              className="box-image" 
               style={{ backgroundImage: "url('/images/image1.jpg');" }}
            ></div></Link>
            <p className="box-foot">shop now</p>
          </div>
        </div>
        <div className="box2 box">
          <div className="box-content">
            <h2 className="box-head">Deal in PCs</h2>
            <div
              className="box-image"
              style={{ backgroundImage: "url('/images/image2.jpg');" }}
            ></div>
            <p className="box-foot">shop now</p>
          </div>
        </div>
        <div className="box3 box">
          <div className="box-content">
            <h2 className="box-head">Deal in PCs</h2>
            <div
              className="box-image"
              style={{ backgroundImage: "url('/images/image3.jpg');" }}
            ></div>
            <p className="box-foot">shop now</p>
          </div>
        </div>
        <div className="box4 box">
          <div className="box-content">
            <h2 className="box-head">Deal in PCs</h2>
            <div
              className="box-image"
              style={{ backgroundImage: "url('/images/image4.jpg');" }}
            ></div>
            <p className="box-foot">shop now</p>
          </div>
        </div>
        <div className="box1 box">
          <div className="box-content">
            <h2 className="box-head">Deal in PCs</h2>
            <div
              className="box-image"
              style={{ backgroundImage: "url('/images/image5.jpg');" }}
            ></div>
            <p className="box-foot">shop now</p>
          </div>
        </div>
        <div className="box2 box">
          <div className="box-content">
            <h2 className="box-head">Deal in PCs</h2>
            <div
              className="box-image"
              style={{ backgroundImage: "url('/images/image6.jpg');" }}
            ></div>
            <p className="box-foot">shop now</p>
          </div>
        </div>
        <div className="box3 box">
          <div className="box-content">
            <h2 className="box-head">Deal in PCs</h2>
            <div
              className="box-image"
              style={{ backgroundImage: "url('/images/image7.jpg');" }}
            ></div>
            <p className="box-foot">shop now</p>
          </div>
        </div>
        <div className="box4 box">
          <div className="box-content">
            <h2 className="box-head">Deal in PCs</h2>
            <div
              className="box-image"
              style={{ backgroundImage: "url('images/image8.jpg');" }}
            ></div>
            <p className="box-foot">shop now</p>
          </div>
        </div>
        <div className="box1 box">
          <div className="box-content">
            <h2 className="box-head">Deal in PCs</h2>
            <div
              className="box-image"
              style={{ backgroundImage: "url('/images/image5.jpg')" }}
            ></div>
            <p className="box-foot">shop now</p>
          </div>
        </div>
        <div className="box2 box">
          <div className="box-content">
            <h2 className="box-head">Deal in PCs</h2>
            <div
              className="box-image"
              style={{ backgroundImage: "url('/images/image2.jpg');" }}
            ></div>
            <p className="box-foot">shop now</p>
          </div>
        </div>
        <div className="box3 box">
          <div className="box-content">
            <h2 className="box-head">Deal in PCs</h2>
            <div
              className="box-image"
              style={{ backgroundImage: "url('/images/image3.jpg');" }}
            ></div>
            <p className="box-foot">shop now</p>
          </div>
        </div>
        <div className="box4 box">
          <div className="box-content">
            <h2 className="box-head">Deal in PCs</h2>
            <div
              className="box-image"
              style={{ backgroundImage: "url('/images/image6.jpg');" }}
            ></div>
            <p className="box-foot">shop now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

const AboutUsComponent = () => {
  return (
    <main className="aboutus-main">
      <div className="aboutus-main-parts">
        <img
          src="/images/about-us/eminrasen.webp"
          width="300"
          height="400"
          alt="emin rasen"
          className="aboutus-emin"
        />
        <address className="aboutus-main-parts">
          <h1>امین راسن</h1>
          <h4>خواننده رپ ترکمن صحرا</h4>
          <p>
            هر انسانی با یک رسالت درونی پا به این دنیا گذاشته تا با رسیدن به
            اهدافش و خلق خواسته هاش تجلی از خداوند باشه، ما بر این باوریم که
            خودمون خالق زندگی خودمونیم. خونواده ی دالی توپار تو هر سن و سبکی
            فعالیت میکنه و تلاشمون بر اینه که هر کدوم از ما تو مسیر خودمون به
            بهترین ورژن و ایده آل خودمون تبدیل بشیم و تو این مسیر با خود
            دیروزمون در رقابتیم.
          </p>
        </address>
      </div>
      <style jsx>{`
        .aboutus-main {
          padding: 50px 100px 300px 100px;
          text-align: right;
          direction: rtl;
          text-align: justify;
          font-size: 16px;
          font-weight: 500;
          line-height: 1.5em;
          background-image: linear-gradient(#84cac8, #f0ece9);
        }

        .aboutus-main img {
          float: right;
          margin: 0 0 50px 30px;
        }

        .aboutus-main h1 {
          display: block;
          padding-top: 13px;
          margin: 0;
        }
        .aboutus-main h4 {
          display: block;
          color: #3a5c5c;
          padding: 0;
          margin-top: 8px;
        }

        .aboutus-main p {
          padding-top: 10px;
        }

        .aboutus-emin {
          border: 1px solid black;
          border-radius: 10px;
        }

        @media (max-width: 760px) {
          .aboutus-main {
            display: block;
            padding: 5px 0px 10px 0px;
          }
          .aboutus-main img {
            display: block;
            float: none;
            margin-top: 50px;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 10px;
          }

          .aboutus-main .aboutus-main-parts {
            padding: 0 10px 20px 10px;
          }
        }
      `}</style>
    </main>
  );
};

export default AboutUsComponent;

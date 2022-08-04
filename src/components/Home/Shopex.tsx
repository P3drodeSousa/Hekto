import LayoutComponent from "../Layout";
import Title from "../utils/Title";
import truck from "../../assets/shopex/truck.svg";
import back from "../../assets/shopex/back.svg";
import prix from "../../assets/shopex/prix.svg";
import support from "../../assets/shopex/support.svg";

type Props = {};

const shopex = [
  {
    title: "24/7 Support",
    img: truck,
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    title: "24/7 Support",
    img: back,
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    title: "24/7 Support",
    img: prix,
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    title: "24/7 Support",
    img: support,
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
];

const Shopex = (props: Props) => {
  return (
    <LayoutComponent>
      <Title title=" What Shopex Offer!" />
      <div className=" grid shopex gap-7 h-80 mb-44">
        {shopex.map(({ title, img, text }) => {
          return (
            <div key={title}>
              <img src={img} alt={title} />
              <h3 className="font-josefin font-semibold text-xl text-navyblue mt-7 mb-5">
                {title}
              </h3>
              <p className="text-center mx-5 font-lato font-bold text-base leading-7 text-shonex">
                {text}
              </p>
            </div>
          );
        })}
      </div>
    </LayoutComponent>
  );
};

export default Shopex;

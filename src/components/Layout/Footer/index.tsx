import LayoutComponent from "..";
import Button from "../../utils/Button";
import SocialFooter from "../Header/Social";
import { footerData } from "./data";
import List from "./List";

type Props = {};

const FooterComponent = (props: Props) => {
  return (
    <footer className="w-full  bg-featuredCard text-homeSliderPara font-lato">
      <LayoutComponent>
        <div className="flex  pt-24 pb-36 gap-24">
          <div className="flex-3">
            <h3 className="text-4xl leading-10 font-josefin font-bold mb-8 text-black">
              Hekto
            </h3>
            <div>
              <input
                type="email"
                className="px-4 py-2 w-56 font-lato leading-5"
                placeholder="Enter Email Address"
              />
              <Button text="Sign Up" />

              <p className="mt-6  text-base font-medium">Contact Info</p>
              <p className="mt-2 text-base font-medium">
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>
          </div>
          {footerData.map(({ title, items }) => {
            return <List title={title} items={items} />;
          })}
        </div>
      </LayoutComponent>
      {/* Sub footer */}
      <div className="bg-footer py-4">
        <LayoutComponent>
          <div className="flex justify-between">
            <p>©Webecy - All Rights Reserved</p>
            <SocialFooter />
          </div>
        </LayoutComponent>
      </div>
    </footer>
  );
};

export default FooterComponent;

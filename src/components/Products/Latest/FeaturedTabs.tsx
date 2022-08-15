import { useState } from "react";
import ProductList from "./ProductList";

// TODO FIX TABS WITH REQUESTs

type Props = {};

function GoodWillHunting() {
  return <ProductList />;
}

const tabs = [
  {
    label: "New Arrival",
    id: "new",
    component: GoodWillHunting,
  },
  {
    label: "Best Seller",
    id: "best",
    component: GoodWillHunting,
  },
  {
    label: "Featured",
    id: "featured",
    component: GoodWillHunting,
  },
  {
    label: "Special Offer",
    id: "special",
    component: GoodWillHunting,
  },
];

function FeaturedTabs({}: Props) {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);
  const { component: Component }: any = tabs.find((x) => x.id === selectedTab);

  return (
    <div className="latest-tabs flex items-center flex-col mt-5 ">
      <nav className="tabs-nav mb-14">
        {tabs.map((tab) => (
          <button
            className={selectedTab === tab.id ? "active" : ""}
            onClick={() => setSelectedTab(tab.id)}
            key={tab.id}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <Component />
    </div>
  );
}

export default FeaturedTabs;

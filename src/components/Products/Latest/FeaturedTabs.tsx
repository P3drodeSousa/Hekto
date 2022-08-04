import { useState } from "react";

// TODO FIX TABS WITH REQUESTs

type Props = {};

function GoodWillHunting() {
  return (
    <div>
      <h1>Good Will Hunting</h1>
      <p style={{ marginTop: 10 }}>
        Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs
        help from a psychologist to find direction in his life.
      </p>
    </div>
  );
}

function PatchAdams() {
  return (
    <div>
      <h1>Patch Adams</h1>
      <p style={{ marginTop: 10 }}>
        The true story of a heroic man, Hunter "Patch" Adams, determined to
        become a medical doctor because he enjoys helping people. He ventured
        where no doctor had ventured before, using humour and pathos.
      </p>
    </div>
  );
}

function DeadPoetsSociety() {
  return (
    <div>
      <h1>Dead Poets Society</h1>
      <p style={{ marginTop: 10 }}>
        English teacher John Keating inspires his students to look at poetry
        with a different perspective of authentic knowledge and feelings.
      </p>
    </div>
  );
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
    component: PatchAdams,
  },
  {
    label: "Featured",
    id: "featured",
    component: DeadPoetsSociety,
  },
  {
    label: "Special Offer",
    id: "special",
    component: DeadPoetsSociety,
  },
];

function FeaturedTabs({}: Props) {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);
  const { component: Component } = tabs.find((x) => x.id === selectedTab);

  return (
    <div className="tabs">
      <nav className="tabs-nav">
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
      <div className="tabs-body">
        <Component />
      </div>
    </div>
  );
}

export default FeaturedTabs;

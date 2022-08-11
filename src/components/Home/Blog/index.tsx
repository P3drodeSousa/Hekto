import LayoutComponent from "../../Layout";
import Title from "../../utils/Title";
import ArticleCard from "./ArticleCard";
import card from "../../../assets/Blog/card.png";

type Props = {};

const BlogSection = (props: Props) => {
  return (
    <LayoutComponent>
      <Title title="Leatest Blog" />
      <div className="flex flex-row flex-wrap w-full gap-20 mb-64">
        <ArticleCard
          author="Saber Ali"
          title="Top essential in 2022"
          description="More off this less hello samlande lied much over tightly circa horse taped mightly"
          date="21 August,2022"
          img={card}
        />
        <ArticleCard
          author="Saber Ali"
          title="Top essential in 2022"
          description="More off this less hello samlande lied much over tightly circa horse taped mightly"
          date="21 August,2022"
          img={card}
        />
        <ArticleCard
          author="Saber Ali"
          title="Top essential in 2022"
          description="More off this less hello samlande lied much over tightly circa horse taped mightly"
          date="21 August,2022"
          img={card}
        />
      </div>
    </LayoutComponent>
  );
};

export default BlogSection;

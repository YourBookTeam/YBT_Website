import TitleBanner from "../TitleBanner";
import StoryPreview from "./StoryPreview";
import promptingHappiness from "../../data/success-stories/promptingHappiness";
import thirst from "../../data/success-stories/thirst";
import underTheFloorboards from "../../data/success-stories/underTheFloorboards";

function SuccessStories() {
  return (
    <>
      <TitleBanner id="success-stories">Success Stories</TitleBanner>
      <div className="flex flex-col gap-10">
        <StoryPreview
          title={promptingHappiness.title}
          author={promptingHappiness.author}
          coverImgSrc={promptingHappiness.frontCoverImg}
          linkTo="/prompting_happiness"
          summary={promptingHappiness.summary}
        />
        <StoryPreview
          title={thirst.title}
          author={thirst.author}
          coverImgSrc={thirst.frontCoverImg}
          linkTo="/thirst"
          summary={thirst.summary}
        />
        <StoryPreview
          title={underTheFloorboards.title}
          author={underTheFloorboards.author}
          coverImgSrc={underTheFloorboards.frontCoverImg}
          linkTo="/under_the_floorboards"
          summary={underTheFloorboards.summary}
        />
      </div>
    </>
  );
}
export default SuccessStories;

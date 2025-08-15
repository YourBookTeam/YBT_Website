import TitleBanner from "../TitleBanner";
import StoryPreview from "./StoryPreview";

function SuccessStories() {
  return (
    <>
      <TitleBanner id="success-stories">Success Stories</TitleBanner>
      <div className="flex flex-col">
        <StoryPreview
          title="Prompting Happiness"
          author="Nimrod Vromen"
          coverImgSrc="src/assets/book-covers/PromptingHappiness.png"
          linkTo="/prompting_happiness"
        >
          You have been searching for a way to be happy and have your life be a
          life worth living, this book is going to give you concrete ways you
          can do that and show you how AI can benefit you rather than be
          something you need to fear or that you don't understand.
          <br />
          <br />
          From the Host of Startup Confidential comes the journey of
          introspection and enlightenment to find true happiness.
        </StoryPreview>
        <StoryPreview
          title="Thirst"
          author="H. W. Terrance"
          coverImgSrc="src/assets/book-covers/Thirst.png"
          linkTo="/thirst"
          flexReverse
        >
          Thirst is a compelling novel that journeys from childhood trauma,
          through the depths of addiction, and to the arduous path of recovery.
          With raw and vivid storytelling, it follows the protagonist’s life
          from turbulent teenage years of substance abuse to the crushing lows
          of adult self-destruction.
          <br />
          <br />A powerful and honest portrayal, Thirst offers hope and
          inspiration—showing that even in life’s bleakest moments, the light of
          recovery and triumph can shine through.
        </StoryPreview>
        <StoryPreview
          title="Under the Floorboards"
          author="John Kiss"
          coverImgSrc="src/assets/book-covers/UnderTheFloorboards.png"
          linkTo="/under_the_floorboards"
        >
          1943. WWII wreaks havoc upon Poland. The Nazis send the entire
          population of the Grodno ghetto to the trains. Except for those who
          managed to escape.
          <br />
          <br />
          A boy flees through dense forests, seeking survival. As Nazi patrols
          close in, the scent of his fear draws the vicious soldier dogs near.
          He must find a place to hide.
          <br />
          <br />
          In his desperation, he reaches a cabin at the forest's edge. Inside, a
          Christian woman catches sight of him through the window and
          immediately understands. She faces an agonizing choice: should she
          open the door and risk her family's safety to save this boy, or turn
          him away to protect her own?
          <br />
          <br />
          In war, acts of kindness become acts of defiance.
        </StoryPreview>
      </div>
    </>
  );
}
export default SuccessStories;

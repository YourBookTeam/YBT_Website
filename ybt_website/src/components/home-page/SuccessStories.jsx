import TitleBanner from "../TitleBanner";
import StoryPreview from "./StoryPreview";

function SuccessStories() {
  return (
    <>
      <TitleBanner>Success Stories</TitleBanner>
      <div className="flex flex-col">
        <StoryPreview
          title="Prompting Happiness"
          author="Nimrod Vromen"
          coverImgSrc="src/assets/book-covers/PromptingHappiness.png"
        >
          In 2022, we met a visionary author with a bold dream—to create a
          self-help book intertwining the pursuit of happiness with the
          transformative power of AI. Initially, we hesitated. AI seemed
          distant, almost otherworldly—something not yet ready to touch the
          human heart.
          <br />
          <br />
          But against our better judgment, we took the meeting. That decision
          unlocked a new realm of possibilities that would transform not just
          this author’s life, but our own perspective on publishing and human
          potential.
        </StoryPreview>
        <StoryPreview
          title="Thirst"
          author="H. W. Terrance"
          coverImgSrc="src/assets/book-covers/Thirst.png"
          flexReverse
        >
          In 2024, we were contacted by the son of an author we had previously
          worked with. His message was simple but striking:
          <br />
          <br />
          “I have a real close friend who’s been sober for over 30 years. His
          story is unlike anything I’ve heard. You need to meet him.”
          <br />
          <br />
          That introduction led us to H.W. Terrence—a man whose journey would
          challenge us, change us, and ultimately shape one of the most powerful
          books we’ve ever taken on.
        </StoryPreview>
        <StoryPreview
          title="Under the Floorboards"
          author="John Kiss"
          coverImgSrc="src/assets/book-covers/UnderTheFloorboards.png"
        >
          Originally published under the title New Day Dawning, John’s story—a
          fictionalized account of Dr. Felix Zandman’s life—deserved far more
          than what it had been given. Though readers could see the flicker of
          something powerful beneath the surface, they felt the writing was too
          simple, too superficial. The novel’s heart was there, but the
          execution needed refinement.
          <br />
          <br />
          Dr. Felix Zandman’s remarkable survival story during the Holocaust
          represents exactly the kind of narrative that benefits from skilled
          editorial guidance—a true account that requires the right fictional
          framework to illuminate its profound humanity without diminishing its
          historical significance.
        </StoryPreview>
      </div>
    </>
  );
}
export default SuccessStories;

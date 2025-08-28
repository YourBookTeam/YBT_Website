import thirst_cover from "../../assets/book-covers/Thirst.png";
import thirst_back from "../../assets/success-stories/thirst/bc-thirst.png";
import prompting_happiness_cover from "../../assets/book-covers/PromptingHappiness.png";
import hw_terrance from "../../assets/success-stories/thirst/hw-terrance.png";
import under_the_floorboards_cover from "../../assets/book-covers/UnderTheFloorboards.png";
import war_sisters_cover from "../../assets/book-covers/war_sisters 2.png";
import marias_promise_cover from "../../assets/book-covers/marias_promise 2.png";
import love_in_berlin_cover from "../../assets/book-covers/love_in_berlin 2.png";

const thirst = {
  title: "Thirst",
  frontCoverImg: thirst_cover,
  backCoverImg: thirst_back,
  author: "H. W. Terrance",
  authorImg: hw_terrance,
  milestones: [
    "Transformed flat self-published manuscript into a vivid, emotionally rich novel",
    "Positioned as a rising voice in AI + emotional wellbeing",
    "Invited to podcasts, conferences, and press",
    "Currently writing two more books with us: Prompting Harmony and Prompting War",
  ],
  challengeText:
    "As a tech-savvy lawyer and founder, Nimrod had insights at the intersection of AI, therapy, and self-improvement but his manuscript lacked clarity and cohesion. It read like a stream of ideas, not a strategic book that could position him as a thought leader.",
  strategicPivotText:
    "We worked closely with Nimrod to transform scattered content into a compelling narrative. Through deep editorial coaching and emotional structuring, we helped him find his voice while aligning the book with his brand and intellectual goals. A custom-designed cover captured the soul-meets-software concept. The result? A book that reads with clarity, conviction, and resonance.",
  results: [
    "Prompting Happiness hit bestseller status and catalyzed Nimrod’s personal brand.",
    "It led to podcast interviews, press features, and new deal flow through audience growth.",
    "He became recognized not just as a startup founder, but a provocative thinker on emotional tech.",
    "He’s now building a Prompting Trilogy with us: Prompting Harmony (in progress) and Prompting War (next).",
  ],
  bookshelfBooks: [
    {
      title: "Love in Berlin",
      img: love_in_berlin_cover,
    },
    {
      title: "Maria's Promise",
      img: marias_promise_cover,
    },
    {
      title: "Prompting Happiness",
      img: prompting_happiness_cover,
    },
    {
      title: "War Sisters",
      img: war_sisters_cover,
    },
  ],
  authorQuote:
    "I am writing two more books with them. That should tell you everything.",
  reviews: [
    {
      name: "Uri Shay",
      text: `“A groundbreaking exploration of true happiness, blending AI and positive psychology with practical strategies for personal and professional success.”`,
    },
    {
      name: "Verified Amazon Review",
      text: `“A refreshing, uplifting read with simple, practical advice for using AI to boost everyday joy.”`,
    },
    {
      name: "Rinat",
      text: `“A life-changing journey of self-discovery and growth, showing how AI can optimize health, productivity, and meaningful connections."`,
    },
  ],
  moreSuccessStories: [
    {
      title: "Under the Floorboards",
      author: "John Kiss",
      img: under_the_floorboards_cover,
      link: "/under_the_floorboards",
    },
    {
      title: "Thirst",
      author: "H. W. Terrance",
      img: thirst_cover,
      link: "/thirst",
    },
  ],
};

export default thirst;

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

function TitleBanner({ children }) {
  return (
    <div className="flex justify-self-center justify-center bg-[url(src/assets/gold-brush-mark.png)] bg-size-[100%_100%] w-150 m-10">
      <div className="text-white text-5xl text-center font-bold p-10 drop-shadow-hero">
        {children}
      </div>
    </div>
  );
}

function Faq() {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "Do I have to write the book myself?",
      answer: "Not at all. Some clients come to us with 60,000 words. Others come with six slides and a voice note. We adapt to you.\n\nWhether you're a strong writer or prefer to speak your ideas aloud, we'll capture your vision and voice and turn it into a book that reads like a New York Times Bestseller."
    },
    {
      question: "What if I already have a draft?",
      answer: "Perfect. Many of our clients start with something half-finished: a manuscript, a Substack archive, internal IP, or long-form speeches. We specialize in transforming raw material into refined books with narrative structure, positioning, and emotional weight.\n\nWe'll meet your draft where it is and elevate it to where it needs to go."
    },
    {
      question: "How long does the process take?",
      answer: "It depends on the tier and your schedule — but most books take 6-8 months from kickoff to launch. That said, we move at the speed of clarity: some founders want a fast, focused sprint; others prefer a slower cadence with space to evolve the message.\n\nEither way, we manage the timeline. You stay in your zone of genius and we'll keep the book moving forward."
    },
    {
      question: "Will the book sound like me?",
      answer: "Yes. Our editorial leads are trained to match your tone, rhythm, intellect, and intent. We spend real time studying your voice, not just what you say, but how you say it: your metaphors, your pacing, your philosophy.\n\nThe result is a book that feels unmistakably yours, with the elegance, clarity, and structure that only YourBookTeam can provide."
    },
    {
      question: "What kind of ROI can I expect?",
      answer: "Our clients have used their books to:\n• Secure speaking engagements, raise capital, land press, and attract top-tier talent\n• Establish thought leadership in new categories or reposition their brand entirely\n• Build new product lines, create content ecosystems, or support major career pivots\n\nWe don't promise overnight virality. We help build long-term authority assets which are books that age well, drive inbound opportunities, and position you as someone worth listening to."
    },
    {
      question: "Why is this a premium investment?",
      answer: "Because this isn't just a book; it's your positioning, your legacy, your leverage. Every project is bespoke: led by senior talent, deeply collaborative, and built to last. You're not buying simple content but building a real asset that earns credibility, opens doors, and elevates how you're seen across your industry.\n\nOur clients don't come to us to publish something fast. They come to create something that matters and moves things."
    },
    {
      question: "Will I retain full ownership and rights to my book?",
      answer: "Absolutely. From day one, you remain the sole owner of your manuscript, intellectual property, and all publishing rights. Our role is to expertly guide, craft, and amplify your message but the book is yours entirely.\n\nThis ensures your complete creative control and freedom to leverage your work as you see fit, now and into the future."
    }
  ];

  return (
    <div className="bg-white">
      <div className="text-center">
        <TitleBanner>FAQ</TitleBanner>
      </div>

      {/* FAQ Content */}
      <div className="w-[1040px] mx-auto px-6 py-16">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-6">
            <div 
              className="flex items-start justify-between mb-4 cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200"
              onClick={() => toggleItem(index)}
            >
              <h3 className="text-3xl font-semibold text-gray-900 pr-4 leading-tight">
                {faq.question}
              </h3>
              <div className="flex items-center mt-2">
                <FaChevronDown className={`transition-transform duration-300 ${expandedItems[index] ? 'rotate-180' : ''}`} />
              </div>
            </div>
            
            <div 
              className={`px-4 pb-4 overflow-hidden transition-all duration-300 ease-in-out ${
                expandedItems[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-2xl text-gray-700 leading-relaxed font-['DM_Sans']">
                {faq.answer.split('\n').map((line, lineIndex) => (
                  <span key={lineIndex}>
                    {line}
                    {lineIndex < faq.answer.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
            
            {index < faqData.length - 1 && (
              <hr className="border-t border-gray-300 w-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;

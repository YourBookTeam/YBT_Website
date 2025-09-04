import Dropdown from "../components/Dropdown";
import Titlebanner from "../components/TitleBanner";
import DiscoveryIcon from "../components/faq_page/discovery_icon.png";
import ReviewIcon from "../components/faq_page/review_icon.png";
import RecommendationIcon from "../components/faq_page/recommendation_icon.png";
import InitiationIcon from "../components/faq_page/initiation_icon.png";
import CollaborationIcon from "../components/faq_page/collaboration_icon.png";

// Custom SVG components for better customization
const UnderlineIcon = ({ className = "", color = "#BBA156" }) => (
  <svg 
    className={className}
    width="854" 
    height="17" 
    viewBox="0 0 854 17" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M360.821 0.281155C382.674 0.182322 403.651 1.69786 425.632 1.73659C452.802 1.7842 480.516 0.408816 507.776 0.705993C534.896 1.00304 562.19 1.41396 589.32 1.91945C616.562 2.42557 643.706 3.02439 670.918 3.70807C679.802 3.93284 688.857 4.16756 697.678 4.41251C716.041 4.91528 734.267 5.4586 752.448 6.08479C768.51 6.71097 784.393 7.00039 800.449 8.42517L800.38 8.42208C802.871 8.55317 805.356 8.69775 807.839 8.86036C815.82 9.40111 823.775 10.0224 831.708 11.342L831.637 11.3344C831.766 11.3469 831.898 11.3592 832.031 11.3713C837.998 11.8757 844.056 12.0059 850.091 12.1887C850.93 12.2126 851.735 12.3073 852.328 12.4575C852.921 12.6079 853.256 12.8005 853.255 12.9995C853.254 13.1987 852.917 13.3917 852.321 13.5415C851.727 13.6909 850.92 13.7841 850.08 13.806C843.979 13.9468 837.901 14.1501 831.702 13.9495C831.62 13.9463 831.539 13.943 831.459 13.9396C831.435 13.9375 831.361 13.9307 831.337 13.9267C824.799 13.1876 818.147 12.9527 811.502 12.8062C810.481 11.9417 809.052 11.255 806.324 10.8831C804.932 10.6933 802.899 10.5715 801.395 10.6828C801.014 10.7111 800.657 10.7489 800.319 10.7933C800.315 10.7931 800.302 10.7927 800.298 10.7923C799.437 10.8713 798.716 10.9884 798.02 11.109C797.011 11.285 796.057 11.4617 794.834 11.4873C792.752 11.5319 790.755 11.8165 788.668 12.1241C787.959 12.2375 787.119 12.3515 786.355 12.4616C779.928 12.4785 773.507 12.5549 767.018 12.6403C764.577 12.5245 762.18 12.4287 760.315 12.4435C758.563 12.4559 756.946 12.6132 755.384 12.8137C754.398 12.8298 753.329 12.8454 752.353 12.8622C745.851 12.9677 739.517 13.0819 733.04 13.1994C727.894 12.9504 722.733 12.7106 715.857 12.5855C712.826 12.5314 710.071 12.4015 707.165 12.2765C703.805 12.1269 700.677 11.9858 697.651 11.9944C696.997 11.9966 696.355 12.0066 695.726 12.0264C693.477 12.097 691.062 11.9735 688.603 11.8505C685.463 11.686 682.253 11.5222 679.278 11.828C677.462 12.0205 675.818 12.2562 674.259 12.4749C671.803 12.8228 669.527 13.1271 667.631 13.1437C664.01 13.1745 660.766 13.4251 657.945 13.6464C654.617 13.9128 651.776 14.1365 649.26 13.8833C648.879 13.8449 648.441 13.794 647.948 13.7362C645.422 13.4316 641.339 12.9444 635.425 13.196C633.353 13.2856 631.393 13.5254 629.461 13.7607C626.639 14.1033 623.907 14.436 621.016 14.2806C620.582 14.2574 620.128 14.1623 619.714 14.0756C619.189 13.9652 618.728 13.8689 618.455 13.9515C617.655 14.1938 616.382 14.461 614.993 14.7518C613.97 14.9654 612.893 15.1919 611.915 15.4299C604.389 15.5528 596.841 15.6708 589.241 15.7823C585.801 15.8335 582.343 15.8834 578.863 15.932C577.077 15.5625 575.279 15.2295 573.37 14.9767C570.878 14.6464 567.625 14.5418 563.437 14.4065C560.374 14.3069 556.792 14.1905 552.608 13.9563C544.901 13.5229 536.95 13.6077 531.875 13.8283C530.799 13.8749 529.718 13.9248 528.562 13.9791C524.172 14.1849 518.709 14.4428 508.311 14.7217C498.486 14.9855 490.129 15.0464 483.839 15.0921C480.629 15.1154 477.969 15.134 475.934 15.1743C472.442 15.2433 468.13 15.3031 463.844 15.3627C457.077 15.456 450.36 15.5491 446.477 15.6803C445.105 15.7271 443.669 15.7853 442.123 15.8474C437.877 16.0197 432.603 16.2272 425.524 16.3403C417.949 16.4586 413.407 16.3616 408.516 16.1592C406.55 16.0769 404.826 15.7625 403.06 15.4376C400.559 14.9765 397.844 14.4951 394.297 14.6302C393.466 14.6617 392.583 14.7341 391.662 14.8101C389.995 14.9497 388.072 15.1008 386.184 15.0288C385.522 15.0037 384.94 14.918 384.371 14.8339C383.745 14.7414 383.133 14.651 382.441 14.6445C379.888 14.6204 377.3 14.6357 375.045 14.6493C372.127 14.6669 369.764 14.6814 368.235 14.6038C365.497 14.4652 362.546 14.5756 359.615 14.6878C357.366 14.7735 354.98 14.8601 352.777 14.8364C346.98 14.7736 338.809 14.9389 330.623 15.2351C329.964 15.2577 329.308 15.2811 328.655 15.3052C325.172 15.4331 322.439 15.2283 318.636 14.9628C316.336 14.7979 313.762 14.6095 310.464 14.4636C308.609 14.381 307.153 14.5456 305.629 14.6965C304.27 14.8358 303.033 14.9645 301.786 14.8807C300.685 14.8067 300.013 14.5129 299.309 14.2335C298.545 13.9227 297.83 13.6303 296.653 13.6792C296.028 13.7052 295.272 13.8454 294.387 14.0119C294.033 14.0777 293.679 14.1475 293.25 14.216C293.272 14.1574 293.278 14.1049 293.278 14.0651C293.281 13.784 292.045 13.6279 290.865 13.4748C290.393 13.4137 289.927 13.3533 289.547 13.2854C288.195 13.0359 285.415 12.9769 283.404 12.9725C282.547 12.9706 281.802 12.8776 280.845 12.7682C280.015 12.6712 279.09 12.5618 277.937 12.4929C277.276 12.4536 276.794 12.3679 276.363 12.2962C276.047 12.2443 275.78 12.1999 275.533 12.1867C275.319 12.1753 275.146 12.2543 274.953 12.3434C274.813 12.4075 274.662 12.4769 274.478 12.5215C274.037 12.6279 273.477 12.6562 273.088 12.6172C272.908 12.5991 272.767 12.5665 272.627 12.534C272.464 12.4961 272.302 12.458 272.08 12.4432C271.071 12.3751 269.979 12.4566 268.936 12.5419C267.778 12.6355 266.602 12.7327 265.216 12.6368C264.788 12.6067 264.336 12.5432 263.904 12.4816C263.451 12.4171 263.015 12.3548 262.648 12.3354C261.084 12.2561 259.623 12.4403 258.337 12.61C257.424 12.7222 256.581 12.8276 255.812 12.8447C254.427 12.876 253.629 13.1069 253.063 13.2778C252.769 13.3662 252.53 13.4389 252.282 13.4586C252.055 13.4489 251.825 13.4379 251.602 13.4262C251.398 13.4057 251.187 13.3846 250.991 13.3878C250.976 13.388 250.961 13.3889 250.946 13.3891C249.653 13.3132 248.409 13.2129 247.191 13.1126C244.368 12.8861 241.689 12.6609 238.745 12.7169C238.133 12.7293 237.479 12.8182 236.827 12.9086C236.023 13.0194 235.236 13.133 234.389 13.1096C232.416 13.0544 230.433 12.8557 228.469 12.6599C225.528 12.3655 222.645 12.0784 219.999 12.297C219.116 12.3689 218.274 12.4992 217.415 12.6306C216.939 12.7039 216.443 12.7777 215.97 12.8417C216.073 12.7112 216.128 12.5882 216.18 12.4734C216.286 12.2368 216.382 12.0344 216.852 11.8684C217.964 11.476 219.2 10.9323 219.071 10.5194C219.035 10.4074 219.068 10.2837 219.103 10.1592C219.192 9.84693 219.279 9.52783 218.27 9.3671C217.588 9.25871 215.821 9.00756 214.7 9.2313C214.454 9.28 214.303 9.38144 214.134 9.49415C213.829 9.69669 213.471 9.93644 212.417 9.9789C212.239 9.98603 212.044 9.99203 211.842 9.99736C211.031 10.0185 210.133 10.0423 209.802 10.2044C209.416 10.391 209.495 10.6114 209.587 10.8684C209.707 11.2032 209.853 11.6007 209.015 12.0671C208.848 12.1593 208.532 12.1877 208.291 12.2092C208.121 12.2244 207.991 12.2366 207.977 12.2648C207.963 12.2972 208.016 12.3657 208.084 12.4523C208.33 12.7581 208.719 13.2915 206.993 13.2932C206.529 13.2936 205.992 13.2622 205.506 13.2339C204.786 13.1922 204.185 13.158 204.114 13.2438C204.084 13.2763 204.063 13.3117 204.046 13.3483C203.49 13.3319 202.927 13.3155 202.357 13.2993C201.615 13.1884 200.607 13.1871 199.34 13.1867C199.031 13.1866 198.702 13.1862 198.358 13.1845C198.117 13.1778 197.875 13.1712 197.631 13.1645C196.772 13.1401 195.896 13.1158 195.004 13.0914C194.091 13.0403 193.175 12.9619 192.18 12.8413C190.156 12.5995 188.464 12.2142 186.741 11.8375C186.005 11.6787 185.321 11.5216 184.604 11.3776C184.883 11.3622 185.133 11.3435 185.326 11.3168C186.637 11.134 187.213 10.7621 187.701 10.4195C188.031 10.1917 188.341 9.97684 188.85 9.84035C189.779 9.59033 189.685 9.2899 189.62 9.06773C189.586 8.95249 189.559 8.85809 189.682 8.803C189.784 8.75889 190.002 8.73934 190.251 8.71926C190.464 8.70174 190.684 8.6834 190.824 8.64828C192.518 8.22167 192.01 7.96323 191.276 7.58702C190.87 7.37955 190.391 7.13614 190.172 6.80897C189.984 6.4629 190.051 6.36244 190.944 6.23152C190.242 6.05619 189.575 5.88125 188.897 5.70636C188.631 5.71561 188.428 5.8207 188.141 5.99566C187.635 6.30812 185.931 6.41246 184.66 6.49499C184.062 6.53311 183.536 6.56653 183.238 6.6132C181.649 6.86152 182.106 7.22295 182.513 7.54093C182.737 7.71595 182.942 7.87795 182.78 8.00065C182.712 8.05313 182.809 8.10619 182.907 8.16029C182.983 8.20211 183.061 8.24464 183.064 8.28793C183.089 8.60239 182.124 8.83006 181.279 9.04198C180.791 9.1633 180.321 9.27976 180.061 9.40374C179.982 9.44152 179.919 9.48015 179.859 9.51767C179.773 9.57246 179.688 9.62467 179.556 9.66909C179.255 9.77025 178.635 9.83624 177.948 9.90821C177.594 9.9451 177.232 9.98368 176.894 10.0296C176.454 10.089 176.294 10.2125 176.125 10.3416C176.006 10.4327 175.881 10.5266 175.651 10.6034C175.235 10.7422 174.393 10.7889 173.604 10.8324C173.262 10.8514 172.923 10.8702 172.653 10.8953C172.542 10.9055 172.488 10.9266 172.476 10.9559C171.207 11.0485 169.981 11.1437 168.778 11.237C162.808 11.7058 157.64 12.1153 149.916 11.7833C148.441 11.7206 146.897 11.7282 145.305 11.7711C140.241 11.635 135.161 11.4969 130.1 11.3572C129.097 11.0721 127.87 10.8321 126.419 10.6431C123.693 10.2881 120.885 10.209 117.576 10.1161C115.126 10.0475 112.404 9.97112 109.229 9.77074C103.892 9.43406 98.4191 9.14942 92.2439 9.00008C86.0925 8.85135 79.0578 8.74189 74.0623 8.70279C71.3298 8.68141 68.4909 8.42753 65.826 8.19138C62.086 7.85921 58.7072 7.56178 56.6876 7.99277C56.0505 8.1305 55.3841 8.36965 54.7708 8.60198C54.3301 8.76745 53.8988 8.92904 53.4796 9.0494C52.3892 9.01201 51.2031 8.97503 50.0893 8.93728C49.6741 8.87743 49.2147 8.81669 48.7245 8.76091C46.7683 8.54896 44.3239 8.40878 41.975 8.66238C40.7795 8.62279 39.6321 8.5834 38.5163 8.54345C36.0219 8.45988 33.6988 8.37524 31.2263 8.29C30.4658 8.2618 29.6239 8.23357 28.8352 8.20519C28.8276 8.20486 28.8201 8.20454 28.8126 8.20421C27.2194 8.14708 25.578 8.08955 23.9848 8.03167C23.3354 8.00697 22.5928 7.98228 21.9332 7.95758C20.1754 7.89491 18.4676 7.83201 16.7222 7.76847C15.8164 7.73467 14.9116 7.70114 13.9696 7.66708C12.4752 7.61184 10.9756 7.5563 9.47544 7.50039C7.05788 7.41001 4.64427 7.31859 2.23276 7.22646C1.83807 7.21123 1.45792 7.16343 1.1809 7.09096C0.90108 7.01837 0.74485 6.92739 0.745118 6.83361C0.745824 6.7398 0.903368 6.64858 1.18417 6.57626C1.46179 6.5042 1.84169 6.45754 2.23597 6.44271C4.64934 6.35309 7.06619 6.26445 9.48534 6.17658C10.9859 6.12225 12.4848 6.06745 13.9793 6.01379C14.9224 5.9807 15.8263 5.94817 16.7318 5.91533C18.4768 5.8536 20.1888 5.79192 21.946 5.73109C22.6056 5.70704 23.3498 5.683 23.9975 5.65895C25.5958 5.60261 27.2425 5.54685 28.8384 5.49128C28.8481 5.49096 28.8577 5.49063 28.8674 5.49031C29.652 5.46297 30.4862 5.43558 31.2423 5.40842C33.7152 5.32571 36.0397 5.24376 38.5363 5.16276C39.78 5.11905 41.1306 5.07631 42.4326 5.03311C43.1493 5.00906 43.8784 4.98489 44.6075 4.96098C45.0097 4.94825 45.4073 4.93564 45.795 4.92296C46.7498 4.89112 47.7261 4.8594 48.7245 4.82782C56.8553 4.56207 65.006 4.30568 73.228 4.06047C82.3454 3.78607 91.531 3.52517 100.655 3.2781C109.82 3.03106 118.948 2.79821 128.097 2.58021C151.272 2.03203 174.512 1.53303 197.737 1.23154C232.809 0.87947 267.72 0.993172 302.648 0.644231C310.948 0.582151 319.563 0.523589 327.804 0.467884C328.755 0.461769 329.713 0.455734 330.679 0.449783C337.98 0.401079 345.496 0.356848 352.913 0.318709C355.442 0.30506 358.216 0.293091 360.821 0.281155Z" 
      fill={color}
    />
  </svg>
);

const ArrowIcon = ({ className = "", color = "#BBA156" }) => (
  <svg 
    className={className}
    width="250" 
    height="142" 
    viewBox="0 0 250 142" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M184.214 0.640625L250 71.23L176.459 141.641H0L62.5032 71.23L0 0.640625L184.214 0.640625Z" 
      fill={color} 
      fillOpacity="0.75"
    />
  </svg>
);

function Faq() {
  const faqData = [
    {
      question: "Do I have to write the book myself?",
      answer:
        "Not at all. Some clients come to us with 60,000 words. Others come with six slides and a voice note. We adapt to you.\n\nWhether you're a strong writer or prefer to speak your ideas aloud, we'll capture your vision and voice and turn it into a book that reads like a New York Times Bestseller.",
    },
    {
      question: "What if I already have a draft?",
      answer:
        "Perfect. Many of our clients start with something half-finished: a manuscript, a Substack archive, internal IP, or long-form speeches. We specialize in transforming raw material into refined books with narrative structure, positioning, and emotional weight.\n\nWe'll meet your draft where it is and elevate it to where it needs to go.",
    },
    {
      question: "How long does the process take?",
      answer:
        "It depends on the tier and your schedule — but most books take 6-8 months from kickoff to launch. That said, we move at the speed of clarity: some founders want a fast, focused sprint; others prefer a slower cadence with space to evolve the message.\n\nEither way, we manage the timeline. You stay in your zone of genius and we'll keep the book moving forward.",
    },
    {
      question: "Will the book sound like me?",
      answer:
        "Yes. Our editorial leads are trained to match your tone, rhythm, intellect, and intent. We spend real time studying your voice, not just what you say, but how you say it: your metaphors, your pacing, your philosophy.\n\nThe result is a book that feels unmistakably yours, with the elegance, clarity, and structure that only YourBookTeam can provide.",
    },
    {
      question: "What kind of ROI can I expect?",
      answer:
        "Our clients have used their books to:\n• Secure speaking engagements, raise capital, land press, and attract top-tier talent\n• Establish thought leadership in new categories or reposition their brand entirely\n• Build new product lines, create content ecosystems, or support major career pivots\n\nWe don't promise overnight virality. We help build long-term authority assets which are books that age well, drive inbound opportunities, and position you as someone worth listening to.",
    },
    {
      question: "Why is this a premium investment?",
      answer:
        "Because this isn't just a book; it's your positioning, your legacy, your leverage. Every project is bespoke: led by senior talent, deeply collaborative, and built to last. You're not buying simple content but building a real asset that earns credibility, opens doors, and elevates how you're seen across your industry.\n\nOur clients don't come to us to publish something fast. They come to create something that matters and moves things.",
    },
    {
      question: "Will I retain full ownership and rights to my book?",
      answer:
        "Absolutely. From day one, you remain the sole owner of your manuscript, intellectual property, and all publishing rights. Our role is to expertly guide, craft, and amplify your message but the book is yours entirely.\n\nThis ensures your complete creative control and freedom to leverage your work as you see fit, now and into the future.",
    },
  ];

  return (
    <div className="font-primary text-lg flex flex-col items-center justify-center">
      <div className="text-center">
        <Titlebanner>FAQ</Titlebanner>
      </div>

      {/* FAQ Content */}
      <div className="termsContainer xl:py-7 w-10/12">
        {faqData.map((faq, index) => (
          <Dropdown
            key={index}
            question={faq.question}
            answer={faq.answer.split("\n").map((line, lineIndex) => (
              <span key={lineIndex}>
                {line}
                {lineIndex < faq.answer.split("\n").length - 1 && <br />}
              </span>
            ))}
          />
        ))}
      </div>

      {/* Our Signature Process Section */}
      <div className="w-10/12 max-w-6xl mt-16 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4">Our Signature Process</h2>
          <p className="text-xl text-gray-600 mb-6">Your Personalized Path to Becoming a Recognized Author</p>
          <div className="flex justify-center">
            <UnderlineIcon />
          </div>
        </div>
        
        <p className="text-lg text-gray-700 text-left max-w-4xl mx-auto">
          At the heart of every successful book is a clear plan and a trusted guide. Here's how we take you from vision to published authority with care, clarity, and an unwavering focus on your unique brand and goals.
        </p>
        
        {/* Arrow Icons */}
        <div className="flex justify-center items-center mb-12">
          <div className="relative">
            <ArrowIcon className="w-60 h-60 -mr-5 opacity-75" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <img src={DiscoveryIcon} alt="Discovery" className="w-15 h-15 mb-3" />
              <span className="text-m font-semibold">Discovery</span>
            </div>
          </div>
          <div className="relative">
            <ArrowIcon className="w-60 h-60 -mr-5" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <img src={ReviewIcon} alt="Review" className="w-15 h-15 mb-3" />
              <span className="text-m font-semibold">Review</span>
            </div>
          </div>
          <div className="relative">
            <ArrowIcon className="w-60 h-60 -mr-5 opacity-75" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <img src={RecommendationIcon} alt="Recommendation" className="w-15 h-15 mb-3" />
              <span className="text-m font-semibold">Recommendation</span>
            </div>
          </div>
          <div className="relative">
            <ArrowIcon className="w-60 h-60 -mr-5" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <img src={InitiationIcon} alt="Initiation" className="w-15 h-15 mb-3" />
              <span className="text-m font-semibold">Initiation</span>
            </div>
          </div>
          <div className="relative">
            <ArrowIcon className="w-60 h-60 -mr-5 opacity-75" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <img src={CollaborationIcon} alt="Collaboration" className="w-15 h-15 mb-3" />
              <span className="text-m font-semibold">Collaboration</span>
            </div>
          </div>
        </div>

        {/* Five-Step Process Section */}
        <div className="mt-16 mb-16">
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="flex items-start gap-8">
              <div className="text-7xl font-black text-[#BBA156] w-20 text-center">1.</div>
              <div className="flex-1">
                <h3 className="text-3xl font-black mb-2">Discovery Call</h3>
                <div className="mb-3">
                  <span className="text-lg text-gray-700 border-b-4 border-[#BBA156] pb-1">Understanding You and Your Vision</span>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed font-dm-sans font-normal">
                  Our journey begins with a one-on-one conversation where we dive deep into your brand, business ambitions, and book idea. We ask thoughtful questions to understand your story, your audience, and what success looks like for you. This call is about listening carefully and tailoring a path that fits your vision perfectly.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-8">
              <div className="text-7xl font-black text-[#BBA156] w-20 text-center">2.</div>
              <div className="flex-1">
                <h3 className="text-3xl font-black mb-2">Review Stage</h3>
                <div className="mb-3">
                  <span className="text-lg text-gray-700 border-b-4 border-[#BBA156] pb-1">Strategic Content and Audience Alignment</span>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed font-dm-sans font-normal">
                  Next, we take about three days to analyze your manuscript, ideas, or outline. We assess the content's alignment with your target audience and overall market positioning. This thoughtful review helps us craft a strategic, personalized solution — ensuring your book will stand out, connect, and convert.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-8">
              <div className="text-7xl font-black text-[#BBA156] w-20 text-center">3.</div>
              <div className="flex-1">
                <h3 className="text-3xl font-black mb-2">Recommendation Call</h3>
                <div className="mb-3">
                  <span className="text-lg text-gray-700 border-b-4 border-[#BBA156] pb-1">Your Custom Solution Unveiled</span>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed font-dm-sans font-normal">
                  In this call, we present the publishing tier and tailored elements we believe will maximize your impact. We walk you through your personalized roadmap, our solution designed specifically to build your authority and deliver measurable ROI. You have full control to select the services and investment level that fit your goals.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-8">
              <div className="text-7xl font-black text-[#BBA156] w-20 text-center">4.</div>
              <div className="flex-1">
                <h3 className="text-3xl font-black mb-2">Initiation Call</h3>
                <div className="mb-3">
                  <span className="text-lg text-gray-700 border-b-4 border-[#BBA156] pb-1">Launching Your Publishing Journey</span>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed font-dm-sans font-normal">
                  Once your package is finalized, we kick off with a detailed initiation call. Here, we map out the next 30 days, setting clear milestones and deliverables. You'll know exactly what to expect as we start shaping your book — from concept refinement to first drafts.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex items-start gap-8">
              <div className="text-7xl font-black text-[#BBA156] w-20 text-center">5.</div>
              <div className="flex-1">
                <h3 className="text-3xl font-black mb-2">Monthly Updates and Collaboration</h3>
                <div className="mb-3">
                  <span className="text-lg text-gray-700 border-b-4 border-[#BBA156] pb-1">You're Never in the Dark</span>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed font-dm-sans font-normal">
                  Each month, you receive detailed progress reports and personalized updates. Our team stays closely connected to your vision, keeping you informed and engaged while we craft your book with precision and care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;

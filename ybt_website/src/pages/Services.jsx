import { Link } from 'react-router-dom';
import TitleBanner from "../components/TitleBanner";
import { FaCircleCheck, FaPencil, FaBookOpen, FaImages, FaBullhorn, FaBookAtlas } from "react-icons/fa6";
import { TbHeadphonesFilled } from "react-icons/tb";

function Button({ to, children, className, tall, black, style }) {
  let baseClassName =
    "flex items-center justify-center font-semibold transition-colors duration-200 drop-shadow-hero relative";
  
  baseClassName = tall
    ? baseClassName + " " + "p-4"
    : baseClassName + " " + "px-7 py-2";
  
  baseClassName = black
    ? baseClassName + " " + "bg-black hover:bg-gray text-white"
    : baseClassName + " " + "bg-gold hover:bg-lighter-gold text-white";
  
  return (
    <Link to={to} className={baseClassName + " " + (className || "")} style={style}>
      {children}
    </Link>
  );
}

export default function Services() {
  const tiers = [
    {
      title: "TIER 1",
      subtitle: "The Foundation",
      description: "For emerging experts laying the groundwork.",
      deliverables: [
        "Strategic Book Blueprint aligned with your personal brand + business goals",
        "Line-level proofreading & polish for your completed manuscript", 
        "Customized Publishing Roadmap — what to do, when, and with whom",
        "Expert advisement on strategic marketing partners",
        "One 1:1 publishing strategy session with a senior editor"
      ],
      bestFor: "Professionals with a near-finished manuscript who want clarity, polish, and a smart go-to-market plan.",
      price: "$10,000",
      minHeight: "600px"
    },
    {
      title: "TIER 2", 
      subtitle: "The Signature",
      description: "For serious leaders ready to build authority, attract opportunity, and turn their message into a magnet.",
      deliverables: [
        "Book strategy + full editorial development",
        "Deep content refinement: structure, flow, message", 
        "Professional cover + interior design",
        "Done-for-you publishing setup: ISBN, metadata, backend",
        "Strategic marketing roadmap + distribution guidance",
        "Consult on audience growth & business integration",
        "Your dedicated VIP support team: editor, designer, publishing advisor"
      ],
      bestFor: "Founders, experts, and execs with a strong message who want to own the voice but delegate the execution.",
      price: "$30,000",
      minHeight: "800px"
    },
    {
      title: "TIER 3",
      subtitle: "The Legacy", 
      description: "For leaders who want to be remembered, referenced, and repaid in clients, credibility, and influence.",
      deliverables: [
        "Full done-for-you ghostwriting by senior editorial leads",
        "Strategic thought leadership positioning tied to your long-term vision",
        "Complete creative direction: narrative, tone, packaging, and voice",
        "Elite cover design + publishing execution", 
        "6-month private marketing campaign: influencer outreach, launch assets, content strategy",
        "Author brand foundation: visual direction, positioning, website audit",
        "PR coaching + pitch prep to help unlock stages, media, and deal flow",
        "Full audiobook creation — voice talent, production, and global distribution",
        "Biweekly executive briefings — we run the process, you stay informed"
      ],
      bestFor: "Visionaries who see the book as a launchpad for media, partnerships, speaking, or legacy.",
      price: "$100,000",
      minHeight: "1100px"
    }
  ];

  const premiumAddOn = {
    title: "Premium Add-On:",
    subtitle: "Audiobook Creation",
    description: "Want to reach a wider audience and extend your influence into audio? We offer full audiobook production — from voice talent to editing to distribution.",
    deliverables: [
      "Professional narration (choose your voice or ours)",
      "Studio-quality production + sound engineering",
      "Distribution setup for Audible, iTunes, Spotify, and more",
      "Option to narrate it yourself — with expert coaching"
    ],
    price: "Starts at $15,000"
  };

  const tierColors = ["bg-lighter-gold", "bg-light-gold", "bg-gold"];

  const serviceSections = [
    {
      title: "Writing",
      content: "Your dedicated Lead Editor works closely with you from the very beginning to create a detailed book blueprint that aligns with your vision and goals. Whether you prefer to write the manuscript yourself or rely on us, we conduct insightful interviews designed to capture your expertise and message. From there, we craft your content in your authentic voice, ensuring each chapter truly reflects your unique perspective.",
      icon: FaPencil
    },
    {
      title: "Editing",
      content: "We begin with developmental editing to strengthen your manuscript's structure, flow, and overall impact. Collaborating closely, we refine your content by adding or removing sections as needed, then polish the prose to make every line clear, engaging, and memorable—all while preserving your distinct style.",
      icon: FaBookOpen
    },
    {
      title: "Graphic Design",
      content: "Our design team translates your vision and the spirit of your book into compelling cover concepts. Through an iterative process, we gather your feedback to refine the design until it perfectly embodies your brand identity and resonates with your target audience, ensuring your book makes a powerful first impression.",
      icon: FaImages
    },
    {
      title: "Marketing",
      content: "We craft a tailored marketing strategy that supports your goals, starting with thorough market research. Our comprehensive campaigns cover everything from social media and media placements to podcast features, speaking engagements, and influencer collaborations, amplifying your message and expanding your platform.",
      icon: FaBullhorn
    },
    {
      title: "Audiobook Production",
      content: "We carefully select narrators whose voices best match your book's tone and style. Overseeing the entire production process—from recording and direction to editing and mastering—we deliver a professional audiobook ready for distribution on all major platforms, helping you reach the growing audio audience worldwide.",
      icon: TbHeadphonesFilled
    },
    {
      title: "Publishing and Distribution",
      content: "Handling every technical detail, we manage ISBN registration, formatting, and submission. Your book is then distributed globally through major retailers like Amazon, Barnes & Noble, Kobo, and over 40,000 other outlets, maximizing your reach and impact across multiple channels.",
      icon: FaBookAtlas
    }
  ];

  return (
    <div>
      <TitleBanner>Services</TitleBanner>
      
      <div className="py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto justify-center items-start">
          {tiers.map((tier, index) => (
            <div key={index} className="flex flex-col">
              
              <div 
                className={`flex flex-col ${tierColors[index]}`}
                style={{ 
                  width: "320px",
                  minHeight: tier.minHeight
                }}
              >
                <div className="p-8 flex-1 flex flex-col">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2 tracking-wide font-primary">{tier.title}</h3>
                    <h4 className="text-3xl font-bold mb-4 font-primary">{tier.subtitle}</h4>
                    <p className="font-secondary font-bold">{tier.description}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h5 className="font-bold mb-4 font-primary">Deliverables</h5>
                    <ul className="space-y-3">
                      {tier.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-10 h-10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <FaCircleCheck size={33} color="white" />
                          </div>
                          <span className="font-secondary">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              
              <div className="mt-4 w-80">
                <div 
                  className={`p-6 ${tierColors[index]}`}
                >
                  <h6 className="font-bold mb-3 font-primary">Best for:</h6>
                  <p className="mb-4 font-secondary">{tier.bestFor}</p>
                  <p className="font-bold text-lg font-primary">Starts at {tier.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className="max-w-7xl mx-auto mt-16 px-4">
          <div className="text-center mb-12">
            <div className="w-full max-w-6xl mx-auto">
              <div 
                className="mb-6 mx-auto bg-gold"
                style={{ 
                  width: "702px", 
                  height: "3px"
                }}
              ></div>
              <p className="text-2xl leading-relaxed mb-6 max-w-5xl mx-auto font-secondary">
                Every author and book is unique. In your Discovery Call, we'll tailor a custom 
                package, mixing elements from any tier, to fit your goals, maximize value and ROI, 
                and align perfectly with your brand.
              </p>
              <div 
                className="mb-8 mx-auto bg-gold"
                style={{ 
                  width: "702px", 
                  height: "3px"
                }}
              ></div>
            </div>
            
            <div className="flex justify-center">
              <Button 
                to="/contact"
                style={{
                  width: "380px",
                  height: "72px"
                }}
              >
                Book a free discovery call
              </Button>
            </div>
          </div>

          
          <div className="flex items-center justify-center gap-8 mt-16">
            <div 
              className="p-8 bg-lightest-gold"
              style={{ 
                width: "700px",
                height: "530px"
              }}
            >
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold mb-2 font-primary">{premiumAddOn.title}</h3>
                <h4 className="text-2xl font-bold mb-4 font-primary">{premiumAddOn.subtitle}</h4>
                <div 
                  className="mx-auto bg-gold"
                  style={{ 
                    width: "630px", 
                    height: "3px"
                  }}
                ></div>
              </div>
              
              <p className="mb-6 leading-relaxed font-secondary font-bold">
                {premiumAddOn.description}
              </p>

              <div className="mb-6">
                <h5 className="font-bold mb-4 text-lg font-primary">Deliverables</h5>
                <ul className="space-y-3">
                  {premiumAddOn.deliverables.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-10 h-10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <FaCircleCheck size={33} color="white" />
                      </div>
                      <span className="font-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-2xl font-bold mt-2 font-primary">{premiumAddOn.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <svg width="72" height="72" viewBox="0 0 56 56" className="fill-current text-gold ml-4">
                <path d="M26 26V10h4v16h16v4H30v16h-4V30H10v-4h16z"/>
              </svg>
              
              <div style={{ width: "330px", height: "270px" }}>
                <TbHeadphonesFilled size={270} color="#BBA156" />
              </div>
            </div>
          </div>

          
          <div className="flex items-center justify-center gap-8 mt-16">
            <div 
              className="bg-gold"
              style={{ 
                width: "332px", 
                height: "3px"
              }}
            ></div>
            <h2 
              className="text-center font-bold font-primary"
              style={{ 
                fontSize: "65px",
                width: "452px",
                height: "121px",
                lineHeight: "121px"
              }}
            >
              What We Do
            </h2>
            <div 
              className="bg-gold"
              style={{ 
                width: "332px", 
                height: "3px"
              }}
            ></div>
          </div>

          
          <div className="max-w-7xl mx-auto mt-8 space-y-2">
            {serviceSections.map((service, index) => (
              <div key={index} className="flex justify-center items-center gap-6">
                
                <div className="flex-shrink-0 w-32 h-32 flex items-center justify-center">
                  <service.icon size={150} color="#BBA156" />
                </div>

                
                <div className="w-full max-w-4xl p-8 flex flex-col">
                  <h2 className="font-bold text-3xl mb-6 font-primary">{service.title}</h2>
                  <p className="leading-relaxed text-lg font-secondary">
                    {service.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} //should be finalized
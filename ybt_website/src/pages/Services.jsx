import { Link } from 'react-router-dom';

function TitleBanner({ children }) {
  return (
    <div className="flex justify-self-center justify-center bg-[url(src/assets/gold-brush-mark.png)] bg-size-[100%_100%] w-150 m-10">
      <div className="text-white text-5xl text-center font-bold p-10 drop-shadow-hero">
        {children}
      </div>
    </div>
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
      price: "$10,000"
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
      price: "$30,000"
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
      price: "$100,000"
    }
  ];

  const tierColors = ["#DDD0AB", "#CCB980", "#BBA156"];

  const serviceSections = [
    {
      title: "Writing",
      content: "Your dedicated Lead Editor works closely with you from the very beginning to create a detailed book blueprint that aligns with your vision and goals. Whether you prefer to write the manuscript yourself or rely on us, we conduct insightful interviews designed to capture your expertise and message. From there, we craft your content in your authentic voice, ensuring each chapter truly reflects your unique perspective.",
      icon: "M100.4 417.2C104.5 402.6 112.2 389.3 123 378.5L304.2 197.3L338.1 163.4C354.7 180 389.4 214.7 442.1 267.4L476 301.3L442.1 335.2L260.9 516.4C250.2 527.1 236.8 534.9 222.2 539L94.4 574.6C86.1 576.9 77.1 574.6 71 568.4C64.9 562.2 62.6 553.3 64.9 545L100.4 417.2zM156 413.5C151.6 418.2 148.4 423.9 146.7 430.1L122.6 517L209.5 492.9C215.9 491.1 221.7 487.8 226.5 483.2L155.9 413.5zM510 267.4C493.4 250.8 458.7 216.1 406 163.4L372 129.5C398.5 103 413.4 88.1 416.9 84.6C430.4 71 448.8 63.4 468 63.4C487.2 63.4 505.6 71 519.1 84.6L554.8 120.3C568.4 133.9 576 152.3 576 171.4C576 190.5 568.4 209 554.8 222.5C551.3 226 536.4 240.9 509.9 267.4z"
    },
    {
      title: "Editing",
      content: "We begin with developmental editing to strengthen your manuscript's structure, flow, and overall impact. Collaborating closely, we refine your content by adding or removing sections as needed, then polish the prose to make every line clear, engaging, and memorable—all while preserving your distinct style.",
      icon: "M320 205.3L320 514.6L320.5 514.4C375.1 491.7 433.7 480 492.8 480L512 480L512 160L492.8 160C450.6 160 408.7 168.4 369.7 184.6C352.9 191.6 336.3 198.5 320 205.3zM294.9 125.5L320 136L345.1 125.5C391.9 106 442.1 96 492.8 96L528 96C554.5 96 576 117.5 576 144L576 496C576 522.5 554.5 544 528 544L492.8 544C442.1 544 391.9 554 345.1 573.5L332.3 578.8C324.4 582.1 315.6 582.1 307.7 578.8L294.9 573.5C248.1 554 197.9 544 147.2 544L112 544C85.5 544 64 522.5 64 496L64 144C64 117.5 85.5 96 112 96L147.2 96C197.9 96 248.1 106 294.9 125.5z"
    },
    {
      title: "Graphic Design",
      content: "Our design team translates your vision and the spirit of your book into compelling cover concepts. Through an iterative process, we gather your feedback to refine the design until it perfectly embodies your brand identity and resonates with your target audience, ensuring your book makes a powerful first impression.",
      icon: "M128 160C128 124.7 156.7 96 192 96L512 96C547.3 96 576 124.7 576 160L576 416C576 451.3 547.3 480 512 480L192 480C156.7 480 128 451.3 128 416L128 160zM56 192C69.3 192 80 202.7 80 216L80 512C80 520.8 87.2 528 96 528L456 528C469.3 528 480 538.7 480 552C480 565.3 469.3 576 456 576L96 576C60.7 576 32 547.3 32 512L32 216C32 202.7 42.7 192 56 192zM224 224C241.7 224 256 209.7 256 192C256 174.3 241.7 160 224 160C206.3 160 192 174.3 192 192C192 209.7 206.3 224 224 224zM420.5 235.5C416.1 228.4 408.4 224 400 224C391.6 224 383.9 228.4 379.5 235.5L323.2 327.6L298.7 297C294.1 291.3 287.3 288 280 288C272.7 288 265.8 291.3 261.3 297L197.3 377C191.5 384.2 190.4 394.1 194.4 402.4C198.4 410.7 206.8 416 216 416L488 416C496.7 416 504.7 411.3 508.9 403.7C513.1 396.1 513 386.9 508.4 379.4L420.4 235.4z"
    },
    {
      title: "Marketing",
      content: "We craft a tailored marketing strategy that supports your goals, starting with thorough market research. Our comprehensive campaigns cover everything from social media and media placements to podcast features, speaking engagements, and influencer collaborations, amplifying your message and expanding your platform.",
      icon: "M525.2 82.9C536.7 88 544 99.4 544 112L544 528C544 540.6 536.7 552 525.2 557.1C513.7 562.2 500.4 560.3 490.9 552L444.3 511.3C400.7 473.2 345.6 451 287.9 448.3L287.9 544C287.9 561.7 273.6 576 255.9 576L223.9 576C206.2 576 191.9 561.7 191.9 544L191.9 448C121.3 448 64 390.7 64 320C64 249.3 121.3 192 192 192L276.5 192C338.3 191.8 397.9 169.3 444.4 128.7L491 88C500.4 79.7 513.9 77.8 525.3 82.9zM288 384L288 384.2C358.3 386.9 425.8 412.7 480 457.6L480 182.3C425.8 227.2 358.3 253 288 255.7L288 384z"
    },
    {
      title: "Audiobook Production",
      content: "We carefully select narrators whose voices best match your book's tone and style. Overseeing the entire production process—from recording and direction to editing and mastering—we deliver a professional audiobook ready for distribution on all major platforms, helping you reach the growing audio audience worldwide.",
      icon: "M160 288C160 199.6 231.6 128 320 128C408.4 128 480 199.6 480 288L480 325.5C470 322 459.2 320 448 320L432 320C405.5 320 384 341.5 384 368L384 496C384 522.5 405.5 544 432 544L448 544C501 544 544 501 544 448L544 288C544 164.3 443.7 64 320 64C196.3 64 96 164.3 96 288L96 448C96 501 139 544 192 544L208 544C234.5 544 256 522.5 256 496L256 368C256 341.5 234.5 320 208 320L192 320C180.8 320 170 321.9 160 325.5L160 288z"
    },
    {
      title: "Publishing and Distribution",
      content: "Handling every technical detail, we manage ISBN registration, formatting, and submission. Your book is then distributed globally through major retailers like Amazon, Barnes & Noble, Kobo, and over 40,000 other outlets, maximizing your reach and impact across multiple channels.",
      icon: "M192 576L512 576C529.7 576 544 561.7 544 544C544 526.3 529.7 512 512 512L512 445.3C530.6 438.7 544 420.9 544 400L544 112C544 85.5 522.5 64 496 64L192 64C139 64 96 107 96 160L96 480C96 533 139 576 192 576zM160 480C160 462.3 174.3 448 192 448L448 448L448 512L192 512C174.3 512 160 497.7 160 480zM406.6 272L375 272C373.6 295.1 369 316.2 362.4 333.2C385.1 320.7 401.8 298.4 406.6 272zM233.5 272C238.3 298.4 255 320.7 277.7 333.2C271 316.2 266.5 295.2 265.1 272L233.5 272zM309.9 327C314.4 336.6 318.1 340.8 320.1 342.5C322.1 340.8 325.8 336.7 330.3 327C336.5 313.6 341.4 294.5 343 272L297.2 272C298.8 294.5 303.7 313.6 309.9 327zM297.2 240L343 240C341.4 217.5 336.5 198.4 330.3 185C325.8 175.4 322.1 171.2 320.1 169.5C318.1 171.2 314.4 175.3 309.9 185C303.7 198.4 298.8 217.5 297.2 240zM406.7 240C401.9 213.6 385.2 191.3 362.5 178.8C369.2 195.8 373.7 216.8 375.1 240L406.7 240zM265 240C266.4 216.9 271 195.8 277.6 178.8C254.9 191.3 238.2 213.6 233.4 240L265 240zM192 256C192 185.3 249.3 128 320 128C390.7 128 448 185.3 448 256C448 326.7 390.7 384 320 384C249.3 384 192 326.7 192 256z"
    }
  ];

  return (
    <div className="bg-white">
      <TitleBanner>Services</TitleBanner>
      
      <div className="py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto justify-center items-start">
          {tiers.map((tier, index) => (
            <div key={index} className="flex flex-col">
              
              <div 
                className="flex flex-col"
                style={{ 
                  backgroundColor: tierColors[index],
                  width: "320px",
                  minHeight: index === 0 ? "600px" : index === 1 ? "800px" : "1100px"
                }}
              >
                <div className="p-8 flex-1 flex flex-col">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold mb-2 tracking-wide">{tier.title}</h3>
                    <h4 className="text-xl font-bold mb-4">{tier.subtitle}</h4>
                    <p className="">{tier.description}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h5 className="font-bold mb-4">Deliverables</h5>
                    <ul className="space-y-3">
                      {tier.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-10 h-10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="33" height="33" fill="white">
                              <path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM404.4 276.7L324.4 404.7C320.2 411.4 313 415.6 305.1 416C297.2 416.4 289.6 412.8 284.9 406.4L236.9 342.4C228.9 331.8 231.1 316.8 241.7 308.8C252.3 300.8 267.3 303 275.3 313.6L302.3 349.6L363.7 251.3C370.7 240.1 385.5 236.6 396.8 243.7C408.1 250.8 411.5 265.5 404.4 276.8z"/>
                            </svg>
                          </div>
                          <span className="">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              
              <div className="mt-4 w-80">
                <div 
                  className="p-6"
                  style={{ backgroundColor: tierColors[index] }}
                >
                  <h6 className="font-bold mb-3">Best for:</h6>
                  <p className="mb-4">{tier.bestFor}</p>
                  <p className="font-bold text-lg">Starts at {tier.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className="max-w-7xl mx-auto mt-16 px-4">
          <div className="text-center mb-12">
            <div className="w-full max-w-6xl mx-auto">
              <div 
                className="mb-6 mx-auto"
                style={{ 
                  width: "702px", 
                  height: "3px", 
                  backgroundColor: "#BBA156" 
                }}
              ></div>
              <p className="text-2xl leading-relaxed mb-6 max-w-5xl mx-auto">
                Every author and book is unique. In your Discovery Call, we'll tailor a custom 
                package, mixing elements from any tier, to fit your goals, maximize value and ROI, 
                and align perfectly with your brand.
              </p>
              <div 
                className="mb-8 mx-auto"
                style={{ 
                  width: "702px", 
                  height: "3px", 
                  backgroundColor: "#BBA156" 
                }}
              ></div>
            </div>
            
            <Link to="/contact">
              <button 
                className="text-white font-bold hover:opacity-90"
                style={{
                  backgroundColor: "#BBA156",
                  width: "380px",
                  height: "72px"
                }}
              >
                Book a free discovery call
              </button>
            </Link>
          </div>

          
          <div className="flex items-center justify-center gap-8 mt-16">
            <div 
              className="p-8"
              style={{ 
                backgroundColor: "#F2ECDA",
                width: "700px",
                height: "530px"
              }}
            >
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold mb-2">Premium Add-On:</h3>
                <h4 className="text-2xl font-bold mb-4">Audiobook Creation</h4>
                <div 
                  className="mx-auto"
                  style={{ 
                    width: "630px", 
                    height: "3px", 
                    backgroundColor: "#BBA156" 
                  }}
                ></div>
              </div>
              
              <p className="mb-6 leading-relaxed">
                Want to reach a wider audience and extend your influence into audio? We offer 
                full audiobook production — from voice talent to editing to distribution.
              </p>

              <div className="mb-2">
                <h5 className="font-bold mb-4 text-lg">Deliverables</h5>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-10 h-10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="33" height="33" fill="white">
                        <path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM404.4 276.7L324.4 404.7C320.2 411.4 313 415.6 305.1 416C297.2 416.4 289.6 412.8 284.9 406.4L236.9 342.4C228.9 331.8 231.1 316.8 241.7 308.8C252.3 300.8 267.3 303 275.3 313.6L302.3 349.6L363.7 251.3C370.7 240.1 385.5 236.6 396.8 243.7C408.1 250.8 411.5 265.5 404.4 276.8z"/>
                      </svg>
                    </div>
                    <span>Professional narration (choose your voice or ours)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 h-10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="33" height="33" fill="white">
                        <path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM404.4 276.7L324.4 404.7C320.2 411.4 313 415.6 305.1 416C297.2 416.4 289.6 412.8 284.9 406.4L236.9 342.4C228.9 331.8 231.1 316.8 241.7 308.8C252.3 300.8 267.3 303 275.3 313.6L302.3 349.6L363.7 251.3C370.7 240.1 385.5 236.6 396.8 243.7C408.1 250.8 411.5 265.5 404.4 276.8z"/>
                      </svg>
                    </div>
                    <span>Studio-quality production + sound engineering</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 h-10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="33" height="33" fill="white">
                        <path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM404.4 276.7L324.4 404.7C320.2 411.4 313 415.6 305.1 416C297.2 416.4 289.6 412.8 284.9 406.4L236.9 342.4C228.9 331.8 231.1 316.8 241.7 308.8C252.3 300.8 267.3 303 275.3 313.6L302.3 349.6L363.7 251.3C370.7 240.1 385.5 236.6 396.8 243.7C408.1 250.8 411.5 265.5 404.4 276.8z"/>
                      </svg>
                    </div>
                    <span>Distribution setup for Audible, iTunes, Spotify, and more</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 h-10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="33" height="33" fill="white">
                        <path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM404.4 276.7L324.4 404.7C320.2 411.4 313 415.6 305.1 416C297.2 416.4 289.6 412.8 284.9 406.4L236.9 342.4C228.9 331.8 231.1 316.8 241.7 308.8C252.3 300.8 267.3 303 275.3 313.6L302.3 349.6L363.7 251.3C370.7 240.1 385.5 236.6 396.8 243.7C408.1 250.8 411.5 265.5 404.4 276.8z"/>
                      </svg>
                    </div>
                    <span>Option to narrate it yourself — with expert coaching</span>
                  </li>
                </ul>
              </div>

              <p className="text-2xl font-bold mt-4">Starts at $15,000</p>
            </div>

            <div className="flex items-center gap-6">
              <svg width="72" height="72" viewBox="0 0 56 56" className="fill-current text-[#BBA156] ml-4">
                <path d="M26 26V10h4v16h16v4H30v16h-4V30H10v-4h16z"/>
              </svg>
              
              <div style={{ width: "330px", height: "270px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-full h-full" fill="#BBA156">
                  <path d="M160 288C160 199.6 231.6 128 320 128C408.4 128 480 199.6 480 288L480 325.5C470 322 459.2 320 448 320L432 320C405.5 320 384 341.5 384 368L384 496C384 522.5 405.5 544 432 544L448 544C501 544 544 501 544 448L544 288C544 164.3 443.7 64 320 64C196.3 64 96 164.3 96 288L96 448C96 501 139 544 192 544L208 544C234.5 544 256 522.5 256 496L256 368C256 341.5 234.5 320 208 320L192 320C180.8 320 170 321.9 160 325.5L160 288z"/>
                </svg>
              </div>
            </div>
          </div>

          
          <div className="flex items-center justify-center gap-8 mt-16">
            <div 
              style={{ 
                width: "332px", 
                height: "3px", 
                backgroundColor: "#BBA156" 
              }}
            ></div>
            <h2 
              className="text-center font-bold"
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
              style={{ 
                width: "332px", 
                height: "3px", 
                backgroundColor: "#BBA156" 
              }}
            ></div>
          </div>

          
          <div className="max-w-7xl mx-auto mt-8 space-y-2">
            {serviceSections.map((service, index) => (
              <div key={index} className="flex justify-center items-center gap-6">
                
                <div className="flex-shrink-0 w-32 h-32 flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 640 640" 
                    width="125" 
                    height="125" 
                    fill="#BBA156"
                  >
                    <path d={service.icon} />
                  </svg>
                </div>

                
                <div 
                  className="w-full max-w-4xl bg-white p-8 flex flex-col"
                >
                  <h2 className="font-bold text-3xl mb-6">{service.title}</h2>
                  <p className="leading-relaxed text-lg">
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
}
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Hero = () => {
  useGSAP(() => {
    const heroSplit = SplitText.create(".title", { type: "chars, words" });
    const paragraphSplit = SplitText.create(".subtitle", { type: "lines" });

    //adding a gradient color to each characters
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    //animate each characters with a staggering effect
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
    });

    //animating the lines of each paragraph
    gsap.from(paragraphSplit.lines, {
      duration: 1.8,
      opacity: 0,
      yPercent: 100,
      delay: 1,
      ease: "expo.out",
      stagger: 0.06,
    });

    // Animating the leaves of the Hero Section
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);
  }, []);
  return (
    <section id="hero" className="noisy">
      <h1 className="title">Mojito</h1>

      <img
        src="/images/hero-left-leaf.png"
        alt="left leaf at hero section"
        className="left-leaf"
      />
      <img
        src="/images/hero-right-leaf.png"
        alt="right leaf at hero section"
        className="right-leaf"
      />
      <div className="body">
        <div className="content">
          <div className="space-y-5 hidden md:block">
            <p>Cool. Crisp. Classic.</p>
            <p className="subtitle">
              Sip the Spirit <br /> of Summer
            </p>
          </div>

          <div className="view-cocktails">
            <p className="subtitle">
              Every cocktail on our menu is a blend of premium ingredients,
              creative flair, and timeless recipes — designed to delight your
              senses.
            </p>
            <a href="#cocktails">View Cocktails</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

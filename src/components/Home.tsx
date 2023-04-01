import ActionButton from "@/Types/ActionButton";
import { SelectedPage } from "@/Types/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <section className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0" id="home">
      {/* {IMAGE AND MAIN} */}
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6 "
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <div className=" md:-mt-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="relative"
            >
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </motion.div>

            <p className="mt-8  md:text-start">
              Unlock your full potential with a visit to our gym. With a range
              of equipment, classes, and personalized training plans, you'll
              find everything you need to achieve your fitness goals. Whether
              you're looking to build strength, improve endurance, or simply
              feel better in your own skin, we're committed to helping you
              become the best version of yourself. Join us today and take the
              first step towards a healthier, happier you!
            </p>
          </div>
          {/* ACTIONS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-8 flex items-center gap-8"
          >
            <ActionButton setSelecedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              href={`#${SelectedPage.ContactUs}`}
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
      </motion.div>
      {/* SPONSOR */}
      {isAboveScreen && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className=" mx-auto w-5/6">
            <div className="flex items-center gap-10 justify-between w-3/5">
              <img src={SponsorRedBull} alt="redbull" />
              <img src={SponsorForbes} alt="forbes" />
              <img src={SponsorFortune} alt="fortune" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;

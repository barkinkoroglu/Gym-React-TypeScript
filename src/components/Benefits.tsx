import ActionButton from "../Types/ActionButton";
// import HText from "@/shared/HText";
import { SelectedPage } from "../Types/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";
import { BenefitType } from "../Types/types";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Experience top-of-the-line workout equipment and amenities with our state-of-the-art facilities.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Choose from our vast selection of over 100 diverse classes to find the perfect fit for your fitness journey.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Our gym has a team of expert and pro trainers to help guide and motivate you through your fitness journey.",
  },
];
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className=" w-5/6 py-24 mx-auto min-h-full">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          transition={{ delay: 0.5, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="font-montserrat text-3xl basis-3/5 font-bold uppercase">
            More Just Than Gym
          </h1>
          <p className="py-5">
            Our gym offers a variety of services to help you achieve your
            fitness goals. We provide personal training sessions with certified
            trainers, state-of-the-art exercise equipment, and a variety of
            group fitness classes such as yoga, Pilates, and cardio. Our gym
            also offers nutritional counseling and meal planning services to
            help you make healthy food choices. With a welcoming and supportive
            community of like-minded individuals, we strive to create an
            environment that is both motivating and enjoyable.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className=" md:flex items-center justify-center gap-8  "
        >
          {benefits.map((benefit) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img
            className="mx-auto  "
            src={BenefitsPageGraphic}
            alt="benefitpage"
          />
          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="font-montserrat text-3xl basis-3/5 font-bold mb-4 "
                >
                  {" "}
                  MILLIONS OF HAPPY MEMBERS GETTING{" "}
                  <span className="text-primary-500">FIT</span>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              transition={{ delay: 0.3, duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="mb-5">
                We are proud to have millions of happy members who have achieved
                their fitness goals with us. Our community is inclusive and
                welcoming to everyone, regardless of fitness level, age, or
                background. With state-of-the-art facilities, a variety of
                diverse classes, and expert trainers, we provide the resources
                and support you need to succeed. Our gym is more than just a
                place to work out - it's a place to connect with like-minded
                individuals and build friendships. We are committed to helping
                you live a healthier, happier life, and we look forward to
                welcoming you to our community.
              </p>
            </motion.div>

            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40  before:content-sparkles ">
                <ActionButton setSelecedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;

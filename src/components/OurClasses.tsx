import { SelectedPage, ClassType } from "@/Types/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Our weight training classes are designed to help you build strength, increase endurance, and improve your overall fitness. Led by expert trainers, these classes are suitable for all fitness levels and are a great way to challenge yourself and achieve your fitness goals.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Our yoga classes offer a variety of styles and levels to help you find balance, flexibility, and peace of mind. Led by expert instructors, our classes are suitable for all skill levels and are a great way to improve your physical and mental well-being.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Our ab core classes are designed to help you strengthen your core muscles and improve your overall stability and balance. Led by expert instructors, these classes are suitable for all fitness levels and are a great way to achieve your fitness goals.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Our adventure classes are perfect for those who want to add an element of excitement to their fitness routine. Led by expert instructors, these classes offer a variety of outdoor activities, such as hiking and rock climbing, to help you stay active and explore the great outdoors.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Our fitness classes are designed to help you achieve your fitness goals, no matter your level of experience. From high-intensity workouts to mind-body practices, we offer a variety of classes led by expert instructors in a supportive and motivating environment. Come join us for a class and take the first step towards a healthier lifestyle.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Our training classes are designed to help you improve your strength, endurance, and overall fitness. Led by expert trainers, these classes offer a variety of workouts that are suitable for all fitness levels. Join us for a class and challenge yourself to achieve your fitness goals.",
    image: image6,
  },
];
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className=" mx-auto w-5/6"
        >
          <div className="md:w-3/5">
            <h1 className="font-montserrat text-3xl basis-3/5 font-bold uppercase">
              OUR CLASSES
            </h1>
            <p className="py-5">
              Our classes are designed to challenge and inspire you, no matter
              your fitness level. From high-intensity interval training to
              mind-body practices like yoga and Pilates, we offer a wide variety
              of classes to keep your workouts fresh and exciting. Our expert
              instructors are dedicated to helping you achieve your fitness
              goals in a supportive and welcoming environment. Come join us for
              a class today and experience the energy and inspiration of our
              fitness community.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};
export default OurClasses;

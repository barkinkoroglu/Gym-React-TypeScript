import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            We are a premier fitness destination dedicated to helping our
            members achieve their health and fitness goals. Our state-of-the-art
            facilities feature the latest equipment and technology, and our
            expert trainers and instructors offer a wide range of classes and
            programs to keep your workouts fresh and exciting. Join our
            community of happy members and discover the power of fitness to
            transform your life.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Instagram</p>
          <p className="my-5">Facebook</p>
          <p>Twitter</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Barkin Koroglu</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

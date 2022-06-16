import { Link } from 'gatsby';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsFillTelephoneFill, BsTelegram, BsTwitter } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
const ContactMe = () => {
  return (
    <nav className="flex my-4 ">
      <Link
        to="https://twitter.com/armanAg49?s=09"
        target="_blank"
        className=" hover:text-cyan-300">
        <BsTwitter className="ml-2 h-5 w-5 " />
      </Link>
      <Link to="mailto:arman.alighanbary@gmail.com" className=" hover:text-cyan-300">
        <MdEmail className="ml-2 h-5 w-5 " />
      </Link>
      <Link to="https://t.me/ag_arman" target="_blank" className=" hover:text-cyan-300">
        <BsTelegram className="ml-2 h-5 w-5 " />
      </Link>
      <Link to="https://github.com/arman-ag" target="_blank" className=" hover:text-cyan-300">
        <AiFillGithub className="ml-2 h-6 w-6 " />
      </Link>
      <Link to="tel:+989365725645" className=" hover:text-cyan-300">
        <BsFillTelephoneFill className="ml-2 h-5 w-5 " />
      </Link>
      <Link
        to="https://www.linkedin.com/in/arman-alighanbary-5b5090150/?original_referer="
        target="_blank"
        className=" hover:text-cyan-300">
        <AiFillLinkedin className="ml-2 h-6 w-6 " />
      </Link>
    </nav>
  );
};

export default ContactMe;

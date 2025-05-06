import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="chksaikumar@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+1 334 663 6084" Image={FiPhone} />
      <SingleInfo text="Auburn USA" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;

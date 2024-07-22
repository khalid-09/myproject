import Image from 'next/image';
import bg2 from '../../public/logo2.png';
import { File, Mail, MapPin, Smartphone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mb-6">
      <div className="bg-[#111111] p-6 rounded-xl space-y-10  max-w-[76.375rem] mx-auto  ">
        <div className="flex items-center justify-center">
          <div className="relative h-[7.063rem] w-[18.125rem]">
            <Image
              src={bg2}
              alt="Logo Image"
              placeholder="blur"
              className="absolute object-cover"
            />
          </div>
        </div>
        <div className="flex">
          <div className="w-[18.375rem] space-y-2">
            <div className="flex items-center gap-2">
              <Smartphone className="w-6 h-6 text-[#98A2B3]" />
              <span className="font-medium text-[#98A2B3] text-sm">
                Contact nums
              </span>
            </div>
            <p className="text-white">+91 0000000000</p>
          </div>
          <div className="w-[18.375rem] space-y-2">
            <div className="flex items-center gap-2">
              <Mail className="w-6 h-6 text-[#98A2B3]" />
              <span className="font-medium text-[#98A2B3] text-sm">Gmail</span>
            </div>
            <p className="text-white">demo@gmail.com</p>
          </div>
          <div className="w-[18.375rem] space-y-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-[#98A2B3]" />
              <span className="font-medium text-[#98A2B3] text-sm">
                Address
              </span>
            </div>
            <p className="text-white">Mumbai, India</p>
          </div>
          <div className="w-[18.375rem] space-y-2">
            <div className="flex items-center gap-2">
              <File className="w-6 h-6 text-[#98A2B3]" />
              <span className="font-medium text-[#98A2B3] text-sm">
                Leave a request
              </span>
            </div>
            <p className="text-white">Leave a request</p>
          </div>
        </div>
        <div className="items-center justify-center flex">
          <p className="text-sm text-white">We work throughout the world</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* <div className=" items-center justify-between w-full">
            <div className="w-[18.375]  bg-white space-y-2">
              <div className="flex items-center gap-2"></div>
              <p className="text-white">+91 0000000000</p>
            </div>
            <div className="w-[18.375] space-y-2">
              <div className="flex items-center gap-2"></div>
              <p className="text-white">+91 0000000000</p>
            </div>
            <div className="w-[18.375] space-y-2">
              <div className="flex items-center gap-2"></div>
              <p className="text-white">+91 0000000000</p>
            </div>
          </div> */
}

import React from 'react';
import {
  Facebook,
  Instagram,
  LinkedIn,
  Logo,
  Twitter,
} from '../../assets/icons';
import { Link } from 'react-router-dom';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-full xl:w-[1220px] block xl:flex lg:flex  text-center gap-[181px] px-[32px] xl:px-0 m-auto mt-[84px] mb-[21px]">
      <FisrtSection />
      <Resources />
      <Legal />
      <Links />
    </div>
  );
};

export default Footer;

const FisrtSection = () => {
  return (
    <div className=" w-full xl:w-[295px] text-start">
      <div className="flex gap-4 items-center mb-[8px]">
        <img src={Logo} alt="" width={71} height={64} />
        <h2 className="text-[#4BA586] text-[24px] font-semibold">
          HouseLinkUp
        </h2>
      </div>
      <article>
        <p className="text-[18px] text-[#191919] mb-[24px]">
          Properties to rent. Find rental property listed directly from private
          landlords and letting agents from all over.
        </p>
      </article>

      <section className="flex items-center justify-center xl:justify-start lg:justify-start gap-[24px]">
        <a href="#" target="_blank">
          <img
            src={Facebook}
            alt="facebook icon"
            className="w-[38px] h-[38px] rounded-full p-2 border border-[#222]"
          />
        </a>
        <a href="#" target="_blank">
          <img
            src={LinkedIn}
            alt="facebook icon"
            className="w-[38px] h-[38px] rounded-full p-2 border border-[#222]"
          />
        </a>
        <a href="#" target="_blank">
          <img
            src={Instagram}
            alt="facebook icon"
            className="w-[38px] h-[38px] rounded-full p-2 border border-[#222]"
          />
        </a>
        <a href="#" target="_blank">
          <img
            src={Twitter}
            alt="facebook icon"
            className="w-[38px] h-[38px] rounded-full p-2 border border-[#222]"
          />
        </a>
      </section>
    </div>
  );
};

const Resources = () => {
  return (
    <div className="mt-4">
      <h2 className="text-[#191919] text-[24px] font-semibold mb-[24px]">
        Resources
      </h2>
      <article className="flex flex-col xl:items-start lg:items-start items-center gap-[8px] text-[18px]">
        <Link to={'#'}>Feature</Link>
        <Link to={'#'}>Pricing</Link>
        <Link to={'#'}>Log in</Link>
        <Link to={'#'}>Sign up</Link>
      </article>
    </div>
  );
};

const Legal = () => {
  return (
    <div className="mt-4">
      <h2 className="text-[#191919] text-[24px] font-semibold mb-[24px]">
        Legal
      </h2>
      <article className="flex flex-col xl:items-start lg:items-start items-center gap-[8px] text-[18px]">
        <Link to={'#'}>Terms of use</Link>
        <Link to={'#'}>Privacy policy</Link>
        <Link to={'#'}>Legal notice</Link>
      </article>
    </div>
  );
};

const Links = () => {
  return (
    <div className="mt-4">
      <h2 className="text-[#191919] text-[24px] font-semibold mb-[24px]">
        Links
      </h2>
      <article className="flex flex-col xl:items-start lg:items-start items-center gap-[8px] text-[18px]">
        <Link to={'#'}>Feedback</Link>
        <Link to={'#'}>Agents</Link>
        <Link to={'#'}>About us</Link>
      </article>
    </div>
  );
};

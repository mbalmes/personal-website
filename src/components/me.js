import React from "react";
import Image from "../components/image";
import { FaArrowDown } from "react-icons/fa";
import { IoLogoGithub, IoLogoLinkedin, IoMdMail } from "react-icons/io";
const Me = () => {
  return (
    <div class="columns is-gapless">
      <div class="column is-6">
        <section
          class="hero is-fullheight is-hidden-mobile"
          id="is-me"
        ></section>
      </div>
      <div class="column is-6">
        <section class="hero is-fullheight is-success ">
          <div class="hero-body">
            <div class="container">
              <figure class="image is-96x96 is-hidden-tablet">
                <Image />
              </figure>
              <h1 class="title">Hi, I'm Michael Balmes</h1>
              <h2 class="subtitle">
                A software engineer with a passion for cloud infrastructure,
                DevOps, and all things web
              </h2>
              <a
                href="https://www.linkedin.com/in/michael-balmes-070ba4107/"
                class="has-text-white"
              >
                <IoLogoLinkedin class="icon is-medium" />
              </a>
              <a href="https://www.github.com/mbalmes" class="has-text-white">
                <IoLogoGithub class="icon is-medium" />
              </a>
              <a href="mailto:michaelgregorybalmes@gmail.com" class="has-text-white">
                <IoMdMail class="icon is-medium" />
              </a>
            </div>
          </div>
          <div class="hero-foot has-text-centered">
            <p class="is-size-5">Blog and Portfolio</p>
            <FaArrowDown class="icon is-large" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Me;

import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

function Footer() {
  return (
    <footer class="bg-dark text-center text-white">
      <div class="container p-4">
        <section class="mb-4">
          <a
            class="btn btn-outline-light btn-floating m-1"
            target="_blank"
            href="https://m.facebook.com/BVICAMsNSC/?__tn__=C-R"
            role="button"
            target="_blank"
          >
            <i>
              <FacebookIcon />
            </i>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="https://instagram.com/bvicamnsc?igshid=1wuoy6x524pp7"
            role="button"
            target="_blank"
          >
            <i>
              <InstagramIcon />
            </i>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="https://youtube.com/channel/UCuOPY-98JUY9T2igRpj8tIQ"
            role="button"
            target="_blank"
          >
            <i>
              <YouTubeIcon />
            </i>
          </a>
        </section>
        <section class="mb-3">
          <h5>Designed by:</h5>{" "}
          <p>
            <a
              class="text-white"
              href="https://www.linkedin.com/in/devashish-bhandari-1115a7163/"
              target="_blank"
            >
              Devashish Bhandari
            </a>{" "}
            &{" "}
            <a
              class="text-white"
              href="https://www.linkedin.com/in/srishti-jain-092710173"
              target="_blank"
            >
              Srishti Jain
            </a>{" "}
          </p>
        </section>
      </div>

      <div class="text-center p-3">
        © 2021 Copyright:
        <a
          class="text-white text-decoration-none"
          href="http://bvicam.in/"
          target="_blank"
        >
          Bharati Vidyapeeth's Institute of Computer Applications and Management
        </a>
      </div>
    </footer>
  );
}

export default Footer;

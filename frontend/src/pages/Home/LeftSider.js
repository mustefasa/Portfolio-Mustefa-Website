import React from "react";
import "remixicon/fonts/remixicon.css";

function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:inherit ">
      <div className="flex flex-col items-center ">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="https://www.facebook.com/mustefa.sadedin" target="_">
            <i class="ri-facebook-circle-line text-secondary "></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mustefa-sadedin-890a9b297/"
            target="_"
          >
            <i class="ri-linkedin-box-line text-secondary"></i>
          </a>
          <a href="https://mail.google.com" target="_">
            <i class="ri-mail-line text-secondary "></i>
          </a>
          <a href="https://www.instagram.com/mustefahabshiy/" target="_">
            <i class="ri-instagram-line text-secondary "></i>
          </a>

          <a href="https://t.me/mustieComputer_123" target="_">
            <i class="ri-telegram-line text-secondary "></i>
          </a>
        </div>
        <div className="w-[1px] h-32 bg-[#d88f3c] sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSider;

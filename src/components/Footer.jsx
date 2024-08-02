import React from "react";
import { FaEnvelope, FaPhone, FaRocket } from "react-icons/fa";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/magicui/dock";

const icons = {
  email: FaEnvelope,
  phone: FaPhone,
  getStarted: FaRocket,
};

const Footer = () => {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Dock
      </span>
      <TooltipProvider>
        <Dock direction="middle">
          {[
            { href: "#email", icon: icons.email, label: "Email" },
            { href: "#phone", icon: icons.phone, label: "Phone" },
            {
              href: "#get-started",
              icon: icons.getStarted,
              label: "Get Started",
            },
          ].map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={
                      buttonVariants({ variant: "ghost", size: "icon" }) +
                      " size-12 rounded-full"
                    }>
                    <item.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  );
};

export default Footer;

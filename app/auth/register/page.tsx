import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/public/img/container.png";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/app/auth/components/user-auth-form";
import { Suspense } from "react";
import Loading from "@/app/loading";
import { UserLoginForm } from "../components/user-login-form";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function RegistrationPage() {
  return (
    /* <div className="container relative  h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/auth/login"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        > */
    <main>
      <div className="paddingX py-20">
        <div className="shadow-4xl flex flex-col lg:flex-row">
          <div className="w-full p-8 flex flex-1 flex-col gap-8 bg-darkBlue-200">
            <div className="text-[30px] font-extrabold">logo</div>
            <div className="flex flex-col justify-center items-center gap-8">
              <Image
                src="/images/signPageBg.png"
                alt="auto"
                width={300}
                height={500}
                className="ml-4"
              />
              <div className="flex flex-col justify-center py-10 gap-8 items-center max-w-[320px] text-white text-center">
                <h3 className="text-[24px] font-bold">
                  Online Car Auction center
                </h3>
                <p className="text-[14px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididun.
                </p>
              </div>
            </div>
          </div>

          {/* <Link
          href="/auth/register"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        ></Link> */}

          <div className="flex flex-1 lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-[400px]">
              <div className="relative h-full w-full ">
                <Suspense fallback={<Loading />}>
                  <UserAuthForm />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

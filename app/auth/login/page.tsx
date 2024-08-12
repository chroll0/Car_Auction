import { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";

import { UserLoginForm } from "@/app/auth/components/user-login-form";
import Loading from "@/app/loading";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function LoginPage() {
  return (
    <main>
      <div className="paddingX py-20">
        <div className="shadow-4xl flex flex-col lg:flex-row">
          <div className="w-full p-8 flex flex-1 flex-col gap-8 bg-darkBlue-200">
            <div className="text-[30px] font-extrabold">logo</div>
            <div className="flex flex-col justify-center items-center gap-8">
              <Image
                src="/landing/icons/signPageBg.png"
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

          <div className="flex flex-1 lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6">
              <div className="relative h-full w-full ">
                <Suspense fallback={<Loading />}>
                  <UserLoginForm />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

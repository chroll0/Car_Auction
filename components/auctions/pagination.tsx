"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";

type PaginationProps = {
  page: number | string;
  totalPages: number;
  urlParamName?: string;
};

const Pagination = ({
  page,
  totalPages,
  urlParamName = "page",
}: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onClick = (btnType: string) => {
    const currentPage = Number(page);
    const newPage = btnType === "next" ? currentPage + 1 : currentPage - 1;

    // Create a new URLSearchParams object
    const params = new URLSearchParams(searchParams.toString());

    // Set the new page value or urlParamName
    params.set(urlParamName, newPage.toString());

    // Update the URL with the new search params
    const newUrl = `${window.location.pathname}?${params.toString()}`;

    // Navigate to the new URL without refreshing the page
    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="flex gap-2 text-[16px]">
      <button
        className="w-[100px] bg-skyBlue-10 cursor-pointer hover:text-white transition-all hover:bg-blue-10 rounded-[10px] p-2"
        onClick={() => onClick("prev")}
        disabled={Number(page) <= 1}
      >
        Back
      </button>
      <button
        className="w-[100px] bg-skyBlue-10 cursor-pointer hover:text-white transition-all hover:bg-blue-10 rounded-[10px] p-2"
        onClick={() => onClick("next")}
        disabled={Number(page) >= totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

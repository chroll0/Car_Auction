import Image from "next/image";
import Link from "next/link";

const Comments = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[20px] font-semibold leading-[30px] text-blue-10">
        Comment
      </h2>
      <div className="rounded-[10px] bg-skyBlue-10 flex items-center gap-8 h-full pr-5">
        <label htmlFor="comment" className="w-full">
          <textarea
            name="comment"
            id="comment"
            placeholder="Add a comment..."
            className="w-full h-full bg-transparent px-5 py-6 min-h-[150px] text-gray-50"
          ></textarea>
        </label>

        <Link href="/pages/auction_details" className="h-full">
          <button
            type="button"
            className="bg-white px-2.5 py-12 h-full rounded-[10px] transition-all hover:scale-105 shadow-3xl shadow-skyBlue-10"
          >
            <Image src="/auctions/next.png" alt="star" width={24} height={24} />
          </button>
        </Link>
      </div>

      {/* comments */}
      <div className="flex space-x-4 items-start mt-4">
        <div className="rounded-full bg-blue-100 p-[5px]">
          <Image
            src="/auctionLot/avatar.png"
            alt="user avatar"
            width={24}
            height={24}
          />
        </div>
        <div className="relative flex flex-col gap-1">
          <div className="text-[16px] font-medium text-blue-10">Hetrika</div>
          <p className="text-gray-50">
            DAMN. Way to have a meeting during close.
          </p>

          <div className="flex items-center gap-6 text-[14px] space-y-1 font-medium leading-[21px] text-gray-50">
            <button className="flex items-center space-x-2">
              <Image
                src="/auctionLot/like.png"
                alt="reply"
                width={19}
                height={16}
              />
              <span>3 Likes</span>
            </button>

            <button className="flex items-center space-x-2">
              <Image
                src="/auctionLot/reply-icon.png"
                alt="reply"
                width={19}
                height={16}
              />
              <span>Reply</span>
            </button>
          </div>
          <div className="flex items-center gap-2 text-[14px] font-medium">
            <div className="rounded-full bg-blue-100 p-[5px]">
              <Image
                src="/auctionLot/avatar.png"
                alt="user avatar"
                width={16}
                height={16}
              />
            </div>
            <span className="text-blue-10">Hetrika</span>
            <span className="text-gray-50">4 reply</span>
          </div>
          <div className="absolute bottom-[14px] left-[-34px] h-[55%]">
            <Image
              src="/auctionLot/vector.png"
              alt="user avatar"
              width={32}
              height={32}
              className="h-full"
            />
          </div>
        </div>
      </div>
      <div className="flex space-x-4 items-start mt-4">
        <div className="rounded-full bg-blue-100 p-[5px]">
          <Image
            src="/auctionLot/avatar.png"
            alt="user avatar"
            width={24}
            height={24}
          />
        </div>
        <div className="relative flex flex-col gap-1">
          <div className="text-[16px] font-medium text-blue-10">Hetrika</div>
          <p className="text-gray-50">
            DAMN. Way to have a meeting during close.
          </p>

          <div className="flex items-center gap-6 text-[14px] space-y-1 font-medium leading-[21px] text-gray-50">
            <button className="flex items-center space-x-2">
              <Image
                src="/auctionLot/like.png"
                alt="reply"
                width={19}
                height={16}
              />
              <span>3 Likes</span>
            </button>

            <button className="flex items-center space-x-2">
              <Image
                src="/auctionLot/reply-icon.png"
                alt="reply"
                width={19}
                height={16}
              />
              <span>Reply</span>
            </button>
          </div>
          <div className="flex items-center gap-2 text-[14px] font-medium">
            <div className="rounded-full bg-blue-100 p-[5px]">
              <Image
                src="/auctionLot/avatar.png"
                alt="user avatar"
                width={16}
                height={16}
              />
            </div>
            <span className="text-blue-10">Hetrika</span>
            <span className="text-gray-50">4 reply</span>
          </div>
          <div className="absolute bottom-[14px] left-[-34px] h-[55%]">
            <Image
              src="/auctionLot/vector.png"
              alt="user avatar"
              width={32}
              height={32}
              className="h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;

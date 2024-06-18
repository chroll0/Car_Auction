import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="flex flex-col p-6 space-y-6">
      <div className="flex justify-center items-start flex-wrap gap-24">
        <div className="max-w-md w-full lg:w-1/3 p-4">
          <Skeleton className="h-52 w-full rounded-t-xl" />
          <div className="py-4 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
        <div className="max-w-md w-full lg:w-1/3 p-4">
          <div className="py-4 space-y-2">
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-wrap">
        <div className="max-w-md w-full lg:w-1/4 p-4">
          <Skeleton className="h-52 w-full rounded-t-xl" />
          <div className="py-4 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
        <div className="max-w-md w-full lg:w-1/4 p-4">
          <Skeleton className="h-52 w-full rounded-t-xl" />
          <div className="py-4 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
        <div className="max-w-md w-full lg:w-1/4 p-4">
          <Skeleton className="h-52 w-full rounded-t-xl" />
          <div className="py-4 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;

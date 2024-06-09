import { Card, CardContent } from "@/components/ui/card";
// import { Icons } from "@/components/icons";

export default function Loading() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "fit",
        width: "fit",
      }}
    >
      <Card>
        <CardContent className="items-center justify-center justify-items-center">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p className="text-3xl pt-6 text-center text-black m-6">
              Loading..
            </p>
            {/* <Icons.spinner className="mr-4 h-fit w-fit animate-spin  text-primary" /> */}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

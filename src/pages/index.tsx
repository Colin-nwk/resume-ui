import LeftSide from "@/components/LeftSide";
import Navbar from "@/components/Navbar";
import RightSide from "@/components/RightSide";

export default function Home() {
  return (
    <>
      <main className="font-bodyFont w-full h-screen bg-theme-900 text-theme-300 overflow-x-hidden overflow-y-scroll">
        <Navbar />
        <>
          <div className="w-full xl:flex items-center gap-20 justify-between h-[88vh]">
            <div className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
              <LeftSide />
            </div>
            <div className="h-[88vh] mx-auto p-4">middle</div>
            <div className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
              <RightSide />
            </div>
          </div>
        </>
      </main>
    </>
  );
}

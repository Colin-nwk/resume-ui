import Banner from "@/components/Banner";
import LeftSide from "@/components/LeftSide";
import Navbar from "@/components/Navbar";
import RightSide from "@/components/RightSide";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <main className="font-bodyFont w-full h-screen bg-theme-900 text-theme-300 overflow-x-hidden overflow-y-scroll">
        <Navbar />
        <>
          <div className="w-full xl:flex items-center gap-20 justify-between h-[88vh]">
            <motion.div
              className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <LeftSide />
            </motion.div>
            <div className="h-[88vh] w-full mx-auto p-4">
              <Banner />
            </div>
            <motion.div
              className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <RightSide />
            </motion.div>
          </div>
        </>
      </main>
    </>
  );
}

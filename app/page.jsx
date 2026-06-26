import Hero from "@/components/home/Hero";
import Statement from "@/components/home/Statement";
import Beliefs from "@/components/home/Beliefs";
import BigType from "@/components/home/BigType";
import Timeline from "@/components/home/Timeline";
import Intelligence from "@/components/home/Intelligence";
import Signup from "@/components/home/Signup";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statement />
      <Beliefs />
      <BigType />
      <Timeline />
      <Intelligence />
      <Signup />
    </>
  );
}

import dynamic from "next/dynamic";

const BootScreen = dynamic(() => import("./Containers/BootScreen"), { ssr: false })
export default function Home() {

  return (
    <BootScreen />
  );
}

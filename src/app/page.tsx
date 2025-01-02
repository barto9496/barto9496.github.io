// import Image from "next/image";
// import nextConfig from "../../next.config";
//
import Typewriter from "./components/TypeWriter/TypeWriter";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div className="flex-col justify-center justify-items-center">
      <Typewriter text={"$Amogh_Umesh_Katti"} delay={100} />
      <Button variant="text">Outlined</Button>
    </div>
  );
}

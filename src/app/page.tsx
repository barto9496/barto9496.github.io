// import Image from "next/image";
// import nextConfig from "../../next.config";
//
import Typewriter from "./components/TypeWriter/TypeWriter";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <Typewriter text={"$Amogh_Umesh_Katti"} delay={100} />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>© 2024 Amogh Umesh Katti</p>
      </footer>
    </div>
  );
}

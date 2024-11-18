import { Button } from "@nextui-org/react";
import Image from "next/image";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export default function Home() {
  return (
    <main >
      <p>Movie app</p>
      <Button color="primary">Click Me</Button>
      <ThemeSwitcher />
    </main>
  );
}

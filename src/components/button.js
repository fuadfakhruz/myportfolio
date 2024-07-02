import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MyComponent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Jangan render apa pun di sisi server
  }

  return (
    <div className="-mx-2 -mt-20">
      <Link href="/projects" passHref className="mr-8">
        <Button color="secondary" as="a">
          Check My Projects
        </Button>
      </Link>
      <Link href="/contact" passHref>
        <Button color="secondary" as="a">
          Contact Me
        </Button>
      </Link>
    </div>
  );
}

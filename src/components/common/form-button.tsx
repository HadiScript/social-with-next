"use client";

import { Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

interface thisProps {
  children: React.ReactNode;
}

export default function FormButton({ children }: thisProps) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" isLoading={pending}>
      {children}
    </Button>
  );
}

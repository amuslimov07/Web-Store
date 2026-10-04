"use client";
import MyButton from "@/ui/MyButton/MyButton";
import { useState } from "react";

export default function Page() {
  const [active, setActive] = useState(false);
  return (
    <div>
      <MyButton active={active} onClick={() => setActive((prev) => !prev)}>
        кнопка
      </MyButton>
    </div>
  );
}

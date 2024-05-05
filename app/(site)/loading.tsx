"use client";

import Box from "@/components/Box";
import { ClipLoader } from "react-spinners";

export default function loading() {
  return (
    <Box className="h-full flex items-center justify-center">
      <ClipLoader color="#22c55e" size={40} />
    </Box>
  );
}

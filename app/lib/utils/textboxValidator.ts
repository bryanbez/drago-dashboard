import { z } from "zod";

// validate the textbox input
export const validateTextboxInput = (input: string) => {
  const schema = z
    .string()
    .min(42, "Enter a valid wallet address")
    .max(42, "Enter a valid wallet address")
    .startsWith("0x", "Enter a valid wallet address")
    .regex(/^[a-zA-Z0-9]+$/, "Enter a valid wallet address");

  return schema.safeParse(input);
};

// export const validateDragoIdSearchInput = (input: number) => {
//   const schema = z
//     .number()
//     .min(1, "Enter a valid drago id")
//     .max(5, "Enter a valid drago id");

//   return schema.safeParse(input);
// };

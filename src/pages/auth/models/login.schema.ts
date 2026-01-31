import z from "zod";
import { password, username } from "@/shared/models/primitive.schema";

export const LoginSchema = z.object({ password, username });

export type LoginInput = z.infer<typeof LoginSchema>;

const { z } = require("zod");

const loginSchema = z.object({
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "invalid email" })
    .min(5, { message: "min 5 char in email" })
    .max(50, { message: "max 50 char in email" }),
  password: z
    .string({ required_error: "password is required" })
    .trim()
    .min(8, { message: "password  must be required atleast 8 char" })
    .max(20, { message: "password can't be more then 20 char" }),
});
const signupSchema = loginSchema.extend({
  username: z
    .string({ required_error: "name is required" })
    .trim()
    .min(5, { message: "name must be at least 5 character" })
    .max(50, { message: "name must not be more then 50 char" }),

  phone: z
    .string({ required_error: "phone no is invalid" })
    .trim()
    .min(10, { message: "10 digits require for phone number" })
    .max(10, { message: "10 digits require for phone number" }),
});

module.exports = {loginSchema,signupSchema};

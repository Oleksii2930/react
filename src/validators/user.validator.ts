import Joi from "joi";


export  const userValidator = Joi.object({
    username:Joi.string().pattern(/w{4,}/).required().messages({
      "string.pattern.base":"name must have at least four char"
    }),

    password:Joi.string().min(3).max(6).required().messages({
        "string.min": "Password must be at least 3 characters",
        "string.max": "Password must be at least 6 characters",
    }),

    age:Joi.number().min(1).max(117).required().messages({
        "number.min": "Age must be at least 1 characters",
        "number.max": "Age must be at least 117 characters",
    }),
})
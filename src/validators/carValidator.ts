import * as Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$'))
        .messages({'string.pattern.base':'Your brand value didnt match pattern.'}),
    prise: Joi.number().min(0).max(1000000).messages({
        "number.min":"min prise is 0",
        "number.max":"max prise is 1 000 000",
    }),
    year: Joi.number().min(1990).max(2024).messages({
        "number.min":"min year is 1990",
        "number.max":"max year is 2024",
    }),
});
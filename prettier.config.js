/**
 * @type {import("prettier").Config}
 */
export default {
    tabWidth: 4,
    experimentalTernaries: true,
    plugins: ["prettier-plugin-astro"],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
};

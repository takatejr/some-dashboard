module.exports = {
    mode: "jit",
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./shared/components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                textMainColor: "#1B2559",
                textSecondaryColor: "#8A96BA",
                btnTextMainColor: "#0070C9",
            },
        },
    },
    plugins: [],
};

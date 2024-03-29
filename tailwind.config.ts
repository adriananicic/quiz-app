import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
				primary: {
					DEFAULT: 'var(--color-primary)',
					strong: 'var(--color-primary-strong)',
					medium: 'var(--color-primary-medium)',
					weak: 'var(--color-primary-weak)'
				},
				neutral: {
					DEFAULT: 'var(--color-neutral)',
					strong: 'var(--color-neutral-strong)',
					medium: 'var(--color-neutral-medium)',
					weak: 'var(--color-neutral-weak)'
				},
				section: {
					DEFAULT: 'var(--color-section)',
					strong: 'var(--color-section-strong)'
				},
				background: 'var(--color-background)',
				success: {
					DEFAULT: 'var(--color-success)',
					weak: 'var(--color-success-weak)'
				},
				danger: {
					DEFAULT: 'var(--color-danger)',
					weak: 'var(--color-danger-weak)'
				},
				warning: {
					DEFAULT: 'var(--color-warning)',
					weak: 'var(--color-warning-weak)'
				},
				info: {
					DEFAULT: 'var(--color-info)',
					weak: 'var(--color-info-weak)'
				},
			}
    },
  },
  plugins: [],
};
export default config;

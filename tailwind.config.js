module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('assets/img/beach.svg')",
        crab: "url('assets/img/crab-beach.svg')",
        sun: "url('assets/img/sun-beach.svg')",
        wave: "url('assets/img/wave.png')",
        people: "url('assets/img/people.svg')",
        emptybeach: "url('assets/img/empty-beach.jpg')",
        resort1: "url('assets/img/resorts/resort1.jpg')",
        resort2: "url('assets/img/resorts/resort2.jpg')",
        resort3: "url('assets/img/resorts/resort3.jpg')",
        resort4: "url('assets/img/resorts/resort4.jpg')",
        resort5: "url('assets/img/resorts/resort5.jpg')",
        resort6: "url('assets/img/resorts/resort6.jpg')",
      }),
      fontFamily: {
        heading: ["Volkhov"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

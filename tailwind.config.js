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
        glasses: "url('assets/img/two-glasses.jpg')",
        surf: "url('assets/img/surf.jpg')",
        shoe: "url('assets/img/shoe.jpg')",
        emptybeach: "url('assets/img/empty-beach.jpg')",
        spade: "url('assets/img/spade.jpg')",
        resort1: "url('assets/img/resorts/resort1.jpg')",
        resort2: "url('assets/img/resorts/resort2.jpg')",
        resort3: "url('assets/img/resorts/resort3.jpg')",
        resort4: "url('assets/img/resorts/resort4.jpg')",
        resort5: "url('assets/img/resorts/resort5.jpg')",
        resort6: "url('assets/img/resorts/resort6.jpg')",
        resort7: "url('assets/img/resorts/resort7.jpg')",
        resort8: "url('assets/img/resorts/resort8.jpg')",
        resort9: "url('assets/img/resorts/resort9.jpg')",
        resort10: "url('assets/img/resorts/resort10.jpg')",
        resort11: "url('assets/img/resorts/resort11.jpg')",
        resort14: "url('assets/img/resorts/resort14.jpg')",
        resort15: "url('assets/img/resorts/resort15.jpg')",
        resort16: "url('assets/img/resorts/resort16.jpg')",
        resort17: "url('assets/img/resorts/resort17.jpg')",
        resort18: "url('assets/img/resorts/resort18.jpg')",
        resort19: "url('assets/img/resorts/resort19.jpg')",
      }),
      fontFamily: {
        heading: ["LatoBold"],
      },
    },
  },
  variants: {
    extend: {
      textDecoration: ["active"],
      backgroundColor: ["active"],
      border: ["active"],
    },
  },
  plugins: [],
};

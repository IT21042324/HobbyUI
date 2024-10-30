import omeletteImage from "../assets/delicious omlettes.png";
import darkHumorImage from "../assets/dark_humour.png";
import darkerToneImage from "../assets/darker_tone.png";
import convoPractiseImage from "../assets/convo_practise.webp";
import gymEquipmentsImage from "../assets/gym_equipments.webp";
import dermotologyImage from "../assets/dermotology.webp";

export const imageContentBlockItems = [
  {
    largeCard: {
      image: omeletteImage,
      typography: "Indecisive? I'll tell you what to eat",
    },
    smallCard: {
      cardOne: {
        image: darkHumorImage,
        typography: "Dark humour and its leading figures",
      },
      cardTwo: {
        image: darkerToneImage,
        typography: "Imagination ignites in the shadows",
      },
    },
  },
  {
    message: "Topics I thought You'd enjoy",
    largeCard: {
      image: convoPractiseImage,
      typography: "Practise for a difficult conversation together",
    },
    smallCard: {
      cardOne: {
        image: gymEquipmentsImage,
        typography: "I can help compare gym equipments",
      },
      cardTwo: {
        image: dermotologyImage,
        typography: "Curious about skin care equipments?",
      },
    },
  },
];

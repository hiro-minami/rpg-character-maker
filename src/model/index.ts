// Images
const maleImages = new Map<string, string>();
maleImages.set(
  "Mage",
  "https://recursionist.io/img/dashboard/lessons/quickstart/male-mage.png"
);
maleImages.set(
  "Warrior",
  "https://recursionist.io/img/dashboard/lessons/quickstart/male-warrior.png"
);
maleImages.set(
  "Hero",
  "https://recursionist.io/img/dashboard/lessons/quickstart/male-hero.png"
);

const femaleImages = new Map<string, string>();
femaleImages.set(
  "Mage",
  "https://recursionist.io/img/dashboard/lessons/quickstart/female-mage.png"
);
femaleImages.set(
  "Warrior",
  "https://recursionist.io/img/dashboard/lessons/quickstart/female-warrior.png"
);
femaleImages.set(
  "Hero",
  "https://recursionist.io/img/dashboard/lessons/quickstart/female-hero.png"
);

// Traits
const traitsForMale: string[] = ["Everyman", "Bat out of hell", "Lucky devil"];
const traitsForFemale: string[] = ["Everyman", "Bat out of hell", "Tomboy"];
const traitsForMaleHero: string[] = [
  "Everyman",
  "Bat out of hell",
  "Brave",
  "Lucky devil",
];
const traitsForFemaleHero: string[] = [
  "Everyman",
  "Bat out of hell",
  "Brave",
  "Tomboy",
];

// Scores
const scoreOfStrength = new Map<string, number>();
scoreOfStrength.set("Mage", 100);
scoreOfStrength.set("Warrior", 110);
scoreOfStrength.set("Hero", 120);

const scoreOfAgility = new Map<string, number>();
scoreOfAgility.set("Mage", 120);
scoreOfAgility.set("Warrior", 110);
scoreOfAgility.set("Hero", 100);

const scoreOfResilience = new Map<string, number>();
scoreOfResilience.set("Mage", 110);
scoreOfResilience.set("Warrior", 120);
scoreOfResilience.set("Hero", 100);

const scoreOfWisdom = new Map<string, number>();
scoreOfWisdom.set("Mage", 120);
scoreOfWisdom.set("Warrior", 100);
scoreOfWisdom.set("Hero", 110);

const scoreOfLuck = new Map<string, number>();
scoreOfLuck.set("Mage", 100);
scoreOfLuck.set("Warrior", 110);
scoreOfLuck.set("Hero", 120);

export {
  maleImages,
  femaleImages,
  traitsForMale,
  traitsForFemale,
  traitsForMaleHero,
  traitsForFemaleHero,
  scoreOfStrength,
  scoreOfAgility,
  scoreOfResilience,
  scoreOfWisdom,
  scoreOfLuck,
};

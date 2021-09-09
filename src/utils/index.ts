import {
  maleImages,
  femaleImages,
  traitsForMale,
  traitsForMaleHero,
  traitsForFemale,
  traitsForFemaleHero,
  scoreOfStrength,
  scoreOfAgility,
  scoreOfResilience,
  scoreOfWisdom,
  scoreOfLuck,
} from "../model";

export const getPath = (gender: string, job: string) => {
  if (gender === "Male") return maleImages.get(job)!;
  else return femaleImages.get(job)!;
};

export const getTraitList = (gender: string, job: string) => {
  if (gender === "Male") {
    if (job === "Hero") return traitsForMaleHero;
    else return traitsForMale;
  } else {
    if (job === "Hero") return traitsForFemaleHero;
    else return traitsForFemale;
  }
};

export const getStrength = (job: string, trait: string) => {
  let score = scoreOfStrength.get(job)!;
  return trait === "Brave" || trait === "Tomboy"
    ? Math.floor(score! * 1.1)
    : score;
};

export const getAgility = (job: string, trait: string) => {
  let score = scoreOfAgility.get(job)!;
  if (trait === "Brave" || trait === "Tomboy") return Math.floor(score! * 1.1);
  else if (trait === "Bat out of hell") return Math.floor(score! * 1.4);
  else return score!;
};

export const getResilience = (job: string) => {
  return scoreOfResilience.get(job)!;
};

export const getWisdom = (job: string) => {
  return scoreOfWisdom.get(job)!;
};

export const getLuck = (job: string, trait: string) => {
  let score = scoreOfLuck.get(job)!;
  if (trait === "Brave") return Math.floor(score! * 1.2);
  else if (trait === "Lucky devil") return Math.floor(score! * 1.5);
  else return score!;
};

import {maleImages, femaleImages} from "../model"

export const getPath = (gender: string, job: string) => {
    if (gender === "Male") return maleImages.get(job)!;
    else return femaleImages.get(job)!;
}
import { getMockData } from "@/utils/getMockData";
import type { ITag } from "@/types";
import { getRandomColor } from "@/utils/getRandomColor";

const folders: ITag = [
  { id: 1, title: 'дом', bg: getRandomColor() },
  { id: 2, title: 'работа', bg: getRandomColor() },
  { id: 3, title: 'учеба', bg: getRandomColor() }
]

export default class Folder {
  async getFolders() {
    try {
      const success = await getMockData(folders)
      return success.data
    } catch (err) {
      return err
    }
  }
}

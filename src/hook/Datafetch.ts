import type { datavalue } from "../Data/sidebar";

export const recursivefunc = (item: datavalue) => {

  let list: String[] = [item.topic.replaceAll(' ', '')];


  if (item.subtopic) {
    item.subtopic.forEach((child) => {
      list = [...list, ...recursivefunc(child)];
    })
  }


  return list
} 
import type { IconType } from "@react-icons/all-files";
import { FaStackOverflow } from "@react-icons/all-files/fa/FaStackOverflow";
import { SiDatacamp } from "@react-icons/all-files/si/SiDatacamp";

export interface datavalue {
  topic: String;
  icon?: IconType;
  subtopic?: datavalue[];
}

export const sidebar = {
  topic: "Data Structure",
  icon: SiDatacamp,
  subtopic: [
    {
      topic: "Stack",
      icon: FaStackOverflow,
    },
    {
      icon: FaStackOverflow,
      topic: "Queue",
    },
    {
      topic: "Linked List",
      icon: FaStackOverflow,

      subtopic: [
        {
          topic: "Single Linked List",
        //   icon: FaStackOverflow,
        },
        {
          topic: "Double Linked List",
        //   icon: FaStackOverflow,
        },
        {
          topic: "Circular Linked List",
        //   icon: FaStackOverflow,
        },
      ],
    },
    // {
    //   topic: "Binary Tree",
    //   subtopic: [
    //     {
    //       topic: "complete B tree",
    //     },
    //   ],
    // },
    // {
    //   topic: "Binary Tree",
    //   subtopic: [
    //     {
    //       topic: "complete B tree",
    //     },
    //   ],
    // },
  ],
};

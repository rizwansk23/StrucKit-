import type { IconType } from "@react-icons/all-files";
import {
  Columns3,
  GitFork,
  Layers,
  LineDotRightHorizontalIcon,
  Waypoints,
  type LucideIcon,
} from "lucide-react";

export interface datavalue {
  topic: String;
  icon?: IconType | LucideIcon;
  subtopic?: datavalue[];
}

export const sidebar = {
  topic: "Data Structure",
  subtopic: [
    {
      topic: "Stack",
      icon: Layers,
    },
    {
      topic: "Queue",
      icon: Columns3,
    },
    {
      topic: "Linked List",
      icon: LineDotRightHorizontalIcon,
      subtopic: [
        {
          topic: "Single Linked List",
        },
        {
          topic: "Double Linked List",
        },
        {
          topic: "Circular Linked List",
        },
      ],
    },
    {
      topic: "Binary Tree",
      icon: GitFork,
      subtopic: [
        {
          topic: "Full Binary tree",
        },
        {
          topic: "Perfect Binary tree",
        },
        {
          topic: "Complete Binary tree",
        },
        {
          topic: "Degenerate Binary tree",
        },
        {
          topic: "Traverse",
        },
      ],
    },
    {
      topic: "Graphs",
      icon: Waypoints,
      subtopic: [
        {
          topic: "Graph",
        },
        {
          topic: "Prim's Algorithm",
        },
        {
          topic: "Kruskal's Algorithm",
        },
        {
          topic: "BFS",
        },
        {
          topic: "DFS",
        },
      ],
    },
  ],
};

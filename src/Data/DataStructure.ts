export interface dataProp {
  topic: string;
  type: string[];
  description: string;
  visual: string;
  complexity: {
    insert: ComplexityProp;
    delete: ComplexityProp;
    traverse: ComplexityProp;
    search: ComplexityProp;
  };
}

interface ComplexityProp {
  name: string;
  time_complexity: string;
  description: string;
}

export const dataStructures: Record<string, dataProp> = {
  Stack: {
    topic: "stack",
    type: ["LIFO", "Linear"],
    description:
      "Stack follows LIFO (Last In, First Out) principle. Elements are added (pushed) and removed (popped) from the same end called the top.",
    visual: "",
    complexity: {
      insert: {
        name: "push",
        time_complexity: "0(1)",
        description: "Add to top",
      },
      delete: {
        name: "pop",
        time_complexity: "0(1)",
        description: "Remove from top",
      },
      traverse: {
        name: "peek",
        time_complexity: "0(1)",
        description: "View top element",
      },
      search: {
        name: "search",
        time_complexity: "0(n)",
        description: " Scan all elements ",
      },
    },
  },
  Queue: {
    topic: "Queue",
    type: ["FIFO", "Linear"],
    description:
      "Queue follows FIFO (First In, First Out) principle. New elements are enqueued at the rear and dequeued from the front — like a real-world queue.",
    visual: "",
    complexity: {
      insert: {
        name: "Enqueue",
        time_complexity: "0(1)",
        description: "Add to rear",
      },
      delete: {
        name: "Dequeue",
        time_complexity: "0(1)",
        description: "Remove from front",
      },
      traverse: {
        name: "peek",
        time_complexity: "0(1)",
        description: "View front element",
      },
      search: {
        name: "search",
        time_complexity: "0(n)",
        description: " Scan all elements ",
      },
    },
  },
  SingleLinkedList: {
    topic: "Single Linked List",
    type: ["Dynamic", "Linear"],
    description:
      "A linear data structure where each node contains data and a pointer to the next node. Traversal is one-directional — you can only move forward.",
    visual: "",
    complexity: {
      insert: {
        name: "insert",
        time_complexity: "0(1)",
        description: "At head position",
      },
      delete: {
        name: "delete",
        time_complexity: "0(n)",
        description: "Find then remove",
      },
      traverse: {
        name: "access",
        time_complexity: "0(n)",
        description: "Traverse from head",
      },
      search: {
        name: "search",
        time_complexity: "0(n)",
        description: "Linear scan",
      },
    },
  },
  DoubleLinkedList: {
    topic: "Double Linked List",
    type: [ "Bidirectional",'Linear'],
    description:
      "Each node has two pointers — one to the next node and one to the previous node. This allows traversal in both directions.",
    visual: "",
    complexity: {
     insert: {
        name: "insert",
        time_complexity: "0(1)",
        description: "At head or tail",
      },
      delete: {
        name: "delete",
        time_complexity: "0(n)",
        description: "No backward search needed",
      },
      traverse: {
        name: "access",
        time_complexity: "0(n)",
        description: "From either end",
      },
      search: {
        name: "search",
        time_complexity: "0(n)",
        description: "Bi-directional scan",
      },
    },
  },
  CircularLinkedList: {
    topic: "Circular Linked List",
    type: ["Circular", "Dynamic"],
    description:
      "The last node points back to the first node instead of NULL, forming a circle. Useful for round-robin scheduling and cyclic data.",
    visual: "",
    complexity: {
     insert: {
        name: "insert",
        time_complexity: "0(1)",
        description: "Update tail pointer",
      },
      delete: {
        name: "delete",
        time_complexity: "0(n)",
        description: "Re-link nodes",
      },
      traverse: {
        name: "access",
        time_complexity: "0(n)",
        description: "Circular traverse",
      },
      search: {
        name: "search",
        time_complexity: "0(n)",
        description: "Stop at start again",
      },
    },
  },
};

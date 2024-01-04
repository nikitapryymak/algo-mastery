const BINARY_SEARCH = {
  name: "Binary Search",
  difficulty: 1,
  slug: "binary-search",
  question: `## Binary Search
  Given an array of integers \`nums\` which is sorted in ascending order, and an integer \`target\`, write a function to search \`target\` in \`nums\`. If \`target\` exists, then return its index. Otherwise, return \`-1\`.

  You must write an algorithm with \`O(log n)\` runtime complexity.
  #### Example 1:
  nums = \`[-1, 3, 9, 12]\`,  target = \`9\`\n
  Output: \`2\`\n
  Explanation: \`9\` exists in \`nums\` and its index is \`2\`

  #### Example 2:
  nums = \`[-1, 3, 9, 12]\`,  target = \`2\`\n
  Output: \`-1\`\n
  Explanation: \`2\` does not exist in \`nums\` so return \`-1\`
  `,
  solution: `\nclass Solution(object):\n\tdef search(self, nums, target):\n\t\tleft = 0\n\t\tright = len(nums) - 1\n\n\t\twhile left <= right:\n\t\t\tmid = (left + right) // 2\n\n\t\t\tif nums[mid] == target:\n\t\t\t\treturn mid\n\t\t\telif nums[mid] > target:\n\t\t\t\tright = mid - 1\n\t\t\telse:\n\t\t\t\tleft = mid + 1\n\n\t\treturn -1\n`,
  startingCode: `# nums: List[int]\n# target: int\nclass Solution:\n\tdef binary_search(self, nums, target):\n\t\t`,
};

const DFS = {
  name: "Depth-First Search",
  difficulty: 2,
  slug: "dfs",
};

const BFS = {
  name: "Breadth-First Search",
  difficulty: 2,
  slug: "bfs",
};

const INSERTION_SORT = {
  name: "Insertion Sort",
  difficulty: 1,
  slug: "insertion-sort",
};

const MERGE_SORT = {
  name: "Merge Sort",
  difficulty: 2,
  slug: "merge-sort",
};

const MERGE_SORT_LINKED_LIST = {
  name: "Merge Sort with Linked List",
  difficulty: 2,
  slug: "merge-sort-linked-list",
};

export const PROBLEM_MAP = {
  [BINARY_SEARCH.slug]: BINARY_SEARCH,
  [DFS.slug]: DFS,
  [BFS.slug]: BFS,
  [INSERTION_SORT.slug]: INSERTION_SORT,
  [MERGE_SORT.slug]: MERGE_SORT,
  [MERGE_SORT_LINKED_LIST.slug]: MERGE_SORT_LINKED_LIST,
};

const PROBLEMS = {
  A: [
    {
      section: "Searching",
      problems: [BINARY_SEARCH, BFS],
    },
    {
      section: "Sorting",
      problems: [INSERTION_SORT, MERGE_SORT, MERGE_SORT_LINKED_LIST],
    },
  ],
  DS: [
    {
      section: "Data Structures",
      problems: [
        {
          name: "Singly Linked List",
          difficulty: 1,
          slug: "singly-linked-list",
        },
        {
          name: "Doubly Linked List",
          difficulty: 1,
          slug: "doubly-linked-list",
        },
        {
          name: "Stack",
          difficulty: 1,
          slug: "stack",
        },
        {
          name: "Queue",
          difficulty: 1,
          slug: "queue",
        },
        {
          name: "Binary Tree",
          difficulty: 2,
          slug: "binary-tree",
        },
        {
          name: "Binary Search Tree",
          difficulty: 2,
          slug: "binary-search-tree",
        },
        {
          name: "Heap",
          difficulty: 2,
          slug: "heap",
        },
        {
          name: "Trie",
          difficulty: 2,
          slug: "trie",
        },
        {
          name: "Graph",
          difficulty: 2,
          slug: "graph",
        },
      ],
    },
  ],
  DP: [
    {
      section: "Design Patterns",
      problems: [
        {
          name: "Singleton",
          difficulty: 1,
          slug: "singleton",
        },
        {
          name: "Factory",
          difficulty: 1,
          slug: "factory",
        },
        {
          name: "Builder",
          difficulty: 1,
          slug: "builder",
        },
        {
          name: "Adapter",
          difficulty: 2,
          slug: "adapter",
        },
        {
          name: "Bridge",
          difficulty: 2,
          slug: "bridge",
        },
        {
          name: "Composite",
          difficulty: 2,
          slug: "composite",
        },
        {
          name: "Decorator",
          difficulty: 2,
          slug: "decorator",
        },
        {
          name: "Facade",
          difficulty: 2,
          slug: "facade",
        },
        {
          name: "Observer",
          difficulty: 2,
          slug: "observer",
        },
        {
          name: "Strategy",
          difficulty: 2,
          slug: "strategy",
        },
        {
          name: "Template",
          difficulty: 2,
          slug: "template",
        },
      ],
    },
  ],
};
export default PROBLEMS;

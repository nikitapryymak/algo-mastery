"use client";
import { useState } from "react";
import PracticeProblems from "../../components/practice/PracticeProblems";

const ALGORITHMS = "A";
const DATA_STRUCTURES = "DS";
const DESIGN_PATTERNS = "DP";
const ACTIVE_CLASSES = "text-slate-900 border-pink-400 bg-pink-400";

export default function Page() {
  const [problemType, setProblemType] = useState(ALGORITHMS);
  return (
    <div>
      <div className="flex gap-5 w-fit mx-auto mb-8">
        <button
          className={`btn-pill hover:text-slate-900 hover:border-pink-400 hover:bg-pink-400 ${
            problemType === ALGORITHMS ? ACTIVE_CLASSES : ""
          }`}
          onClick={() => setProblemType(ALGORITHMS)}
        >
          Algorithms
        </button>
        <button
          className={`btn-pill hover:text-slate-900 hover:border-pink-400 hover:bg-pink-400
          ${problemType === DATA_STRUCTURES ? ACTIVE_CLASSES : ""}
          `}
          onClick={() => setProblemType(DATA_STRUCTURES)}
        >
          Data Structures
        </button>
        <button
          className={`btn-pill hover:text-slate-900 hover:border-pink-400 hover:bg-pink-400
          ${problemType === DESIGN_PATTERNS ? ACTIVE_CLASSES : ""}
          `}
          onClick={() => setProblemType(DESIGN_PATTERNS)}
        >
          Design Patterns
        </button>
      </div>

      <PracticeProblems type={problemType} />
    </div>
  );
}

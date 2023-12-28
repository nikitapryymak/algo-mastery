"use client";
import { useRouter } from "next/navigation";
import PROBLEMS from "./problems";

const DIFFICULTY_COLORS = {
  1: "text-green-500",
  2: "text-orange-400",
  3: "text-red-500",
};
const DIFFICULTY_LABELS = {
  1: "Easy",
  2: "Medium",
  3: "Hard",
};

const PracticeProblems = ({ type }) => {
  const router = useRouter();
  const sections = PROBLEMS[type] || [];
  return (
    <div className="max-w-[600px] mx-auto">
      {sections.map(({ section, problems }) => (
        <div className="mb-10" key={section}>
          <h3 className="text-slate-200 font-semibold text-center mb-3">
            {section}
          </h3>
          <div className="overflow-x-auto">
            <table className="table rounded-xl bg-gray-900 overflow-hidden">
              <thead>
                <tr>
                  <th className="text-slate-100 font-semibold">Problem</th>
                  <th className="text-slate-100 font-semibold text-center">
                    Difficulty
                  </th>
                </tr>
              </thead>
              <tbody className="cursor-pointer">
                {problems.map(({ name, difficulty, slug }) => (
                  <tr
                    className="hover:bg-gray-950"
                    onClick={() => router.push(`/practice/${slug}`)}
                    key={name}
                  >
                    <td>{name}</td>
                    <td
                      className={`text-center ${DIFFICULTY_COLORS[difficulty]}`}
                    >
                      {DIFFICULTY_LABELS[difficulty]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PracticeProblems;

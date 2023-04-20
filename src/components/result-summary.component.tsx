import MemoryIcon from "@/assets/icon-memory.svg";
import ReactionIcon from "@/assets/icon-reaction.svg";
import VerbalIcon from "@/assets/icon-verbal.svg";
import VisualIcon from "@/assets/icon-visual.svg";
import ResultHeader from "./result-header.component";
import Image from "next/image";
import SummaryRow from "./summary-item.component";

const summaryItems = [
  {
    title: "Reaction",
    icon: ReactionIcon,
    className: "bg-primary_light_red text-primary_light_red",
    value: "80",
  },
  {
    title: "Memory",
    icon: MemoryIcon,
    className: "bg-primary_orangey_yellow text-primary_orangey_yellow",
    value: "92",
  },
  {
    title: "Verbal",
    icon: VerbalIcon,
    className: "bg-primary_green_teal text-primary_green_teal",
    value: "61",
  },
  {
    title: "Visual",
    icon: VisualIcon,
    className: "bg-primary_cobalt_blue text-primary_cobalt_blue",
    value: "72",
  },
];

function ResultSummary() {
  return (
    <div className="grid content-start gap-8 p-10">
      <h2 className="text-2xl font-bold">Summary</h2>

      <div className="grid content-start gap-4">
        {summaryItems.map((item) => (
          <SummaryRow key={item.title} {...item} />
        ))}
      </div>

      <button className="px-8 py-4 text-white rounded-full cursor-pointer bg-neutral_dark_gray_blue hover:bg-gradient-to-t hover:from-gradient_light_royal_blue hover:to-gradient_light_slate_blue">
        Continue
      </button>
    </div>
  );
}

export default ResultSummary;

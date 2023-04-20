import Image from "next/image";

function SummaryItem({
  title,
  icon,
  className,
  value,
}: {
  icon: string;
  title: string;
  className: string;
  value: string;
}) {
  return (
    <div
      className={`${className} flex items-center justify-between p-4 rounded-lg  bg-opacity-[0.1]`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <Image alt="" src={icon} />
        <h3 className="font-bold">{title}</h3>
      </div>
      <div className="font-black text-opacity-50 text-neutral_dark_gray_blue">
        <span className="text-opacity-100 text-neutral_dark_gray_blue">
          {value}
        </span>{" "}
        / 100
      </div>
    </div>
  );
}

export default SummaryItem;

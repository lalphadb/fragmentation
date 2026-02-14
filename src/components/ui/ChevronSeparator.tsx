interface ChevronSeparatorProps {
  bgTop?: string;
  bgBottom?: string;
}

export default function ChevronSeparator({ bgTop = "bg-navy-950", bgBottom = "bg-white" }: ChevronSeparatorProps) {
  return (
    <div className={`relative h-[60px] ${bgBottom}`}>
      <div
        className={`absolute inset-0 ${bgTop}`}
        style={{ clipPath: "polygon(0 0, 50% 100%, 100% 0)" }}
      />
    </div>
  );
}

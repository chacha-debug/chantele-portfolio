import Drift from "./Drift";

/** Section numeral + name. The numeral drifts slightly as you scroll past. */
export default function SectionLabel({
  n,
  label,
  dark = false,
}: {
  n: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <Drift amount={60}>
      <div className="drift-y flex items-baseline gap-3 lg:flex-col lg:items-start lg:gap-0">
        <span
          className={`text-[clamp(3.25rem,7vw,6.5rem)] font-extrabold leading-[0.9] tracking-[-0.05em] ${
            dark ? "text-burnt-bright" : "text-burnt"
          }`}
        >
          {n}.
        </span>
        <span className="text-sm uppercase tracking-[0.08em]">{label}</span>
      </div>
    </Drift>
  );
}

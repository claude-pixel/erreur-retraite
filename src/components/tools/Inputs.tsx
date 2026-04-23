"use client";

import { fmt } from "@/lib/format";

export function NumberField({
  label,
  value,
  onChange,
  suffix,
  min,
  max,
  step = 1,
  hint,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  suffix?: string;
  min?: number;
  max?: number;
  step?: number;
  hint?: string;
}) {
  return (
    <label className="block mb-6">
      <div className="flex justify-between items-baseline mb-2">
        <span className="text-[0.95rem] font-semibold text-ink">{label}</span>
        {hint ? <span className="text-[0.78rem] text-muted">{hint}</span> : null}
      </div>
      <div className="relative">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value) || 0)}
          min={min}
          max={max}
          step={step}
          className="w-full px-4 py-3 pr-16 border-[1.5px] border-rule-2 rounded-xl bg-paper text-[1.1rem] font-bold text-ink focus:outline-none focus:border-emerald focus:ring-4 focus:ring-emerald/15 transition-all"
        />
        {suffix ? (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted text-[0.95rem] font-medium pointer-events-none">
            {suffix}
          </span>
        ) : null}
      </div>
    </label>
  );
}

export function SliderField({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  suffix,
  displayValue,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  min: number;
  max: number;
  step?: number;
  suffix?: string;
  displayValue?: string;
}) {
  const percent = ((value - min) / (max - min)) * 100;
  return (
    <label className="block mb-6">
      <div className="flex justify-between items-baseline mb-3">
        <span className="text-[0.95rem] font-semibold text-ink">{label}</span>
        <span className="text-[1.05rem] font-bold text-emerald">
          {displayValue ?? `${fmt(value)}${suffix ? " " + suffix : ""}`}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="tool-slider"
        style={{
          background: `linear-gradient(to right, #0c7558 0%, #0c7558 ${percent}%, #e3ded0 ${percent}%, #e3ded0 100%)`,
        }}
      />
      <div className="flex justify-between mt-1 text-[0.75rem] text-muted">
        <span>{fmt(min)}{suffix ? " " + suffix : ""}</span>
        <span>{fmt(max)}{suffix ? " " + suffix : ""}</span>
      </div>
    </label>
  );
}

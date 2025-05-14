import type {SectionBlockProps} from "../model/TimeLineItem.ts";

export default function SectionBlock({ title, items }: SectionBlockProps) {
  return (
    <section className="mb-6">
      <h3 className="text-[rgb(var(--primary))] font-bold uppercase tracking-wide mb-2 border-b-2 border-[rgb(var(--primary))] inline-block">
        {title}
      </h3>

      <div className="space-y-4 mt-2 text-sm text-[rgb(var(--text))]">
        {items.map((item, index) => (
          <div key={index}>
            <p className="text-[rgb(var(--primary))] font-semibold">{item.date}</p>
            <p className="whitespace-pre-line">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

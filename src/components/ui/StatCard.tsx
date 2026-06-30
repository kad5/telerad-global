import { NumberTicker } from "./number-ticker"

function StatCard({ isRtl, title }: { isRtl: boolean; title: string }) {
  return (
    <div className="border-b pb-2 text-center lg:absolute lg:top-15 lg:left-40">
      <span className="mb-2 block text-3xl font-bold">
        {isRtl ? (
          <>
            +<NumberTicker value={9999} />
          </>
        ) : (
          <>
            <NumberTicker value={9999} />+
          </>
        )}
      </span>
      <span className="block text-sm font-bold whitespace-pre-line">
        {title}
      </span>
      <span className="block text-xs whitespace-pre-line">
        {isRtl
          ? "تمت مراجعتها طبياً \nوتوقيعها بواسطة استشارينا"
          : "All reports medically \n audited & legally signed"}
      </span>
    </div>
  )
}

export default StatCard

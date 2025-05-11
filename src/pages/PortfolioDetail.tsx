export default function PortfolioDetail() {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-[rgb(var(--text))]">Portfolio Detail</h2>
            <div className="bg-[rgb(var(--primary)/0.2)] p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[rgb(var(--text))]">Portfolio Name</h3>
                <p className="text-[rgb(var(--text)/0.7)]">This is a detailed description of the portfolio.</p>
            </div>
        </div>
    )
}
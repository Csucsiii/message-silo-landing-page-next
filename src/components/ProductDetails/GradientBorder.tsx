const GradientBorder = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="border-[0.25rem] border-transparent rounded-xl bg-grid-item-border bg-clip-padding p-1">{children}</div>
    );
};


export default GradientBorder;
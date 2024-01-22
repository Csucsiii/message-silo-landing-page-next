const ProductContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full p-4 bg-[#002a53] rounded-lg backdrop-blur-md min-h-[15.625rem]">
            {children}
        </div>
    );
};

export default ProductContainer;

import type {FC} from "react";
import SearchBar from "./SearchBar";
import puppyImage from "../assets/petFinderSection/puppy.avif";
import dogImage from "../assets/petFinderSection/dog.avif";
import kittenImage from "../assets/petFinderSection/kitten.avif";
import catImage from "../assets/petFinderSection/cat.avif";


interface CategoryCardProps {
    image: string;
    label: string;
    onClick?: () => void;
}

const CategoryCard: FC<CategoryCardProps> = ({image, label, onClick}) => {
    return (
        <div
            onClick={onClick}
            className="bg-white overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer hover:scale-105 flex flex-col"
            style={{
                width: '280px',
                height: '203px',
                borderRadius: '15px',
                opacity: 1,
            }}
        >
            <div style={{height: '150px', width: '100%'}}>
                <img
                    src={image}
                    alt={label}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-3 text-center flex-1 flex items-center justify-center">
                <h3
                    className="text-gray-800"
                    style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 600,
                        fontSize: '16px',
                    }}
                >
                    {label}
                </h3>
            </div>
        </div>
    );
};

const RightCategoryGrid: FC = () => {
    const categories = [
        {label: "Puppies", image: puppyImage},
        {label: "Dogs (Adults and Senior)", image: dogImage},
        {label: "Kittens", image: kittenImage},
        {label: "Cats (Adults and Senior)", image: catImage},
    ];

    return (
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-10 relative z-0 bg-[#F5F5F5] md:bg-transparent">
            <div className="relative z-10 w-full max-w-2xl space-y-8">
                <SearchBar/>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
                    {categories.map((category, index) => (
                        <CategoryCard
                            key={index}
                            image={category.image}
                            label={category.label}
                            onClick={() => console.log(`Clicked: ${category.label}`)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RightCategoryGrid;

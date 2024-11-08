export default function PostCategories({ categories }) {

    return (
        <div className="p-2 flex gap-2">
            {categories.map((category, index) => (
                <div key={index} className="border border-[#636363] px-2 py-0.5 rounded-full text-white text-[16px] font-normal">{category}</div>
            ))}

        </div>
    )
}
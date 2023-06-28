
const SectionTitle = ({ title, colorTitle, subTitle }) => {
    return (
        <div className="mx-1 lg:mx-20 mb-10 text-center">
            <h2 className="text-3xl font-semibold">{title} <span className="text-orange-600">{colorTitle}</span></h2>
            <p>{subTitle}</p>
        </div>
    );
};

export default SectionTitle;
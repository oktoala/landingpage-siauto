import HeroImage from "./HeroImage";
import HeroIcon from "../icons/heroimg.svg";

const FeatureSection = (props) => {

    return (
        <div className={`relative mt-20 ${props.class}`}>
            <div className={`container flex flex-col ${props.dir === "left" ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-center gap-x-24`}>
                <HeroImage src={HeroIcon} />
                <div className="flex flex-1 flex-col items-center lg:items-start">
                    <h1 className="text-3xl text-bookmark-blue">{props.nameFeature}</h1>
                    <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">{props.children}</p>
                </div>
            </div>
            {props.shape}
        </div>
    );
}

export default FeatureSection;
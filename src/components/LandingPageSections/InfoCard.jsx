import { motion } from "motion/react";

const InfoCard = ({ detail, isMobile = true, cardVariants = {} }) => {

    return (
        <motion.div
        className={`${isMobile ? 'lg:hidden' : 'hidden lg:block'} col-start-1 col-end-4 lg:col-end-8 ${detail.customClasses} rounded-2xl h-32 p-5 lg:pl-10 lg:py-8 text-white`} 
        variants={isMobile ? cardVariants : {}}
        whileHover={isMobile ? {} : { scale: 0.95 }}>
            <div className="flex gap-5">
                <img src={detail.icon} alt={detail.altText} className="w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] self-end" />
                <div className={detail.textWidth}>
                    <p className="text-white font-bold text-sm lg:text-lg">{detail.title}</p>
                    <p className="text-white font-medium text-xs">{detail.description}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default InfoCard;
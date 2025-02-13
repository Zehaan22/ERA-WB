import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { sponsors } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const SponsorCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const Sponsors = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>These are our sponsors:</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        The kid hearts that make ERA possible.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {sponsors.map((service, index) => (
          <SponsorCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Sponsors, 'sponsors');
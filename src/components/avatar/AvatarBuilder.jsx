import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomAvatar from './CustomAvatar';
import { Check } from 'lucide-react';

const SKIN_TONES = [
  '#fdf6e3', '#fae7d0', '#ffdbac', '#f1c27d', '#e8b796', 
  '#e0ac69', '#d29972', '#c68642', '#b27652', '#a05f35', 
  '#8d5524', '#714019', '#5c3311', '#47260c', '#291404'
];

const MALE_HAIR = ['none', 'buzz_cut', 'spiky', 'undercut', 'curly_afro', 'combed_over'];
const FEMALE_HAIR = ['none', 'long_straight', 'bob_cut', 'curly_locks', 'side_part', 'ponytail'];

const MALE_TOPS = ['none', 'tshirt', 'hoodie', 'void_tee', 'varsity_jacket', 'street_ls', 'track_jacket', 'tank_top', 'polo', 'button_up', 'sweater', 'puffer', 'turtleneck', 'overcoat', 'graphic_tee', 'denim_jacket'];
const FEMALE_TOPS = ['none', 'croptop', 'blouse', 'pink_star', 'plaid_halter', 'blue_dream', 'butterfly_top', 'white_cardigan', 'tube_top', 'sweater_dress', 'oversized_hoodie', 'off_shoulder', 'corset', 'leather_jacket', 'kimono', 'sports_bra'];

const MALE_BOTTOMS = ['none', 'shorts', 'jeans', 'cargo_pants', 'baggy_chain', 'track_pants', 'wide_denim', 'sweatpants', 'chinos', 'ripped_jeans', 'cargo_shorts', 'dress_pants', 'camo_pants', 'board_shorts', 'corduroy', 'leather_pants'];
const FEMALE_BOTTOMS = ['none', 'skirt', 'leggings', 'pink_cargo', 'plaid_skirt', 'star_cargo', 'purple_pleated', 'khaki_mini', 'flared_jeans', 'sweatpants', 'biker_shorts', 'ripped_jeans', 'denim_skirt', 'leather_pants', 'wide_trousers', 'maxi_skirt'];

const MALE_ACC = ['none', 'glasses', 'sunglasses', 'cap', 'beanie', 'cross_earring', 'chain', 'mask', 'headband', 'cyber_goggles', 'bandana', 'choker', 'scarf', 'nose_ring', 'headset'];
const FEMALE_ACC = ['none', 'glasses', 'bear_buns', 'star_clips', 'backwards_cap', 'purple_tie', 'butterfly_clip', 'choker', 'hoop_earrings', 'ribbon_bow', 'cat_ears', 'sunglasses', 'beanie', 'scarf', 'beret', 'watch', 'hair_band', 'earrings', 'baseball_cap'];

const STEPS = ['gender', 'skinTone', 'hair', 'top', 'bottom', 'accessory'];
const STEP_LABELS = {
  gender: 'Select Gender',
  skinTone: 'Choose Skin Tone',
  hair: 'Pick Hair Style',
  top: 'Pick a Top',
  bottom: 'Pick a Bottom',
  accessory: 'Add Accessories'
};

const AvatarBuilder = ({ initialConfig, onSave }) => {
  const [config, setConfig] = useState(() => {
    if (initialConfig) {
      const base = { ...initialConfig };
      if (base.gender === 'female' && (!base.hair || base.hair === 'none')) {
        base.hair = 'long_straight';
      }
      return base;
    }
    return {
      gender: 'male',
      skinTone: '#fdf6e3',
      hair: 'none',
      top: 'none',
      bottom: 'none',
      accessory: 'none',
    };
  });
  
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const currentStep = STEPS[currentStepIndex];

  // Reset options only when gender changes
  const prevGender = useRef(config.gender);
  useEffect(() => {
    if (prevGender.current !== config.gender) {
      prevGender.current = config.gender;
      setConfig(prev => ({
        ...prev,
        hair: config.gender === 'female' ? 'long_straight' : 'none',
        top: 'none',
        bottom: 'none',
        accessory: 'none'
      }));
    }
  }, [config.gender]);

  const handleUpdate = (key, value) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };
  
  const nextStep = () => {
    if (currentStepIndex < STEPS.length - 1) setCurrentStepIndex(currentStepIndex + 1);
  };
  
  const prevStep = () => {
    if (currentStepIndex > 0) setCurrentStepIndex(currentStepIndex - 1);
  };

  const getOptionsForStep = () => {
    switch (currentStep) {
      case 'gender': return ['male', 'female'];
      case 'skinTone': return SKIN_TONES;
      case 'hair': return config.gender === 'female' ? FEMALE_HAIR : MALE_HAIR;
      case 'top': return config.gender === 'female' ? FEMALE_TOPS : MALE_TOPS;
      case 'bottom': return config.gender === 'female' ? FEMALE_BOTTOMS : MALE_BOTTOMS;
      case 'accessory': return config.gender === 'female' ? FEMALE_ACC : MALE_ACC;
      default: return [];
    }
  };

  // Render option previews dynamically using the CustomAvatar component in gray mannequin mode
  const renderClothingPreview = (option, step) => {
    if (option === 'none') {
      return <span className="text-[10px] sm:text-xs font-black text-gray-400 uppercase">None</span>;
    }

    const mannequinSkin = "#e2e8f0";
    let zoomClass = "scale-[1.2] translate-y-2";

    if (step === 'hair' || step === 'accessory') {
      zoomClass = "scale-[1.9] translate-y-[38px]";
    } else if (step === 'top') {
      zoomClass = "scale-[1.6] translate-y-[10px]";
    } else if (step === 'bottom') {
      zoomClass = "scale-[1.7] translate-y-[-35px]";
    }

    return (
      <div className="w-full h-full overflow-hidden rounded-neo bg-slate-50 flex items-center justify-center">
        <CustomAvatar
          gender={config.gender}
          skinTone={mannequinSkin}
          hair={step === 'hair' ? option : 'none'}
          top={step === 'top' ? option : 'none'}
          bottom={step === 'bottom' ? option : 'none'}
          accessory={step === 'accessory' ? option : 'none'}
          className={`w-full h-full pointer-events-none transition-transform duration-200 ${zoomClass}`}
        />
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col items-center justify-center font-sans relative">

      {/* Main Container - Neobrutalism Card */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-neo border-[4px] border-black shadow-neo-lg relative z-10 overflow-hidden">
        
        {/* Left Panel */}
        <div className="w-full md:w-[40%] p-6 sm:p-8 md:p-12 flex flex-col items-center justify-center border-b-[4px] md:border-b-0 md:border-r-[4px] border-black bg-neo-purple/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black mb-6 md:mb-12 uppercase tracking-tight">Your Avatar</h2>
          
          {/* Avatar Container */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full border-[4px] border-black shadow-neo-base bg-white flex items-center justify-center relative overflow-hidden mb-6 md:mb-12"
          >
            <CustomAvatar 
              gender={config.gender} 
              skinTone={config.skinTone}
              hair={config.hair}
              top={config.top}
              bottom={config.bottom}
              accessory={config.accessory}
              className="w-full h-full scale-[1.1] translate-y-2" 
            />
          </motion.div>
          
          {/* Save Button */}
          {currentStepIndex === STEPS.length - 1 && (
            <button 
              onClick={() => onSave && onSave(config)}
              className="neo-btn-primary w-full py-3 sm:py-3.5 md:py-4 text-base sm:text-lg md:text-xl uppercase tracking-widest"
            >
              Save Avatar
            </button>
          )}
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-[60%] p-4 sm:p-6 md:p-10 flex flex-col h-[480px] md:h-[600px] bg-white">
          
          {/* Header */}
          <div className="flex justify-between items-end mb-6 md:mb-8 border-b-4 border-black pb-3 md:pb-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-black tracking-tight">{STEP_LABELS[currentStep]}</h3>
            <div className="neo-badge bg-neo-purple text-white text-xs sm:text-sm">
              Step {currentStepIndex + 1} of {STEPS.length}
            </div>
          </div>

          {/* Options Grid */}
          <div className="flex-1 overflow-y-auto pr-2 md:pr-4 mb-4 custom-scrollbar">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5"
              >
                {getOptionsForStep().map(option => {
                  const isSelected = config[currentStep] === option;
                  return (
                    <button
                      key={option}
                      onClick={() => handleUpdate(currentStep, option)}
                      className={`aspect-square rounded-neo flex flex-col items-center justify-center relative transition-all duration-150 border-[3px] border-black p-1 sm:p-2
                        ${isSelected 
                          ? 'bg-neo-teal shadow-neo-sm translate-x-[-2px] translate-y-[-2px]' 
                          : 'bg-white hover:bg-gray-100 hover:shadow-neo-sm hover:translate-x-[-2px] hover:translate-y-[-2px]'
                        }`}
                    >
                      {currentStep === 'skinTone' ? (
                        <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-black" style={{ backgroundColor: option }} />
                      ) : currentStep === 'gender' ? (
                        <span className="text-sm sm:text-base md:text-lg font-black text-black uppercase">{option}</span>
                      ) : (
                        renderClothingPreview(option, currentStep)
                      )}
                      
                      {currentStep !== 'skinTone' && currentStep !== 'gender' && option !== 'none' && (
                        <span className="absolute bottom-0.5 sm:bottom-1 w-full text-[7px] sm:text-[9px] font-black uppercase text-black text-center truncate px-1">
                          {option.replace(/_/g, ' ')}
                        </span>
                      )}

                      {isSelected && (
                        <div className="absolute -top-3 -right-3 bg-white border-2 border-black rounded-full p-1 shadow-neo-sm z-20">
                          <Check size={16} strokeWidth={4} className="text-black" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-4 pt-4 border-t-4 border-black">
             <button 
               onClick={prevStep}
               className={`neo-btn-white px-8 py-3 text-lg ${currentStepIndex === 0 ? 'opacity-50 cursor-not-allowed shadow-none translate-x-1 translate-y-1' : ''}`}
               disabled={currentStepIndex === 0}
             >
               Back
             </button>
             
             <button 
               onClick={nextStep}
               className={`neo-btn-primary px-8 py-3 text-lg ${currentStepIndex === STEPS.length - 1 ? 'opacity-50 cursor-not-allowed shadow-none translate-x-1 translate-y-1' : ''}`}
               disabled={currentStepIndex === STEPS.length - 1}
             >
               Next
             </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AvatarBuilder;

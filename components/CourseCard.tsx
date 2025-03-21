import LanguageIcon from './LanguageIcon';

const CourseCard = ({ language, description, levels, learners, isPopular }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="bg-blue-500 h-40 flex items-center justify-center">
        <LanguageIcon language={language} />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-blue-700">{language}</h3>
          <div className="flex gap-2">
            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">EDU Rewards</span>
            {isPopular && <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Popular</span>}
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <span>{levels} Levels</span>
          <span>{learners} Learners</span>
        </div>
        
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition">
          START LEARNING
        </button>
      </div>
    </div>
  );
}; 
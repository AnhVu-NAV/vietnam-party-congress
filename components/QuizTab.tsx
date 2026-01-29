import React, { useState, useEffect, useRef } from 'react';
import { PartyCongress } from '../types';
import { Award, Clock, Zap, RotateCcw, Brain, Trophy, Check, X } from 'lucide-react';

interface QuizTabProps {
  data: PartyCongress[];
}

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
  type: 'year' | 'leader' | 'location' | 'delegates';
}

type GameState = 'intro' | 'playing' | 'finished';

const QUESTIONS_PER_GAME = 10;
const TIME_PER_QUESTION = 15; // seconds

const QuizTab: React.FC<QuizTabProps> = ({ data }) => {
  const [gameState, setGameState] = useState<GameState>('intro');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // --- Game Logic Helpers ---

  const generateQuestions = () => {
    const newQuestions: Question[] = [];
    const shuffledData = [...data].sort(() => 0.5 - Math.random());

    // Generate different types of questions
    shuffledData.slice(0, QUESTIONS_PER_GAME).forEach((congress, index) => {
      const typeRoll = Math.random();
      let q: Question;

      // Helper to get random wrong answers
      const getDistractors = (correct: string, pool: string[]) => {
        const uniquePool = Array.from(new Set(pool)).filter(i => i !== correct);
        return uniquePool.sort(() => 0.5 - Math.random()).slice(0, 3);
      };

      if (typeRoll < 0.25) {
        // Question: Leader
        const pool = data.map(c => c.leaderElected.name);
        const distractors = getDistractors(congress.leaderElected.name, pool);
        q = {
          id: index,
          type: 'leader',
          text: `Ai được bầu làm ${congress.leaderElected.title} tại Đại hội lần thứ ${congress.romanNumeral}?`,
          correctAnswer: congress.leaderElected.name,
          options: [...distractors, congress.leaderElected.name].sort(() => 0.5 - Math.random())
        };
      } else if (typeRoll < 0.5) {
        // Question: Year
        const pool = data.map(c => c.year.toString());
        const distractors = getDistractors(congress.year.toString(), pool);
        q = {
          id: index,
          type: 'year',
          text: `Đại hội đại biểu toàn quốc lần thứ ${congress.romanNumeral} diễn ra vào năm nào?`,
          correctAnswer: congress.year.toString(),
          options: [...distractors, congress.year.toString()].sort(() => 0.5 - Math.random())
        };
      } else if (typeRoll < 0.75) {
        // Question: Location
        // Filter out duplicates for location to make distractors valid
        const pool = Array.from(new Set(data.map(c => c.location)));
        // If pool is small (e.g. mostly Hanoi), ensure we have enough options. 
        // Since we mostly have Hanoi, let's hardcode some locations if needed or just skip this type if pool is small.
        if (pool.length < 3) {
           // Fallback to Delegates question
           const delPool = data.map(c => c.delegates.toString());
           const dist = getDistractors(congress.delegates.toString(), delPool);
           q = {
             id: index,
             type: 'delegates',
             text: `Có bao nhiêu đại biểu tham dự Đại hội lần thứ ${congress.romanNumeral}?`,
             correctAnswer: congress.delegates.toString(),
             options: [...dist, congress.delegates.toString()].sort(() => 0.5 - Math.random())
           }
        } else {
           const distractors = getDistractors(congress.location, pool);
           q = {
            id: index,
            type: 'location',
            text: `Đại hội lần thứ ${congress.romanNumeral} được tổ chức tại địa điểm nào?`,
            correctAnswer: congress.location,
            options: [...distractors, congress.location].sort(() => 0.5 - Math.random())
          };
        }
      } else {
        // Question: Theme/Context (Simplified)
        // Find which congress happened in a specific year
        const pool = data.map(c => `Đại hội ${c.romanNumeral}`);
        const correct = `Đại hội ${congress.romanNumeral}`;
        const distractors = getDistractors(correct, pool);
        q = {
          id: index,
          type: 'year', // Reuse type key for logic
          text: `Sự kiện nào diễn ra vào năm ${congress.year}?`,
          correctAnswer: correct,
          options: [...distractors, correct].sort(() => 0.5 - Math.random())
        };
      }
      newQuestions.push(q);
    });

    setQuestions(newQuestions);
  };

  const startGame = () => {
    generateQuestions();
    setScore(0);
    setStreak(0);
    setCurrentQIndex(0);
    setGameState('playing');
    startTimer();
  };

  const startTimer = () => {
    setTimeLeft(TIME_PER_QUESTION);
    setIsAnswered(false);
    setSelectedOption(null);
    
    if (timerRef.current) clearInterval(timerRef.current);
    
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleTimeOut();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleTimeOut = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsAnswered(true);
    setStreak(0);
    setTimeout(nextQuestion, 2000);
  };

  const handleAnswer = (option: string) => {
    if (isAnswered) return;
    
    if (timerRef.current) clearInterval(timerRef.current);
    setIsAnswered(true);
    setSelectedOption(option);

    const currentQ = questions[currentQIndex];
    const isCorrect = option === currentQ.correctAnswer;

    if (isCorrect) {
      // Calculate Score: Base points + Time bonus + Streak bonus
      const timeBonus = Math.round(timeLeft * 10);
      const streakBonus = streak * 50;
      setScore(prev => prev + 100 + timeBonus + streakBonus);
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }

    setTimeout(nextQuestion, 1500);
  };

  const nextQuestion = () => {
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex(prev => prev + 1);
      startTimer();
    } else {
      setGameState('finished');
    }
  };

  // Cleanup
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // --- Renderers ---

  if (gameState === 'intro') {
    return (
      <div className="bg-white rounded-xl shadow-lg border-b-4 border-red-800 overflow-hidden min-h-[500px] flex flex-col items-center justify-center p-8 text-center relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="bg-red-100 p-6 rounded-full mb-6 animate-bounce">
          <Brain className="w-16 h-16 text-cpv-red" />
        </div>
        
        <h2 className="text-4xl font-serif font-bold text-cpv-red mb-4">Thử thách Lịch sử Đảng</h2>
        <p className="text-gray-600 max-w-md mb-8 text-lg">
          Bạn có <b>{QUESTIONS_PER_GAME} câu hỏi</b>. Mỗi câu có <b>{TIME_PER_QUESTION} giây</b>. 
          Trả lời nhanh và chính xác để đạt điểm tối đa!
        </p>
        
        <button 
          onClick={startGame}
          className="group relative px-8 py-4 bg-cpv-red text-white text-xl font-bold rounded-full shadow-xl hover:bg-red-700 transition-all hover:scale-105 active:scale-95"
        >
          <span className="flex items-center gap-2">
            Bắt đầu ngay <Zap className="w-5 h-5 fill-yellow-400 text-yellow-400 group-hover:animate-pulse" />
          </span>
        </button>
      </div>
    );
  }

  if (gameState === 'finished') {
    let rank = "Đảng viên trẻ";
    if (score > 3000) rank = "Nhà Sử học";
    else if (score > 2000) rank = "Cán bộ Nguồn";
    else if (score > 1000) rank = "Bí thư Chi bộ";

    return (
      <div className="bg-white rounded-xl shadow-lg border-b-4 border-yellow-600 overflow-hidden min-h-[500px] flex flex-col items-center justify-center p-8 text-center animate-in zoom-in duration-300">
        <Trophy className="w-24 h-24 text-yellow-500 mb-6 drop-shadow-md" />
        
        <h3 className="text-2xl font-bold text-gray-500 uppercase tracking-widest mb-2">Tổng điểm của bạn</h3>
        <div className="text-6xl font-black text-cpv-red mb-6">{score.toLocaleString()}</div>
        
        <div className="bg-yellow-50 border border-yellow-200 px-6 py-3 rounded-lg mb-8">
          <span className="text-gray-600 mr-2">Danh hiệu:</span>
          <span className="text-xl font-bold text-yellow-800 uppercase">{rank}</span>
        </div>

        <button 
          onClick={startGame}
          className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white font-bold rounded-lg hover:bg-black transition-colors"
        >
          <RotateCcw className="w-5 h-5" /> Chơi lại
        </button>
      </div>
    );
  }

  const currentQ = questions[currentQIndex];
  const progressPercent = ((currentQIndex) / QUESTIONS_PER_GAME) * 100;
  const timePercent = (timeLeft / TIME_PER_QUESTION) * 100;

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden min-h-[600px] flex flex-col relative">
      
      {/* Top Bar */}
      <div className="bg-gray-900 text-white p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 uppercase font-bold">Câu hỏi</span>
            <span className="text-xl font-bold text-yellow-400">{currentQIndex + 1}<span className="text-gray-500 text-sm">/{QUESTIONS_PER_GAME}</span></span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 uppercase font-bold">Điểm số</span>
            <span className="text-xl font-bold">{score}</span>
          </div>
        </div>

        <div className="flex flex-col items-end">
           <span className="text-xs text-gray-400 uppercase font-bold mb-1 flex items-center gap-1">
             <Zap className="w-3 h-3 text-yellow-400" /> Chuỗi đúng
           </span>
           <div className="flex gap-1">
             {[...Array(3)].map((_, i) => (
               <div key={i} className={`w-2 h-6 rounded-full transition-all ${i < streak % 4 ? 'bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.8)]' : 'bg-gray-700'}`}></div>
             ))}
           </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-gray-200">
        <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${progressPercent}%` }}></div>
      </div>

      {/* Timer Bar (Countdown) */}
      <div className="w-full h-2 bg-gray-100 relative">
         <div 
            className={`h-full transition-all duration-1000 linear ${timeLeft < 5 ? 'bg-red-500' : 'bg-green-500'}`} 
            style={{ width: `${timePercent}%` }}
         ></div>
      </div>

      {/* Question Area */}
      <div className="flex-1 p-6 md:p-10 flex flex-col justify-center items-center relative">
        {/* Timer floating badge */}
        <div className="absolute top-4 right-4 w-12 h-12 rounded-full border-4 border-gray-100 flex items-center justify-center font-bold text-gray-700 shadow-sm">
           {timeLeft}
        </div>

        <div className="max-w-2xl w-full text-center z-10">
           <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-10 leading-tight">
             {currentQ.text}
           </h3>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {currentQ.options.map((option, idx) => {
               let btnClass = "bg-white border-2 border-gray-200 text-gray-700 hover:border-blue-400 hover:bg-blue-50"; // Default
               
               if (isAnswered) {
                 if (option === currentQ.correctAnswer) {
                   btnClass = "bg-green-500 border-green-600 text-white shadow-lg scale-105"; // Correct
                 } else if (option === selectedOption) {
                   btnClass = "bg-red-500 border-red-600 text-white opacity-50"; // Wrong selected
                 } else {
                   btnClass = "bg-gray-100 border-gray-200 text-gray-400 opacity-50"; // Others
                 }
               }

               return (
                 <button
                   key={idx}
                   disabled={isAnswered}
                   onClick={() => handleAnswer(option)}
                   className={`p-6 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center justify-between group ${btnClass}`}
                 >
                   <span className="text-left">{option}</span>
                   {isAnswered && option === currentQ.correctAnswer && <Check className="w-6 h-6 animate-bounce" />}
                   {isAnswered && option === selectedOption && option !== currentQ.correctAnswer && <X className="w-6 h-6" />}
                 </button>
               );
             })}
           </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default QuizTab;
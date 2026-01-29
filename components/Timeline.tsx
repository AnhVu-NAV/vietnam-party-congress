import React from 'react';
import { PartyCongress } from '../types';
import { Flag, Calendar, MapPin, Users, Award, BookOpen } from 'lucide-react';

interface TimelineProps {
  data: PartyCongress[];
  onSelect: (congress: PartyCongress) => void;
  selectedId: number;
}

const Timeline: React.FC<TimelineProps> = ({ data, onSelect, selectedId }) => {
  return (
    <div className="flex flex-col space-y-8 relative pl-6 sm:pl-0">
      {/* Vertical Line */}
      <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden sm:block"></div>
      
      {data.map((congress, index) => {
        const isLeft = index % 2 === 0;
        const isSelected = congress.id === selectedId;

        return (
          <div 
            key={congress.id} 
            className={`relative flex items-center w-full ${isLeft ? 'sm:flex-row-reverse' : ''} group cursor-pointer`}
            onClick={() => onSelect(congress)}
          >
            {/* Connector Line for Mobile */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 sm:hidden"></div>

            {/* Content Card */}
            <div className={`w-full sm:w-5/12 pl-12 sm:pl-0 ${isLeft ? 'sm:pr-12 text-left sm:text-right' : 'sm:pl-12 text-left'}`}>
              <div 
                className={`p-5 rounded-lg border-2 transition-all duration-300 shadow-sm hover:shadow-md ${
                  isSelected 
                    ? 'border-cpv-red bg-red-50' 
                    : 'border-white bg-white hover:border-red-200'
                }`}
              >
                <div className={`flex flex-col ${isLeft ? 'sm:items-end' : 'sm:items-start'}`}>
                  <span className="text-cpv-red font-bold text-sm tracking-widest uppercase mb-1">
                    {congress.year}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                    Đại hội {congress.romanNumeral}
                  </h3>
                  <div className={`flex items-center text-gray-600 text-sm mb-2 gap-2 ${isLeft ? 'sm:flex-row-reverse' : ''}`}>
                    <MapPin className="w-4 h-4" />
                    <span>{congress.location}</span>
                  </div>
                  <div className={`flex items-center text-gray-600 text-sm gap-2 ${isLeft ? 'sm:flex-row-reverse' : ''}`}>
                    <Users className="w-4 h-4" />
                    <span>{congress.leaderElected.name}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Dot */}
            <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white shadow-md bg-cpv-red z-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
               <span className="text-[10px] text-white font-bold">{congress.romanNumeral}</span>
            </div>

            {/* Empty Space for alignment */}
            <div className="hidden sm:block sm:w-5/12"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
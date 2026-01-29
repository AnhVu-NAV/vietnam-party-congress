import React from 'react';
import { PartyCongress } from '../types';
import { Calendar, Users, Target, BookOpen, Award, TrendingUp, ExternalLink } from 'lucide-react';

interface CongressDetailsProps {
  congress: PartyCongress;
  labels: any;
  onOpenDetail?: () => void;
}

const CongressDetails: React.FC<CongressDetailsProps> = ({ congress, labels, onOpenDetail }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden sticky top-20">
      {/* Header */}
      <div 
        className="bg-gradient-to-r from-cpv-red to-red-800 p-6 text-white group cursor-pointer relative"
        onClick={onOpenDetail}
        title="Nhấn để xem chi tiết toàn văn"
      >
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 p-2 rounded-full">
           <ExternalLink className="w-5 h-5 text-white" />
        </div>

        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-2 group-hover:underline underline-offset-4 decoration-2">
              Đại hội {congress.romanNumeral}
            </h2>
            <p className="opacity-90 text-lg">{congress.name}</p>
          </div>
          <div className="text-right hidden sm:block">
            <div className="text-4xl font-bold opacity-20 group-hover:opacity-40 transition-opacity">{congress.year}</div>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-2 gap-4 text-sm bg-white/10 p-4 rounded-lg backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-cpv-yellow" />
            <span>{congress.startDate} — {congress.endDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-cpv-yellow" />
            <span>{congress.delegates.toLocaleString()} {labels.delegates}</span>
          </div>
          <div className="flex items-center gap-2 col-span-2">
            <Award className="w-4 h-4 text-cpv-yellow" />
            <span className="font-semibold">{congress.leaderElected.title}: {congress.leaderElected.name}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-8 max-h-[calc(100vh-300px)] overflow-y-auto custom-scrollbar">
        
        {/* Theme */}
        <section>
          <div className="flex items-center gap-2 mb-3 text-cpv-red font-bold uppercase text-sm tracking-wider">
            <Target className="w-4 h-4" />
            {labels.mainTheme}
          </div>
          <p className="text-gray-800 text-lg font-serif italic border-l-4 border-cpv-gold pl-4 bg-gray-50 py-2">
            "{congress.mainTheme}"
          </p>
        </section>

        {/* Historical Context */}
        <section>
          <div className="flex items-center gap-2 mb-3 text-cpv-red font-bold uppercase text-sm tracking-wider">
            <BookOpen className="w-4 h-4" />
            {labels.context}
          </div>
          <p className="text-gray-600 leading-relaxed">
            {congress.historicalContext}
          </p>
        </section>

        {/* Resolutions */}
        <section>
          <div className="flex items-center gap-2 mb-3 text-cpv-red font-bold uppercase text-sm tracking-wider">
            <TrendingUp className="w-4 h-4" />
            {labels.resolutions}
          </div>
          <div className="space-y-4">
            {congress.keyResolutions.map((res) => (
              <div key={res.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">{res.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{res.summary}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                  <div>
                    <span className="text-xs font-semibold text-gray-500 uppercase">{labels.policies}</span>
                    <ul className="list-disc list-inside text-sm text-gray-700 mt-1">
                      {res.appliedPolicies.map((policy, i) => (
                        <li key={i}>{policy}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-500 uppercase">{labels.impact}</span>
                    <p className="text-sm text-gray-700 mt-1">{res.realImpact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section>
           <div className="flex items-center gap-2 mb-3 text-cpv-red font-bold uppercase text-sm tracking-wider">
            <Award className="w-4 h-4" />
            {labels.achievements}
          </div>
          <ul className="space-y-2">
            {congress.achievements.map((item, index) => (
              <li key={index} className="flex gap-3 text-gray-700">
                <span className="text-cpv-red font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

      </div>
    </div>
  );
};

export default CongressDetails;
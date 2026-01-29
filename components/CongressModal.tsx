import React from 'react';
import { PartyCongress } from '../types';
import { PROFILES_DATA } from '../data';
import { X, Clock, MapPin, Users, Flag, ChevronLeft, FileText, Award } from 'lucide-react';

interface CongressModalProps {
  congress: PartyCongress;
  onClose: () => void;
}

const CongressModal: React.FC<CongressModalProps> = ({ congress, onClose }) => {
  // Find leader avatar from profiles data
  const leaderProfile = PROFILES_DATA.find(p => p.name.toLowerCase() === congress.leaderElected.name.toLowerCase());
  const leaderImage = leaderProfile?.avatarUrl || congress.images?.[0];

  if (!congress.details) {
    return (
      <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl p-8 max-w-lg w-full text-center relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Chưa có dữ liệu chi tiết</h3>
          <p className="text-gray-600 mb-6">Nội dung chi tiết cho Đại hội {congress.romanNumeral} đang được cập nhật.</p>
          <button onClick={onClose} className="px-6 py-2 bg-cpv-red text-white rounded-full hover:bg-red-700 transition-colors">
            Quay lại
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 flex flex-col animate-in fade-in duration-200 overflow-hidden">
      
      {/* Navigation Bar */}
      <div className="absolute top-0 left-0 w-full h-20 z-50 flex items-center justify-between px-4 md:px-8 pointer-events-none">
         {/* Back Button (Left) */}
         <button 
          onClick={onClose}
          className="pointer-events-auto flex items-center gap-2 text-white hover:text-cpv-yellow bg-black/40 hover:bg-black/60 backdrop-blur-md px-5 py-2.5 rounded-full transition-all border border-white/10 group shadow-lg"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold text-sm uppercase tracking-wide">Quay lại</span>
        </button>

        {/* Close Button (Right) */}
        <button 
          onClick={onClose}
          className="pointer-events-auto text-white/70 hover:text-white bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full p-2.5 transition-all border border-white/10 shadow-lg"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Scrollable Container */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden bg-[#FDFBF7] custom-scrollbar">
        <div className="max-w-[1280px] mx-auto min-h-screen pb-20 relative">
          
          {/* Hero Section */}
          <div className="relative w-full h-[400px] md:h-[500px] bg-gray-900">
             {congress.images && congress.images.length > 0 ? (
               <img 
                 src={congress.images[0]} 
                 alt={congress.name} 
                 className="w-full h-full object-cover opacity-60"
               />
             ) : (
               <div className="w-full h-full bg-gradient-to-b from-red-900 to-red-800 opacity-80"></div>
             )}
             <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-transparent to-black/60"></div>
             
             <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-center pb-16">
                <span className="inline-block py-1 px-3 border border-cpv-yellow text-cpv-yellow text-xs font-bold uppercase tracking-widest mb-4 bg-black/30 backdrop-blur-sm rounded">
                  Hồ sơ tư liệu
                </span>
                <h1 className="text-cpv-red font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-md leading-tight">
                  ĐẠI HỘI {congress.romanNumeral}
                </h1>
                <p className="text-gray-800 text-lg md:text-2xl font-serif font-bold max-w-4xl mx-auto italic leading-relaxed">
                  "{congress.mainTheme}"
                </p>
             </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 md:px-12 -mt-10 relative z-10">
            
            {/* Left Info Column */}
            <div className="lg:col-span-4 space-y-8">
              {/* Quick Stats Card */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-cpv-red">
                <h4 className="font-bold text-gray-400 uppercase text-xs tracking-wider mb-4 border-b pb-2">Thông tin chung</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-cpv-red shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-800 block text-sm">Thời gian</span>
                      <span className="text-gray-600 text-sm">{congress.startDate} - {congress.endDate}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-cpv-red shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-800 block text-sm">Địa điểm</span>
                      <span className="text-gray-600 text-sm">{congress.location}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-cpv-red shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-800 block text-sm">Đại biểu tham dự</span>
                      <span className="text-gray-600 text-sm">{congress.delegates.toLocaleString()} đại biểu</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Leader Portrait */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group relative">
                <div className="aspect-[3/4] overflow-hidden bg-gray-200">
                  <img 
                    src={leaderImage} 
                    alt={congress.leaderElected.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-red-900/90 to-transparent p-4 pt-12 text-white">
                  <span className="block text-xs uppercase tracking-wider opacity-90 mb-1">{congress.leaderElected.title}</span>
                  <span className="block text-xl font-bold font-serif">{congress.leaderElected.name}</span>
                </div>
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-8 space-y-8">
              {/* Intro Text */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-1 h-8 bg-cpv-red block"></span>
                  Diễn biến & Kết quả
                </h3>
                <div 
                  className="prose prose-red prose-lg max-w-none text-gray-700 leading-relaxed font-sans first-letter:text-5xl first-letter:font-bold first-letter:text-cpv-red first-letter:float-left first-letter:mr-3"
                  dangerouslySetInnerHTML={{ __html: congress.details.introHtml }}
                />
              </div>

              {/* Resolutions Block */}
              {congress.keyResolutions && congress.keyResolutions.length > 0 && (
                <div className="bg-[#FFF8F0] rounded-xl p-8 shadow-md border border-[#E5CAB2]">
                   <h3 className="text-xl font-serif font-bold text-[#8B5E3C] mb-6 flex items-center gap-2 uppercase tracking-wide">
                      <FileText className="w-6 h-6" />
                      Văn kiện & Nghị quyết quan trọng
                   </h3>
                   <div className="grid gap-4">
                      {congress.keyResolutions.map((res, idx) => (
                        <div key={idx} className="bg-white p-5 rounded-lg border border-[#F0E0D0] hover:shadow-md transition-shadow">
                           <div className="flex justify-between items-start mb-2">
                              <h4 className="font-bold text-gray-900 text-lg">{res.title}</h4>
                              <span className="text-xs font-bold bg-gray-100 text-gray-500 px-2 py-1 rounded">{res.startYear}</span>
                           </div>
                           <p className="text-gray-600 italic mb-3 text-sm border-l-2 border-cpv-gold pl-3">"{res.summary}"</p>
                           <div className="text-sm text-gray-800">
                              <strong className="text-[#8B5E3C]">Tác động thực tiễn:</strong> {res.realImpact}
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
              )}
            </div>
          </div>

          {/* Context Section (Full Width) */}
          <div className="mt-12 px-6 md:px-12">
            <div className="border-t border-gray-200 pt-12">
              <h3 className="text-center font-serif text-3xl font-bold text-gray-400 mb-12 uppercase tracking-widest">Bối cảnh Lịch sử</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Context Column 1 */}
                <div className="relative group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 group-hover:bg-cpv-red transition-colors"></div>
                  <h4 className="text-xl font-bold text-gray-800 mt-6 mb-4 flex items-center gap-2">
                    <Flag className="w-5 h-5 text-gray-400" />
                    Thế giới & Khu vực
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed text-justify bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-full">
                    {congress.details.contextInternational}
                  </p>
                </div>

                {/* Context Column 2 */}
                <div className="relative group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 group-hover:bg-cpv-red transition-colors"></div>
                  <h4 className="text-xl font-bold text-gray-800 mt-6 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    Tình hình trong nước
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed text-justify bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-full">
                    {congress.details.contextDomestic}
                  </p>
                </div>

                {/* Context Column 3 */}
                <div className="relative group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 group-hover:bg-cpv-red transition-colors"></div>
                  <h4 className="text-xl font-bold text-gray-800 mt-6 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-gray-400" />
                    Sự kiện nổi bật
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed text-justify bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-full">
                    {congress.details.contextGeneral}
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CongressModal;
import React, { useState } from 'react';
import { PROFILES_DATA } from '../data';
import { Search, Filter, ChevronDown, Check } from 'lucide-react';

const PersonnelTab: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPositions, setSelectedPositions] = useState<string[]>([]);
  const [selectedHometown, setSelectedHometown] = useState<string>('');

  // Extract unique hometowns for filter
  const hometowns = Array.from(new Set(PROFILES_DATA.map(p => {
      // Simple extraction of Province/City for filter list
      const parts = p.hometown.split(',');
      return parts[parts.length - 1].trim();
  }))).sort();

  const togglePosition = (pos: string) => {
    setSelectedPositions(prev => 
      prev.includes(pos) ? prev.filter(p => p !== pos) : [...prev, pos]
    );
  };

  const filteredProfiles = PROFILES_DATA.filter(profile => {
    const matchesSearch = profile.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPosition = selectedPositions.length === 0 || selectedPositions.some(p => profile.position.includes(p));
    // Loose matching for hometown to handle "Hanoi" vs "City Hanoi"
    const matchesHometown = selectedHometown === '' || profile.hometown.includes(selectedHometown);
    return matchesSearch && matchesPosition && matchesHometown;
  });

  return (
    <div className="bg-[#FAF8F5] min-h-[800px] p-8 font-sans">
      {/* Decorative Header */}
      <div className="text-center mb-12 relative">
        <h2 className="text-4xl font-serif font-extrabold text-[#5A3E2B] uppercase tracking-wide inline-block relative px-12">
           <span className="text-cpv-yellow absolute left-0 top-1 text-2xl">★</span>
           Hồ sơ Nhân sự
           <span className="text-cpv-yellow absolute right-0 top-1 text-2xl">★</span>
        </h2>
        <div className="w-24 h-1 bg-[#8B5E3C] mx-auto mt-2 opacity-50"></div>
      </div>

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Sidebar (Filters) */}
        <div className="w-full lg:w-1/4 space-y-8">
          
          {/* Search Box Sidebar Style (Optional duplicate or specific filter search) */}
          <div className="relative">
             <input 
               type="text" 
               placeholder="Tìm kiếm tên ủy viên" 
               className="w-full pl-4 pr-10 py-3 rounded-full border border-[#D1C4B5] bg-white focus:outline-none focus:border-[#8B5E3C] shadow-sm text-sm"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
             />
             <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-cpv-red w-5 h-5" />
          </div>

          <div className="space-y-6">
            {/* Position Filter */}
            <div>
               <h3 className="font-bold text-[#5A3E2B] mb-3 text-sm uppercase">Chức vụ</h3>
               <div className="space-y-2">
                 {['Tổng Bí thư', 'Ủy viên Bộ Chính trị', 'Ban Bí thư'].map(pos => (
                   <label key={pos} className="flex items-center gap-3 cursor-pointer group">
                     <div className={`w-5 h-5 rounded border border-[#D1C4B5] flex items-center justify-center transition-colors ${selectedPositions.includes(pos) ? 'bg-[#D61C1F] border-[#D61C1F]' : 'bg-white group-hover:border-[#8B5E3C]'}`}>
                        {selectedPositions.includes(pos) && <Check className="w-3 h-3 text-white" />}
                     </div>
                     <span className="text-sm text-[#5A3E2B]">{pos}</span>
                     <input 
                       type="checkbox" 
                       className="hidden" 
                       onChange={() => togglePosition(pos)}
                       checked={selectedPositions.includes(pos)} 
                     />
                   </label>
                 ))}
               </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#E5DACD]"></div>

            {/* Advanced Filters */}
            <div>
               <h3 className="font-bold text-[#5A3E2B] mb-3 text-sm uppercase">Bộ lọc nâng cao</h3>
               <div className="space-y-3">
                 <div className="relative">
                   <select 
                     className="w-full p-3 rounded-lg border border-[#D1C4B5] bg-white text-sm text-[#5A3E2B] appearance-none cursor-pointer focus:outline-none focus:border-[#8B5E3C]"
                     value={selectedHometown}
                     onChange={(e) => setSelectedHometown(e.target.value)}
                   >
                     <option value="">Quê quán</option>
                     {hometowns.map(h => <option key={h} value={h}>{h}</option>)}
                   </select>
                   <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                 </div>

                 <div className="relative opacity-60 cursor-not-allowed" title="Tính năng đang phát triển">
                   <select disabled className="w-full p-3 rounded-lg border border-[#D1C4B5] bg-gray-50 text-sm text-[#5A3E2B] appearance-none">
                     <option>Độ tuổi</option>
                   </select>
                   <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                 </div>

                 <div className="relative opacity-60 cursor-not-allowed">
                   <select disabled className="w-full p-3 rounded-lg border border-[#D1C4B5] bg-gray-50 text-sm text-[#5A3E2B] appearance-none">
                     <option>Giới tính</option>
                   </select>
                   <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                 </div>
               </div>
            </div>

            <button className="w-full bg-[#A81515] text-white font-bold py-3 rounded-full hover:bg-[#8B0000] transition-colors shadow-md text-sm uppercase tracking-wider">
               Tìm kiếm
            </button>
          </div>
        </div>

        {/* Right Content (Results) */}
        <div className="w-full lg:w-3/4">
           <div className="flex justify-between items-center mb-4">
              <span className="text-xs text-gray-500 italic">Cập nhật theo dữ liệu Đại hội XIII</span>
              <span className="text-sm text-[#5A3E2B]">Tìm thấy <span className="font-bold text-[#D61C1F]">{filteredProfiles.length}</span> kết quả</span>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProfiles.map(profile => (
                <div key={profile.id} className="bg-white p-4 rounded-lg shadow-sm border border-[#E5DACD] flex gap-4 hover:shadow-md transition-shadow">
                   {/* Avatar */}
                   <div className="shrink-0 w-24 h-32 overflow-hidden rounded border border-gray-200 bg-gray-100">
                      <img src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover" />
                   </div>
                   
                   {/* Info */}
                   <div className="flex flex-col justify-center space-y-1.5">
                      <h4 className="font-bold text-[#5A3E2B] uppercase text-sm leading-tight">{profile.name}</h4>
                      <p className="text-xs text-gray-600">
                        <span className="font-semibold text-gray-800">Ngày sinh:</span> {profile.birthDate}
                      </p>
                      <p className="text-xs text-gray-600">
                        <span className="font-semibold text-gray-800">Quê quán:</span> {profile.hometown}
                      </p>
                      <div className="pt-2 mt-auto">
                        <span className="inline-block bg-red-50 text-[#D61C1F] text-[10px] font-bold px-2 py-1 rounded border border-red-100 uppercase">
                          {profile.position}
                        </span>
                      </div>
                   </div>
                </div>
              ))}
           </div>

           {filteredProfiles.length === 0 && (
             <div className="text-center py-12 text-gray-400 bg-white rounded-lg border border-dashed border-gray-300">
               Không tìm thấy kết quả phù hợp
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default PersonnelTab;
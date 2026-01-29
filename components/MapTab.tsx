import React from 'react';
import { PartyCongress } from '../types';
import { MapPin } from 'lucide-react';

interface MapTabProps {
  data: PartyCongress[];
  onSelect: (id: number) => void;
  selectedId: number;
}

const MapTab: React.FC<MapTabProps> = ({ data, onSelect, selectedId }) => {
  // Group congresses by location to avoid stacking dots too densely
  const locations = [
    { id: 'hanoi', name: 'Hà Nội', x: 48, y: 22, ids: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] },
    { id: 'tuyenquang', name: 'Tuyên Quang', x: 40, y: 15, ids: [2] },
    { id: 'macau', name: 'Ma Cao (Trung Quốc)', x: 75, y: 10, ids: [1], isOverseas: true }
  ];

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-[600px] relative overflow-hidden flex flex-col">
      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
        <MapPin className="text-cpv-red" />
        Bản đồ Lịch sử Đại hội
      </h3>
      
      <div className="flex-1 relative bg-blue-50 rounded-lg border border-blue-100 overflow-hidden">
        {/* Placeholder Vietnam Map Shape - Simplified SVG */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
           {/* Rough Vietnam S-shape */}
           <path d="M40,5 C45,5 50,10 45,15 C40,20 35,25 40,30 C45,35 55,40 50,50 C45,60 40,70 35,80 C30,90 40,95 30,95" 
                 fill="none" stroke="#D61C1F" strokeWidth="2" />
        </svg>
        
        <div className="absolute inset-0 p-8">
            <p className="text-center text-gray-400 italic text-sm">
              (Bản đồ minh họa vị trí các kỳ Đại hội)
            </p>
        </div>

        {/* Render Locations */}
        {locations.map((loc) => (
          <div 
            key={loc.id}
            className="absolute flex flex-col items-center group cursor-pointer transition-transform hover:scale-110 z-10"
            style={{ 
              top: `${loc.y}%`, 
              left: `${loc.x}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className={`w-6 h-6 rounded-full border-2 border-white shadow-md flex items-center justify-center
              ${loc.ids.includes(selectedId) ? 'bg-cpv-yellow scale-125' : 'bg-cpv-red'}
            `}>
              <span className="text-[10px] font-bold text-white">{loc.ids.length}</span>
            </div>
            <div className="mt-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold shadow text-gray-800 whitespace-nowrap">
              {loc.name}
            </div>
            
            {/* Hover List */}
            <div className="absolute top-8 hidden group-hover:block bg-white p-2 rounded shadow-xl z-20 w-48 text-left">
               <p className="text-xs font-bold text-gray-500 uppercase mb-1">Các kỳ Đại hội:</p>
               <div className="flex flex-wrap gap-1">
                 {loc.ids.map(id => {
                   const c = data.find(x => x.id === id);
                   return (
                     <button 
                       key={id}
                       onClick={(e) => { e.stopPropagation(); onSelect(id); }}
                       className={`text-xs px-2 py-1 rounded border ${id === selectedId ? 'bg-red-100 border-red-500 text-red-700' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}`}
                     >
                       ĐH {c?.romanNumeral}
                     </button>
                   )
                 })}
               </div>
            </div>
          </div>
        ))}
        
        {/* Simple Legend */}
        <div className="absolute bottom-4 left-4 bg-white/80 p-3 rounded shadow backdrop-blur-sm text-xs">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-3 h-3 rounded-full bg-cpv-red"></div>
            <span>Địa điểm tổ chức</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-cpv-yellow border border-red-500"></div>
            <span>Đang chọn</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapTab;
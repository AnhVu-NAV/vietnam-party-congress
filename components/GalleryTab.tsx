import React, { useState, useEffect } from 'react';
import { PartyCongress } from '../types';
import { PlayCircle, Image as ImageIcon, Film, X, ZoomIn, ChevronRight, ChevronLeft, Grid, Search } from 'lucide-react';

interface GalleryTabProps {
  data: PartyCongress[];
  selectedId: number;
  onSelect: (id: number) => void;
}

type FilterType = 'all' | 'image' | 'video';

const GalleryTab: React.FC<GalleryTabProps> = ({ data, selectedId, onSelect }) => {
  const selectedCongress = data.find(c => c.id === selectedId);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterType>('all');
  const [viewIndex, setViewIndex] = useState(0);

  // Reset view index when congress changes
  useEffect(() => {
    setViewIndex(0);
  }, [selectedId]);

  // Combined media list for "All" view logic if needed, but we keep separate sections for better layout
  const hasImages = selectedCongress?.images && selectedCongress.images.length > 0;
  const hasVideos = selectedCongress?.videos && selectedCongress.videos.length > 0;

  const handleNextImage = () => {
    if (!selectedCongress?.images) return;
    const currentIdx = selectedCongress.images.indexOf(selectedImage || '');
    const nextIdx = (currentIdx + 1) % selectedCongress.images.length;
    setSelectedImage(selectedCongress.images[nextIdx]);
  };

  const handlePrevImage = () => {
    if (!selectedCongress?.images) return;
    const currentIdx = selectedCongress.images.indexOf(selectedImage || '');
    const prevIdx = (currentIdx - 1 + selectedCongress.images.length) % selectedCongress.images.length;
    setSelectedImage(selectedCongress.images[prevIdx]);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm min-h-[800px] flex overflow-hidden">
      
      {/* Sidebar - Desktop */}
      <div className="hidden md:flex flex-col w-64 border-r border-gray-200 bg-gray-50">
        <div className="p-5 border-b border-gray-200 bg-white">
          <h3 className="font-bold text-gray-800 flex items-center gap-2">
            <Grid className="w-5 h-5 text-cpv-red" />
            Danh mục Lưu trữ
          </h3>
        </div>
        <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-1">
          {data.map(congress => (
            <button
              key={congress.id}
              onClick={() => onSelect(congress.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all flex items-center justify-between group ${
                congress.id === selectedId 
                  ? 'bg-cpv-red text-white shadow-md' 
                  : 'hover:bg-white hover:shadow-sm text-gray-600'
              }`}
            >
              <span className={`font-serif font-bold ${congress.id === selectedId ? 'text-white' : 'text-gray-800'}`}>
                Đại hội {congress.romanNumeral}
              </span>
              <span className={`text-xs ${congress.id === selectedId ? 'text-red-100' : 'text-gray-400 group-hover:text-red-500'}`}>
                {congress.year}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative bg-white">
        
        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-200">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-red-600 transition-all p-2 rounded-full"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button onClick={handlePrevImage} className="absolute left-4 p-4 text-white/50 hover:text-white transition-colors">
              <ChevronLeft className="w-10 h-10" />
            </button>
            
            <div className="max-w-5xl max-h-[90vh] flex flex-col items-center">
              <img 
                src={selectedImage} 
                alt="Historical Document" 
                className="max-h-[80vh] w-auto object-contain rounded shadow-2xl"
              />
              <div className="mt-4 text-center">
                <h4 className="text-white text-lg font-serif">Đại hội Đảng lần thứ {selectedCongress?.romanNumeral}</h4>
                <p className="text-gray-400 text-sm">{selectedCongress?.year} - {selectedCongress?.location}</p>
              </div>
            </div>

            <button onClick={handleNextImage} className="absolute right-4 p-4 text-white/50 hover:text-white transition-colors">
              <ChevronRight className="w-10 h-10" />
            </button>
          </div>
        )}

        {/* Mobile Sidebar Toggle (Dropdown style) */}
        <div className="md:hidden p-4 border-b border-gray-200 bg-gray-50">
          <label className="text-xs font-bold text-gray-500 uppercase block mb-1">Chọn kỳ Đại hội</label>
          <select 
            className="w-full p-2 rounded border border-gray-300 bg-white"
            value={selectedId}
            onChange={(e) => onSelect(Number(e.target.value))}
          >
            {data.map(c => (
              <option key={c.id} value={c.id}>Đại hội {c.romanNumeral} ({c.year})</option>
            ))}
          </select>
        </div>

        {/* Content Header */}
        <div className="p-8 pb-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 border-b border-gray-100 pb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-red-100 text-cpv-red px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider">
                  Lưu trữ lịch sử
                </span>
                <span className="text-gray-400 text-sm">/</span>
                <span className="text-gray-500 text-sm font-medium">{selectedCongress?.year}</span>
              </div>
              <h1 className="text-4xl font-serif font-bold text-gray-900 leading-tight">
                Đại hội đại biểu toàn quốc <span className="text-cpv-red">lần thứ {selectedCongress?.romanNumeral}</span>
              </h1>
              <p className="text-gray-500 mt-2 max-w-2xl text-lg font-serif italic">
                "{selectedCongress?.mainTheme}"
              </p>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex bg-gray-100 p-1 rounded-lg shrink-0">
              {[
                { id: 'all', label: 'Tất cả' },
                { id: 'image', label: 'Hình ảnh' },
                { id: 'video', label: 'Video' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id as FilterType)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    filter === tab.id 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-8 pb-12 custom-scrollbar">
          
          {/* Empty State */}
          {!hasImages && !hasVideos && (
             <div className="flex flex-col items-center justify-center h-64 text-gray-400 border-2 border-dashed border-gray-100 rounded-xl bg-gray-50">
                <Search className="w-12 h-12 mb-2 opacity-20" />
                <p>Đang cập nhật dữ liệu tư liệu...</p>
             </div>
          )}

          {/* Videos Section */}
          {(filter === 'all' || filter === 'video') && hasVideos && (
            <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
               <div className="flex items-center gap-3 mb-6">
                 <div className="w-1 h-6 bg-cpv-red rounded-full"></div>
                 <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">Phim Tài liệu & Video</h2>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {selectedCongress!.videos!.map((video, idx) => (
                   <div key={idx} className="group cursor-pointer">
                     <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-lg mb-3 relative border border-gray-200">
                        <iframe 
                          width="100%" 
                          height="100%" 
                          src={`https://www.youtube.com/embed/${video.youtubeId}`} 
                          title={video.title}
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                     </div>
                     <h3 className="font-bold text-gray-800 group-hover:text-cpv-red transition-colors leading-snug">
                       {video.title}
                     </h3>
                   </div>
                 ))}
               </div>
            </div>
          )}

          {/* Images Section */}
          {(filter === 'all' || filter === 'image') && hasImages && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
               <div className="flex items-center gap-3 mb-6">
                 <div className="w-1 h-6 bg-cpv-red rounded-full"></div>
                 <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">Hình ảnh Tư liệu</h2>
               </div>
               
               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                 {selectedCongress!.images!.map((img, idx) => (
                   <div 
                    key={idx} 
                    className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 cursor-zoom-in border border-gray-200 shadow-sm hover:shadow-lg transition-all"
                    onClick={() => setSelectedImage(img)}
                   >
                     <img 
                       src={img} 
                       alt={`Tư liệu ${idx}`} 
                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                     />
                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100" />
                     </div>
                     <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <p className="text-white text-[10px] truncate">Tư liệu Đại hội {selectedCongress?.romanNumeral}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryTab;
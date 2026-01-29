import React, { useState, useMemo, useEffect } from 'react';
import { CONGRESS_DATA_VI, CONGRESS_DATA_EN } from './data';
import { PartyCongress } from './types';
import Timeline from './components/Timeline';
import CongressDetails from './components/CongressDetails';
import StatsChart from './components/StatsChart';
import MapTab from './components/MapTab';
import GalleryTab from './components/GalleryTab';
import QuizTab from './components/QuizTab';
import PersonnelTab from './components/PersonnelTab';
import CongressModal from './components/CongressModal';
import { Search, Globe, Layout, Map as MapIcon, Image as ImageIcon, Gamepad2, Users, Box, Maximize2, Minimize2 } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';

const UI_LABELS = {
    vi: {
        title: "Đại hội Đảng Cộng sản Việt Nam",
        subtitle: "Dữ liệu Lịch sử & Thống kê",
        searchPlaceholder: "Tìm năm, lãnh đạo...",
        introTitle: "Hành trình Lịch sử",
        introText: "Khám phá quá trình phát triển của Đảng Cộng sản Việt Nam qua các kỳ Đại hội, từ đấu tranh giải phóng dân tộc đến kỷ nguyên đổi mới và phát triển.",
        chronology: "Niên biểu Sự kiện",
        selectPrompt: "Chọn một kỳ đại hội để xem chi tiết",
        footer: "© 2024 Dữ liệu Nghiên cứu Giáo dục. Nguồn tư liệu chính thống.",
        chartTitle: "Số lượng Đại biểu tham dự qua các kỳ",
        mainTheme: "Chủ đề chính",
        context: "Bối cảnh lịch sử",
        resolutions: "Nghị quyết trọng tâm",
        achievements: "Thành tựu chính",
        policies: "Chính sách áp dụng",
        impact: "Tác động thực tiễn",
        delegates: "Đại biểu",
        date: "Thời gian",
        langName: "Tiếng Việt",
        tabs: { overview: "Tổng quan", map: "Bản đồ", gallery: "Thư viện", quiz: "Minigame", personnel: "Nhân sự", game3d: "Trải nghiệm 3D" }
    },
    en: {
        title: "National Congresses of the CPV",
        subtitle: "Historical Data & Statistics",
        searchPlaceholder: "Search year, leader...",
        introTitle: "A Historical Journey",
        introText: "Explore the evolution of the Communist Party of Vietnam through its National Congresses, tracing the path from national liberation to the Doi Moi era and modern development.",
        chronology: "Chronology",
        selectPrompt: "Select a congress to view details",
        footer: "© 2024 Educational Research Dataset. Data sourced from official historical documents.",
        chartTitle: "Delegate Participation Growth",
        mainTheme: "Main Theme",
        context: "Historical Context",
        resolutions: "Key Resolutions",
        achievements: "Major Achievements",
        policies: "Applied Policies",
        impact: "Impact",
        delegates: "Delegates",
        date: "Date",
        langName: "English",
        tabs: { overview: "Overview", map: "Map", gallery: "Gallery", quiz: "Quiz", personnel: "Personnel", game3d: "3D Experience" }
    }
};

type Lang = 'vi' | 'en';
type Tab = 'overview' | 'map' | 'gallery' | 'quiz' | 'personnel' | 'game3d';

export default function App() {
    const [lang, setLang] = useState<Lang>('vi');
    const [activeTab, setActiveTab] = useState<Tab>('overview');
    const [selectedId, setSelectedId] = useState<number>(14); // Default to XIV (newest)
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [is3DFullscreen, setIs3DFullscreen] = useState(false);

    const currentData = lang === 'vi' ? CONGRESS_DATA_VI : CONGRESS_DATA_EN;
    const labels = UI_LABELS[lang];

    const selectedCongress = useMemo(() =>
            currentData.find(c => c.id === selectedId) || currentData[0],
        [selectedId, currentData]
    );

    const filteredData = useMemo(() => {
        return currentData.filter(c =>
            c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            c.year.toString().includes(searchTerm) ||
            c.leaderElected.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, currentData]);

    // Handle ESC key to exit fullscreen
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && is3DFullscreen) {
                setIs3DFullscreen(false);
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [is3DFullscreen]);

    const handleSelect = (id: number) => {
        setSelectedId(id);
        if (activeTab === 'map') {
            // Keep user on map if they select from map
        } else {
            // Optional: switch tab logic if needed
        }
        // Smooth scroll handling for mobile
        if (window.innerWidth < 768) {
            window.scrollTo({ top: 100, behavior: 'smooth' });
        }
    };

    const toggleLang = () => {
        setLang(prev => prev === 'vi' ? 'en' : 'vi');
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-12">

            {/* Full Screen Modal */}
            {isModalOpen && (
                <CongressModal
                    congress={selectedCongress}
                    onClose={() => setIsModalOpen(false)}
                />
            )}

            {/* Hero Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-cpv-red rounded flex items-center justify-center shadow-sm">
                            <span className="text-cpv-yellow font-bold text-xl">★</span>
                        </div>
                        <div>
                            <h1 className="font-bold text-gray-900 text-base sm:text-lg leading-tight">{labels.title}</h1>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleLang}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-sm font-medium text-gray-700"
                        >
                            <Globe className="w-4 h-4" />
                            <span>{lang === 'vi' ? 'EN' : 'VN'}</span>
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Intro & Tab Navigation */}
                <section className="mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-gray-200 pb-1">
                        <div className="pb-4">
                            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                                {labels.introTitle}
                            </h2>
                            <p className="text-gray-600 max-w-2xl">
                                {labels.introText}
                            </p>
                        </div>

                        <div className="flex gap-1 overflow-x-auto w-full md:w-auto no-scrollbar">
                            {[
                                { id: 'overview', icon: Layout, label: labels.tabs.overview },
                                { id: 'map', icon: MapIcon, label: labels.tabs.map },
                                { id: 'gallery', icon: ImageIcon, label: labels.tabs.gallery },
                                { id: 'quiz', icon: Gamepad2, label: labels.tabs.quiz },
                                { id: 'game3d', icon: Box, label: labels.tabs.game3d },
                                { id: 'personnel', icon: Users, label: labels.tabs.personnel },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as Tab)}
                                    className={`flex items-center gap-2 px-4 py-3 rounded-t-lg font-medium transition-colors whitespace-nowrap ${
                                        activeTab === tab.id
                                            ? 'bg-white border-x border-t border-gray-200 text-cpv-red z-10 -mb-px shadow-[0_-2px_4px_rgba(0,0,0,0.02)]'
                                            : 'bg-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                    }`}
                                >
                                    <tab.icon className="w-4 h-4" />
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tab Content */}
                <div className="mt-6">

                    {activeTab === 'overview' && (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="lg:col-span-7 space-y-8">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder={labels.searchPlaceholder}
                                        className="w-full pl-9 pr-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>

                                <StatsChart
                                    data={currentData}
                                    selectedId={selectedId}
                                    onSelect={handleSelect}
                                    label={labels.chartTitle}
                                />

                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">{labels.chronology}</h3>
                                    </div>
                                    <Timeline
                                        data={filteredData}
                                        onSelect={(c) => handleSelect(c.id)}
                                        selectedId={selectedId}
                                    />
                                </div>
                            </div>

                            <div className="lg:col-span-5">
                                <CongressDetails
                                    congress={selectedCongress}
                                    labels={labels}
                                    onOpenDetail={() => setIsModalOpen(true)}
                                />
                            </div>
                        </div>
                    )}

                    {activeTab === 'map' && (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="lg:col-span-7">
                                <MapTab data={currentData} onSelect={handleSelect} selectedId={selectedId} />
                            </div>
                            <div className="lg:col-span-5">
                                <CongressDetails
                                    congress={selectedCongress}
                                    labels={labels}
                                    onOpenDetail={() => setIsModalOpen(true)}
                                />
                            </div>
                        </div>
                    )}

                    {activeTab === 'gallery' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <GalleryTab
                                data={currentData}
                                selectedId={selectedId}
                                onSelect={handleSelect}
                            />
                        </div>
                    )}

                    {activeTab === 'quiz' && (
                        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <QuizTab data={currentData} />
                        </div>
                    )}

                    {activeTab === 'game3d' && (
                        <div
                            className={`
                  bg-black overflow-hidden shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500 border border-gray-200 relative transition-all
                  ${is3DFullscreen ? 'fixed inset-0 z-[100] h-screen w-screen rounded-none' : 'w-full h-[800px] rounded-xl'}
               `}
                        >
                            <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-bold pointer-events-none">
                                Trải nghiệm 3D
                            </div>

                            <button
                                onClick={() => setIs3DFullscreen(!is3DFullscreen)}
                                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/30 backdrop-blur text-white p-2 rounded-full transition-colors"
                                title={is3DFullscreen ? "Thu nhỏ" : "Toàn màn hình"}
                            >
                                {is3DFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
                            </button>

                            <iframe
                                src="https://3d-dangcongsan.nhandan.vn"
                                width="100%"
                                height="100%"
                                style={{ border: 'none' }}
                                title="3D Experience"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}

                    {activeTab === 'personnel' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <PersonnelTab />
                        </div>
                    )}

                </div>
            </main>
            <Analytics />
        </div>
    );
}

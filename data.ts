import { PartyCongress, Profile } from './types';

// Helper for fallback placeholders
const getPlaceholder = (text: string, color: string) => 
  `https://placehold.co/800x450/${color}/ffffff?text=${encodeURIComponent(text)}`;

// Profile Avatar helper
const getAvatar = (name: string) => 
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=D61C1F&color=fff&size=128&font-size=0.4`;

export const PROFILES_DATA: Profile[] = [
  {
    id: 1,
    name: "Nguyễn Phú Trọng",
    birthDate: "14/04/1944",
    hometown: "Xã Đông Hội, huyện Đông Anh, thành phố Hà Nội",
    position: "Tổng Bí thư",
    avatarUrl: "https://cdn.daihoidangtoanquoc.vn/images/cd241f5902f853fa77486e1f9b84b191da99f6984c7475fbc8d2aa16ab52d38d439f645effffe9c01df88f47c9042ed3b34784881c6d60aa1cc2c604c7bfe0f5f2ed06672281c56d1738b873bac4230d/dc-nguyen-phu-trong.jpg"
  },
  {
    id: 6,
    name: "Tô Lâm",
    birthDate: "10/07/1957",
    hometown: "Xã Nghĩa Trụ, huyện Văn Giang, tỉnh Hưng Yên",
    position: "Tổng Bí thư",
    avatarUrl: "https://cdn.daihoidangtoanquoc.vn/images/1ea1386377c097df680a32dee6a10424c2c40396c54a0931d112bc9363ea96401e6a97317c005866250ed68355c95760/to-lam.jpg"
  },
  {
    id: 99,
    name: "Lê Hồng Phong",
    birthDate: "1902",
    hometown: "Hưng Nguyên, Nghệ An",
    position: "Tổng Bí thư",
    avatarUrl: "https://cdn.daihoidangtoanquoc.vn/images/cd241f5902f853fa77486e1f9b84b191da99f6984c7475fbc8d2aa16ab52d38d308bdf70cd6c266a29b731148e28e7ba77b898db5e5ab4356636c205226f727c4c5470620d4288e60f9c90989fd5179d/anh-3-lsd-43-lehongphong.jpg"
  },
  {
    id: 100,
    name: "Trường Chinh",
    birthDate: "09/02/1907",
    hometown: "Xuân Trường, Nam Định",
    position: "Tổng Bí thư",
    avatarUrl: "https://cdn.daihoidangtoanquoc.vn/images/cd241f5902f853fa77486e1f9b84b191da99f6984c7475fbc8d2aa16ab52d38d76e953c2ef35e9ae1c42f5d2eecec4cfc2a870e4e02bb3533ceb5bfeb4c0bd59/truong-chinh-edit.jpg"
  },
  {
    id: 101,
    name: "Lê Duẩn",
    birthDate: "07/04/1907",
    hometown: "Triệu Phong, Quảng Trị",
    position: "Tổng Bí thư",
    avatarUrl: "https://cdn.daihoidangtoanquoc.vn/images/cd241f5902f853fa77486e1f9b84b191da99f6984c7475fbc8d2aa16ab52d38d9855c4ac0fdc5a77fe04fc3d83a91be59fe6ca298eba4a640087b942b0678d4b/af-2362-le-duan.jpg"
  },
  {
    id: 102,
    name: "Nguyễn Văn Linh",
    birthDate: "01/07/1915",
    hometown: "Yên Mỹ, Hưng Yên",
    position: "Tổng Bí thư",
    avatarUrl: "https://cdn.daihoidangtoanquoc.vn/images/cd241f5902f853fa77486e1f9b84b191da99f6984c7475fbc8d2aa16ab52d38dbe1462a5f46d249f2a77faf8ede3ebcc1e1377b838ca0a4e1bb96c7a376c458124c23c314f2a2f7015a1351b58bf9da1/86-4435-nguyen-van-linh.jpg"
  },
  {
    id: 103,
    name: "Đỗ Mười",
    birthDate: "02/02/1917",
    hometown: "Thanh Trì, Hà Nội",
    position: "Tổng Bí thư",
    avatarUrl: "https://cdn.daihoidangtoanquoc.vn/images/cd241f5902f853fa77486e1f9b84b191da99f6984c7475fbc8d2aa16ab52d38d4f57fe4dab8a2a3ab6289d66832ed31a9d33c444f1f6bba81351fb4517b496b4/86-4438-do-muoi.jpg"
  },
  {
    id: 104,
    name: "Nông Đức Mạnh",
    birthDate: "11/09/1940",
    hometown: "Na Rì, Bắc Kạn",
    position: "Tổng Bí thư",
    avatarUrl: "https://cdn.daihoidangtoanquoc.vn/images/cd241f5902f853fa77486e1f9b84b191da99f6984c7475fbc8d2aa16ab52d38d077a7501186cfe1f4b11b1c74832c9837b6f4fa36c8d6d2eba899f31218bce38536dd69eecc212750afcebe503b076f9/m06-2346-nong-duc-manh.jpg"
  }
];

const CONGRESS_DATA_VI: PartyCongress[] = [
  {
    id: 1,
    romanNumeral: "I",
    name: "Đại hội đại biểu toàn quốc lần thứ I",
    year: 1935,
    location: "Ma Cao, Trung Quốc",
    isOverseas: true,
    startDate: "1935-03-27",
    endDate: "1935-03-31",
    leaderElected: { name: "Lê Hồng Phong", title: "Tổng Bí thư" },
    delegates: 13,
    mainTheme: "Củng cố và phát triển Đảng, chống chiến tranh đế quốc",
    historicalContext: "Diễn ra tại đường Bờ biển, Ma Cao. Đây là dấu mốc quan trọng đánh dấu sự khôi phục hệ thống tổ chức của Đảng sau cao trào 1930-1931.",
    keyResolutions: [
        { id: "R1-1", title: "Nghị quyết Chính trị", summary: "Củng cố và phát triển Đảng, thâu phục quảng đại quần chúng, chống chiến tranh đế quốc.", appliedPolicies: ["Vận động công nhân, nông dân", "Công tác trong các dân tộc thiểu số"], realImpact: "Khôi phục hệ thống tổ chức Đảng từ Trung ương đến cơ sở.", startYear: 1935 },
        { id: "R1-2", title: "Điều lệ Đảng", summary: "Công nhận Điều lệ Đảng Cộng sản Đông Dương.", appliedPolicies: [], realImpact: "Thống nhất nguyên tắc tổ chức.", startYear: 1935 }
    ],
    achievements: ["Bầu Ban Chấp hành Trung ương: 13 ủy viên.", "Bầu đồng chí Lê Hồng Phong làm Tổng Bí thư."],
    images: ["https://cdn.daihoidangtoanquoc.vn/images/cd241f5902f853fa77486e1f9b84b191da99f6984c7475fbc8d2aa16ab52d38d308bdf70cd6c266a29b731148e28e7ba77b898db5e5ab4356636c205226f727c4c5470620d4288e60f9c90989fd5179d/anh-3-lsd-43-lehongphong.jpg"],
    details: {
      introHtml: `
        <p class="mb-4 first-letter:text-5xl first-letter:font-bold first-letter:text-cpv-red first-letter:float-left first-letter:mr-3">T</p>
        <p class="mb-4"><b>Từ ngày 27 đến 31/3/1935 tại Ma Cao, Trung Quốc</b>: Đại hội lần thứ I của Đảng có 13 đại biểu tham dự, thay mặt cho 600 đảng viên hoạt động ở trong nước và nước ngoài.</p>
        <p class="mb-4">Đại hội đề ra ba nhiệm vụ chính: (1). Củng cố và phát triển Đảng. (2). Thâu phục quảng đại quần chúng. (3). Chống đế quốc chiến tranh.</p>
        <p class="mb-4">Đại hội quyết định lập ra Ban chống đế quốc chiến tranh do Đảng lãnh đạo, bao gồm nhiều tổ chức cách mạng và cá nhân yêu nước, hòa bình và công lý.</p>
        <p class="mb-4">Lần đầu tiên, Đại hội đã thông qua các nghị quyết quan trọng để tập hợp lực lượng, xây dựng phong trào quần chúng: Nghị quyết về vận động công nhân, nông dân, binh lính, phụ nữ, thanh niên; về công tác liên minh phản đế; về công tác trong các dân tộc thiểu số; về đội tự vệ và cứu tế đỏ.</p>
        <p class="mb-4">Đại hội công nhận Điều lệ Đảng Cộng sản Đông Dương.</p>
        <p class="mb-4">Ban Chấp hành Trung ương được bầu tại Đại hội gồm 13 đồng chí, gồm 9 ủy viên chính thức và 4 ủy viên dự khuyết. Đồng chí Lê Hồng Phong được bầu làm Tổng Bí thư.</p>
        <p class="mb-4">Sau năm năm hợp nhất ba tổ chức đảng, Đại hội lần thứ nhất của Đảng có ý nghĩa lịch sử quan trọng:</p>
        <ul class="list-disc pl-5 mb-4 space-y-2 marker:text-cpv-red">
          <li>Đánh dấu thắng lợi căn bản của cuộc đấu tranh gìn giữ và khôi phục hệ thống tổ chức của Đảng từ cơ sở đến Trung ương.</li>
          <li>Thống nhất phong trào đấu tranh cách mạng của công nhân, nông dân và các tầng lớp nhân dân dưới sự lãnh đạo của Ban Chấp hành Trung ương Đảng.</li>
        </ul>
      `,
      contextGeneral: "14-31/10/1930: Hội nghị Ban Chấp hành Trung ương lần thứ nhất đổi tên thành Đảng Cộng sản Đông Dương. 1930-1931: Cao trào cách mạng Xô-viết Nghệ Tĩnh. 1931-1934: Thời kỳ khủng bố trắng.",
      contextDomestic: "Ngay sau khi thành lập, Đảng Cộng sản Việt Nam đã lãnh đạo toàn dân đứng lên đấu tranh, khởi đầu bằng cao trào cách mạng 1930-1931. Các tổ chức Đảng từng bước hồi phục sau các cuộc khủng bố trắng.",
      contextInternational: "Phong trào cộng sản và công nhân quốc tế tiếp tục phát triển. Thành tựu to lớn của Liên Xô tác động tích cực. Chủ nghĩa phát xít đe dọa hòa bình thế giới. Quốc tế Cộng sản hỗ trợ tích cực."
    }
  },
  {
    id: 2,
    romanNumeral: "II",
    name: "Đại hội đại biểu toàn quốc lần thứ II",
    year: 1951,
    location: "Tuyên Quang, Việt Nam",
    mapCoordinates: { x: 40, y: 15 },
    startDate: "1951-02-11",
    endDate: "1951-02-19",
    leaderElected: { name: "Trường Chinh", title: "Tổng Bí thư" },
    delegates: 158,
    mainTheme: "Lãnh đạo toàn dân kháng chiến thắng lợi",
    historicalContext: "Diễn ra tại xã Vinh Quang, Chiêm Hóa, Tuyên Quang. Đảng ra hoạt động công khai lấy tên là Đảng Lao động Việt Nam.",
    keyResolutions: [
        { id: "R2-1", title: "Đảng hoạt động công khai", summary: "Quyết nghị đưa Đảng ra hoạt động công khai với tên gọi Đảng Lao động Việt Nam.", appliedPolicies: ["Xây dựng Đảng Lao động Việt Nam"], realImpact: "Tăng cường sự lãnh đạo của Đảng trong kháng chiến.", startYear: 1951 },
        { id: "R2-2", title: "Chính cương Đảng Lao động VN", summary: "Hoàn thành giải phóng dân tộc, xóa bỏ tàn tích phong kiến, phát triển chế độ dân chủ nhân dân.", appliedPolicies: [], realImpact: "Định hướng kháng chiến kiến quốc.", startYear: 1951 }
    ],
    achievements: ["Đảng ra hoạt động công khai lấy tên Đảng Lao động Việt Nam.", "Bầu BCH Trung ương: 19 ủy viên chính thức."],
    images: ["https://cdn.daihoidangtoanquoc.vn/images/cd241f5902f853fa77486e1f9b84b191da99f6984c7475fbc8d2aa16ab52d38d76e953c2ef35e9ae1c42f5d2eecec4cfc2a870e4e02bb3533ceb5bfeb4c0bd59/truong-chinh-edit.jpg"],
    details: {
      introHtml: `
        <p class="mb-4"><b>Từ ngày 11 đến 19/2/1951</b>, tại xã Vinh Quang, huyện Chiêm Hoá, tỉnh Tuyên Quang: Trung ương Đảng đã triệu tập Đại hội đại biểu toàn quốc lần thứ II.</p>
        <p class="mb-4">Dự Đại hội II của Đảng có 158 đại biểu chính thức và 53 đại biểu dự khuyết thay mặt cho hơn 76 vạn đảng viên.</p>
        <p class="mb-4"><b>Lần đầu tiên được tổ chức trong nước</b>, Đại hội đã quyết nghị đưa Đảng ra hoạt động công khai với tên gọi mới là <b>Đảng Lao động Việt Nam</b>.</p>
        <p class="mb-4">Báo cáo chính trị khẳng định: "Do sự lãnh đạo sáng suốt và kiên quyết của Đảng... cuộc Cách mạng Tháng Tám đã thắng lợi". Nhiệm vụ mới là: Đưa kháng chiến đến thắng lợi hoàn toàn và Tổ chức Đảng Lao động Việt Nam.</p>
        <p class="mb-4">Đại hội thông qua Chính cương, Tuyên ngôn và Điều lệ mới. Đảng Lao động Việt Nam là đảng của giai cấp công nhân và nhân dân lao động Việt Nam, lấy chủ nghĩa Mác-Lênin làm nền tảng tư tưởng.</p>
        <p class="mb-4">Đại hội bầu Ban Chấp hành Trung ương gồm 19 ủy viên chính thức, 10 dự khuyết. Bầu đồng chí Hồ Chí Minh làm Chủ tịch Đảng, đồng chí Trường Chinh làm Tổng Bí thư.</p>
      `,
      contextGeneral: "Tháng 8/1945 Cách mạng Tháng Tám thành công. 1946-1950 Kháng chiến chống Pháp bùng nổ. 1950 Chiến thắng Biên giới thu-đông.",
      contextDomestic: "Nhân dân ta đã giành được độc lập, lập nên nước Việt Nam Dân chủ Cộng hòa. Cuộc kháng chiến chống Pháp bước sang giai đoạn phản công và tiến công. Đảng phát triển lên hơn 760.000 đảng viên.",
      contextInternational: "Hệ thống XHCN thế giới lớn mạnh. Phong trào giải phóng dân tộc phát triển. Thế giới hình thành 'trật tự hai cực'. Mỹ tăng cường viện trợ cho Pháp ở Đông Dương."
    }
  },
  {
    id: 3,
    romanNumeral: "III",
    name: "Đại hội đại biểu toàn quốc lần thứ III",
    year: 1960,
    location: "Hà Nội, Việt Nam",
    mapCoordinates: { x: 48, y: 22 },
    startDate: "1960-09-05",
    endDate: "1960-09-10",
    leaderElected: { name: "Lê Duẩn", title: "Bí thư thứ nhất" },
    delegates: 525,
    mainTheme: "Vừa xây dựng Chủ nghĩa xã hội, vừa đấu tranh thống nhất nước nhà",
    historicalContext: "Đất nước tạm thời bị chia cắt. Miền Bắc xây dựng CNXH làm hậu phương lớn cho tiền tuyến miền Nam.",
    keyResolutions: [
        { id: "R3-1", title: "Hai nhiệm vụ chiến lược", summary: "Tiến hành cách mạng XHCN ở miền Bắc và cách mạng dân tộc dân chủ nhân dân ở miền Nam.", appliedPolicies: [], realImpact: "Kim chỉ nam cho cuộc kháng chiến chống Mỹ cứu nước.", startYear: 1960 },
        { id: "R3-2", title: "Kế hoạch 5 năm lần 1", summary: "Nhiệm vụ và phương hướng phát triển kinh tế quốc dân 1961-1965.", appliedPolicies: ["Công nghiệp hóa XHCN"], realImpact: "Xây dựng cơ sở vật chất cho miền Bắc.", startYear: 1961 }
    ],
    achievements: ["Thông qua Kế hoạch 5 năm lần thứ nhất (1961-1965).", "Bầu Lê Duẩn làm Bí thư thứ nhất."],
    images: ["https://cdn.daihoidangtoanquoc.vn/images/cd241f5902f853fa77486e1f9b84b191da99f6984c7475fbc8d2aa16ab52d38d9855c4ac0fdc5a77fe04fc3d83a91be59fe6ca298eba4a640087b942b0678d4b/af-2362-le-duan.jpg"],
    details: {
      introHtml: `
        <p class="mb-4"><b>Từ ngày 5 đến 10/9/1960</b>, tại Thủ đô Hà Nội: Đại hội lần thứ III của Đảng diễn ra với sự tham dự của 525 đại biểu chính thức và 51 đại biểu dự khuyết.</p>
        <p class="mb-4">Đại hội xác định hai nhiệm vụ chiến lược: <i>tiến hành cách mạng xã hội chủ nghĩa ở miền Bắc</i> và <i>giải phóng miền Nam, thực hiện thống nhất nước nhà</i>.</p>
        <p class="mb-4">Đại hội thông qua "Nhiệm vụ và phương hướng của kế hoạch 5 năm lần thứ nhất phát triển kinh tế quốc dân (1961-1965)", lấy xây dựng chủ nghĩa xã hội làm trọng tâm, thực hiện công nghiệp hoá xã hội chủ nghĩa.</p>
        <p class="mb-4">Đại hội bầu Ban Chấp hành Trung ương gồm 47 ủy viên chính thức. Đồng chí Hồ Chí Minh được bầu lại làm Chủ tịch Đảng. Đồng chí Lê Duẩn được bầu làm Bí thư thứ nhất.</p>
      `,
      contextGeneral: "21/7/1954 Hiệp định Geneva ký kết, đất nước tạm thời chia cắt. 1954-1960 Miền Bắc giải phóng, xây dựng CNXH. Miền Nam đấu tranh chống Mỹ-Diệm.",
      contextDomestic: "Chiến thắng Điện Biên Phủ chấm dứt chiến tranh xâm lược của Pháp. Miền Bắc trở thành hậu phương vững chắc. Miền Nam đấu tranh quyết liệt.",
      contextInternational: "Hệ thống XHCN thế giới lớn mạnh. Phong trào giải phóng dân tộc phát triển. Mỹ can thiệp sâu vào miền Nam Việt Nam."
    }
  },
  {
    id: 4,
    romanNumeral: "IV",
    name: "Đại hội đại biểu toàn quốc lần thứ IV",
    year: 1976,
    location: "Hà Nội, Việt Nam",
    mapCoordinates: { x: 48, y: 22 },
    startDate: "1976-12-14",
    endDate: "1976-12-20",
    leaderElected: { name: "Lê Duẩn", title: "Tổng Bí thư" },
    delegates: 1008,
    mainTheme: "Lãnh đạo xây dựng chủ nghĩa xã hội trên phạm vi cả nước",
    historicalContext: "Đại hội đầu tiên sau khi đất nước hoàn toàn thống nhất (1975).",
    keyResolutions: [
        { id: "R4-1", title: "Đổi tên Đảng", summary: "Quyết định đổi tên Đảng Lao động Việt Nam thành Đảng Cộng sản Việt Nam.", appliedPolicies: [], realImpact: "Khẳng định bản chất giai cấp công nhân và tính tiên phong.", startYear: 1976 },
        { id: "R4-2", title: "Ba cuộc cách mạng", summary: "Tiến hành đồng thời: cách mạng quan hệ sản xuất, khoa học - kỹ thuật, tư tưởng và văn hóa.", appliedPolicies: ["Ưu tiên công nghiệp nặng"], realImpact: "Xây dựng cơ sở vật chất kỹ thuật cho CNXH.", startYear: 1976 }
    ],
    achievements: ["Đổi tên Đảng thành Đảng Cộng sản Việt Nam.", "Thông qua đường lối xây dựng CNXH trên cả nước."],
    images: ["https://cdn.daihoidangtoanquoc.vn/images/cd241f5902f853fa77486e1f9b84b191da99f6984c7475fbc8d2aa16ab52d38d9855c4ac0fdc5a77fe04fc3d83a91be59fe6ca298eba4a640087b942b0678d4b/af-2362-le-duan.jpg"],
    details: {
      introHtml: `
        <p class="mb-4"><b>Từ ngày 14 đến 20/12/1976</b>: Đại hội lần thứ IV diễn ra tại Hà Nội với 1.008 đại biểu. Đây là Đại hội toàn thắng của sự nghiệp giải phóng dân tộc, thống nhất Tổ quốc.</p>
        <p class="mb-4">Đại hội xác định đường lối chung của cách mạng XHCN trong giai đoạn mới: Tiến hành đồng thời ba cuộc cách mạng (quan hệ sản xuất, khoa học - kỹ thuật, tư tưởng và văn hóa); Đẩy mạnh công nghiệp hoá XHCN; Xây dựng chế độ làm chủ tập thể.</p>
        <p class="mb-4">Đại hội quyết định đổi tên Đảng thành <b>Đảng Cộng sản Việt Nam</b>, thông qua Điều lệ mới, và đặt lại chức vụ Tổng Bí thư thay Bí thư thứ nhất.</p>
        <p class="mb-4">Đồng chí Lê Duẩn được bầu làm Tổng Bí thư.</p>
      `,
      contextGeneral: "30/4/1975 Giải phóng hoàn toàn miền Nam. 2/7/1976 Quốc hội quyết định quốc hiệu CHXHCN Việt Nam. Đại hội IV Đảng đổi tên.",
      contextDomestic: "Đại thắng mùa Xuân 1975 mở ra kỷ nguyên độc lập, thống nhất. Đất nước khắc phục hậu quả chiến tranh nặng nề, thống nhất quản lý kinh tế, tài chính.",
      contextInternational: "Kinh tế Liên Xô và Đông Âu gặp khó khăn. ASEAN tăng cường hợp tác. Mỹ thực hiện cấm vận kinh tế Việt Nam."
    }
  },
  {
    id: 5,
    romanNumeral: "V",
    name: "Đại hội đại biểu toàn quốc lần thứ V",
    year: 1982,
    location: "Hà Nội, Việt Nam",
    mapCoordinates: { x: 48, y: 22 },
    startDate: "1982-03-27",
    endDate: "1982-03-31",
    leaderElected: { name: "Lê Duẩn", title: "Tổng Bí thư" },
    delegates: 1033,
    mainTheme: "Xây dựng chủ nghĩa xã hội và bảo vệ tổ quốc xã hội chủ nghĩa",
    historicalContext: "Kinh tế đất nước gặp nhiều khó khăn, khủng hoảng. Cần điều chỉnh lại các mục tiêu kinh tế.",
    keyResolutions: [
        { id: "R5-1", title: "Hai nhiệm vụ chiến lược", summary: "Xây dựng thành công chủ nghĩa xã hội và sẵn sàng chiến đấu bảo vệ vững chắc Tổ quốc Việt Nam XHCN.", appliedPolicies: [], realImpact: "Định hướng trong bối cảnh vừa có hòa bình vừa có chiến tranh biên giới.", startYear: 1982 },
        { id: "R5-2", title: "10 chính sách lớn", summary: "Các chính sách lớn về kinh tế và xã hội, điều chỉnh lại kế hoạch đầu tư.", appliedPolicies: ["Phát triển nông nghiệp là mặt trận hàng đầu"], realImpact: "Từng bước tháo gỡ khó khăn kinh tế.", startYear: 1982 }
    ],
    achievements: ["Xác định 2 nhiệm vụ chiến lược.", "Thông qua 10 chính sách lớn về kinh tế."],
    images: ["https://cdn.daihoidangtoanquoc.vn/images/cd241f5902f853fa77486e1f9b84b191da99f6984c7475fbc8d2aa16ab52d38d9855c4ac0fdc5a77fe04fc3d83a91be59fe6ca298eba4a640087b942b0678d4b/af-2362-le-duan.jpg"],
    details: {
      introHtml: `
        <p class="mb-4"><b>Từ ngày 27 đến 31/3/1982</b>: Đại hội lần thứ V được tổ chức tại Hà Nội với 1.033 đại biểu.</p>
        <p class="mb-4">Đại hội nhận định Đảng đã lãnh đạo nhân dân vượt qua thử thách nghiêm trọng, song cũng thẳng thắn thừa nhận những khuyết điểm, sai lầm trong quản lý kinh tế - xã hội.</p>
        <p class="mb-4">Đại hội xác định hai nhiệm vụ chiến lược: <b>Xây dựng thành công chủ nghĩa xã hội</b> và <b>Sẵn sàng chiến đấu, bảo vệ vững chắc Tổ quốc</b>.</p>
        <p class="mb-4">Đại hội đề ra 10 chính sách lớn về kinh tế, xã hội và khẳng định khẩu hiệu: "Tất cả vì Tổ quốc xã hội chủ nghĩa, vì hạnh phúc của nhân dân!".</p>
        <p class="mb-4">Đồng chí Lê Duẩn được bầu làm Tổng Bí thư. (Năm 1986, đồng chí Trường Chinh được bầu làm Tổng Bí thư sau khi đồng chí Lê Duẩn từ trần).</p>
      `,
      contextGeneral: "1978-1979 Chiến tranh biên giới Tây Nam và phía Bắc. 1979-1982 Đất nước vừa có hòa bình vừa đương đầu chiến tranh phá hoại.",
      contextDomestic: "Kinh tế gặp nhiều khó khăn, lạm phát cao. Phải đối phó chiến tranh biên giới và làm nghĩa vụ quốc tế tại Campuchia.",
      contextInternational: "Kinh tế Liên Xô, Đông Âu khủng hoảng. Mỹ và phương Tây tiếp tục bao vây cấm vận Việt Nam."
    }
  },
  {
    id: 6,
    romanNumeral: "VI",
    name: "Đại hội đại biểu toàn quốc lần thứ VI",
    year: 1986,
    location: "Hà Nội, Việt Nam",
    mapCoordinates: { x: 48, y: 22 },
    startDate: "1986-12-15",
    endDate: "1986-12-18",
    leaderElected: { name: "Nguyễn Văn Linh", title: "Tổng Bí thư" },
    delegates: 1129,
    mainTheme: "Khởi đầu công cuộc đổi mới toàn diện đất nước",
    historicalContext: "Khủng hoảng kinh tế - xã hội trầm trọng. Đại hội đánh dấu bước ngoặt lịch sử với đường lối Đổi mới toàn diện.",
    keyResolutions: [
        { id: "R6-1", title: "Đường lối Đổi mới", summary: "Đổi mới tư duy kinh tế, chuyển từ tập trung bao cấp sang kinh tế hàng hóa nhiều thành phần.", appliedPolicies: ["Khoán 10", "Xóa bỏ tem phiếu"], realImpact: "Giải phóng sức sản xuất, đưa đất nước thoát khỏi khủng hoảng.", startYear: 1986 },
        { id: "R6-2", title: "3 Chương trình kinh tế", summary: "Tập trung vào: Lương thực - thực phẩm, Hàng tiêu dùng, Hàng xuất khẩu.", appliedPolicies: [], realImpact: "Ổn định đời sống nhân dân.", startYear: 1986 }
    ],
    achievements: ["Đề ra đường lối Đổi mới.", "Xóa bỏ cơ chế tập trung quan liêu bao cấp."],
    images: ["https://cdn.daihoidangtoanquoc.vn/images/cd241f5902f853fa77486e1f9b84b191da99f6984c7475fbc8d2aa16ab52d38dbe1462a5f46d249f2a77faf8ede3ebcc1e1377b838ca0a4e1bb96c7a376c458124c23c314f2a2f7015a1351b58bf9da1/86-4435-nguyen-van-linh.jpg"],
    details: {
      introHtml: `
        <p class="mb-4"><b>Từ ngày 15 đến 18/12/1986</b>: Đại hội lần thứ VI diễn ra tại Hà Nội với 1.129 đại biểu. Đây là <b>Đại hội Đổi mới</b>.</p>
        <p class="mb-4">Đại hội với tinh thần "nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật", thừa nhận những sai lầm trong chỉ đạo chiến lược và tổ chức thực hiện.</p>
        <p class="mb-4">Đại hội đề ra đường lối đổi mới toàn diện, trước hết là đổi mới tư duy kinh tế: chuyển từ nền kinh tế tập trung quan liêu, bao cấp sang nền kinh tế hàng hóa nhiều thành phần, vận hành theo cơ chế thị trường có sự quản lý của Nhà nước.</p>
        <p class="mb-4">Đại hội xác định 3 chương trình kinh tế lớn: <b>Lương thực - thực phẩm, Hàng tiêu dùng, Hàng xuất khẩu</b>.</p>
        <p class="mb-4">Đồng chí Nguyễn Văn Linh được bầu làm Tổng Bí thư.</p>
      `,
      contextGeneral: "1981-1985 Kinh tế khủng hoảng. 1986 Đại hội VI khởi xướng Đổi mới. 1989 Hội nghị TƯ 6 khóa VI chuyển sang cơ chế thị trường.",
      contextDomestic: "Khủng hoảng kinh tế - xã hội trầm trọng, lạm phát phi mã. Đời sống nhân dân cực kỳ khó khăn. Nhu cầu đổi mới trở nên cấp bách.",
      contextInternational: "Liên Xô và Đông Âu khủng hoảng. Trung Quốc cải cách đạt kết quả. Cách mạng khoa học kỹ thuật phát triển mạnh."
    }
  },
  {
    id: 7,
    romanNumeral: "VII",
    name: "Đại hội đại biểu toàn quốc lần thứ VII",
    year: 1991,
    location: "Hà Nội, Việt Nam",
    mapCoordinates: { x: 48, y: 22 },
    startDate: "1991-06-24",
    endDate: "1991-06-27",
    leaderElected: { name: "Đỗ Mười", title: "Tổng Bí thư" },
    delegates: 1176,
    mainTheme: "Đẩy mạnh công cuộc đổi mới, đưa đất nước cơ bản thoát khỏi khủng hoảng",
    historicalContext: "Liên Xô và Đông Âu sụp đổ. Việt Nam kiên định con đường đi lên CNXH.",
    keyResolutions: [
        { id: "R7-1", title: "Cương lĩnh 1991", summary: "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội.", appliedPolicies: ["Xác định 6 đặc trưng của xã hội XHCN"], realImpact: "Nền tảng lý luận cho công cuộc đổi mới.", startYear: 1991 },
        { id: "R7-2", title: "Chiến lược KTXH 2000", summary: "Chiến lược ổn định và phát triển kinh tế - xã hội đến năm 2000.", appliedPolicies: [], realImpact: "Đưa đất nước ra khỏi khủng hoảng.", startYear: 1991 }
    ],
    achievements: ["Thông qua Cương lĩnh 1991.", "Chiến lược kinh tế - xã hội đến năm 2000."],
    images: ["https://cdn.daihoidangtoanquoc.vn/images/cd241f5902f853fa77486e1f9b84b191da99f6984c7475fbc8d2aa16ab52d38d4f57fe4dab8a2a3ab6289d66832ed31a9d33c444f1f6bba81351fb4517b496b4/86-4438-do-muoi.jpg"],
    details: {
      introHtml: `
        <p class="mb-4"><b>Từ ngày 24 đến 27/6/1991</b>: Đại hội VII họp tại Hà Nội với 1.176 đại biểu.</p>
        <p class="mb-4">Đại hội thông qua <b>Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội (Cương lĩnh 1991)</b>, khẳng định Việt Nam kiên định con đường XHCN dù Liên Xô và Đông Âu sụp đổ.</p>
        <p class="mb-4">Đại hội đề ra mục tiêu: Vượt qua khó khăn thử thách, ổn định và phát triển kinh tế - xã hội, đưa nước ta cơ bản ra khỏi tình trạng khủng hoảng.</p>
        <p class="mb-4">Đại hội thông qua Chiến lược ổn định và phát triển kinh tế - xã hội đến năm 2000.</p>
        <p class="mb-4">Đồng chí Đỗ Mười được bầu làm Tổng Bí thư.</p>
      `,
      contextGeneral: "1989-1991 Chế độ XHCN ở Đông Âu và Liên Xô sụp đổ. Việt Nam kiên định đổi mới. 1991-1995 Kinh tế phục hồi, GDP tăng 8,2%/năm.",
      contextDomestic: "Bước đầu đạt thành tựu đổi mới nhưng vẫn chưa ra khỏi khủng hoảng. Khoán 10 trong nông nghiệp thành công, bắt đầu xuất khẩu gạo.",
      contextInternational: "Hệ thống XHCN thế giới lâm vào thoái trào. Chiến tranh lạnh chấm dứt. Các thế lực thù địch đẩy mạnh 'diễn biến hòa bình'."
    }
  },
  {
    id: 8,
    romanNumeral: "VIII",
    name: "Đại hội đại biểu toàn quốc lần thứ VIII",
    year: 1996,
    location: "Hà Nội, Việt Nam",
    mapCoordinates: { x: 48, y: 22 },
    startDate: "1996-06-28",
    endDate: "1996-07-01",
    leaderElected: { name: "Đỗ Mười", title: "Tổng Bí thư" },
    delegates: 1198,
    mainTheme: "Đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước",
    historicalContext: "Đất nước đã ra khỏi khủng hoảng kinh tế - xã hội, bước vào thời kỳ phát triển mới.",
    keyResolutions: [
        { id: "R8-1", title: "Đẩy mạnh CNH-HĐH", summary: "Chuyển từ giai đoạn chuẩn bị tiền đề sang thời kỳ đẩy mạnh công nghiệp hóa, hiện đại hóa.", appliedPolicies: [], realImpact: "Tăng trưởng kinh tế cao, thay đổi bộ mặt đất nước.", startYear: 1996 },
        { id: "R8-2", title: "Nghị quyết TƯ 6 (lần 2)", summary: "Về xây dựng, chỉnh đốn Đảng (1999).", appliedPolicies: ["Tự phê bình và phê bình"], realImpact: "Nâng cao năng lực lãnh đạo của Đảng.", startYear: 1999 }
    ],
    achievements: ["Đất nước ra khỏi khủng hoảng.", "Chuyển sang thời kỳ đẩy mạnh CNH-HĐH."],
    images: ["https://cdn.daihoidangtoanquoc.vn/images/cd241f5902f853fa77486e1f9b84b191da99f6984c7475fbc8d2aa16ab52d38d4f57fe4dab8a2a3ab6289d66832ed31a9d33c444f1f6bba81351fb4517b496b4/86-4438-do-muoi.jpg"],
    details: {
      introHtml: `
        <p class="mb-4"><b>Từ ngày 28/6 đến 1/7/1996</b>: Đại hội VIII diễn ra tại Hà Nội với 1.198 đại biểu.</p>
        <p class="mb-4">Đại hội đánh giá sau 10 năm đổi mới, nước ta đã ra khỏi khủng hoảng kinh tế - xã hội, nhiệm vụ chặng đường đầu của thời kỳ quá độ cơ bản hoàn thành.</p>
        <p class="mb-4">Đại hội quyết định chuyển sang thời kỳ mới: <b>Đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước</b>. Mục tiêu đến năm 2020 đưa nước ta cơ bản trở thành một nước công nghiệp.</p>
        <p class="mb-4">Đồng chí Đỗ Mười được bầu làm Tổng Bí thư. (Tháng 12/1997, Hội nghị TƯ 4 khoá VIII bầu đồng chí Lê Khả Phiêu làm Tổng Bí thư).</p>
      `,
      contextGeneral: "7/1995 Bình thường hóa quan hệ với Mỹ, gia nhập ASEAN. 1997-1998 Khủng hoảng tài chính châu Á.",
      contextDomestic: "Kinh tế tăng trưởng nhanh (GDP tăng 8,2%/năm giai đoạn 91-95), lạm phát bị đẩy lùi. Đời sống nhân dân cải thiện. Vị thế quốc tế nâng cao.",
      contextInternational: "Toàn cầu hóa diễn ra mạnh mẽ. Cách mạng khoa học công nghệ phát triển. Việt Nam hội nhập sâu rộng (ASEAN, APEC, quan hệ Việt-Mỹ)."
    }
  },
  {
    id: 9,
    romanNumeral: "IX",
    name: "Đại hội đại biểu toàn quốc lần thứ IX",
    year: 2001,
    location: "Hà Nội, Việt Nam",
    mapCoordinates: { x: 48, y: 22 },
    startDate: "2001-04-19",
    endDate: "2001-04-22",
    leaderElected: { name: "Nông Đức Mạnh", title: "Tổng Bí thư" },
    delegates: 1168,
    mainTheme: "Phát triển kinh tế, công nghiệp hóa, hiện đại hóa là nhiệm vụ trung tâm",
    historicalContext: "Bước vào thế kỷ 21, chuẩn bị hội nhập kinh tế quốc tế sâu rộng.",
    keyResolutions: [
        { id: "R9-1", title: "Kinh tế thị trường định hướng XHCN", summary: "Xác định mô hình kinh tế tổng quát trong thời kỳ quá độ.", appliedPolicies: ["Phát triển kinh tế nhiều thành phần"], realImpact: "Giải phóng nguồn lực xã hội, thu hút đầu tư.", startYear: 2001 },
        { id: "R9-2", title: "Chiến lược 2001-2010", summary: "Chiến lược phát triển kinh tế - xã hội 10 năm.", appliedPolicies: [], realImpact: "Đưa nước ta ra khỏi tình trạng kém phát triển.", startYear: 2001 }
    ],
    achievements: ["Mô hình kinh tế thị trường định hướng XHCN.", "Chiến lược phát triển 2001-2010."],
    images: ["https://cdn.daihoidangtoanquoc.vn/images/cd241f5902f853fa77486e1f9b84b191da99f6984c7475fbc8d2aa16ab52d38d077a7501186cfe1f4b11b1c74832c9837b6f4fa36c8d6d2eba899f31218bce38536dd69eecc212750afcebe503b076f9/m06-2346-nong-duc-manh.jpg"],
    details: {
      introHtml: `
        <p class="mb-4"><b>Từ ngày 19 đến 22/4/2001</b>: Đại hội IX họp tại Hà Nội với 1.168 đại biểu.</p>
        <p class="mb-4">Đại hội nhìn lại 15 năm đổi mới, khẳng định những thành tựu to lớn. GDP năm 2000 tăng gấp đôi năm 1990.</p>
        <p class="mb-4">Đại hội chính thức xác định mô hình kinh tế tổng quát của thời kỳ quá độ là <b>nền kinh tế thị trường định hướng xã hội chủ nghĩa</b>.</p>
        <p class="mb-4">Đại hội thông qua Chiến lược phát triển kinh tế - xã hội 10 năm 2001-2010.</p>
        <p class="mb-4">Đồng chí Nông Đức Mạnh được bầu làm Tổng Bí thư.</p>
      `,
      contextGeneral: "2001-2010 Chiến lược phát triển KTXH. Năm 2000 GDP bình quân đạt 402 USD.",
      contextDomestic: "Kinh tế tăng trưởng khá, chính trị ổn định. Đã ký Hiệp định thương mại Việt-Mỹ. Chuẩn bị gia nhập WTO.",
      contextInternational: "Bước vào thế kỷ 21. Sự kiện 11/9/2001 làm thay đổi cục diện thế giới. Kinh tế tri thức phát triển."
    }
  },
  {
    id: 10,
    romanNumeral: "X",
    name: "Đại hội đại biểu toàn quốc lần thứ X",
    year: 2006,
    location: "Hà Nội, Việt Nam",
    mapCoordinates: { x: 48, y: 22 },
    startDate: "2006-04-18",
    endDate: "2006-04-25",
    leaderElected: { name: "Nông Đức Mạnh", title: "Tổng Bí thư" },
    delegates: 1176,
    mainTheme: "Sớm đưa nước ta ra khỏi tình trạng kém phát triển",
    historicalContext: "Việt Nam chính thức trở thành thành viên WTO.",
    keyResolutions: [
        { id: "R10-1", title: "Đảng viên làm kinh tế tư nhân", summary: "Cho phép đảng viên làm kinh tế tư nhân.", appliedPolicies: [], realImpact: "Khuyến khích làm giàu chính đáng.", startYear: 2006 },
        { id: "R10-2", title: "Hội nhập quốc tế", summary: "Chủ động và tích cực hội nhập kinh tế quốc tế.", appliedPolicies: ["Gia nhập WTO"], realImpact: "Mở rộng thị trường, thu hút FDI mạnh mẽ.", startYear: 2006 }
    ],
    achievements: ["Cho phép đảng viên làm kinh tế tư nhân.", "Việt Nam gia nhập WTO (2006)."],
    images: ["https://cdn.daihoidangtoanquoc.vn/images/cd241f5902f853fa77486e1f9b84b191da99f6984c7475fbc8d2aa16ab52d38d077a7501186cfe1f4b11b1c74832c9837b6f4fa36c8d6d2eba899f31218bce38536dd69eecc212750afcebe503b076f9/m06-2346-nong-duc-manh.jpg"],
    details: {
      introHtml: `
        <p class="mb-4"><b>Từ ngày 18 đến 25/4/2006</b>: Đại hội X diễn ra tại Hà Nội với 1.176 đại biểu.</p>
        <p class="mb-4">Đại hội đánh giá 20 năm đổi mới, đất nước đã đạt những thành tựu to lớn, có ý nghĩa lịch sử.</p>
        <p class="mb-4">Mục tiêu: Nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng, phát huy sức mạnh toàn dân tộc, đẩy mạnh toàn diện công cuộc đổi mới, <b>sớm đưa nước ta ra khỏi tình trạng kém phát triển</b>.</p>
        <p class="mb-4">Đại hội cho phép đảng viên làm kinh tế tư nhân - một bước đột phá trong tư duy.</p>
        <p class="mb-4">Đồng chí Nông Đức Mạnh tiếp tục được bầu làm Tổng Bí thư.</p>
      `,
      contextGeneral: "2006 Gia nhập WTO. 2007 Ủy viên không thường trực HĐBA LHQ. 2008 Khủng hoảng tài chính toàn cầu.",
      contextDomestic: "Thế và lực nước ta lớn mạnh sau 20 năm đổi mới. Tuy nhiên nguy cơ tụt hậu kinh tế và tham nhũng vẫn là thách thức lớn.",
      contextInternational: "Toàn cầu hóa mạnh mẽ. Khủng hoảng tài chính 2008 tác động tiêu cực đến kinh tế thế giới."
    }
  },
  {
    id: 11,
    romanNumeral: "XI",
    name: "Đại hội đại biểu toàn quốc lần thứ XI",
    year: 2011,
    location: "Hà Nội, Việt Nam",
    mapCoordinates: { x: 48, y: 22 },
    startDate: "2011-01-12",
    endDate: "2011-01-19",
    leaderElected: { name: "Nguyễn Phú Trọng", title: "Tổng Bí thư" },
    delegates: 1377,
    mainTheme: "Đẩy mạnh toàn diện công cuộc đổi mới; phát triển kinh tế nhanh, bền vững",
    historicalContext: "Kinh tế thế giới suy thoái, trong nước lạm phát cao. Cần tái cơ cấu nền kinh tế.",
    keyResolutions: [
        { id: "R11-1", title: "Cương lĩnh 2011", summary: "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ (bổ sung, phát triển).", appliedPolicies: ["8 phương hướng cơ bản"], realImpact: "Định hướng phát triển dài hạn.", startYear: 2011 },
        { id: "R11-2", title: "3 Đột phá chiến lược", summary: "Hoàn thiện thể chế, Phát triển nhân lực, Kết cấu hạ tầng.", appliedPolicies: [], realImpact: "Tập trung nguồn lực phát triển.", startYear: 2011 }
    ],
    achievements: ["Cương lĩnh 2011 (bổ sung, phát triển).", "3 đột phá chiến lược.", "Nghị quyết TƯ 4 khóa XI về xây dựng Đảng."],
    images: ["https://cdn.daihoidangtoanquoc.vn/images/cd241f5902f853fa77486e1f9b84b191da99f6984c7475fbc8d2aa16ab52d38d439f645effffe9c01df88f47c9042ed3b34784881c6d60aa1cc2c604c7bfe0f5f2ed06672281c56d1738b873bac4230d/dc-nguyen-phu-trong.jpg"],
    details: {
      introHtml: `
        <p class="mb-4"><b>Từ ngày 12 đến 19/1/2011</b>: Đại hội XI diễn ra tại Hà Nội với 1.377 đại biểu.</p>
        <p class="mb-4">Đại hội thông qua <b>Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội (bổ sung, phát triển năm 2011)</b>.</p>
        <p class="mb-4">Đại hội xác định Chiến lược phát triển kinh tế - xã hội 2011-2020 với <b>3 đột phá chiến lược</b>: Hoàn thiện thể chế kinh tế thị trường; Phát triển nguồn nhân lực chất lượng cao; Xây dựng hệ thống kết cấu hạ tầng đồng bộ.</p>
        <p class="mb-4">Đồng chí Nguyễn Phú Trọng được bầu làm Tổng Bí thư.</p>
      `,
      contextGeneral: "2011-2015 Tái cơ cấu nền kinh tế. Nghị quyết TƯ 4 khóa XI về xây dựng Đảng cấp bách.",
      contextDomestic: "Việt Nam ra khỏi tình trạng nước kém phát triển (nhóm thu nhập thấp). Lạm phát cao, kinh tế vĩ mô bất ổn cần tái cơ cấu.",
      contextInternational: "Kinh tế thế giới phục hồi chậm sau khủng hoảng. Biển Đông diễn biến phức tạp. Cách mạng 4.0 bắt đầu nhen nhóm."
    }
  },
  {
    id: 12,
    romanNumeral: "XII",
    name: "Đại hội đại biểu toàn quốc lần thứ XII",
    year: 2016,
    location: "Hà Nội, Việt Nam",
    mapCoordinates: { x: 48, y: 22 },
    startDate: "2016-01-20",
    endDate: "2016-01-28",
    leaderElected: { name: "Nguyễn Phú Trọng", title: "Tổng Bí thư" },
    delegates: 1510,
    mainTheme: "Đẩy mạnh toàn diện, đồng bộ công cuộc đổi mới đất nước",
    historicalContext: "Đẩy mạnh cuộc đấu tranh phòng, chống tham nhũng, tiêu cực.",
    keyResolutions: [
        { id: "R12-1", title: "Nghị quyết TƯ 4 khóa XII", summary: "Về tăng cường xây dựng, chỉnh đốn Đảng; ngăn chặn suy thoái, 'tự diễn biến', 'tự chuyển hóa'.", appliedPolicies: ["Nhận diện 27 biểu hiện suy thoái"], realImpact: "Đẩy mạnh cuộc chiến chống tham nhũng, làm trong sạch bộ máy.", startYear: 2016 }
    ],
    achievements: ["Nghị quyết TƯ 4 khóa XII về chỉnh đốn Đảng.", "Chống tham nhũng quyết liệt."],
    images: ["https://cdn.daihoidangtoanquoc.vn/images/cd241f5902f853fa77486e1f9b84b191da99f6984c7475fbc8d2aa16ab52d38d439f645effffe9c01df88f47c9042ed3b34784881c6d60aa1cc2c604c7bfe0f5f2ed06672281c56d1738b873bac4230d/dc-nguyen-phu-trong.jpg"],
    details: {
      introHtml: `
        <p class="mb-4"><b>Từ ngày 20 đến 28/1/2016</b>: Đại hội XII diễn ra tại Hà Nội với 1.510 đại biểu.</p>
        <p class="mb-4">Đại hội đánh giá 30 năm đổi mới là giai đoạn lịch sử quan trọng, khẳng định đường lối đổi mới là đúng đắn, sáng tạo.</p>
        <p class="mb-4">Nhiệm vụ trọng tâm: Tăng cường xây dựng, chỉnh đốn Đảng; ngăn chặn, đẩy lùi suy thoái tư tưởng chính trị, đạo đức, lối sống, "tự diễn biến", "tự chuyển hóa".</p>
        <p class="mb-4">Đồng chí Nguyễn Phú Trọng tiếp tục được bầu làm Tổng Bí thư.</p>
        <p class="mb-4">Nghị quyết Trung ương 4 khóa XII đã nhận diện rõ 27 biểu hiện suy thoái và "tự diễn biến", "tự chuyển hóa".</p>
      `,
      contextGeneral: "2016-2020 Đẩy mạnh chống tham nhũng. Kinh tế vĩ mô ổn định.",
      contextDomestic: "30 năm đổi mới đạt thành tựu to lớn. Tuy nhiên, tình trạng suy thoái, tham nhũng chưa bị đẩy lùi. Biển Đông phức tạp.",
      contextInternational: "Hòa bình hợp tác là xu thế lớn nhưng xung đột cục bộ gia tăng. Cách mạng 4.0 bùng nổ mạnh mẽ."
    }
  },
  {
    id: 13,
    romanNumeral: "XIII",
    name: "Đại hội đại biểu toàn quốc lần thứ XIII",
    year: 2021,
    location: "Hà Nội, Việt Nam",
    mapCoordinates: { x: 48, y: 22 },
    startDate: "2021-01-26",
    endDate: "2021-02-01",
    leaderElected: { name: "Nguyễn Phú Trọng", title: "Tổng Bí thư" },
    delegates: 1587,
    mainTheme: "Mục tiêu trở thành nước phát triển, theo định hướng xã hội chủ nghĩa",
    historicalContext: "Diễn ra trong bối cảnh đại dịch COVID-19. Đặt mục tiêu 2025, 2030, 2045.",
    keyResolutions: [
        { id: "R13-1", title: "Mục tiêu 2030 - 2045", summary: "Phấn đấu đến 2030 là nước đang phát triển, công nghiệp hiện đại; đến 2045 trở thành nước phát triển, thu nhập cao.", appliedPolicies: ["Khơi dậy khát vọng phát triển"], realImpact: "Định hướng tầm nhìn dài hạn cho đất nước.", startYear: 2021 }
    ],
    achievements: ["Khát vọng phát triển đất nước phồn vinh, hạnh phúc.", "Mục tiêu 2045: Nước phát triển, thu nhập cao."],
    images: ["https://cdn.daihoidangtoanquoc.vn/images/cd241f5902f853fa77486e1f9b84b191da99f6984c7475fbc8d2aa16ab52d38d439f645effffe9c01df88f47c9042ed3b34784881c6d60aa1cc2c604c7bfe0f5f2ed06672281c56d1738b873bac4230d/dc-nguyen-phu-trong.jpg"],
    details: {
      introHtml: `
        <p class="mb-4"><b>Từ ngày 26/1 đến 1/2/2021</b>: Đại hội XIII diễn ra tại Hà Nội với 1.587 đại biểu.</p>
        <p class="mb-4">Chủ đề: Khơi dậy khát vọng phát triển đất nước phồn vinh, hạnh phúc. Phấn đấu đến giữa thế kỷ XXI nước ta trở thành <b>nước phát triển, theo định hướng xã hội chủ nghĩa</b>.</p>
        <p class="mb-4">Mục tiêu cụ thể:
        <br>- 2025: Nước đang phát triển, công nghiệp theo hướng hiện đại, vượt qua mức thu nhập trung bình thấp.
        <br>- 2030: Nước đang phát triển, công nghiệp hiện đại, thu nhập trung bình cao.
        <br>- 2045: Trở thành nước phát triển, thu nhập cao.</p>
        <p class="mb-4">Đồng chí Nguyễn Phú Trọng tiếp tục được bầu làm Tổng Bí thư.</p>
        <p class="mb-4"><i>(Ngày 3/8/2024, sau khi Tổng Bí thư Nguyễn Phú Trọng từ trần, đồng chí Tô Lâm được bầu giữ chức Tổng Bí thư).</i></p>
      `,
      contextGeneral: "Đại dịch COVID-19 tác động toàn cầu. Việt Nam kiểm soát dịch và phục hồi kinh tế. Chuyển giao thế hệ lãnh đạo (2024).",
      contextDomestic: "Cơ đồ, tiềm lực, vị thế quốc tế chưa bao giờ có được như ngày nay. Tuy nhiên, nguy cơ tụt hậu và bẫy thu nhập trung bình vẫn còn.",
      contextInternational: "Thế giới biến động nhanh, khó lường. Cạnh tranh chiến lược nước lớn gay gắt. Kinh tế số, xã hội số phát triển mạnh."
    }
  },
  {
    id: 14,
    romanNumeral: "XIV",
    name: "Đại hội đại biểu toàn quốc lần thứ XIV (Dự kiến)",
    year: 2026,
    location: "Hà Nội, Việt Nam",
    mapCoordinates: { x: 48, y: 22 },
    startDate: "2026-01-19",
    endDate: "2026-01-25",
    leaderElected: { name: "Tô Lâm", title: "Tổng Bí thư" },
    delegates: 1586,
    mainTheme: "Hiện thực hoá tầm nhìn đến năm 2045 trở thành nước phát triển, thu nhập cao",
    historicalContext: "Sự kiện chính trị đặc biệt quan trọng, kỷ nguyên vươn mình của dân tộc.",
    keyResolutions: [
      {
        id: "RES-14-01",
        title: "Mục tiêu 2030 - 2045",
        summary: "Hiện thực hóa mục tiêu đến năm 2030 là nước đang phát triển có công nghiệp hiện đại, thu nhập trung bình cao.",
        appliedPolicies: ["Đại diện cho hơn 5,6 triệu đảng viên.", "Thảo luận Báo cáo chính trị và Tổng kết 40 năm Đổi mới."],
        realImpact: "Tiếp tục đẩy mạnh công cuộc đổi mới, hội nhập và phát triển.",
        startYear: 2026
      }
    ],
    achievements: [
      "Dự kiến 1.586 đại biểu tham dự.",
      "Tổng kết 15 năm thi hành Điều lệ Đảng (2011-2025).",
      "Bầu Ban Chấp hành Trung ương khóa XIV."
    ],
    images: [getPlaceholder("Đại hội XIV - Kỷ nguyên vươn mình", "D61C1F")],
    details: {
      introHtml: `
        <p class="mb-4"><b>Đại hội lần thứ XIV của Đảng diễn ra từ ngày 19/1 đến 23/1/2026</b>, tại Thủ đô Hà Nội, với sự tham dự của 1.586 đại biểu, đại diện cho hơn 5,6 triệu đảng viên.</p>
        <p class="mb-4">Chủ đề của Đại hội là: “<i>Dưới lá cờ vẻ vang của Đảng, chung sức, đồng lòng thực hiện thắng lợi các mục tiêu phát triển đất nước đến năm 2030; tự chủ chiến lược, tự cường, tự tin, tiến mạnh trong kỷ nguyên vươn mình của dân tộc, vì hòa bình, độc lập, dân chủ, giàu mạnh, phồn vinh, văn minh, hạnh phúc, vững bước đi lên chủ nghĩa xã hội</i>”.</p>
        <p class="mb-4">Với phương châm Đoàn kết - Dân chủ - Kỷ cương - Đột phá - Phát triển, Đại hội xác định tư duy, tầm nhìn, những quyết sách chiến lược để vững bước tiến mạnh trong kỷ nguyên mới.</p>
        
        <h4 class="text-xl font-bold text-cpv-red mt-6 mb-3">Mục tiêu phát triển</h4>
        <p class="mb-2">Thực hiện thắng lợi mục tiêu đến năm 2030 trở thành nước đang phát triển có công nghiệp hiện đại, thu nhập trung bình cao; hiện thực hoá tầm nhìn đến năm 2045 trở thành nước phát triển, thu nhập cao.</p>
        
        <h4 class="text-xl font-bold text-cpv-red mt-6 mb-3">Chỉ tiêu chủ yếu 2026 - 2030</h4>
        <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-700">
          <li>Tăng trưởng GDP bình quân từ 10%/năm trở lên.</li>
          <li>GDP bình quân đầu người đến năm 2030 đạt khoảng 8.500 USD.</li>
          <li>Chỉ số phát triển con người (HDI) đạt khoảng 0,78.</li>
        </ul>

        <h4 class="text-xl font-bold text-cpv-red mt-6 mb-3">12 Nhiệm vụ chủ yếu</h4>
        <ol class="list-decimal pl-5 space-y-2 mb-4 text-gray-700">
          <li>Tiếp tục xây dựng, hoàn thiện đồng bộ thể chế phát triển nhanh và bền vững đất nước.</li>
          <li>Xác lập mô hình tăng trưởng mới, cơ cấu lại nền kinh tế, đẩy mạnh công nghiệp hóa, hiện đại hóa.</li>
          <li>Phát triển mạnh mẽ, toàn diện văn hóa và con người Việt Nam.</li>
          <li>Xây dựng nền giáo dục quốc dân hiện đại, ngang tầm khu vực và thế giới.</li>
          <li>Đột phá phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia.</li>
          <li>Quản lý phát triển xã hội bền vững; bảo đảm tiến bộ, công bằng xã hội.</li>
          <li>Quản lý và sử dụng hiệu quả tài nguyên, bảo vệ môi trường.</li>
          <li>Tăng cường quốc phòng, an ninh; bảo vệ vững chắc Tổ quốc.</li>
          <li>Đẩy mạnh triển khai đồng bộ, sáng tạo hoạt động đối ngoại và hội nhập quốc tế.</li>
          <li>Phát huy mạnh mẽ vai trò chủ thể của nhân dân, dân chủ xã hội chủ nghĩa.</li>
          <li>Tiếp tục đẩy mạnh xây dựng và hoàn thiện Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam.</li>
          <li>Tiếp tục đẩy mạnh xây dựng, chỉnh đốn Đảng trong sạch vững mạnh toàn diện.</li>
        </ol>
      `,
      contextGeneral: `19/1-23/1/2026: Đại hội XIV với phương châm Đoàn kết - Dân chủ - Kỷ cương - Đột phá - Phát triển.`,
      contextDomestic: `Sau 40 năm đổi mới, cơ đồ, tiềm lực, vị thế và uy tín quốc tế của đất nước được nâng lên. Tuy nhiên, đất nước sẽ phải đối mặt với nhiều khó khăn, thách thức, nguy cơ tụt hậu về công nghệ và bẫy thu nhập trung bình.`,
      contextInternational: `Cục diện thế giới đang chuyển biến nhanh, phức tạp chưa từng có theo hướng đa cực. Hòa bình, hợp tác, phát triển vẫn là xu thế lớn, song đứng trước nhiều thách thức mới. Cuộc Cách mạng công nghiệp lần thứ tư tác động sâu sắc.`
    }
  }
];

// Clone VI data to EN for now to ensure structure matches, ideally this would be translated
const CONGRESS_DATA_EN = [...CONGRESS_DATA_VI]; 

export { CONGRESS_DATA_VI, CONGRESS_DATA_EN };
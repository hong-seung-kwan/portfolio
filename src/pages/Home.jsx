import React, { useState } from 'react'
import { Projects } from '../data/Projects'
import ProjectModal from '../components/ProjectModal'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';

const Home = () => {
    const [selectedProject, setSelectedProject] = useState(null)
    const [selectedImages, setSelectedImages] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % selectedImages.length)
    }

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + selectedImages.length) % selectedImages.length)
    }

    return (
        <div className="bg-white min-h-screen text-black px-8">
            {/*PROFILE 섹션 */}
            <section className="relative bg-white text-gray-900 pt-32 pb-44 overflow-hidden">
                <div className="max-w-6xl mx-auto pl-8 flex flex-col md:flex-row items-center gap-16 md:gap-24 relative">

                    {/* 왼쪽: PROFILE 타이틀 + 사진 */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h1 className="font-blackHan text-[60px] tracking-wide mb-8 md:mb-0 self-start md:-ml-8">
                            PROFILE
                        </h1>

                        <div className="border-[2px] border-gray-400 rounded-sm p-3 inline-block">
                            <img
                                src="/images/profile.jpg"
                                alt="홍승관 프로필"
                                className="w-64 h-72 md:w-80 md:h-93 object-cover rounded-sm shadow-lg"
                            />
                        </div>
                    </div>

                    {/* 오른쪽: 정보 영역 */}
                    <div className="flex-1 text-center md:text-left mt-">
                        <h2 className="text-[34px] md:text-[37px] font-black mb-1">
                            홍승관 <span className="text-gray-500 text-[25px] md:text-[27px] font-medium ml-2">HONG SEUNGKWAN</span>
                        </h2>
                        <p className="text-gray-700 font-medium mb-6 text-[24px] md:text-[27px]">Web Front-End Developer</p>

                        <div className="space-y-3 text-[20px] md:text-[25px] text-gray-700">
                            <p className="flex items-center justify-center md:justify-start gap-2">
                                📧 <span>seungkwan8164@gmail.com</span>
                            </p>
                            <p className="flex items-center justify-center md:justify-start gap-2">
                                📞 <span>010-9942-5764</span>
                            </p>
                            <p className="flex items-center justify-center md:justify-start gap-2">
                                🐱{" "}
                                <a
                                    href="https://github.com/hong-seung-kwan"
                                    className="text-blue-600 hover:underline"
                                >
                                    github.com/hong-seung-kwan
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT ME 섹션 */}
            <section className="bg-white text-gray-900 pt-16 pb-32 px-6">
                <div className="max-w-6xl mx-auto text-left">
                    <h2 className="font-blackHan text-[60px] mb-12 text-gray-900 tracking-tight">
                        저는 이런 사람이에요.
                    </h2>

                    <div className="max-w-4xl mx-auto text-[20px] leading-relaxed text-gray-700">

                        누구나 쉽게 이해할 수 있는 <strong>가독성 높은 코드</strong>를 작성하기 위해 고민합니다.
                        <br />
                        협업 과정에서 팀원들과의 <strong>소통</strong>을 중요하게 생각합니다.
                        <br />
                        <strong>코드 리뷰</strong>와 <strong>피드백</strong>을 통해 성장하는 것을 즐기고,
                        <br />
                        더 나은 방향이 있는지 적극적으로 <strong>피드백</strong>을 구합니다.
                        <br />
                        <strong>사용자 경험</strong>을 고려하여 개발하려고 노력합니다.
                        <br />
                        혼자서도 학습을 하지만 <strong>함께</strong>할 때 더 큰 성장을 할 수 있다고 생각합니다.

                    </div>
                </div>
            </section>

            {/* 📂 PROJECTS 섹션 */}
            <section className="bg-white text-gray-900 pt-16 pb-32 px-6">
                <div className="max-w-6xl mx-auto text-left">
                    <h2 className="font-blackHan text-[60px] font-bold mb-16 tracking-wide">
                        PROJECTS
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                        {Projects.map((p) => (
                            <div
                                key={p.id}
                                className="group bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                {/* 상단 카테고리 + 기간 */}
                                <div className="mb-4 flex flex-col gap-1">
                                    <span className="inline-block text-sm font-semibold bg-red-500 text-white px-3 py-1 rounded-full w-fit">
                                        {p.category}
                                    </span>
                                    <p className="text-sm text-gray-500">{p.period}</p>
                                </div>

                                {/* 프로젝트 제목 */}
                                <h3 className="text-[20px] font-extrabold text-gray-900 mb-3 transition-colors">
                                    {p.title}
                                </h3>

                                {/* 설명 리스트 */}
                                <ul className="text-gray-700 text-[15px] leading-relaxed space-y-2 mb-5 list-disc list-inside">
                                    {p.descList?.map((line, i) => (
                                        <li key={i}>{line}</li>
                                    ))}
                                </ul>

                                {/* 기술 스택 */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {p.tech.map((t, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-yellow-50 border border-yellow-300 text-gray-800 text-xs px-2.5 py-1 rounded-md"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* 버튼 영역 */}
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => setSelectedProject(p)}
                                        className="flex items-center gap-2 border border-gray-300 text-sm font-semibold rounded-md px-3 py-1.5 hover:bg-gray-100 transition"
                                    >
                                        📄 README
                                    </button>

                                    {p.images && (
                                        <button
                                            onClick={() => { setSelectedImages(p.images); setCurrentIndex(0); }}
                                            className="flex items-center gap-2 border border-gray-300 text-sm font-semibold rounded-md px-3 py-1.5 hover:bg-gray-100 transition"
                                        >
                                            🖼 이미지
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* README 모달 */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 px-4">
                    <div className="bg-white text-black rounded-2xl shadow-xl w-full max-w-3xl relative flex flex-col">
                        <div className="bg-[#1E1E1E] text-white flex justify-between items-center px-5 py-2">
                            <h2 className="font-semibold text-sm tracking-wide">README.md</h2>
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="text-gray-300 hover:text-white text-lg"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="p-8 overflow-y-auto max-h-[80vh]">
                            <h2 className="text-[22px] font-extrabold mb-1">{selectedProject.title}</h2>
                            <p className="text-gray-500 text-sm mb-6">{selectedProject.period}</p>

                            <div
                                className="
                                prose prose-slate max-w-none
                                [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:pl-2
                                [&_li]:text-gray-700 [&_li]:leading-relaxed
                                [&_h3]:mt-10 [&_h3]:mb-3 [&_h3]:text-[17px] [&_h3]:font-semibold [&_h3]:text-black
                                [&_p]:my-3 [&_ul]:my-4 [&_ol]:my-4
                                [&_a]:text-blue-600 [&_a:hover]:underline
                                "
                            >
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {selectedProject.readme}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* 이미지 모달 */}
            {selectedImages && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
                    <div className="relative bg-white rounded-xl shadow-lg p-6 flex flex-col items-center w-full max-w-6xl">
                        <img
                            src={selectedImages[currentIndex]}
                            alt="project"
                            className="max-h-[85vh] object-contain rounded-lg"
                        />
                        <div className="flex justify-between items-center w-full mt-4">
                            <button onClick={handlePrev} className="text-gray-600 hover:text-black text-2xl">◀</button>
                            <p className="text-sm text-gray-600">{currentIndex + 1} / {selectedImages.length}</p>
                            <button onClick={handleNext} className="text-gray-600 hover:text-black text-2xl">▶</button>
                        </div>
                        <button
                            onClick={() => setSelectedImages(null)}
                            className="absolute top-3 right-4 text-gray-400 hover:text-black text-xl"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Home

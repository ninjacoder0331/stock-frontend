'use client';

import Image from "next/image";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { TrendingUpIcon, GlobeIcon, UserIcon } from "@/assets/icons";
import { PieChart } from "@/components/Layouts/sidebar/icons";

const Hero = () => {
  useEffect(() => {
    // Handle any client-side animations or effects here
    if (typeof window !== 'undefined') {
      // Your wow.js or other client-side code
    }
  }, []);

  const DynamicImage = dynamic(() => import('next/image'), {
    ssr: false
  });

  return (
    <div className="h-full">
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 pb-16 pt-[100px] md:pb-[120px] md:pt-[130px] xl:pb-[160px] xl:pt-[160px] 2xl:pb-[200px] 2xl:pt-[180px]"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-1/2">
              <div className="wow fadeInUp max-w-[600px]">
                <div className="mb-6 inline-flex items-center rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                  <span className="mr-2 flex h-2 w-2 rounded-full bg-blue-500"></span>
                  Professional Stock Trading Platform
                </div>
                
                <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl md:text-6xl">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Master Stock
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Markets Today
                  </span>
                </h1>
                
                <h2 className="mb-6 text-xl font-medium !leading-relaxed text-gray-700 dark:text-gray-300 sm:text-2xl">
                  Your Gateway to Intelligent Stock Trading
                </h2>
                
                <p className="mb-8 text-base !leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg">
                  Experience next-generation stock trading with advanced analytics, real-time market data, and intelligent insights. Build your portfolio with confidence using our cutting-edge tools designed for modern stock investors.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <button className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white transition duration-300 ease-in-out hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95">
                    Start Trading Stocks
                    <TrendingUpIcon className="ml-2 h-5 w-5" />
                  </button>
                  <button className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-8 py-4 text-base font-semibold text-gray-700 dark:text-gray-300 transition duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 active:scale-95">
                    Explore Features
                    <GlobeIcon className="ml-2 h-5 w-5" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3 rounded-xl bg-white/70 dark:bg-gray-800/70 p-4 shadow-lg backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 border border-blue-200 dark:border-blue-800">
                      <PieChart className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Market Analytics</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Live stock insights</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 rounded-xl bg-white/70 dark:bg-gray-800/70 p-4 shadow-lg backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10 border border-green-200 dark:border-green-800">
                      <TrendingUpIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Smart Execution</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">AI-powered trades</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 rounded-xl bg-white/70 dark:bg-gray-800/70 p-4 shadow-lg backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 border border-purple-200 dark:border-purple-800">
                      <UserIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Portfolio Management</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Expert guidance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="relative z-10 mx-auto max-w-[600px]">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 dark:border-gray-700/20">
                  <DynamicImage
                    src="/images/tradingview.png"
                    alt="Stock Trading Platform Dashboard"
                    className="w-full h-auto"
                    width={600}
                    height={600}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-indigo-500/20 dark:from-blue-600/10 dark:to-indigo-600/10"></div>
                </div>
                
                {/* Enhanced floating stock indicators */}
                <div className="absolute -top-6 -right-6 z-20 animate-float">
                  <div className="rounded-xl bg-white/90 dark:bg-gray-800/90 p-4 shadow-xl backdrop-blur-md border border-white/20 dark:border-gray-700/20">
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                      <div>
                        <p className="text-xs font-semibold text-gray-900 dark:text-white">AAPL</p>
                        <p className="text-sm font-bold text-green-600">+2.5% ↗</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">$174.50</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 z-20 animate-float-delayed">
                  <div className="rounded-xl bg-white/90 dark:bg-gray-800/90 p-4 shadow-xl backdrop-blur-md border border-white/20 dark:border-gray-700/20">
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse"></div>
                      <div>
                        <p className="text-xs font-semibold text-gray-900 dark:text-white">MSFT</p>
                        <p className="text-sm font-bold text-red-600">-1.2% ↘</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">$412.30</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 -left-8 z-20 animate-float" style={{animationDelay: '1s'}}>
                  <div className="rounded-xl bg-white/90 dark:bg-gray-800/90 p-3 shadow-xl backdrop-blur-md border border-white/20 dark:border-gray-700/20">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
                      <div>
                        <p className="text-xs font-semibold text-gray-900 dark:text-white">NVDA</p>
                        <p className="text-xs font-bold text-blue-600">+0.8%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced background decorative elements */}
        <div className="absolute right-0 top-0 z-[-1] opacity-20 lg:opacity-40">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.6"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.6"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3B82F6" />
                <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#6366F1" stopOpacity="0" />
                <stop offset="1" stopColor="#6366F1" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#3B82F6" stopOpacity="0" />
                <stop offset="1" stopColor="#3B82F6" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6366F1" />
                <stop offset="1" stopColor="#6366F1" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3B82F6" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6366F1" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3B82F6" />
                <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-20 lg:opacity-40">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
              stroke="url(#paint3_linear_25:218)"
            />
            <circle
              opacity="0.8"
              cx="214.505"
              cy="60.5054"
              r="49.7205"
              transform="rotate(-13.421 214.505 60.5054)"
              stroke="url(#paint4_linear_25:218)"
            />
            <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3B82F6" stopOpacity="0" />
                <stop offset="1" stopColor="#3B82F6" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6366F1" stopOpacity="0" />
                <stop offset="1" stopColor="#6366F1" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3B82F6" stopOpacity="0" />
                <stop offset="1" stopColor="#3B82F6" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="93.8507"
                y1="67.2674"
                x2="89.9278"
                y2="210.214"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6366F1" stopOpacity="0" />
                <stop offset="1" stopColor="#6366F1" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:218"
                x1="214.505"
                y1="10.2849"
                x2="212.684"
                y2="99.5816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3B82F6" />
                <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint5_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)"
              >
                <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Hero;
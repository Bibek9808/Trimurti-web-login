"use client";
import { MaskContainer } from "./svg-mask-effect";

export function SVGMaskSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover Our Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hover over the area below to reveal the future of trading and security
          </p>
        </div>
        
        <div className="flex h-[40rem] w-full items-center justify-center overflow-hidden rounded-2xl border border-gray-700">
          <MaskContainer
            revealText={
              <div className="mx-auto max-w-4xl text-center text-white">
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  Advanced AI-Powered Solutions
                </h3>
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                  Our cutting-edge algorithms analyze market patterns in real-time, 
                  executing trades with precision while our ethical hacking suite 
                  protects your digital assets with military-grade security protocols.
                </p>
              </div>
            }
            className="h-[40rem] w-full rounded-2xl text-white"
            revealSize={800}
          >
            <div className="h-full w-full bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-8">
              <div className="text-center max-w-4xl">
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  The Future of{" "}
                  <span className="text-blue-400">Trading</span> &{" "}
                  <span className="text-purple-400">Security</span>
                </h3>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  Move your mouse over this area to discover how our AI trading bot 
                  and ethical hacking software work together to maximize your profits 
                  while securing your digital assets with unprecedented precision.
                </p>
              </div>
            </div>
          </MaskContainer>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-700">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">AI Trading</h4>
            <p className="text-gray-300">Advanced algorithms that adapt to market conditions in real-time</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-700">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Ethical Hacking</h4>
            <p className="text-gray-300">Comprehensive security testing to protect your digital assets</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-700">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Analytics</h4>
            <p className="text-gray-300">Detailed insights and performance metrics for informed decisions</p>
          </div>
        </div>
      </div>
    </section>
  );
} 
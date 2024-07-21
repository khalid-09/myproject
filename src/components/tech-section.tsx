import { ChevronRight } from 'lucide-react';
import LogoBar from './logo-bar';

const TechSection = () => {
  return (
    <section className="px-4 mb-12">
      <LogoBar />
      <div className="max-w-[76.375rem]   mx-auto">
        <div className="max-w-[60rem] text-[#101828] flex md:flex-row flex-col gap-6 md:items-start items-center md:gap-32">
          <div className=" space-y-6">
            <div className="space-y-8">
              <h1 className="font-bold text-4xl ">Full development cycle</h1>
              <p className="font-medium">We use proven technologies</p>
            </div>
            <div className="max-w-[31rem] space-y-8">
              <div className="space-y-4">
                <h3 className="text-[1.25rem] font-semibold">Web</h3>
                <p className="text-[#344054] text-[1.063rem]">
                  PHP <span className="text-[#80A948]">/</span> Javascript{' '}
                  <span className="text-[#80A948]">/</span> Node.JS
                  <span className="text-[#80A948]">/</span> Web Socket{' '}
                  <span className="text-[#80A948]">/</span> Socket.io{' '}
                  <span className="text-[#80A948]">/</span> Vue.js
                  <span className="text-[#80A948]">/</span> Nuxt{' '}
                  <span className="text-[#80A948]">/</span> MySQL{' '}
                  <span className="text-[#80A948]">/</span>
                  Laravel <span className="text-[#80A948]">/</span> GO lang{' '}
                  <span className="text-[#80A948]">/</span> django{' '}
                  <span className="text-[#80A948]">/</span> Python
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-[1.25rem] font-semibold">Mobile</h3>
                <p className="text-[#344054] text-[1.063rem]">
                  Swift / Kotlin / Alamofire / Firebase / CoreData / Room /
                  Realm / Coroutine / RxJava / RxSwift / Unit Test / Navigation
                </p>
              </div>
            </div>
          </div>
          <div>
            <ul>
              <li className="text-xl hover:font-semibold py-3 flex items-center gap-3 transition hover:underline hover:underline-offset-4 hover:decoration-[#80A948]">
                <span>iOS development</span>
                <ChevronRight className="text-[#80A948]" />
              </li>
              <li className="text-xl hover:font-semibold py-3 flex items-center gap-3 transition hover:underline hover:underline-offset-4 hover:decoration-[#80A948] ">
                <span>Android development</span>{' '}
                <ChevronRight className="text-[#80A948]" />
              </li>
              <li className="text-xl hover:font-semibold py-3 flex items-center gap-3 transition hover:underline hover:underline-offset-4 hover:decoration-[#80A948] ">
                <span>Web development</span>{' '}
                <ChevronRight className="text-[#80A948]" />
              </li>
              <li className="text-xl hover:font-semibold py-3 flex items-center gap-3 transition hover:underline hover:underline-offset-4 hover:decoration-[#80A948] ">
                <span>UI/UX design</span>{' '}
                <ChevronRight className="text-[#80A948]" />
              </li>
              <li className="text-xl hover:font-semibold py-3 flex items-center gap-3 transition hover:underline hover:underline-offset-4 hover:decoration-[#80A948] ">
                <span>Testing</span> <ChevronRight className="text-[#80A948]" />
              </li>
              <li className="text-xl hover:font-semibold py-3 flex items-center gap-3 transition hover:underline hover:underline-offset-4 hover:decoration-[#80A948] ">
                <span>Launch</span> <ChevronRight className="text-[#80A948]" />
              </li>
              <li className="text-xl hover:font-semibold py-3 flex items-center gap-3 transition hover:underline hover:underline-offset-4 hover:decoration-[#80A948] ">
                <span>IT consulting</span>{' '}
                <ChevronRight className="text-[#80A948]" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;

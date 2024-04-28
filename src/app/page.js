import ProfPic from '@/app/asset/pfimg.png'
import Image from 'next/image';
export default function Home() {
  return (
    <main className="bg-[#000]">      
      {/* <div className="flex min-h-screen flex-col items-center justify-between p-24 ">
        <div className="flex flex-row">
          <div className="flex-col">
            dsa
          </div>
          <div className="flex-col">
            dsa
          </div>
        </div>           
        <h1>hii</h1>
      </div> */}
      
      <div className="grid min-h-screen grid-cols-1 xl:grid-cols-2 ">
          <div className="grid">
            <div className="flex flex-col items-center justify-between">
              <div>
                
                <Image src={ProfPic}></Image>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="flex flex-col items-start xl:pt-24">
                <div>
                  <h1 className="font-mono text-7xl text-[#f2f2f2]">Dhanavadh Saito</h1>
                </div>
                <div>
                  <a className="font-mono text-2xl text-[#f2f2f2] 
                  underline-thickness-1 underline-offset-4 hover:underline 
                  cursor-pointer transition-colors duration-300 focus:outline-none 
                  focus:ring-21 focus:ring-offset-1 focus:ring-[#f2f2f2]" href="https://www.arts.chula.ac.th/" 
                  target="_blank">@Faculty of Arts, Chulalongkorn University</a>
                </div>
                <div className="pt-6">
                  <a className="font-mono text-2xl bg-[#f2f2f2]">Background</a>                  
                </div>
                  <div className="grid grid-cols-4">
                    <div className="grid">
                      <div className="flex flex-col items-start">
                        <a className="font-mono text-lg text-[#f2f2f2]">Present</a>
                      </div>                                               
                    </div>
                    <div className="grid col-span-3">
                      <div className="flex flex-col items-start">
                      <a className="font-mono text-lg text-[#f2f2f2] ">Student <br></br> at Faculty of Arts, Chulalongkorn University</a>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-4">
                    <div className="grid">
                      <div className="flex flex-col items-start">
                      <a className="font-mono text-lg text-[#f2f2f2]">2021-2022</a>
                      
                      </div>                                               
                    </div>
                    <div className="grid col-span-3">
                      <div className="flex flex-col items-start">
                      <a className="font-mono text-lg text-[#f2f2f2] ">Call Center Staff<br></br>(Part-Time 1-year contract)<br></br>Social Media Dept., Advanced Contact Center</a>
                      </div>
                    </div>
                  </div>
                <div className="pt-6">
                  <a className="font-mono text-2xl bg-[#f2f2f2]">Projects</a>                  
                </div>
                  <div className="grid grid-cols-4">
                    <div className="grid">
                      <div className="flex flex-col items-start">
                      <a className="font-mono text-lg text-[#f2f2f2]">Currently</a>
                      
                      </div>                                               
                    </div>
                    <div className="grid col-span-3">
                      <div className="flex flex-col items-start">
                      <div className="font-mono text-lg text-[#f2f2f2] ">Front-end Dev of Artsgoz Website<br></br><a className="underline-thickness-1 underline-offset-4 underline 
                  cursor-pointer transition-colors duration-300 focus:outline-none 
                  focus:ring-21 focus:ring-offset-1 focus:ring-[#f2f2f2]" href="https://www.arts.chula.ac.th/goz/" target="_blank">Arts Student Comitee Website.</a>, <a className="underline-thickness-1 underline-offset-4 underline 
                  cursor-pointer transition-colors duration-300 focus:outline-none 
                  focus:ring-21 focus:ring-offset-1 focus:ring-[#f2f2f2]" href="https://github.com/dhanavadh/Artsgoz-Next" target="_blank">See GitHub Repo</a></div>
                      </div>
                    </div>
                  </div>
                <div className="pt-6">
                  <a className="font-mono text-2xl bg-[#f2f2f2]">Reachable at</a>                  
                </div>
                <div className="grid">
                  <div className="grid font-mono text-lg text-[#f2f2f2]">Email: dhanavadh@gmail.com</div>
                  <div className="font-mono text-lg text-[#f2f2f2] ">Github: <a className="underline-thickness-1 underline-offset-4 hover:underline 
                  cursor-pointer transition-colors duration-300 focus:outline-none 
                  focus:ring-21 focus:ring-offset-1 focus:ring-[#f2f2f2]" href="https://github.com/dhanavadh/" target="_blank">@dhanavadh</a></div>                      
                </div>
                
            </div>            
          </div>          
        </div> 
      
            
    </main>
  );
}

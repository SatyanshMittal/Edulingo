// 'use client'

import { ArrowLeft, Book, Lock, Star, Trophy } from "lucide-react"
// import Link from "next/link"
// import { useState } from "react"

// import { Button } from "@/components/ui/button"
// import { Progress } from "@/components/ui/progress"

// // Mock data to replace database
// const mockSections = [
//   {
//     id: 1,
//     title: "Section 1",
//     subtitle: "Bonjour!",
//     progress: 0,
//     total: 10,
//     units: [
//       { id: 1, title: "Use basic phrases", locked: false },
//       { id: 2, title: "Greetings", locked: true },
//       { id: 3, title: "Basic conversation", locked: true },
//     ]
//   },
//   {
//     id: 2,
//     title: "Section 2",
//     subtitle: "Je commence en français",
//     progress: 0,
//     total: 22,
//     locked: true
//   },
//   {
//     id: 3,
//     title: "Section 3",
//     subtitle: "Je connais quelques mots",
//     progress: 0,
//     total: 20,
//     locked: true
//   }
// ]

// export default function Component() {
//   const [activeSection, setActiveSection] = useState<number | null>(null)
  
//   if (activeSection !== null) {
//     const section = mockSections.find(s => s.id === activeSection)
//     if (!section) return null

//     return (
//       <div className="min-h-screen bg-slate-900 text-white">
//         <div className="bg-blue-500 p-4 flex items-center justify-between">
//           <Button 
//             variant="ghost" 
//             className="text-white hover:text-white/80"
//             onClick={() => setActiveSection(null)}
//           >
//             <ArrowLeft className="h-5 w-5 mr-2" />
//             {section.title}
//           </Button>
//           <Button variant="secondary" className="bg-blue-400 hover:bg-blue-300">
//             <Book className="h-5 w-5 mr-2" />
//             Guidebook
//           </Button>
//         </div>
//         <div className="max-w-md mx-auto pt-10 px-4">
//           <div className="flex flex-col items-center gap-8">
//             {section.units?.map((unit, index) => (
//               <div key={unit.id} className="relative">
//                 {index === 0 && (
//                   <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-md">
//                     START
//                   </div>
//                 )}
//                 <Button
//                   variant={unit.locked ? "secondary" : "default"}
//                   className={`h-16 w-16 rounded-full ${
//                     unit.locked ? 'bg-slate-700' : 'bg-blue-500 hover:bg-blue-400'
//                   }`}
//                   disabled={unit.locked}
//                 >
//                   {unit.locked ? (
//                     <Lock className="h-6 w-6" />
//                   ) : index === section.units.length - 1 ? (
//                     <Trophy className="h-6 w-6" />
//                   ) : (
//                     <Star className="h-6 w-6" />
//                   )}
//                 </Button>
//                 {index < section.units.length - 1 && (
//                   <div className="absolute h-8 w-0.5 bg-slate-700 left-1/2 -translate-x-1/2 -bottom-8" />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-slate-900 text-white p-4">
//       <Button 
//         variant="ghost" 
//         className="text-white hover:text-white/80 mb-6"
//         asChild
//       >
//         <Link href="/courses">
//           <ArrowLeft className="h-5 w-5 mr-2" />
//           Back
//         </Link>
//       </Button>
      
//       <div className="max-w-md mx-auto space-y-6">
//         {mockSections.map((section) => (
//           <div
//             key={section.id}
//             className="bg-slate-800 rounded-lg p-6 space-y-4"
//           >
//             <div className="flex items-center justify-between">
//               <div>
//                 <div className="text-blue-400 text-sm font-medium">
//                   A{section.id} • SEE DETAILS
//                 </div>
//                 <h2 className="text-xl font-bold">{section.title}</h2>
//               </div>
//               {section.locked && <Lock className="h-5 w-5 text-slate-500" />}
//             </div>
            
//             <div className="space-y-2">
//               <Progress 
//                 value={(section.progress / section.total) * 100} 
//                 className="bg-slate-700"
//               />
//               <div className="text-sm text-slate-400">
//                 {section.progress} / {section.total}
//               </div>
//             </div>

//             <div className="text-lg">{section.subtitle}</div>
            
//             <Button
//               className="w-full bg-blue-500 hover:bg-blue-400"
//               disabled={section.locked}
//               onClick={() => setActiveSection(section.id)}
//             >
//               {section.locked ? 'Locked' : 'Continue'}
//             </Button>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }



const page = () => {
  return (
    <div className='w-full h-full flex  '>
      {/* this is the right side */}

      <div className='w-[62%] h-full '>
        {/* this is the going back button  */}
        <div className='w-full flex justify-center h-[13%] '>
              <div className='w-[90%] pt-2 relative border-b-[2px] border-black/20'>
                <div className="flex h-full opacity-50 mt-2 items-center gap-3">
                <ArrowLeft/>
                  <h1 className="text-xl font-extrabold  ">Back</h1>
                </div>
              </div>
        </div>

        {/* this is the section wala section lol */}

        <div className="w-full h-[87%] overflow-y-auto pt-8 flex flex-col gap-3 items-center">
          {/* single section component  */}

                      <div className="w-[90%] px-5 py-4 flex  h-[50%] rounded-xl bg-[#DDF4FF]">
                        {/* right section */}
                          <div className="w-1/2 h-full ">
                                <h1 className="text-[1.5rem] opacity-70 font-extrabold ">Section 1</h1>

                              {/* this is the middle section */}
                                <div className="w-full mt-5">
                                  {/* this is the progress bar div */}
                                    <div className="w-[95%] flex items-center relative h-5 rounded-xl bg-white">
                                      {/* this is the progress bar  */}
                      
                                      <div className="w-[10%] h-[97%] bg-[#58CC02] rounded-xl"></div>

                                            {/* should contain dynamic values   */}
                                      <div className="absolute text-xs opacity-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <h1>0/51</h1>
                                      </div>

                                        {/* this is the svg shit fucking hate svg */}
                                      <div className="absolute top-1/2 -translate-y-1/2 right-0 ">
                                                         <svg width="43" height="36" viewBox="0 0 43 36" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Unit Review Level"><g id="Union"><mask id="path-1-outside-1_10719_30470" maskUnits="userSpaceOnUse" x="-0.282837" y="-0.735229" width="43" height="37" fill="black"><rect fill="white" x="-0.282837" y="-0.735229" width="43" height="37"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M15.2796 3.5792C12.6658 2.49977 9.66298 4.32716 9.66298 7.1133V14.8316C9.66298 20.4798 13.6887 25.204 19.0744 26.3848C20.0027 26.7201 20.2879 27.1712 20.3247 27.5306V27.6088L20.3244 27.6085L20.3247 27.614V27.6846C20.315 27.907 20.2143 28.209 19.9337 28.4534H16.9312C16.2356 28.4534 15.6717 29.0172 15.6717 29.7128C15.6717 29.8545 15.6951 29.9906 15.7382 30.1177H14.2464C13.5484 30.1177 12.9826 30.6835 12.9826 31.3815C12.9826 32.0796 13.5484 32.6454 14.2464 32.6454H28.8092C29.5072 32.6454 30.0731 32.0796 30.0731 31.3815C30.0731 30.6835 29.5072 30.1177 28.8092 30.1177H27.5673C27.6104 29.9906 27.6338 29.8545 27.6338 29.7128C27.6338 29.0172 27.07 28.4534 26.3744 28.4534H23.3296C23.0703 28.2566 22.9377 28.0147 22.8863 27.8059V27.5568C22.9575 27.1524 23.3532 26.6515 24.5935 26.3272C29.8534 25.0571 33.7551 20.3921 33.7551 14.8316V7.1133C33.7551 4.32717 30.7523 2.49977 28.1384 3.5792C25.701 4.58577 23.0918 5.50734 21.709 5.50734C20.3262 5.50734 17.7171 4.58577 15.2796 3.5792ZM6.23525 17.4214C4.70612 16.6349 3.88597 14.8661 4.36179 13.1372C4.45962 12.7817 4.82776 12.5703 5.18406 12.665L5.46281 12.7391C6.45318 13.0023 7.24147 13.6376 7.71812 14.4542C8.13091 14.6314 8.41614 15.044 8.40802 15.5219C8.39332 16.3877 8.54193 17.8757 9.04827 19.3938C9.55602 20.9162 10.3849 22.3561 11.649 23.2803C12.16 23.6539 12.2679 24.3727 11.89 24.8857C11.7573 25.0658 11.5825 25.1966 11.3893 25.2744C10.4238 26.739 8.53488 27.3993 6.82965 26.7599C6.47955 26.6286 6.30547 26.2397 6.44081 25.8911L6.49879 25.7418C6.8994 24.7102 7.70312 23.9478 8.66154 23.5657C8.37554 23.203 8.12056 22.8233 7.89346 22.4348C6.20298 22.717 4.46913 21.8175 3.77059 20.1782C3.62586 19.8385 3.78531 19.4493 4.12673 19.3088L4.38152 19.204C5.08706 18.9137 5.83271 18.8532 6.53378 18.9878C6.40047 18.4431 6.30313 17.9148 6.23525 17.4214ZM35.1148 14.5009C34.7546 14.6975 34.5136 15.082 34.5211 15.5219C34.5358 16.3877 34.3871 17.8757 33.8808 19.3938C33.3731 20.9162 32.5441 22.3561 31.2801 23.2803C30.7691 23.6539 30.6612 24.3727 31.0391 24.8857C31.1826 25.0805 31.3755 25.2176 31.5875 25.2924C32.5566 26.7444 34.437 27.3967 36.1352 26.7599C36.4853 26.6286 36.6594 26.2397 36.524 25.8911L36.4661 25.7418C36.0617 24.7004 35.2465 23.9333 34.276 23.5549C34.5696 23.1815 34.8304 22.7901 35.0619 22.3896C36.8219 22.7962 38.6821 21.8911 39.412 20.1782C39.5567 19.8385 39.3973 19.4493 39.0558 19.3088L38.8011 19.204C38.0046 18.8763 37.1569 18.8414 36.3801 19.0495C36.5276 18.4575 36.6325 17.8839 36.7032 17.3524C38.2427 16.5157 39.0139 14.6827 38.4509 12.9502C38.3369 12.5994 37.9593 12.4046 37.6074 12.515L37.3359 12.6002C36.324 12.9177 35.5464 13.6234 35.1148 14.5009Z"></path></mask><path fill-rule="evenodd" clip-rule="evenodd" d="M15.2796 3.5792C12.6658 2.49977 9.66298 4.32716 9.66298 7.1133V14.8316C9.66298 20.4798 13.6887 25.204 19.0744 26.3848C20.0027 26.7201 20.2879 27.1712 20.3247 27.5306V27.6088L20.3244 27.6085L20.3247 27.614V27.6846C20.315 27.907 20.2143 28.209 19.9337 28.4534H16.9312C16.2356 28.4534 15.6717 29.0172 15.6717 29.7128C15.6717 29.8545 15.6951 29.9906 15.7382 30.1177H14.2464C13.5484 30.1177 12.9826 30.6835 12.9826 31.3815C12.9826 32.0796 13.5484 32.6454 14.2464 32.6454H28.8092C29.5072 32.6454 30.0731 32.0796 30.0731 31.3815C30.0731 30.6835 29.5072 30.1177 28.8092 30.1177H27.5673C27.6104 29.9906 27.6338 29.8545 27.6338 29.7128C27.6338 29.0172 27.07 28.4534 26.3744 28.4534H23.3296C23.0703 28.2566 22.9377 28.0147 22.8863 27.8059V27.5568C22.9575 27.1524 23.3532 26.6515 24.5935 26.3272C29.8534 25.0571 33.7551 20.3921 33.7551 14.8316V7.1133C33.7551 4.32717 30.7523 2.49977 28.1384 3.5792C25.701 4.58577 23.0918 5.50734 21.709 5.50734C20.3262 5.50734 17.7171 4.58577 15.2796 3.5792ZM6.23525 17.4214C4.70612 16.6349 3.88597 14.8661 4.36179 13.1372C4.45962 12.7817 4.82776 12.5703 5.18406 12.665L5.46281 12.7391C6.45318 13.0023 7.24147 13.6376 7.71812 14.4542C8.13091 14.6314 8.41614 15.044 8.40802 15.5219C8.39332 16.3877 8.54193 17.8757 9.04827 19.3938C9.55602 20.9162 10.3849 22.3561 11.649 23.2803C12.16 23.6539 12.2679 24.3727 11.89 24.8857C11.7573 25.0658 11.5825 25.1966 11.3893 25.2744C10.4238 26.739 8.53488 27.3993 6.82965 26.7599C6.47955 26.6286 6.30547 26.2397 6.44081 25.8911L6.49879 25.7418C6.8994 24.7102 7.70312 23.9478 8.66154 23.5657C8.37554 23.203 8.12056 22.8233 7.89346 22.4348C6.20298 22.717 4.46913 21.8175 3.77059 20.1782C3.62586 19.8385 3.78531 19.4493 4.12673 19.3088L4.38152 19.204C5.08706 18.9137 5.83271 18.8532 6.53378 18.9878C6.40047 18.4431 6.30313 17.9148 6.23525 17.4214ZM35.1148 14.5009C34.7546 14.6975 34.5136 15.082 34.5211 15.5219C34.5358 16.3877 34.3871 17.8757 33.8808 19.3938C33.3731 20.9162 32.5441 22.3561 31.2801 23.2803C30.7691 23.6539 30.6612 24.3727 31.0391 24.8857C31.1826 25.0805 31.3755 25.2176 31.5875 25.2924C32.5566 26.7444 34.437 27.3967 36.1352 26.7599C36.4853 26.6286 36.6594 26.2397 36.524 25.8911L36.4661 25.7418C36.0617 24.7004 35.2465 23.9333 34.276 23.5549C34.5696 23.1815 34.8304 22.7901 35.0619 22.3896C36.8219 22.7962 38.6821 21.8911 39.412 20.1782C39.5567 19.8385 39.3973 19.4493 39.0558 19.3088L38.8011 19.204C38.0046 18.8763 37.1569 18.8414 36.3801 19.0495C36.5276 18.4575 36.6325 17.8839 36.7032 17.3524C38.2427 16.5157 39.0139 14.6827 38.4509 12.9502C38.3369 12.5994 37.9593 12.4046 37.6074 12.515L37.3359 12.6002C36.324 12.9177 35.5464 13.6234 35.1148 14.5009Z" fill="#58CC02"></path><path d="M15.2796 3.5792L14.0582 6.53692L14.0582 6.53692L15.2796 3.5792ZM19.0744 26.3848L20.1616 23.3751L19.9644 23.3039L19.7597 23.259L19.0744 26.3848ZM20.3247 27.5306H23.5247V27.3673L23.5081 27.2049L20.3247 27.5306ZM20.3247 27.6088L18.2492 30.0444L23.5247 34.5397V27.6088H20.3247ZM20.3244 27.6085L22.3999 25.1729L16.7602 20.3672L17.1284 27.7676L20.3244 27.6085ZM20.3247 27.614H23.5247V27.5344L23.5208 27.455L20.3247 27.614ZM20.3247 27.6846L23.5217 27.8241L23.5247 27.7544V27.6846H20.3247ZM19.9337 28.4534V31.6534H21.1321L22.0357 30.8662L19.9337 28.4534ZM15.7382 30.1177V33.3177H20.2032L18.7685 29.0895L15.7382 30.1177ZM27.5673 30.1177L24.537 29.0895L23.1024 33.3177H27.5673V30.1177ZM23.3296 28.4534L21.3951 31.0025L22.2528 31.6534H23.3296V28.4534ZM22.8863 27.8059H19.6863V28.1939L19.779 28.5706L22.8863 27.8059ZM22.8863 27.5568L19.7348 27.0016L19.6863 27.277V27.5568H22.8863ZM24.5935 26.3272L23.8424 23.2167L23.8131 23.2237L23.7841 23.2313L24.5935 26.3272ZM28.1384 3.5792L29.3598 6.53692L29.3598 6.53692L28.1384 3.5792ZM4.36179 13.1372L1.27651 12.2881L1.27651 12.2881L4.36179 13.1372ZM6.23525 17.4214L9.40539 16.9852L9.17861 15.3367L7.69879 14.5756L6.23525 17.4214ZM5.18406 12.665L6.00594 9.57238L6.00593 9.57238L5.18406 12.665ZM5.46281 12.7391L4.64092 15.8318L4.64093 15.8318L5.46281 12.7391ZM7.71812 14.4542L4.95448 16.0673L5.48636 16.9785L6.45588 17.3947L7.71812 14.4542ZM8.40802 15.5219L11.6076 15.5763L11.6076 15.5763L8.40802 15.5219ZM9.04827 19.3938L6.01266 20.4063L6.01266 20.4063L9.04827 19.3938ZM11.649 23.2803L9.76035 25.8635L9.76035 25.8635L11.649 23.2803ZM11.89 24.8857L9.31349 22.9879L9.31349 22.9879L11.89 24.8857ZM11.3893 25.2744L10.1942 22.3059L9.26742 22.679L8.71754 23.5131L11.3893 25.2744ZM6.82965 26.7599L7.95317 23.7636L7.95317 23.7636L6.82965 26.7599ZM6.44081 25.8911L9.4238 27.0495L9.4238 27.0495L6.44081 25.8911ZM6.49879 25.7418L9.48177 26.9002L9.48177 26.9002L6.49879 25.7418ZM8.66154 23.5657L9.8465 26.5382L13.829 24.9506L11.1742 21.5842L8.66154 23.5657ZM7.89346 22.4348L10.6562 20.82L9.54282 18.9152L7.36657 19.2785L7.89346 22.4348ZM3.77059 20.1782L6.71445 18.9237L6.71445 18.9237L3.77059 20.1782ZM4.12673 19.3088L2.90907 16.3496L2.90907 16.3496L4.12673 19.3088ZM4.38152 19.204L3.16386 16.2447L3.16385 16.2447L4.38152 19.204ZM6.53378 18.9878L5.93048 22.1304L10.8276 23.0705L9.64202 18.2269L6.53378 18.9878ZM34.5211 15.5219L31.3215 15.5763L31.3215 15.5763L34.5211 15.5219ZM35.1148 14.5009L36.6478 17.3098L37.5385 16.8237L37.9863 15.9132L35.1148 14.5009ZM33.8808 19.3938L30.8452 18.3814L30.8452 18.3814L33.8808 19.3938ZM31.2801 23.2803L29.3914 20.697L29.3914 20.697L31.2801 23.2803ZM31.0391 24.8857L33.6156 22.9879L33.6156 22.9879L31.0391 24.8857ZM31.5875 25.2924L34.2492 23.516L33.6571 22.6288L32.6511 22.2743L31.5875 25.2924ZM36.1352 26.7599L35.0117 23.7636L35.0117 23.7636L36.1352 26.7599ZM36.524 25.8911L33.541 27.0495L33.5411 27.0495L36.524 25.8911ZM36.4661 25.7418L39.449 24.5835L39.449 24.5835L36.4661 25.7418ZM34.276 23.5549L31.7604 21.5772L29.0938 24.9689L33.1135 26.5363L34.276 23.5549ZM35.0619 22.3896L35.7822 19.2717L33.4758 18.7389L32.2913 20.7884L35.0619 22.3896ZM39.412 20.1782L42.3559 21.4326L42.3559 21.4326L39.412 20.1782ZM39.0558 19.3088L37.8382 22.2681L37.8382 22.2681L39.0558 19.3088ZM38.8011 19.204L40.0187 16.2447L40.0187 16.2447L38.8011 19.204ZM36.3801 19.0495L33.275 18.2756L31.9616 23.5457L37.208 22.1405L36.3801 19.0495ZM36.7032 17.3524L35.1751 14.5408L33.7454 15.3178L33.531 16.9308L36.7032 17.3524ZM38.4509 12.9502L41.4943 11.9612L41.4943 11.9612L38.4509 12.9502ZM37.6074 12.515L38.5654 15.5682L38.5654 15.5682L37.6074 12.515ZM37.3359 12.6002L36.3778 9.54693L36.3778 9.54693L37.3359 12.6002ZM12.863 7.1133C12.863 6.9497 12.9327 6.76849 13.1813 6.61389C13.4431 6.45101 13.767 6.41665 14.0582 6.53692L16.5011 0.621484C12.0182 -1.22979 6.46298 1.7967 6.46298 7.1133H12.863ZM12.863 14.8316V7.1133H6.46298V14.8316H12.863ZM19.7597 23.259C15.7743 22.3853 12.863 18.908 12.863 14.8316H6.46298C6.46298 22.0516 11.603 28.0228 18.3891 29.5105L19.7597 23.259ZM23.5081 27.2049C23.2979 25.1501 21.72 23.9381 20.1616 23.3751L17.9871 29.3944C18.1388 29.4492 17.9708 29.42 17.7273 29.1667C17.4497 28.8781 17.1994 28.4239 17.1413 27.8563L23.5081 27.2049ZM23.5247 27.6088V27.5306H17.1247V27.6088H23.5247ZM18.249 30.0442L18.2492 30.0444L22.4002 25.1731L22.3999 25.1729L18.249 30.0442ZM23.5208 27.455L23.5205 27.4495L17.1284 27.7676L17.1287 27.773L23.5208 27.455ZM23.5247 27.6846V27.614H17.1247V27.6846H23.5247ZM22.0357 30.8662C23.0401 29.9912 23.4776 28.8354 23.5217 27.8241L17.1277 27.5452C17.1525 26.9787 17.3885 26.4267 17.8318 26.0405L22.0357 30.8662ZM16.9312 31.6534H19.9337V25.2534H16.9312V31.6534ZM18.8717 29.7128C18.8717 30.7846 18.0029 31.6534 16.9312 31.6534V25.2534C14.4683 25.2534 12.4717 27.2499 12.4717 29.7128H18.8717ZM18.7685 29.0895C18.8363 29.2893 18.8717 29.5002 18.8717 29.7128H12.4717C12.4717 30.2087 12.5539 30.692 12.7079 31.1459L18.7685 29.0895ZM14.2464 33.3177H15.7382V26.9177H14.2464V33.3177ZM16.1826 31.3815C16.1826 32.4509 15.3157 33.3177 14.2464 33.3177V26.9177C11.7811 26.9177 9.78258 28.9162 9.78258 31.3815H16.1826ZM14.2464 29.4454C15.3157 29.4454 16.1826 30.3122 16.1826 31.3815H9.78258C9.78258 33.8469 11.7811 35.8454 14.2464 35.8454V29.4454ZM28.8092 29.4454H14.2464V35.8454H28.8092V29.4454ZM26.8731 31.3815C26.8731 30.3122 27.7399 29.4454 28.8092 29.4454V35.8454C31.2745 35.8454 33.2731 33.8469 33.2731 31.3815H26.8731ZM28.8092 33.3177C27.7399 33.3177 26.8731 32.4509 26.8731 31.3815H33.2731C33.2731 28.9162 31.2746 26.9177 28.8092 26.9177V33.3177ZM27.5673 33.3177H28.8092V26.9177H27.5673V33.3177ZM24.4338 29.7128C24.4338 29.5002 24.4692 29.2892 24.537 29.0895L30.5976 31.1459C30.7516 30.692 30.8338 30.2087 30.8338 29.7128H24.4338ZM26.3744 31.6534C25.3026 31.6534 24.4338 30.7846 24.4338 29.7128H30.8338C30.8338 27.2499 28.8373 25.2534 26.3744 25.2534V31.6534ZM23.3296 31.6534H26.3744V25.2534H23.3296V31.6534ZM19.779 28.5706C19.998 29.4606 20.5277 30.3443 21.3951 31.0025L25.264 25.9043C25.6129 26.169 25.8773 26.5688 25.9935 27.0411L19.779 28.5706ZM19.6863 27.5568V27.8059H26.0863V27.5568H19.6863ZM23.7841 23.2313C22.0783 23.6773 20.1307 24.7543 19.7348 27.0016L26.0377 28.112C25.9257 28.7481 25.5893 29.1735 25.3348 29.383C25.1259 29.5548 25.0625 29.5122 25.4029 29.4232L23.7841 23.2313ZM30.5551 14.8316C30.5551 18.8448 27.7341 22.2769 23.8424 23.2167L25.3446 29.4378C31.9727 27.8374 36.9551 21.9394 36.9551 14.8316H30.5551ZM30.5551 7.1133V14.8316H36.9551V7.1133H30.5551ZM29.3598 6.53692C29.6511 6.41665 29.9749 6.45102 30.2368 6.61389C30.4853 6.7685 30.5551 6.9497 30.5551 7.1133H36.9551C36.9551 1.7967 31.3999 -1.22979 26.917 0.621484L29.3598 6.53692ZM21.709 8.70734C22.9303 8.70734 24.3338 8.33733 25.4904 7.97264C26.7429 7.57778 28.0984 7.05785 29.3598 6.53692L26.917 0.621484C25.741 1.10713 24.5732 1.55126 23.566 1.86883C23.0631 2.02737 22.6332 2.14384 22.2845 2.21849C22.1119 2.25543 21.9741 2.27888 21.8688 2.29261C21.817 2.29936 21.7773 2.30319 21.7489 2.30527C21.7203 2.30736 21.7076 2.30734 21.709 2.30734V8.70734ZM14.0582 6.53692C15.3196 7.05784 16.6752 7.57778 17.9276 7.97264C19.0843 8.33733 20.4878 8.70734 21.709 8.70734V2.30734C21.7105 2.30734 21.6978 2.30736 21.6691 2.30527C21.6407 2.30319 21.6011 2.29936 21.5493 2.29261C21.4439 2.27888 21.3062 2.25543 21.1336 2.21849C20.7848 2.14384 20.3549 2.02737 19.852 1.86883C18.8448 1.55126 17.6771 1.10713 16.5011 0.621484L14.0582 6.53692ZM1.27651 12.2881C0.39142 15.5041 1.92071 18.8008 4.77171 20.2671L7.69879 14.5756C7.49153 14.469 7.38052 14.2282 7.44708 13.9863L1.27651 12.2881ZM6.00593 9.57238C3.95224 9.02661 1.84036 10.2393 1.27651 12.2881L7.44708 13.9863C7.07888 15.3242 5.70327 16.1141 4.36218 15.7577L6.00593 9.57238ZM6.28469 9.64646L6.00594 9.57238L4.36217 15.7577L4.64092 15.8318L6.28469 9.64646ZM10.4818 12.841C9.59398 11.3201 8.12106 10.1345 6.28468 9.64646L4.64093 15.8318C4.7853 15.8701 4.88896 15.9551 4.95448 16.0673L10.4818 12.841ZM6.45588 17.3947C5.71427 17.0764 5.19382 16.331 5.20848 15.4676L11.6076 15.5763C11.6385 13.7569 10.5475 12.1864 8.98037 11.5136L6.45588 17.3947ZM5.20848 15.4676C5.1881 16.6677 5.38314 18.5189 6.01266 20.4063L12.0839 18.3814C11.7007 17.2326 11.5985 16.1077 11.6076 15.5763L5.20848 15.4676ZM6.01266 20.4063C6.63984 22.2867 7.7679 24.4068 9.76035 25.8635L13.5376 20.697C13.002 20.3054 12.4722 19.5456 12.0839 18.3814L6.01266 20.4063ZM9.76035 25.8635C8.82488 25.1795 8.65258 23.8851 9.31349 22.9879L14.4664 26.7835C15.8832 24.8602 15.4951 22.1282 13.5376 20.697L9.76035 25.8635ZM9.31349 22.9879C9.54305 22.6762 9.85238 22.4435 10.1942 22.3059L12.5843 28.2429C13.3125 27.9497 13.9716 27.4554 14.4664 26.7835L9.31349 22.9879ZM8.71754 23.5131C8.55395 23.7613 8.22637 23.8661 7.95317 23.7636L5.70612 29.7562C8.8434 30.9326 12.2936 29.7167 14.061 27.0356L8.71754 23.5131ZM7.95317 23.7636C9.27153 24.258 9.93347 25.737 9.4238 27.0495L3.45783 24.7328C2.67746 26.7424 3.68758 28.9993 5.70612 29.7562L7.95317 23.7636ZM9.4238 27.0495L9.48177 26.9002L3.5158 24.5835L3.45783 24.7328L9.4238 27.0495ZM9.48177 26.9002C9.54551 26.7361 9.6731 26.6073 9.8465 26.5382L7.47658 20.5932C5.73314 21.2882 4.25329 22.6843 3.5158 24.5835L9.48177 26.9002ZM11.1742 21.5842C10.9879 21.3479 10.8153 21.0922 10.6562 20.82L5.13075 24.0495C5.42586 24.5545 5.76321 25.0582 6.14886 25.5472L11.1742 21.5842ZM7.36657 19.2785C7.0956 19.3237 6.81897 19.169 6.71445 18.9237L0.82672 21.4326C2.11929 24.466 5.31036 26.1103 8.42035 25.5911L7.36657 19.2785ZM6.71445 18.9237C7.26865 20.2243 6.65175 21.7302 5.34439 22.2681L2.90907 16.3496C0.918863 17.1685 -0.0169403 19.4528 0.82672 21.4326L6.71445 18.9237ZM5.34439 22.2681L5.59918 22.1633L3.16385 16.2447L2.90907 16.3496L5.34439 22.2681ZM5.59917 22.1633C5.70759 22.1187 5.81867 22.1089 5.93048 22.1304L7.13709 15.8451C5.84674 15.5974 4.46654 15.7087 3.16386 16.2447L5.59917 22.1633ZM9.64202 18.2269C9.53653 17.796 9.45919 17.3763 9.40539 16.9852L3.06511 17.8575C3.14706 18.4532 3.26441 19.0903 3.42554 19.7486L9.64202 18.2269ZM37.7206 15.4676C37.7341 16.2614 37.2935 16.9574 36.6478 17.3098L33.5819 11.692C32.2157 12.4376 31.2931 13.9027 31.3215 15.5763L37.7206 15.4676ZM36.9164 20.4063C37.5459 18.5189 37.741 16.6677 37.7206 15.4676L31.3215 15.5763C31.3305 16.1077 31.2284 17.2326 30.8452 18.3814L36.9164 20.4063ZM33.1687 25.8635C35.1612 24.4068 36.2892 22.2867 36.9164 20.4063L30.8452 18.3814C30.4569 19.5456 29.9271 20.3054 29.3914 20.697L33.1687 25.8635ZM33.6156 22.9879C34.2765 23.8851 34.1042 25.1795 33.1687 25.8635L29.3914 20.697C27.434 22.1282 27.0459 24.8602 28.4626 26.7835L33.6156 22.9879ZM32.6511 22.2743C33.0253 22.4062 33.3667 22.65 33.6156 22.9879L28.4626 26.7835C28.9984 27.511 29.7257 28.0291 30.5239 28.3104L32.6511 22.2743ZM35.0117 23.7636C34.7398 23.8656 34.4136 23.7624 34.2492 23.516L28.9259 27.0687C30.6996 29.7264 34.1342 30.9278 37.2587 29.7562L35.0117 23.7636ZM33.5411 27.0495C33.0314 25.737 33.6933 24.258 35.0117 23.7636L37.2587 29.7562C39.2773 28.9993 40.2874 26.7424 39.507 24.7328L33.5411 27.0495ZM33.4831 26.9002L33.541 27.0495L39.507 24.7328L39.449 24.5835L33.4831 26.9002ZM33.1135 26.5363C33.2893 26.6049 33.4188 26.7346 33.4831 26.9002L39.449 24.5835C38.7045 22.6662 37.2036 21.2618 35.4385 20.5736L33.1135 26.5363ZM32.2913 20.7884C32.1287 21.0696 31.9519 21.3336 31.7604 21.5772L36.7916 25.5327C37.1874 25.0293 37.5321 24.5105 37.8324 23.9908L32.2913 20.7884ZM36.4681 18.9237C36.358 19.1821 36.0597 19.3359 35.7822 19.2717L34.3415 25.5075C37.5841 26.2566 41.0061 24.6001 42.3559 21.4326L36.4681 18.9237ZM37.8382 22.2681C36.5308 21.7302 35.9139 20.2243 36.4681 18.9237L42.3559 21.4326C43.1995 19.4528 42.2637 17.1685 40.2735 16.3496L37.8382 22.2681ZM37.5834 22.1633L37.8382 22.2681L40.2735 16.3496L40.0187 16.2447L37.5834 22.1633ZM37.208 22.1405C37.3353 22.1064 37.4624 22.1135 37.5834 22.1633L40.0187 16.2447C38.5467 15.639 36.9786 15.5764 35.5522 15.9584L37.208 22.1405ZM33.531 16.9308C33.4751 17.3518 33.3917 17.8074 33.275 18.2756L39.4851 19.8233C39.6634 19.1077 39.7899 18.416 39.8753 17.774L33.531 16.9308ZM35.4076 13.9391C35.4863 14.1812 35.3821 14.4283 35.1751 14.5408L38.2312 20.164C41.1033 18.603 42.5416 15.1842 41.4943 11.9612L35.4076 13.9391ZM38.5654 15.5682C37.2431 15.9831 35.8359 15.2571 35.4076 13.9391L41.4943 11.9612C40.838 9.94172 38.6754 8.82601 36.6493 9.46175L38.5654 15.5682ZM38.2939 15.6534L38.5654 15.5682L36.6493 9.46175L36.3778 9.54693L38.2939 15.6534ZM37.9863 15.9132C38.0452 15.7934 38.1468 15.6995 38.2939 15.6534L36.3778 9.54693C34.5011 10.1358 33.0476 11.4534 32.2433 13.0887L37.9863 15.9132Z" fill="white" mask="url(#path-1-outside-1_10719_30470)"></path></g></g></svg>
                                      </div>




                                    </div>


                                </div>

                                {/* continue button  */}

                                <div className="w-full h-[18%] mt-[4.5rem] flex justify-center">
                                  <div className="w-[94%] font-extrabold uppercase text-sm text-white flex items-center justify-center h-full rounded-xl  bg-[#1CB0F6]">
                                    <h1>continue</h1>
                                  </div>
                                </div>

                          </div>


                          {/* left section  */}
                          <div className="w-1/2 px-2 h-full">
                            <div className="w-full h-[32%] bg-white rounded-xl "></div>
                          </div>
                      </div>
        </div>
      </div>
      <div className='w-[38%] h-full bg-blue-600'></div>



    </div>
  )
}

export default page
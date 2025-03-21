'use client'

import { ArrowLeft, Book, Lock, Star, Trophy } from "lucide-react"
import LockedSection from "./components/LockedSection"
import SingleSection from "./components/SingleSection"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

// Mock data to replace database
const mockSections = [
  {
    id: 1,
    title: "Section 1",
    subtitle: "Bonjour!",
    progress: 0,
    total: 10,
    units: [
      { id: 1, title: "Use basic phrases", locked: false },
      { id: 2, title: "Greetings", locked: true },
      { id: 3, title: "Basic conversation", locked: true },
    ]
  },
  {
    id: 2,
    title: "Section 2",
    subtitle: "Je commence en français",
    progress: 0,
    total: 22,
    locked: true
  },
  {
    id: 3,
    title: "Section 3",
    subtitle: "Je connais quelques mots",
    progress: 0,
    total: 20,
    locked: true
  }
]

const Page = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null)
  const [sectionOpen, setSectionOpen] = useState(true)
  const section = mockSections.find(s => s.id === activeSection)

  const toggleSection = () => {
    setSectionOpen(prev => !prev)
  }

  return (
    <div className='w-full h-full flex'>
      {sectionOpen ? (
        <div className='w-[62%] h-full'>
          <div className='w-full flex justify-center h-[13%]'>
            <div className='w-[90%] pt-2 relative border-b-[2px] border-black/20'>
              <div className="flex h-full opacity-50 mt-2 items-center gap-3">
                <ArrowLeft />
                <h1 className="text-xl font-extrabold">Back</h1>
              </div>
            </div>
          </div>
          <div className="w-full h-[87%] overflow-y-auto pb-3 pt-8 flex flex-col gap-3 items-center">
            <SingleSection func={toggleSection} BGcolor="#DDF4FF" number="1" para="I can participate in daily life in English." img="https://d35aaqx5ub95lt.cloudfront.net/images/pathSections/exampleSentences/801070f230984a26ae39fff41cbb1dc6.svg"/>
            <LockedSection BGcolor="#F7F7F7" number="2" para="I can express myself appropriately depending on the context." img="https://d35aaqx5ub95lt.cloudfront.net/images/pathSections/exampleSentences/7f2dfc9cc806971c2230c8f91b5b8bdd.svg"/>
            <LockedSection BGcolor="#F7F7F7" number="3" para="Further practice required for unlocking." img="https://d35aaqx5ub95lt.cloudfront.net/images/pathSections/exampleSentences/3d544b217f0f66952b44b0caa5681fa2.svg"/>
          </div>
        </div>
      ) : (
   <>
          <div className="w-[62%] h-full   overflow-y-auto flex flex-col gap-2 ">
            <div className="w-full flex justify-center  h-[12%]">
              <div className="w-[97%] px-3 py-3 h-full text-white rounded-xl bg-[#58CC02]">
                <h1 className=" font-bold opacity-70">SECTION 1 , UNIT 1</h1>
                <h1 className="text-lg font-bold ">Discuss traveling solo</h1>
              </div>
            </div>
            <div className="flex-shrink-0 relative h-[80%] w-full ">

              <div className="absolute">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1080 1080" width="1080" height="1080" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"><defs><clipPath id="__lottie_element_194"><rect width="1080" height="1080" x="0" y="0"></rect></clipPath><g id="__lottie_element_197"><g clip-path="url(#__lottie_element_198)" transform="matrix(0.998316764831543,-0.057997047901153564,0.057997047901153564,0.998316764831543,-34.68304443359375,34.210205078125)" opacity="1" style="display: block;"><g transform="matrix(0.9097006320953369,-0.023342197760939598,0.023342197760939598,0.9097006320953369,550.9430541992188,549.0855712890625)" opacity="1" style="display: block;"><path fill="rgb(88,204,2)" fill-opacity="1" d=" M-29.43199920654297,-236.59425354003906 C-6.1121721267700195,-237.67660522460938 10.86513900756836,-241.93740844726562 28.127031326293945,-247.2006378173828 C43.50176239013672,-252.02639770507812 59.9441032409668,-256.8145446777344 81.17960357666016,-255.46986389160156 C103.45893096923828,-254.27182006835938 121.92719268798828,-243.79527282714844 135.344970703125,-229.9686279296875 C144.19224548339844,-220.85202026367188 151.12498474121094,-210.07345581054688 155.99508666992188,-199.56935119628906 C162.47439575195312,-185.59393310546875 165.20530700683594,-171.78854370117188 164.94692993164062,-162.3475799560547 C164.94692993164062,-162.3475799560547 164.2692108154297,-22.61079978942871 164.2692108154297,-22.61079978942871 C164.2692108154297,124.33720397949219 44.11600112915039,164.04400634765625 -12.883000373840332,165.51499938964844 C-69.88200378417969,164.04400634765625 -188.45187377929688,123.94652557373047 -188.45187377929688,-23.00147247314453 C-188.45187377929688,-23.00147247314453 -187.71975708007812,-166.67657470703125 -187.71975708007812,-166.67657470703125 C-187.04058837890625,-216.93394470214844 -96.36217498779297,-234.4461212158203 -29.43199920654297,-236.59425354003906z M-44.64040756225586,-246.2728729248047 C-27.811256408691406,-240.5970916748047 -6.168139934539795,-234.5383758544922 16.309417724609375,-234.2695770263672 C73.6533203125,-233.5838165283203 165.71812438964844,-206.86663818359375 165.18832397460938,-162.5678253173828 C165.18832397460938,-162.5678253173828 164.32958984375,-22.665895462036133 164.32958984375,-22.665895462036133 C164.32958984375,124.2821044921875 44.11613845825195,164.04400634765625 -12.883000373840332,165.51499938964844 C-69.88200378417969,164.04400634765625 -189.58424377441406,123.80266571044922 -188.4545135498047,-22.94387435913086 C-188.4545135498047,-22.94387435913086 -187.65951538085938,-166.73153686523438 -187.65951538085938,-166.73153686523438 C-187.75668334960938,-178.1625213623047 -182.99349975585938,-195.51361083984375 -173.09202575683594,-211.81423950195312 C-166.54029846191406,-222.59999084472656 -157.24911499023438,-233.1274871826172 -145.85679626464844,-241.13003540039062 C-133.46229553222656,-249.83660888671875 -117.90081787109375,-256.134765625 -99.31996154785156,-256.7099914550781 C-75.41866302490234,-257.7352600097656 -60.67649459838867,-251.6548309326172 -44.64040756225586,-246.2728729248047z"></path><path fill="rgb(88,204,2)" fill-opacity="1" d=" M-44.64040756225586,-246.2728729248047 C-27.811256408691406,-240.5970916748047 -6.168139934539795,-234.5383758544922 16.309417724609375,-234.2695770263672 C73.6533203125,-233.5838165283203 165.71812438964844,-206.86663818359375 165.18832397460938,-162.5678253173828 C165.18832397460938,-162.5678253173828 164.32958984375,-22.665895462036133 164.32958984375,-22.665895462036133 C164.32958984375,124.2821044921875 44.11613845825195,164.04400634765625 -12.883000373840332,165.51499938964844 C-69.88200378417969,164.04400634765625 -189.58424377441406,123.80266571044922 -188.4545135498047,-22.94387435913086 C-188.4545135498047,-22.94387435913086 -187.65951538085938,-166.73153686523438 -187.65951538085938,-166.73153686523438 C-187.75668334960938,-178.1625213623047 -182.99349975585938,-195.51361083984375 -173.09202575683594,-211.81423950195312 C-166.54029846191406,-222.59999084472656 -157.24911499023438,-233.1274871826172 -145.85679626464844,-241.13003540039062 C-133.46229553222656,-249.83660888671875 -117.90081787109375,-256.134765625 -99.31996154785156,-256.7099914550781 C-75.41866302490234,-257.7352600097656 -60.67649459838867,-251.6548309326172 -44.64040756225586,-246.2728729248047z"></path></g></g></g><clipPath id="__lottie_element_198"><path d="M0,0 L1080,0 L1080,1080 L0,1080z"></path></clipPath><mask id="__lottie_element_197_1" mask-type="alpha"><use xlink:href="#__lottie_element_197"></use></mask><g id="__lottie_element_208"><g clip-path="url(#__lottie_element_212)" transform="matrix(1.0482314825057983,-0.06089683622121811,0.06089683622121811,1.0482314825057983,-25.089664459228516,-4.29367733001709)" opacity="1" style="display: block;"><g transform="matrix(0.9100000262260437,0,0,0.9100000262260437,546,556)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(75,75,75)" fill-opacity="1" d=" M-63.16813659667969,13.720290184020996 C-63.17216491699219,-10.367327690124512 -72.77608489990234,-20.37438201904297 -88.92765808105469,-18.08811378479004 C-110.81966400146484,-14.949614524841309 -109.09138488769531,0.16960424184799194 -108.98990631103516,16.209287643432617 C-108.92637634277344,23.722745895385742 -107.5290298461914,29.414953231811523 -105.00218963623047,34.16062927246094 C-100.27086639404297,43.046424865722656 -91.85223388671875,47.150054931640625 -82.0552749633789,45.74506759643555 C-75.41889190673828,44.95123291015625 -70.39740753173828,42.00345230102539 -67.10647583007812,35.733821868896484 C-64.44425964355469,30.66187858581543 -63.166744232177734,23.747549057006836 -63.16813659667969,13.720290184020996z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(75,75,75)" fill-opacity="1" d=" M15.398857116699219,5.8263068199157715 C17.092016220092773,-21.746910095214844 24.299896240234375,-30.42317008972168 37.65729522705078,-31.862525939941406 C57.95126724243164,-34.587677001953125 55.725223541259766,-14.172696113586426 54.985496520996094,-2.8317224979400635 C54.41215515136719,5.95911169052124 52.800498962402344,11.82732105255127 50.41322708129883,16.88719940185547 C45.56476593017578,27.164487838745117 37.955509185791016,30.44989013671875 30.485994338989258,31.433917999267578 C25.17058563232422,32.016357421875 20.703222274780273,29.852298736572266 18.19928741455078,25.082321166992188 C15.923282623291016,20.746339797973633 14.83191204071045,14.996445655822754 15.398857116699219,5.8263068199157715z"></path></g></g></g></g><clipPath id="__lottie_element_212"><path d="M0,0 L1080,0 L1080,1080 L0,1080z"></path></clipPath><mask id="__lottie_element_208_1" mask-type="alpha"><use xlink:href="#__lottie_element_208"></use></mask></defs><g clip-path="url(#__lottie_element_194)"><g transform="matrix(0.9100000262260437,0,0,0.9100000262260437,552,550)" opacity="0.3" style="display: block;"><path fill="rgb(175,175,175)" fill-opacity="1" d=" M-10.402999877929688,-78.9219970703125 C101.64700317382812,-78.9219970703125 192.48199462890625,-8.196999549865723 192.48199462890625,79.0469970703125 C192.48199462890625,166.29100036621094 101.64700317382812,237.01699829101562 -10.402999877929688,237.01699829101562 C-122.4530029296875,237.01699829101562 -213.28799438476562,166.29100036621094 -213.28799438476562,79.0469970703125 C-213.28799438476562,-8.196999549865723 -122.4530029296875,-78.9219970703125 -10.402999877929688,-78.9219970703125z"></path></g><g transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,677.6719970703125,537.677001953125)"><path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(244,144,0)" stroke-opacity="1" stroke-width="54" d=" M-66.5,143.5 C-66.5,143.5 -80.78199768066406,134.05499267578125 -80.78199768066406,134.05499267578125"></path></g><g opacity="1" transform="matrix(1,0,0,1,540.8619995117188,538.677001953125)"><path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(244,144,0)" stroke-opacity="1" stroke-width="54" d=" M-68.5,142.5 C-68.5,142.5 -45,107.5 -45,107.5"></path></g></g><g transform="matrix(0.9059377312660217,-0.08588891476392746,0.08588891476392746,0.9059377312660217,548.6473999023438,545.9356689453125)" opacity="1" style="display: block;"><path fill="rgb(88,204,2)" fill-opacity="1" d=" M-158.28599548339844,-119.43199920654297 C-173.91400146484375,-84.0989990234375 -241.84100341796875,33.880001068115234 -241.84100341796875,47.854000091552734 C-241.84100341796875,58.17900085449219 -235.78399658203125,77.86599731445312 -200.26600646972656,77.86599731445312 C-188.31300354003906,77.86599731445312 -178.50799560546875,73.93499755859375 -170.8159942626953,68.55500030517578 C-160.22300720214844,61.14500045776367 -156.88900756835938,53.5369987487793 -150.97999572753906,44.54999923706055 C-145.0709991455078,35.5629997253418 -143.21499633789062,30.23900032043457 -139.84300231933594,23.36400032043457 C-136.4709930419922,16.48900032043457 -138.56199645996094,-99.25399780273438 -158.28599548339844,-119.43199920654297z"></path><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,0,0)" stroke-opacity="1" stroke-width="0" d=" M-158.28599548339844,-119.43199920654297 C-173.91400146484375,-84.0989990234375 -241.84100341796875,33.880001068115234 -241.84100341796875,47.854000091552734 C-241.84100341796875,58.17900085449219 -235.78399658203125,77.86599731445312 -200.26600646972656,77.86599731445312 C-188.31300354003906,77.86599731445312 -178.50799560546875,73.93499755859375 -170.8159942626953,68.55500030517578 C-160.22300720214844,61.14500045776367 -156.88900756835938,53.5369987487793 -150.97999572753906,44.54999923706055 C-145.0709991455078,35.5629997253418 -143.21499633789062,30.23900032043457 -139.84300231933594,23.36400032043457 C-136.4709930419922,16.48900032043457 -138.56199645996094,-99.25399780273438 -158.28599548339844,-119.43199920654297z"></path></g><g transform="matrix(0.9098696112632751,-0.015405341982841492,0.015405341982841492,0.9098696112632751,547.0086669921875,546.8040771484375)" opacity="1" style="display: block;"><path fill="rgb(88,204,2)" fill-opacity="1" d=" M125.21700286865234,44.54999923706055 C127.13099670410156,49.180999755859375 131.0780029296875,55.74399948120117 137.09100341796875,61.821998596191406 C145.49600219726562,70.31800079345703 157.93800354003906,77.86599731445312 174.5019989013672,77.86599731445312 C210.02200317382812,77.86599731445312 216.07699584960938,58.17900085449219 216.07699584960938,47.854000091552734 C216.07699584960938,33.880001068115234 177.3470001220703,-37.59199905395508 157.98199462890625,-75.49700164794922 C157.98199462890625,-75.49700164794922 124.1760025024414,-87.91200256347656 125.2750015258789,15.385000228881836"></path></g><g mask="url(#__lottie_element_197_1)" style="display: block;"><g transform="matrix(0.9084683060646057,-0.05277731642127037,0.05277731642127037,0.9084683060646057,548.2861328125,551.2694091796875)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(88,204,2)" fill-opacity="1" d=" M392.85699462890625,-448.35150146484375 C392.85699462890625,-448.35150146484375 392.85699462890625,448.35150146484375 392.85699462890625,448.35150146484375 C392.85699462890625,448.35150146484375 -392.85699462890625,448.35150146484375 -392.85699462890625,448.35150146484375 C-392.85699462890625,448.35150146484375 -392.85699462890625,-448.35150146484375 -392.85699462890625,-448.35150146484375 C-392.85699462890625,-448.35150146484375 392.85699462890625,-448.35150146484375 392.85699462890625,-448.35150146484375z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(137,226,25)" fill-opacity="1" d=" M86.31916046142578,-139.0377960205078 C72.29048919677734,-136.82241821289062 57.12952423095703,-63.417015075683594 13.02297306060791,-60.77588653564453 C-29.93277359008789,-58.27487564086914 -53.69010543823242,-118.27141571044922 -69.27457427978516,-124.14321899414062 C-82.87983703613281,-129.44805908203125 -85.8794937133789,-109.02182006835938 -85.5765609741211,-97.44182586669922 C-90.54454040527344,-102.5963363647461 -98.71461486816406,-111.37268829345703 -105.05022430419922,-111.86199188232422 C-110.71288299560547,-112.49186706542969 -114.87322235107422,-101.11137390136719 -114.93619537353516,-94.63927459716797 C-114.96163177490234,-92.02288818359375 -114.72653198242188,-88.98041534423828 -113.05558776855469,-82.33333587646484 C-120.61210632324219,-76.31703186035156 -140.76988220214844,-62.87556457519531 -139.5498504638672,-21.327829360961914 C-138.53846740722656,17.96739959716797 -128.22547912597656,41.45042419433594 -113.29438781738281,55.96876525878906 C-99.19707489013672,71.36434173583984 -79.70358276367188,77.71968841552734 -60.13151550292969,77.88102722167969 C-31.256921768188477,77.33355712890625 -11.926517486572266,55.2870979309082 -7.807367324829102,45.08407211303711 C-7.807367324829102,45.08407211303711 33.7147216796875,40.92328643798828 33.7147216796875,40.92328643798828 C38.48490524291992,48.608177185058594 56.761024475097656,64.95848846435547 87.14192199707031,62.233516693115234 C113.08230590820312,60.83972930908203 130.17730712890625,45.12071228027344 138.53761291503906,21.754980087280273 C144.98870849609375,4.125761032104492 147.2187957763672,-18.670047760009766 147.02273559570312,-43.15672302246094 C146.7926025390625,-77.49628448486328 129.40675354003906,-93.61406707763672 123.05886840820312,-98.83937072753906 C123.73453521728516,-99.92749786376953 123.91925048828125,-101.27169036865234 124.06480407714844,-109.86487579345703 C124.24677276611328,-120.60614013671875 119.95468139648438,-131.03622436523438 115.71097564697266,-130.44796752929688 C110.32584381103516,-129.42593383789062 105.64981079101562,-121.46044921875 100.23307800292969,-114.35255432128906 C98.74449157714844,-128.36044311523438 96.35655975341797,-140.09793090820312 86.31916046142578,-139.0377960205078z"></path></g></g></g><g transform="matrix(0.894503116607666,-0.16722485423088074,0.16722485423088074,0.894503116607666,559.2387084960938,541.0270385742188)" opacity="1" style="display: block;"><path fill="rgb(137,226,25)" fill-opacity="1" d=" M-28.465999603271484,129.71099853515625 C-28.465999603271484,125.322998046875 -59.42499923706055,119.4520034790039 -71.4229965209961,119.4520034790039 C-82.59300231933594,119.4520034790039 -67.56099700927734,138.55099487304688 -49.702999114990234,138.55099487304688 C-32.74100112915039,138.55099487304688 -28.465999603271484,132.61399841308594 -28.465999603271484,129.71099853515625z M4.998000144958496,129.71099853515625 C4.998000144958496,125.322998046875 35.957000732421875,119.4520034790039 47.95500183105469,119.4520034790039 C59.125,119.4520034790039 44.09400177001953,138.55099487304688 26.235000610351562,138.55099487304688 C9.27299976348877,138.55099487304688 4.998000144958496,132.61399841308594 4.998000144958496,129.71099853515625z M-26.260000228881836,147.26100158691406 C-31.89900016784668,146.281005859375 -34.53499984741211,147.79100036621094 -34.53499984741211,150.99000549316406 C-34.53499984741211,156.31700134277344 -20.951000213623047,159.0989990234375 -11.366999626159668,159.0989990234375 C-1.7829999923706055,159.0989990234375 10.972999572753906,154.718994140625 10.972999572753906,150.99000549316406 C10.972999572753906,148.0070037841797 8.369999885559082,147.031005859375 6.629000186920166,147.26100158691406 C-2.609999895095825,148.4810028076172 -21.226999282836914,148.13600158691406 -26.260000228881836,147.26100158691406z"></path></g><g transform="matrix(0.9100000262260437,0,0,0.9100000262260437,552,550)" opacity="1" style="display: none;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(88,204,2)" fill-opacity="1" d=" M-120.18199920654297,-7.328999996185303 C-144.07899475097656,-1.628000020980835 -199.56399536132812,-0.414000004529953 -232.64999389648438,-17.08099937438965 C-248.90699768066406,-25.270999908447266 -271.5010070800781,-45.25600051879883 -279.90399169921875,-59.21699905395508 C-292.9840087890625,-83.04499816894531 -288.72100830078125,-96.81600189208984 -267.3290100097656,-101.625 C-242.38400268554688,-107.23200225830078 -176.89100646972656,-121.0770034790039 -110.5739974975586,-121.99600219726562"></path></g></g><g transform="matrix(0.9100000262260437,0,0,0.9100000262260437,545.1749877929688,639.1748046875)" opacity="1" style="display: none;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(78,184,0)" stroke-opacity="1" stroke-width="8" d=" M-137.1929931640625,-95.86900329589844 C-137.1929931640625,-95.86900329589844 -122.73400115966797,-113.98500061035156 -86.96900177001953,-107.4280014038086 C-50.025001525878906,-100.65499877929688 -43.4630012512207,-83.7040023803711 -43.4630012512207,-83.7040023803711"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(78,184,0)" stroke-opacity="1" stroke-width="8" d=" M129.19000244140625,-97.55500030517578 C129.19000244140625,-97.55500030517578 114.70899963378906,-114.04399871826172 77.5989990234375,-107.33999633789062 C39.8390007019043,-100.51799774169922 33.92100143432617,-82.08499908447266 33.92100143432617,-82.08499908447266"></path></g></g><g transform="matrix(0.9100000262260437,0,0,0.9100000262260437,552,550)" opacity="1" style="display: none;"><path fill="rgb(88,204,2)" fill-opacity="1" d=" M-130.08734130859375,-106.86138916015625 C-130.08734130859375,-106.86138916015625 -147.9171905517578,-102.58280181884766 -156.1918487548828,-101.04180908203125 C-164.46649169921875,-99.50081634521484 -173.58709716796875,-96.94678497314453 -180.639404296875,-92.8373794555664 C-190.79718017578125,-87.83646392822266 -191.08827209472656,-79.38160705566406 -188.7483673095703,-63.30714797973633 C-186.27264404296875,-46.27872085571289 -177.8479766845703,-26.266586303710938 -168.99203491210938,-11.344011306762695 C-159.4281768798828,4.771047592163086 -140.80943298339844,17.337846755981445 -119.96908569335938,23.317956924438477"></path><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(61,190,1)" stroke-opacity="1" stroke-width="8" d=" M-130.08734130859375,-106.86138916015625 C-130.08734130859375,-106.86138916015625 -147.9171905517578,-102.58280181884766 -156.1918487548828,-101.04180908203125 C-164.46649169921875,-99.50081634521484 -173.58709716796875,-96.94678497314453 -180.639404296875,-92.8373794555664 C-190.79718017578125,-87.83646392822266 -191.08827209472656,-79.38160705566406 -188.7483673095703,-63.30714797973633 C-186.27264404296875,-46.27872085571289 -177.8479766845703,-26.266586303710938 -168.99203491210938,-11.344011306762695 C-159.4281768798828,4.771047592163086 -140.80943298339844,17.337846755981445 -119.96908569335938,23.317956924438477"></path></g><g transform="matrix(0.9538916945457458,-0.055416177958250046,0.055416177958250046,0.9538916945457458,580.594970703125,545.989990234375)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-50.275455474853516,-3.3340845108032227 C-50.64985275268555,-36.57101821899414 -73.5562744140625,-61.22575759887695 -107.09716796875,-59.586402893066406 C-131.9268798828125,-58.39797592163086 -146.5294647216797,-43.004310607910156 -146.3342742919922,-21.23720359802246 C-146.2040557861328,-6.4541335105896 -146.00161743164062,-1.2618008852005005 -145.38189697265625,10.078889846801758 C-144.54635620117188,31.751428604125977 -123.06985473632812,53.601078033447266 -93.83106231689453,58.03224182128906 C-68.7929458618164,61.24036407470703 -51.09614562988281,46.17814254760742 -50.15459442138672,26.906414031982422 C-50.071903228759766,19.42230224609375 -50.02418899536133,8.858748435974121 -50.275455474853516,-3.3340845108032227z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M8.000814437866211,-14.350345611572266 C9.490697860717773,-44.98892593383789 30.06708335876465,-71.4207534790039 60.29364013671875,-72.44696807861328 C82.28799438476562,-73.04130554199219 94.35935974121094,-58.628936767578125 94.14598846435547,-36.31291580200195 C93.98123168945312,-22.5073184967041 93.2099609375,-15.045912742614746 92.28060150146484,-3.7331652641296387 C89.65036010742188,15.452248573303223 76.39779663085938,42.73255920410156 47.83432388305664,46.0818977355957 C23.289033889770508,49.2467041015625 7.268967151641846,33.67700958251953 6.945163726806641,19.167766571044922 C7.098121643066406,11.390870094299316 7.544384956359863,-3.6670565605163574 8.000814437866211,-14.350345611572266z"></path></g></g><g transform="matrix(0.9931614995002747,-0.11672795563936234,0.11672795563936234,0.9931614995002747,564.0994262695312,544.5564575195312)" opacity="1" style="display: none;"><path fill="rgb(137,226,25)" fill-opacity="1" d=" M102.75,45.75 C102.75,45.75 75.75,59 13,60.25 C22,68.25 47,71.25 65.5,71.25 C84,71.25 102.75,45.75 102.75,45.75z"></path></g><g mask="url(#__lottie_element_208_1)" style="display: block;"><g transform="matrix(0.9538916945457458,-0.055416177958250046,0.055416177958250046,0.9538916945457458,580.67626953125,546.05517578125)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(75,75,75)" fill-opacity="1" d=" M373.0769958496094,-252.197998046875 C373.0769958496094,-252.197998046875 373.0769958496094,252.197998046875 373.0769958496094,252.197998046875 C373.0769958496094,252.197998046875 -373.0769958496094,252.197998046875 -373.0769958496094,252.197998046875 C-373.0769958496094,252.197998046875 -373.0769958496094,-252.197998046875 -373.0769958496094,-252.197998046875 C-373.0769958496094,-252.197998046875 373.0769958496094,-252.197998046875 373.0769958496094,-252.197998046875z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-101.8991470336914,-26.69069480895996 C-93.88542938232422,-26.69069480895996 -87.388427734375,-20.033693313598633 -87.388427734375,-11.822693824768066 C-87.388427734375,-3.611694097518921 -93.88542938232422,3.0453057289123535 -101.8991470336914,3.0453057289123535 C-109.91285705566406,3.0453057289123535 -116.40985870361328,-3.611694097518921 -116.40985870361328,-11.822693824768066 C-116.40985870361328,-20.033693313598633 -109.91285705566406,-26.69069480895996 -101.8991470336914,-26.69069480895996z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M22.071868896484375,-40.52861022949219 C13.860868453979492,-40.52861022949219 7.203868389129639,-33.871612548828125 7.203868389129639,-25.66061019897461 C7.203868389129639,-17.44961166381836 13.860868453979492,-10.792611122131348 22.071868896484375,-10.792611122131348 C30.282869338989258,-10.792611122131348 36.93986892700195,-17.44961166381836 36.93986892700195,-25.66061019897461 C36.93986892700195,-33.871612548828125 30.282869338989258,-40.52861022949219 22.071868896484375,-40.52861022949219z"></path></g></g></g><g transform="matrix(0.9084683060646057,-0.05277731642127037,0.05277731642127037,0.9084683060646057,578.160400390625,544.9256591796875)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(244,144,0)" fill-opacity="1" d=" M-12.27400016784668,27.406999588012695 C2.2019999027252197,27.201000213623047 13.994000434875488,39.07400131225586 13.994000434875488,53.78499984741211 C13.994000434875488,68.49600219726562 2.431999921798706,80.71199798583984 -12.258000373840332,80.74199676513672 C-26.74799919128418,80.76599884033203 -38.47999954223633,68.84600067138672 -38.47999954223633,54.1349983215332 C-38.47999954223633,39.42399978637695 -26.738000869750977,27.610000610351562 -12.27400016784668,27.406999588012695z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(176,104,0)" fill-opacity="1" d=" M-11.342000007629395,41.5 C-4.829999923706055,41.5 0.4480000138282776,46.87900161743164 0.4480000138282776,53.51300048828125 C0.4480000138282776,60.14699935913086 -4.829999923706055,65.5250015258789 -11.342000007629395,65.5250015258789 C-17.854000091552734,65.5250015258789 -23.131999969482422,60.14699935913086 -23.131999969482422,53.51300048828125 C-23.131999969482422,46.87900161743164 -17.854000091552734,41.5 -11.342000007629395,41.5z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,194,0)" fill-opacity="1" d=" M22.657625198364258,47.753089904785156 C22.700071334838867,36.9988899230957 6.510160446166992,22.959815979003906 -11.370125770568848,23.260526657104492 C-32.089820861816406,23.568452835083008 -44.215789794921875,39.24571990966797 -44.215789794921875,48.016719818115234 C-44.215789794921875,53.304718017578125 -19.678739547729492,69.9981689453125 -10.765710830688477,69.845703125 C-1.6914644241333008,69.80082702636719 22.601102828979492,50.962711334228516 22.657625198364258,47.753089904785156z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,222,0)" stroke-opacity="1" stroke-width="15.445" d=" M-19.034000396728516,39.60599899291992 C-16.511999130249023,38.066001892089844 -9.932000160217285,36.09400177001953 -4.074999809265137,38.98400115966797"></path></g></g></g></svg>

              </div>

              <div className="absolute top-10 left-1/2 -translate-x-1/2">
                <div className="w-16 h-16 rounded-full bg-[#46A302]">
                  <div className="w-full h-full rounded-full bg-[#58CC02] relative bottom-[6px] flex items-center justify-center">
                    <img src="	https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/ef9c771afdb674f0ff82fae25c6a7b0a.svg" alt="not showing" />
                  </div>
                </div>
              </div>
              <div className="absolute top-[20%] left-[40%] -translate-x-1/2">
                <div className="w-16 h-16 rounded-full bg-[#B7B7B7]">
                  <div className="w-full h-full rounded-full bg-[#E5E5E5] relative bottom-[6px] flex items-center justify-center">
                    <img src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/ddd21f172a2db0f5ef169c09b4d3badb.svg" alt="not showing" />
                  </div>
                </div>
              </div>
              <div className="absolute top-[35%] left-[30%] -translate-x-1/2">
                <div className="w-16 h-16 rounded-full bg-[#B7B7B7]">
                  <div className="w-full h-full rounded-full bg-[#E5E5E5] relative bottom-[6px] flex items-center justify-center">
                    <img src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/ddd21f172a2db0f5ef169c09b4d3badb.svg" alt="not showing" />
                  </div>
                </div>
              </div>
              <div className="absolute top-[53%] left-[35%] -translate-x-1/2">
                <div className="w-16 h-16 rounded-full bg-[#B7B7B7]">
                  <div className="w-full h-full rounded-full bg-[#E5E5E5] relative bottom-[6px] flex items-center justify-center">
                    <img src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/ddd21f172a2db0f5ef169c09b4d3badb.svg" alt="not showing" />
                  </div>
                </div>
              </div>
              <div className="absolute top-[68%] left-[42%]  -translate-x-1/2">
                <div className="w-16 h-16 rounded-full bg-[#B7B7B7]">
                  <div className="w-full h-full rounded-full bg-[#E5E5E5] relative bottom-[6px] flex items-center justify-center">
                    <img src="	https://d35aaqx5ub95lt.cloudfront.net/images/path/b841637c196f5be786d8b8578a42ffbf.svg" alt="not showing" />
                  </div>
                </div>
              </div>
            </div>
          </div>
   </>
      )}
      <div className='w-[38%] h-full'>
        <div className="flex justify-around pl-16 pt-2 items-center">
          <div className="flex gap-2 items-center">
            <img src="https://d35aaqx5ub95lt.cloudfront.net/images/icons/ba95e6081679d9d7e8c132da5cfce1ec.svg" alt="not showing" />
            <h1 className="font-bold opacity-50 text-xl pt-1">1</h1>
          </div>
          <div className="flex gap-1 items-center">
            <img src="https://d35aaqx5ub95lt.cloudfront.net/images/gems/45c14e05be9c1af1d7d0b54c6eed7eee.svg" alt="not showing" />
            <h1 className="font-bold opacity-50 text-lg pt-1 text-[#1CB0F6] tracking-tighter">505</h1>
          </div>
          <div className="flex gap-1 items-center">
            <img src="https://d35aaqx5ub95lt.cloudfront.net/images/hearts/8fdba477c56a8eeb23f0f7e67fdec6d9.svg" alt="not showing" />
            <h1 className="font-bold opacity-50 text-lg pt-1 text-[#FF4B4B] tracking-tighter">5</h1>
          </div>
        </div>
        <div className="w-full flex flex-col items-center pl-5 gap-5 pt-[50px] h-full">
          <div className="w-full p-3 h-[30%] rounded-xl border-[2px] border-black/10">
            <div className="relative">
              <img className="" src="https://d35aaqx5ub95lt.cloudfront.net/images/super/2e50c3e8358914df5285dc8cf45d0b4c.svg" alt="not showing" />
              <div className="mt-5">
                <h1 className="text-lg font-extrabold">Try Super for free</h1>
                <h2 className="text-sm font-bold opacity-50 mt-1">No ads, personalized practice, and unlimited Legendary!</h2>
              </div>
              <div className="absolute top-[45%] -translate-y-1/2 right-5 w-[27%] h-full">
                <img className="w-full h-full object-contain" src="https://d35aaqx5ub95lt.cloudfront.net/images/super/fb7130289a205fadd2e196b9cc866555.svg" alt="not showing" />
              </div>
            </div>
            <div className="w-full h-[35%] flex justify-center items-center">
              <div className="w-[90%] text-sm font-extrabold uppercase tracking-wide rounded-xl h-[70%] bg-[#3C4DFF] text-white flex items-center justify-center">
                Try for Free
              </div>
            </div>
          </div>
          <div className="w-full h-[20%] rounded-xl border-[2px] border-black/10 py-3 px-5">
            <h1>Unlock Leaderboards!</h1>
            <div className="flex mt-5 gap-7">
              <img src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/d4280fdf64d66de7390fe84802432a53.svg" alt="not showing" />
              <p className="text-lg font-semibold opacity-60">Complete 9 more lessons to unlock</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page

import { useEffect, useState } from "react";

const CANVAS_WIDTH = 1280;
const CANVAS_HEIGHT = 15632;

const assetPathPrefix = "/assets";
const imgPhotoBackground = `${assetPathPrefix}/19afb.webp`;
const imgMajorDescriptionBackground = `${assetPathPrefix}/df9e7.webp`;
const imgBackgroundImage1 = `${assetPathPrefix}/bg-mountains.webp`;
const imgFolder = `${assetPathPrefix}/be026.webp`;
const imgFolderIcon2 = `${assetPathPrefix}/5b498.webp`;
const imgPython1044511 = `${assetPathPrefix}/c85f2.webp`;
const imgFolderIcon3 = `${assetPathPrefix}/ff511.webp`;
const imgFolderIcon4 = `${assetPathPrefix}/557b1.webp`;
const imgFolderIcon6 = `${assetPathPrefix}/41f36.webp`;
const imgFolderIcon7 = `${assetPathPrefix}/08ac0.webp`;
const imgFolderIcon9 = `${assetPathPrefix}/35956.webp`;
const imgFolderIcon10 = `${assetPathPrefix}/713e6.webp`;
const imgFolderIcon11 = `${assetPathPrefix}/15dd7.webp`;
const imgFolderIcon12 = `${assetPathPrefix}/58afe.webp`;
const imgFolderProgramming = `${assetPathPrefix}/folder-programming.webp`;
const imgFolderProductivity = `${assetPathPrefix}/folder-productivity.webp`;
const imgFolderDesign = `${assetPathPrefix}/folder-design.webp`;
const imgVector11 = `${assetPathPrefix}/3ec39.webp`;
const imgVector12 = `${assetPathPrefix}/a7f2e.webp`;
const imgVector13 = `${assetPathPrefix}/ae1b3.webp`;
const imgVector14 = `${assetPathPrefix}/4aa54.webp`;
const imgImageThumbnail = `${assetPathPrefix}/f5c48.webp`;
const imgImageThumbnail1 = `${assetPathPrefix}/15e69.webp`;
const imgIcon = `${assetPathPrefix}/7b26d.webp`;
const imgAppIconImage = `${assetPathPrefix}/a3c85.png`;
const imgImage = `${assetPathPrefix}/b8e59.webp`;
const imgImage1 = `${assetPathPrefix}/906fb.webp`;
const imgImage2 = `${assetPathPrefix}/7fce8.webp`;
const imgImage3 = `${assetPathPrefix}/39acf.webp`;
const imgImage4 = `${assetPathPrefix}/97a34.webp`;
const imgImage5 = `${assetPathPrefix}/2336d.webp`;
const imgImage6 = `${assetPathPrefix}/ff329.webp`;
const imgImage7 = `${assetPathPrefix}/62987.webp`;
const imgImage8 = `${assetPathPrefix}/6be78.webp`;
const imgImage9 = `${assetPathPrefix}/17162.webp`;
const imgImage10 = `${assetPathPrefix}/ed6f5.webp`;
const imgImage11 = `${assetPathPrefix}/3b5f5.webp`;
const imgImage12 = `${assetPathPrefix}/32ce8.webp`;
const imgInstagramPost = `${assetPathPrefix}/231e7.webp`;
const imgArticleHimsis1 = `${assetPathPrefix}/5ea40.webp`;
const imgLogoBalon21 = `${assetPathPrefix}/85c94.webp`;
const imgLogoWp1 = `${assetPathPrefix}/6a79f.webp`;
const imgLogoBridge1 = `${assetPathPrefix}/8c22d.webp`;
const imgLogoGerak1 = `${assetPathPrefix}/bb7fd.webp`;
const imgLogoLdkcp1 = `${assetPathPrefix}/68920.webp`;
const imgBukletFpyb1 = `${assetPathPrefix}/a4dd5.webp`;
const imgStickerPackGerak1 = `${assetPathPrefix}/968c7.webp`;
const imgBingoWp1 = `${assetPathPrefix}/135b6.webp`;
const imgPosterBridge1 = `${assetPathPrefix}/33adb.webp`;
const imgIgs7DaysToGoBalon1 = `${assetPathPrefix}/3af8e.webp`;
const imgImage13 = `${assetPathPrefix}/5fca7.webp`;
const imgPosterWorkshop1 = `${assetPathPrefix}/050f2.webp`;
const imgImage14 = `${assetPathPrefix}/f26db.webp`;
const imgImage15 = `${assetPathPrefix}/fec3b.webp`;
const imgImage16 = `${assetPathPrefix}/e0285.webp`;
const imgImage17 = `${assetPathPrefix}/1fe89.webp`;
const imgWhatsAppImage20260926At23065811 = `${assetPathPrefix}/f79cc.webp`;
const imgWhatsAppImage20260926At2306581 = `${assetPathPrefix}/350d5.webp`;
const imgImage18 = `${assetPathPrefix}/a1e14.webp`;
const imgDscf30261 = `${assetPathPrefix}/2ded1.webp`;
const imgDscf30262 = `${assetPathPrefix}/3eb94.webp`;
const imgDscf30263 = `${assetPathPrefix}/31156.webp`;
const imgDscf30264 = `${assetPathPrefix}/15313.webp`;
const imgDscf30265 = `${assetPathPrefix}/1f117.webp`;
const imgDscf30266 = `${assetPathPrefix}/5d99f.webp`;
const imgDscf30269 = `${assetPathPrefix}/4a93a.webp`;
const imgDscf30267 = `${assetPathPrefix}/cc25e.webp`;
const imgDscf30268 = `${assetPathPrefix}/25c51.webp`;
const imgDscf302610 = `${assetPathPrefix}/41696.webp`;
const imgWhatsAppImage20260929At1554071 = `${assetPathPrefix}/05105.webp`;
const imgVector5 = `${assetPathPrefix}/846f2.svg`;
const imgVector4 = `${assetPathPrefix}/b999b.svg`;
const imgVector3 = `${assetPathPrefix}/141d1.svg`;
const imgArrow1 = `${assetPathPrefix}/2610b.svg`;
const imgPhotoEllipses = `${assetPathPrefix}/3e714.svg`;
const imgButton = `${assetPathPrefix}/3eace.svg`;
const imgVector6 = `${assetPathPrefix}/021af.svg`;
const imgFolderIcon = `${assetPathPrefix}/d7c23.svg`;
const imgBackgroundImage = `${assetPathPrefix}/3c32c.svg`;
const imgNavigationIconContainer = `${assetPathPrefix}/f32a6.svg`;
const imgVector = `${assetPathPrefix}/16d22.svg`;
const imgVector1 = `${assetPathPrefix}/594df.svg`;
const imgVector2 = `${assetPathPrefix}/01347.svg`;
const imgVector7 = `${assetPathPrefix}/30e8a.svg`;
const imgVector8 = `${assetPathPrefix}/16125.svg`;
const imgNavigationIconContainer1 = `${assetPathPrefix}/cd13c.svg`;
const imgVector9 = `${assetPathPrefix}/a2f21.svg`;
const imgVector10 = `${assetPathPrefix}/6930d.svg`;
const imgUnderline = `${assetPathPrefix}/f6ddf.svg`;
const imgLine1 = `${assetPathPrefix}/3c38b.svg`;
const imgLine2 = `${assetPathPrefix}/56ccc.svg`;
const imgFolderIcon1 = `${assetPathPrefix}/2ad88.svg`;
const imgFolderIcon5 = `${assetPathPrefix}/78aae.svg`;
const imgFolderIcon8 = `${assetPathPrefix}/957a4.svg`;
const imgContainer = `${assetPathPrefix}/d35b0.svg`;
const imgContainer1 = `${assetPathPrefix}/f5d47.svg`;
const imgContainer2 = `${assetPathPrefix}/ded23.svg`;
const imgContainer3 = `${assetPathPrefix}/6bebe.svg`;
const imgContainer4 = `${assetPathPrefix}/31c71.svg`;
const imgContainer5 = `${assetPathPrefix}/46b87.svg`;
const imgContainer6 = `${assetPathPrefix}/8e169.svg`;
const imgContainer7 = `${assetPathPrefix}/668ea.svg`;
const imgContainer8 = `${assetPathPrefix}/ca2c4.svg`;
const imgContainer9 = `${assetPathPrefix}/eb26a.svg`;
const imgContainer10 = `${assetPathPrefix}/3d740.svg`;
const imgContainer11 = `${assetPathPrefix}/5931e.svg`;
const imgContainer12 = `${assetPathPrefix}/4744e.svg`;
const imgContainer13 = `${assetPathPrefix}/4f055.svg`;
const imgContainer14 = `${assetPathPrefix}/f2518.svg`;
const imgContainer15 = `${assetPathPrefix}/94a90.svg`;
const imgContainer16 = `${assetPathPrefix}/4275d.svg`;
const imgContainer17 = `${assetPathPrefix}/4af26.svg`;
const imgContainer18 = `${assetPathPrefix}/fd3fd.svg`;
const imgContainer19 = `${assetPathPrefix}/55902.svg`;
const imgContainer20 = `${assetPathPrefix}/146d7.svg`;
const imgContainer21 = `${assetPathPrefix}/4b8af.svg`;
const imgContainer22 = `${assetPathPrefix}/1aff3.svg`;
const imgLine3 = `${assetPathPrefix}/fc8bc.svg`;
const imgLine4 = `${assetPathPrefix}/5ec20.svg`;
const imgNavigationIconContainer2 = `${assetPathPrefix}/dc784.svg`;
const imgVector15 = `${assetPathPrefix}/16922.svg`;
const imgVector16 = `${assetPathPrefix}/fe258.svg`;
const imgVector17 = `${assetPathPrefix}/ad784.svg`;
const imgVector18 = `${assetPathPrefix}/87cc3.svg`;
const imgVector19 = `${assetPathPrefix}/069f2.svg`;
const imgNavigationIconContainer3 = `${assetPathPrefix}/7a303.svg`;
const imgVector20 = `${assetPathPrefix}/68589.svg`;
const imgVector21 = `${assetPathPrefix}/86f81.svg`;
const imgImage25Vectorized = `${assetPathPrefix}/07e07.svg`;
const imgVector22 = `${assetPathPrefix}/40604.svg`;

function Canvas() {
  return (
    <div className="bg-[#fefff2] relative overflow-hidden" style={{ width: 1280, height: 15632 }} data-node-id="1:2" data-name="Desktop">
      <div className="absolute bg-gradient-to-b from-[#fefff2] h-[4708px] left-0 to-[#ffeda8] to-[51.323%] top-[11856px] w-[1280px]" data-node-id="166:23" />
      <div className="absolute contents left-[-183px] top-[755px]" data-node-id="1:11" data-name="About Me Section (2)">
        <div className="absolute h-[594.234px] left-[-43px] top-[755px] w-[2013px]" data-node-id="1:12">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector5} />
        </div>
        <div className="absolute h-[594.234px] left-[-48.35px] top-[784.27px] w-[1664.148px]" data-node-id="1:13">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector4} />
        </div>
        <div className="absolute h-[594.234px] left-[-183px] top-[864.77px] w-[1664.148px]" data-node-id="1:14">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
        </div>
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular'] font-normal justify-center leading-[0] left-[136px] text-[37.355px] text-white top-[912.5px] tracking-[-1.1206px] whitespace-nowrap" data-node-id="1:15" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[60.65999984741211%]">ABOUT ME</p>
        </div>
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular'] font-normal justify-center leading-[0] left-[268px] text-[37.355px] text-white top-[827.5px] tracking-[-1.1206px] whitespace-nowrap" data-node-id="1:16" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[60.65999984741211%]">SKILLS</p>
        </div>
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular'] font-normal justify-center leading-[0] left-[613px] text-[37.355px] text-white top-[799.5px] tracking-[-1.1206px] whitespace-nowrap" data-node-id="1:17" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[60.65999984741211%]">EXPERIENCE</p>
        </div>
        <div className="absolute h-0 left-[328px] top-[912px] w-[86px]" data-node-id="1:18">
          <div className="absolute inset-[-11.05px_-1.74%]">
            <img alt="" className="block max-w-none size-full" src={imgArrow1} />
          </div>
        </div>
        <div className="absolute h-0 left-[460px] top-[827px] w-[86px]" data-node-id="1:19">
          <div className="absolute inset-[-11.05px_-1.74%]">
            <img alt="" className="block max-w-none size-full" src={imgArrow1} />
          </div>
        </div>
        <div className="absolute h-0 left-[831px] top-[799px] w-[86px]" data-node-id="1:20">
          <div className="absolute inset-[-11.05px_-1.74%]">
            <img alt="" className="block max-w-none size-full" src={imgArrow1} />
          </div>
        </div>
        <div className="absolute contents left-[32px] top-[1014px]" data-node-id="3:3" data-name="Photo">
          <div className="absolute bg-white h-[365.439px] left-[32px] rounded-[16.997px] top-[1014px] w-[368.271px]" data-node-id="3:4" data-name="Photo Border" />
          <div className="absolute h-[246.458px] left-[32px] top-[1045.16px] w-[368.271px]" data-node-id="3:5" data-name="Photo Background">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[199.23%] left-[0.04%] max-w-none top-[-15.27%] w-full" src={imgPhotoBackground} />
            </div>
          </div>
          <div className="absolute h-[14.164px] left-[46.16px] top-[1022.5px] w-[53.824px]" data-node-id="10:18" data-name="Photo Ellipses">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPhotoEllipses} />
          </div>
          <div className="absolute left-[185px] size-[62px] top-[1303px]" data-node-id="144:10" data-name="Container">
            <div className="absolute left-[-0.03px] size-[62.323px] top-[-0.05px]" data-node-id="3:9" data-name="Button">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgButton} />
            </div>
          </div>
        </div>
        <div className="absolute contents left-[434px] top-[1058px]" data-node-id="10:2" data-name="Text Introduction">
          <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[normal] left-[440px] text-[22.249px] text-white top-[1140px] w-[798px]" data-node-id="3:2" style={{ fontVariationSettings: '"wdth" 100' }}>
            I am an Business Information Technology student at BINUS University (B28) with a strong interest in UI/UX design. My primary expertise lies in Figma, which I use to design intuitive and user-centered digital interfaces, complemented by Canva for supporting visual and branding needs. I also have working proficiency in Python, particularly for data mining, which allows me to approach design decisions with a data-informed perspective. Actively involved in HIMSISFO, I continue to sharpen both my technical and organizational skills through academic projects and student organization activities. I am eager to grow further as a UI/UX Designer, combining research, design thinking, and technical understanding to create meaningful user experiences.
          </p>
          <div className="absolute contents left-[434px] top-[1058px]" data-node-id="1:21" data-name="Bubble Chat (Hi! I'm Kellvin)">
            <div className="absolute h-[68.201px] left-[434px] top-[1058px] w-[350px]" data-node-id="1:22">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector6} />
            </div>
            <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[normal] left-[499px] text-[#323234] text-[39.571px] top-[1065.6px] whitespace-nowrap" data-node-id="1:23" style={{ fontVariationSettings: '"wdth" 100' }}>{`Hi! I’m Kellvin `}</p>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute contents left-[calc(50%-0.32px)] top-[16px]" data-node-id="10:3" data-name="Title Section (1)">
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Medium'] font-[510] justify-center leading-[0] right-[67.61px] text-[#323234] text-[58.076px] text-right top-[371.5px] tracking-[-1.7423px] w-[153.746px]" data-node-id="1:3" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">Kellvin</p>
        </div>
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular'] font-normal justify-center leading-[0] right-[66.65px] text-[#323234] text-[35.895px] text-right top-[434.77px] w-[295px]" data-node-id="1:4" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal] mb-0">Active Student</p>
          <p className="leading-[normal]">at BINUS University</p>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Medium'] font-[510] justify-center leading-[0] left-[calc(50%-10.65px)] text-[#323234] text-[256px] text-center top-[169px] tracking-[-7.68px] whitespace-nowrap" data-node-id="1:7" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">Portofolio</p>
        </div>
        <div className="absolute h-[384.896px] left-[360.35px] top-[214px] w-[537px]" data-node-id="1:8" data-name="Folder Icon">
          <div className="absolute inset-[0_-3.44%_-1.82%_-3.44%]">
            <img alt="" className="block max-w-none size-full" src={imgFolderIcon} />
          </div>
        </div>
        <div className="absolute contents h-[141.362px] left-[66px] top-[362.48px] w-[324.587px]" data-node-id="4:19" data-name="My Major (Information System Student)">
          <div className="absolute flex h-[141.362px] items-center justify-center left-[66px] top-[362.48px] w-[324.587px]" data-node-id="4:16">
            <div className="flex-none rotate-[6.16deg]">
              <div className="h-[108.184px] relative w-[314.79px]" data-name="Major Description Background">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMajorDescriptionBackground} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[40.742px] items-center justify-center left-[93.93px] top-[376.31px] w-[222.542px]" data-node-id="4:18">
            <div className="flex-none rotate-[6.16deg]">
              <p className="[word-break:break-word] font-['SF_Pro:Regular'] font-normal leading-[normal] relative text-[13.927px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                Business Information Technology!
              </p>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col items-center left-1/2 -translate-x-1/2 top-[620px]" data-name="Scroll Down Indicator">
          <p className="font-['SF_Pro:Regular'] text-[#323234] text-[16px] mb-2 font-medium" style={{ fontVariationSettings: '"wdth" 100' }}>scroll down</p>
          <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2V38M12 38L4 30M12 38L20 30" stroke="#323234" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <div className="absolute contents left-[-10px] top-[1433px]" data-node-id="12:4294" data-name="Mask group">
        <div className="absolute h-[1846px] left-[-10px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[1290px_1846px] top-[1433px] w-[1290px]" data-node-id="12:4290" style={{ maskImage: `url("${imgBackgroundImage}")` }} data-name="Background Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgBackgroundImage1} />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-white h-[1073.147px] left-1/2 overflow-clip rounded-[35.216px] shadow-[0px_581.056px_162.177px_0px_rgba(0,0,0,0),0px_371.616px_148.276px_0px_rgba(0,0,0,0.02),0px_209.44px_125.108px_0px_rgba(0,0,0,0.07),0px_92.672px_92.672px_0px_rgba(0,0,0,0.12),0px_23.168px_50.97px_0px_rgba(0,0,0,0.14)] top-[1739px] w-[860px]" data-node-id="10:11" data-name="Folder Container">
        <div className="absolute bg-[#e6e6e6] h-[51.897px] left-0 top-0 w-[860px]" data-node-id="10:1313" data-name="Navigation Container">
          <div className="absolute inset-[32.14%_83.03%_35.71%_12.98%]" data-node-id="10:1311" data-name="Navigation Icon Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNavigationIconContainer} />
          </div>
          <div className="absolute inset-[32.14%_41.49%_35.71%_56.57%]" data-node-id="10:34" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
          </div>
          <div className="absolute inset-[32.14%_36.31%_35.71%_61.75%]" data-node-id="10:40" data-name="Vector">
            <div className="absolute inset-[-4.05%]">
              <img alt="" className="block max-w-none size-full" src={imgVector1} />
            </div>
          </div>
          <div className="absolute inset-[32.14%_3.88%_35.71%_94.18%]" data-node-id="10:1310" data-name="Vector">
            <div className="absolute inset-[-4.05%]">
              <img alt="" className="block max-w-none size-full" src={imgVector2} />
            </div>
          </div>
          <div className="absolute inset-[32.14%_31.14%_35.71%_66.92%]" data-node-id="10:36" data-name="Vector">
            <div className="absolute inset-[-4.05%]">
              <img alt="" className="block max-w-none size-full" src={imgVector7} />
            </div>
          </div>
          <div className="absolute inset-[32.14%_26.42%_35.71%_72.09%]" data-node-id="10:42" data-name="Vector">
            <div className="absolute inset-[-4.06%_-5.27%]">
              <img alt="" className="block max-w-none size-full" src={imgVector8} />
            </div>
          </div>
          <div className="absolute content-stretch flex gap-[8.341px] inset-[35.71%_88.79%_39.29%_3.88%] items-center pr-[7.414px]" data-node-id="10:63" data-name="Window Controls/Standard">
            <div className="bg-[#ff5c60] border-[0.463px] border-[rgba(0,0,0,0.12)] border-solid relative rounded-[100px] shrink-0 size-[12.974px]" data-node-id="I10:63;177:9888" data-name="Close" />
            <div className="bg-[#fac800] border-[0.463px] border-[rgba(0,0,0,0.12)] border-solid relative rounded-[92.672px] shrink-0 size-[12.974px]" data-node-id="I10:63;177:9889" data-name="Minimize" />
            <div className="bg-[#35c759] border-[0.463px] border-[rgba(0,0,0,0.12)] border-solid relative rounded-[92.672px] shrink-0 size-[12.974px]" data-node-id="I10:63;177:9890" data-name="Zoom" />
          </div>
          <div className="absolute inset-[32.14%_19.23%_35.71%_76.83%]" data-node-id="10:1312" data-name="Navigation Icon Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNavigationIconContainer1} />
          </div>
          <div className="absolute inset-[32.14%_14.19%_35.52%_84.05%]" data-node-id="10:1307" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector9} />
          </div>
          <div className="absolute inset-[32.14%_9.05%_35.71%_89.01%]" data-node-id="10:1309" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector10} />
          </div>
        </div>
        <div className="absolute bg-[rgba(0,111,255,0.27)] h-[79.103px] left-[146.42px] top-[189px] w-[324.323px]" data-node-id="12:671" data-name="Section Header Background" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro_Display:Regular'] justify-center leading-[0] left-[75.99px] not-italic text-[83.604px] text-black top-[119.46px] tracking-[-2.5081px] whitespace-nowrap" data-node-id="12:669">
          <p className="leading-[0.804]">what i</p>
        </div>
        <div className="absolute h-0 left-[77.3px] top-[156.5px] w-[193.333px]" data-node-id="12:675" data-name="Underline">
          <div className="absolute inset-[-2.61px_-1.35%]">
            <img alt="" className="block max-w-none size-full" src={imgUnderline} />
          </div>
        </div>
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro_Display:Bold'] justify-center leading-[0] left-[163px] not-italic text-[101.252px] text-black top-[227.5px] tracking-[-3.0376px] whitespace-nowrap" data-node-id="12:670">
          <p className="leading-[0.804]">BRING</p>
        </div>
        <div className="absolute flex h-[96.655px] items-center justify-center left-[470.75px] top-[189px] w-0" data-node-id="12:672">
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[96.655px]">
              <div className="absolute inset-[-6.49px_-6.72%_-6.49px_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine1} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[96.655px] items-center justify-center left-[146.42px] top-[171.44px] w-0" data-node-id="12:673">
          <div className="-rotate-90 -scale-y-100 flex-none">
            <div className="h-0 relative w-[96.655px]">
              <div className="absolute inset-[-6.49px_-6.72%_-6.49px_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[323.342px] left-[483.75px] top-[298.4px] w-[271.729px]" data-node-id="12:4226" data-name="Folder Container">
          <img alt="" className="pointer-events-none size-full max-w-none" src={imgFolderProgramming} />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[45.913px] items-center justify-center left-[120.93px] top-[299.34px] w-[220.69px]" data-node-id="12:4229">
            <div className="flex-none rotate-[6.47deg]">
              <div className="[word-break:break-word] flex flex-col font-['SF_Pro:Semibold'] font-[590] h-[21.303px] justify-center leading-[0] relative text-[21.166px] text-black text-center w-[219.689px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[21.166px]">{`Programming & Data`}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[326.042px] left-[122px] top-[574px] w-[277.642px]" data-node-id="12:4245" data-name="Folder Container">
          <img alt="" className="pointer-events-none size-full max-w-none" src={imgFolderProductivity} />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[53.282px] items-center justify-center left-[118.97px] top-[298.02px] w-[217.18px]" data-node-id="12:4248">
            <div className="flex-none rotate-[8.64deg]">
              <div className="[word-break:break-word] flex flex-col font-['SF_Pro:Semibold'] font-[590] h-[20.992px] justify-center leading-[0] relative text-[20.857px] text-black text-center w-[216.484px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20.857px]">Productivity Tools</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[374.003px] left-[100px] top-[237px] w-[329.935px]" data-node-id="12:4225" data-name="Folder Container">
          <img alt="" className="pointer-events-none size-full max-w-none" src={imgFolderDesign} />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[84.38px] items-center justify-center left-[203.9px] top-[329.69px] w-[239.159px]" data-node-id="12:4203">
            <div className="flex-none rotate-[-14.96deg]">
              <div className="[word-break:break-word] flex flex-col font-['SF_Pro:Semibold'] font-[590] h-[22.805px] justify-center leading-[0] relative text-[22.641px] text-black text-center w-[241.459px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[22.641px]">{`Design & Editing Tools`}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Light'] font-[274.31500244140625] justify-center leading-[0] left-[634px] text-[43.804px] text-black top-[186.5px] tracking-[-1.3141px] whitespace-nowrap" data-node-id="37:13" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[0.804]">(2026)</p>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-white h-[419px] left-[calc(50%+245.5px)] overflow-clip rounded-[35.216px] shadow-[0px_166px_47px_0px_rgba(0,0,0,0),0px_106px_43px_0px_rgba(0,0,0,0.04),0px_60px_36px_0px_rgba(0,0,0,0.12),0px_27px_27px_0px_rgba(0,0,0,0.2),0px_7px_15px_0px_rgba(0,0,0,0.24)] top-[2425px] w-[409px]" data-node-id="45:359" data-name="Folder Container">
        <div className="absolute bg-[#e6e6e6] h-[51.897px] left-0 top-0 w-[860px]" data-node-id="45:360" data-name="Navigation Container">
          <div className="absolute content-stretch flex gap-[8.341px] inset-[35.71%_88.79%_39.29%_3.88%] items-center pr-[7.414px]" data-node-id="45:369" data-name="Window Controls/Standard">
            <div className="bg-[#ff5c60] border-[0.463px] border-[rgba(0,0,0,0.12)] border-solid relative rounded-[100px] shrink-0 size-[12.974px]" data-node-id="I45:369;177:9888" data-name="Close" />
            <div className="bg-[#fac800] border-[0.463px] border-[rgba(0,0,0,0.12)] border-solid relative rounded-[92.672px] shrink-0 size-[12.974px]" data-node-id="I45:369;177:9889" data-name="Minimize" />
            <div className="bg-[#35c759] border-[0.463px] border-[rgba(0,0,0,0.12)] border-solid relative rounded-[92.672px] shrink-0 size-[12.974px]" data-node-id="I45:369;177:9890" data-name="Zoom" />
          </div>
          <div className="[word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold'] font-[590] inset-[26.98%_68.26%_28.7%_16.98%] justify-center leading-[0] text-[23.189px] text-black text-center" data-node-id="12:4267" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[23.189px]">Soft Skills</p>
          </div>
        </div>
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Medium'] font-[510] justify-center leading-[0] left-[27px] text-[36.017px] text-black top-[215.5px] whitespace-nowrap" data-node-id="45:419" style={{ fontVariationSettings: '"wdth" 100' }}>
          <ol className="list-decimal" start={1}>
            <li className="mb-0 ms-[54.02550000000001px]">
              <span className="leading-[36.017px]">Team Collaboration</span>
            </li>
            <li className="mb-0 ms-[54.02550000000001px]">
              <span className="leading-[36.017px]">Communication</span>
            </li>
            <li className="mb-0 ms-[54.02550000000001px]">
              <span className="leading-[36.017px]">Problem Solving</span>
            </li>
            <li className="ms-[54.02550000000001px]">
              <span className="leading-[36.017px]">Adaptability</span>
            </li>
          </ol>
        </div>
        <div className="absolute flex items-center justify-center left-[55px] size-[57.338px] top-[72px]" data-node-id="45:330">
          <div className="flex-none rotate-[-11.89deg]">
            <div className="relative size-[48.402px]" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" height="48.402" src={imgVector11} width="48.402" />
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-center left-[301px] size-[66.932px] top-[68px]" data-node-id="45:328">
          <div className="flex-none rotate-[14.09deg]">
            <div className="relative size-[55.161px]" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" height="55.161" src={imgVector12} width="55.161" />
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-center left-[49px] size-[70.155px] top-[313px]" data-node-id="45:329">
          <div className="flex-none rotate-[-11.89deg]">
            <div className="relative size-[59.222px]" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" height="59.222" src={imgVector13} width="59.222" />
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-center left-[277px] size-[73.732px] top-[300px]" data-node-id="45:327">
          <div className="flex-none rotate-[11.97deg]">
            <div className="relative size-[62.185px]" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" height="62.185" src={imgVector14} width="62.185" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute drop-shadow-[0px_100px_14px_rgba(0,0,0,0),0px_64px_13px_rgba(0,0,0,0.01),0px_36px_11px_rgba(0,0,0,0.03),0px_16px_8px_rgba(0,0,0,0.05),0px_4px_4.5px_rgba(0,0,0,0.06)] h-[188px] left-[1110px] top-[2212px] w-[141.329px]" data-node-id="14:4330" data-name="Image Container">
        <div className="absolute h-[188.219px] left-0 top-0 w-[141.164px]" data-node-id="14:4328" data-name="Image Thumbnail">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageThumbnail} />
        </div>
        <p className="-translate-x-1/2 [word-break:break-word] absolute bottom-[-13px] font-['SF_Pro:Medium'] font-[510] h-[23px] leading-[normal] left-[calc(50%+0.34px)] overflow-hidden text-[19.688px] text-center text-ellipsis text-shadow-[0px_3.281px_41.016px_black] text-white translate-y-full w-[160px] whitespace-nowrap" data-node-id="14:4331" style={{ fontVariationSettings: '"wdth" 100' }}>
          me.jpg
        </p>
      </div>
      <div className="absolute drop-shadow-[0px_100px_14px_rgba(0,0,0,0),0px_64px_13px_rgba(0,0,0,0.01),0px_36px_11px_rgba(0,0,0,0.03),0px_16px_8px_rgba(0,0,0,0.05),0px_4px_4.5px_rgba(0,0,0,0.06)] h-[188px] left-[20px] top-[2478px] w-[141.329px]" data-node-id="14:4333" data-name="Image Container">
        <div className="absolute h-[188.219px] left-0 top-0 w-[141.164px]" data-node-id="14:4334" data-name="Image Thumbnail">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageThumbnail1} />
        </div>
        <p className="-translate-x-1/2 [word-break:break-word] absolute bottom-[-13px] font-['SF_Pro:Medium'] font-[510] h-[23px] leading-[normal] left-[calc(50%+0.34px)] overflow-hidden text-[19.688px] text-center text-ellipsis text-shadow-[0px_3.281px_41.016px_black] text-white translate-y-full w-[160px] whitespace-nowrap" data-node-id="14:4335" style={{ fontVariationSettings: '"wdth" 100' }}>
          cat.jpg
        </p>
      </div>
      <div className="absolute drop-shadow-[0px_55.781px_8.203px_rgba(0,0,0,0),0px_36.094px_7.383px_rgba(0,0,0,0.01),0px_19.688px_5.742px_rgba(0,0,0,0.03),0px_8.203px_4.102px_rgba(0,0,0,0.05),0px_1.641px_2.461px_rgba(0,0,0,0.06)] left-[55px] size-[105px] top-[1656px]" data-node-id="13:4308" data-name="App Icon/iPhone">
        <div className="absolute aspect-[64/64] left-0 right-0 top-0" data-node-id="13:4309" data-name="Icon">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcon} />
        </div>
        <p className="-translate-x-1/2 [word-break:break-word] absolute bottom-[-8.2px] font-['SF_Pro:Medium'] font-[510] leading-[normal] left-1/2 overflow-hidden text-[19.688px] text-center text-ellipsis text-shadow-[0px_3.281px_41.016px_black] text-white translate-y-full whitespace-nowrap" data-node-id="13:4310" style={{ fontVariationSettings: '"wdth" 100' }}>
          Figma
        </p>
        <div className="absolute h-[119.766px] left-[-9.84px] rounded-[32.813px] top-[-8.2px] w-[124.688px]" data-node-id="13:4316" data-name="App Icon Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32.813px]">
            <img alt="" className="absolute h-[148.88%] left-[-21.5%] max-w-none top-[-23.75%] w-[143%]" src={imgFolderIcon12} />
          </div>
        </div>
        <div className="absolute bg-[#ff383c] content-stretch flex items-center justify-center min-w-[39.375px] px-[11.484px] py-[4.102px] right-[-20.92px] rounded-[100px] top-[-19.69px]" data-node-id="13:4311" data-name="Badge">
          <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro:Regular'] font-normal leading-[31.172px] min-w-px relative text-[26.25px] text-center text-white" data-node-id="I13:4311;5592:39414" style={{ fontVariationSettings: '"wdth" 100' }}>
            6
          </p>
        </div>
      </div>
      <div className="absolute drop-shadow-[0px_55.781px_8.203px_rgba(0,0,0,0),0px_36.094px_7.383px_rgba(0,0,0,0.01),0px_19.688px_5.742px_rgba(0,0,0,0.03),0px_8.203px_4.102px_rgba(0,0,0,0.05),0px_1.641px_2.461px_rgba(0,0,0,0.06)] left-[1133px] size-[105px] top-[1792px]" data-node-id="13:4318" data-name="App Icon/iPhone">
        <div className="absolute aspect-[64/64] left-0 right-0 top-0" data-node-id="13:4319" data-name="Icon">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcon} />
        </div>
        <div className="-translate-x-1/2 [word-break:break-word] absolute bottom-[-8px] font-['SF_Pro:Medium'] font-[510] h-[46px] leading-[0] left-[calc(50%-0.5px)] overflow-hidden text-[19.688px] text-center text-ellipsis text-shadow-[0px_3.281px_41.016px_black] text-white translate-y-full w-[122px]" data-node-id="13:4320" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal] mb-0">Visual Studio</p>
          <p className="leading-[normal]">Code</p>
        </div>
        <div className="absolute h-[103px] left-[-1px] rounded-[32.813px] top-0 w-[107px]" data-node-id="13:4322" data-name="App Icon Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32.813px]">
            <img alt="" className="absolute h-full left-[1.97%] max-w-none top-0 w-[96.05%]" src={imgAppIconImage} />
          </div>
        </div>
        <div className="absolute bg-[#ff383c] content-stretch flex items-center justify-center min-w-[39.375px] px-[11.484px] py-[4.102px] right-[-21.33px] rounded-[100px] top-[-19.69px]" data-node-id="13:4321" data-name="Badge">
          <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro:Regular'] font-normal leading-[31.172px] min-w-px relative text-[26.25px] text-center text-white" data-node-id="I13:4321;5592:39414" style={{ fontVariationSettings: '"wdth" 100' }}>
            7
          </p>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold'] font-[590] justify-center leading-[0] left-1/2 text-[96px] text-black text-center top-[3445px] whitespace-nowrap" data-node-id="49:420" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[23.189px]">what i’ve made</p>
      </div>
      <div className="absolute drop-shadow-[0px_197px_27.5px_rgba(0,0,0,0),0px_126px_25px_rgba(0,0,0,0.02),0px_71px_21.5px_rgba(0,0,0,0.07),0px_32px_16px_rgba(0,0,0,0.12),0px_8px_8.5px_rgba(0,0,0,0.14)] h-[357px] left-[49px] top-[3803px] w-[869px]" data-node-id="49:425" data-name="Image frame">
        <div className="absolute h-[357px] left-0 top-0 w-[869px]" data-node-id="49:423" data-name="Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[100.23%] left-[-0.58%] max-w-none top-[-0.12%] w-[100.58%]" src={imgImage} />
          </div>
        </div>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[normal] left-[434px] text-[19.688px] text-black text-center top-[361px] whitespace-nowrap" data-node-id="49:426" style={{ fontVariationSettings: '"wdth" 100' }}>
          aqquas.png
        </p>
      </div>
      <div className="absolute drop-shadow-[0px_73px_10px_rgba(0,0,0,0),0px_46px_9.5px_rgba(0,0,0,0.02),0px_26px_8px_rgba(0,0,0,0.07),0px_12px_6px_rgba(0,0,0,0.12),0px_3px_3px_rgba(0,0,0,0.14)] h-[320px] left-[1008px] top-[3840px] w-[159px]" data-node-id="49:430" data-name="Image frame">
        <div className="absolute h-[320px] left-0 top-0 w-[159px]" data-node-id="49:428" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
        </div>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[normal] left-[79px] text-[19.688px] text-black text-center top-[325px] whitespace-nowrap" data-node-id="49:431" style={{ fontVariationSettings: '"wdth" 100' }}>
          aqquas mookup.png
        </p>
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[normal] left-[49px] text-[19.688px] text-black top-[4233px] w-[1044px]" data-node-id="49:433" style={{ fontVariationSettings: '"wdth" 100' }}>
        aqquas is a mobile app concept designed to make purchasing aquarium equipment simple and accessible for hobbyists and aquascaping enthusiasts. this class project was built with a partner, where i was responsible for the high-fidelity design in figma, translating the initial low-fidelity wireframes into a polished, visually cohesive interface across the complete user flow, including splashscreen, onboarding, sign up/sign in, home feed, community forum, shop, and profile sections. the design focuses on creating an intuitive experience that guides users smoothly from discovery to purchase.
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[normal] left-[49px] text-[19.688px] text-black top-[5249px] w-[1044px]" data-node-id="61:477" style={{ fontVariationSettings: '"wdth" 100' }}>
        kenangin kopi is a web application that lets users browse coffee stores, order their favorite coffee, and manage their orders online. this class project was built in a team of four, with the platform structured around three roles: admin, who manages stores, coffee menus, and users; guest, who can browse and register; and user, who can order coffee, manage their cart, view order history, and edit their profile. the system includes a full database backend to handle store, product, and user data.
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[normal] left-[49px] text-[19.688px] text-black top-[6263px] w-[1044px]" data-node-id="76:14" style={{ fontVariationSettings: '"wdth" 100' }}>{`gy'oreal is a five-page website built for a fictional makeup brand as a class project, designed to reflect a refined and editorial approach to beauty branding. the site includes home, gallery, about us, tips & trends, and subscription pages, each crafted to feel cohesive and intentional. the overall design leans into a dark editorial aesthetic with a minimalist, high-contrast layout, using cormorant garamond typography to reinforce a sense of elegance throughout the site. product and lifestyle photography are placed front and center, allowing the visuals to carry the storytelling while the layout stays clean and uncluttered. the result is a browsing experience that feels more like flipping through a fashion editorial than a typical ecommerce site.`}</p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[normal] left-[49px] text-[19.688px] text-black top-[7262px] w-[1044px]" data-node-id="94:75" style={{ fontVariationSettings: '"wdth" 100' }}>{`one of my responsibilities as part of the information commission at himsisfo is designing article posts for the organization's instagram feed. each design uses a consistent color palette and layout system, breaking information into clear, easy-to-scan sections so followers can quickly understand the content. built primarily in figma.`}</p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[normal] left-[45px] text-[19.688px] text-black top-[8200px] w-[1044px]" data-node-id="111:126" style={{ fontVariationSettings: '"wdth" 100' }}>{`each new period, i design the instagram content introducing himsisfo's board of directors across all five divisions, dpi, education, public relations, information, and human resource development, from the organizational structure slide to individual profile cards for each board member. the designs follow a consistent visual system, using bold typography and a unified color theme to keep the whole series feeling connected. figma is the main tool used throughout.`}</p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[normal] left-[47px] text-[19.688px] text-black top-[9098px] w-[1044px]" data-node-id="97:92" style={{ fontVariationSettings: '"wdth" 100' }}>{`throughout my time at himsisfo, i've designed for a range of work programs, from welcoming party and farewell party and yearbook, to gerak, bridge, ldkcp, and balon. each event gets its own visual identity, from logos, virtual backgrounds, and posters, to video bumpers and video-format twibbons, all while staying true to himsisfo's overall branding. figma has been the main tool throughout.`}</p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[normal] left-[47px] text-[19.688px] text-black top-[10165px] w-[1044px]" data-node-id="116:146" style={{ fontVariationSettings: '"wdth" 100' }}>{`as part of an initiative aligned with sdg 2, zero hunger, my friends and i came together to prepare handmade food from scratch, then went out and distributed it directly to people in need on the street. it was a small effort, but one meant to make sure that at least for that day, someone who might otherwise go without a meal didn't have to.`}</p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[normal] left-[48px] text-[19.688px] text-black top-[11002px] w-[1044px]" data-node-id="118:13" style={{ fontVariationSettings: '"wdth" 100' }}>
        this outreach took me to two different orphanages, each with its own way of giving back. at the first, i helped build a hydroponic planting setup using pvc pipes, giving the kids a small, sustainable way to grow their own food. at the second, we brought books for the children to read, hoping to spark a bit more curiosity and love for learning.
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[normal] left-[48px] text-[19.688px] text-black top-[11771px] w-[1044px]" data-node-id="121:23" style={{ fontVariationSettings: '"wdth" 100' }}>
        alongside a lecturer, i took part in teaching paud (early childhood education) teachers how to use microsoft word, helping them build a practical skill they could carry into their day-to-day work at school.
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[0] left-[49px] text-[19.688px] text-black top-[4404px] whitespace-nowrap" data-node-id="49:434" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="font-['SF_Pro:Medium_Italic'] font-[508] italic leading-[normal]" style={{ fontVariationSettings: '"YAXS" 436' }}>
          tools:
        </span>
        <span className="leading-[normal]">{` figma`}</span>
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[0] left-[49px] text-[19.688px] text-black top-[5397px] whitespace-nowrap" data-node-id="61:478" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="font-['SF_Pro:Medium_Italic'] font-[508] italic leading-[normal]" style={{ fontVariationSettings: '"YAXS" 436' }}>
          tools:
        </span>
        <span className="leading-[normal]">{` php, mysql, vs code, xampp`}</span>
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[0] left-[49px] text-[19.688px] text-black top-[6457px] whitespace-nowrap" data-node-id="76:15" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="font-['SF_Pro:Medium_Italic'] font-[508] italic leading-[normal]" style={{ fontVariationSettings: '"YAXS" 436' }}>
          tools:
        </span>
        <span className="leading-[normal]">{` figma, html/css, javascript`}</span>
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[0] left-[49px] text-[19.688px] text-black top-[7387px] whitespace-nowrap" data-node-id="94:76" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="font-['SF_Pro:Medium_Italic'] font-[508] italic leading-[normal]" style={{ fontVariationSettings: '"YAXS" 436' }}>
          tools:
        </span>
        <span className="leading-[normal]">{` figma`}</span>
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[0] left-[45px] text-[19.688px] text-black top-[8348px] whitespace-nowrap" data-node-id="111:127" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="font-['SF_Pro:Medium_Italic'] font-[508] italic leading-[normal]" style={{ fontVariationSettings: '"YAXS" 436' }}>
          tools:
        </span>
        <span className="leading-[normal]">{` figma`}</span>
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[0] left-[47px] text-[19.688px] text-black top-[9223px] whitespace-nowrap" data-node-id="97:93" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="font-['SF_Pro:Medium_Italic'] font-[508] italic leading-[normal]" style={{ fontVariationSettings: '"YAXS" 436' }}>
          tools:
        </span>
        <span className="leading-[normal]">{` figma, canva, alight motion`}</span>
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[normal] left-[49px] text-[58.219px] text-black top-[3716px] whitespace-nowrap" data-node-id="54:435" style={{ fontVariationSettings: '"wdth" 100' }}>
        (1) aqquas
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[normal] left-[49px] text-[58.219px] text-black top-[4543px] whitespace-nowrap" data-node-id="61:461" style={{ fontVariationSettings: '"wdth" 100' }}>
        (2) kenangin kopi
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[normal] left-[49px] text-[58.219px] text-black top-[5536px] whitespace-nowrap" data-node-id="75:13" style={{ fontVariationSettings: '"wdth" 100' }}>
        (3) gy’oreal
      </p>
      <div className="absolute drop-shadow-[0px_108px_15px_rgba(0,0,0,0),0px_69px_14px_rgba(0,0,0,0.02),0px_39px_11.5px_rgba(0,0,0,0.07),0px_17px_8.5px_rgba(0,0,0,0.12),0px_4px_5px_rgba(0,0,0,0.14)] h-[236px] left-[754px] top-[4630px] w-[477px]" data-node-id="61:471" data-name="Image frame">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[normal] left-[238.5px] text-[19.688px] text-black text-center top-[241px] whitespace-nowrap" data-node-id="61:470" style={{ fontVariationSettings: '"wdth" 100' }}>
          database kenangin kopi.png
        </p>
        <div className="absolute h-[236px] left-0 top-0 w-[477px]" data-node-id="61:459" data-name="Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[102.21%] left-0 max-w-none top-0 w-full" src={imgImage2} />
          </div>
        </div>
      </div>
      <div className="absolute h-[241px] left-[773px] top-[4912px] w-[189px]" data-node-id="61:472" data-name="Image frame">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[normal] left-[94.5px] text-[19.688px] text-black text-center top-[253px] w-[239px]" data-node-id="61:465" style={{ fontVariationSettings: '"wdth" 100' }}>
          kenangin kopi directory tree.png
        </p>
        <div className="absolute h-[242px] left-[-1px] shadow-[0px_55px_15px_0px_rgba(0,0,0,0),0px_35px_14px_0px_rgba(0,0,0,0.02),0px_20px_12px_0px_rgba(0,0,0,0.07),0px_9px_9px_0px_rgba(0,0,0,0.12),0px_2px_5px_0px_rgba(0,0,0,0.14)] top-[-1px] w-[190px]" data-node-id="61:467" data-name="Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[190.93%] left-0 max-w-none top-[-0.01%] w-full" src={imgImage3} />
          </div>
        </div>
      </div>
      <div className="absolute h-[523px] left-[49px] top-[4630px] w-[683px]" data-node-id="61:473" data-name="Image gallery frame">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[normal] left-[341px] text-[19.688px] text-black text-center top-[532px] whitespace-nowrap" data-node-id="61:464" style={{ fontVariationSettings: '"wdth" 100' }}>
          kenangin kopi preview.png
        </p>
        <div className="absolute contents left-0 top-0" data-node-id="61:457" data-name="Image gallery frame">
          <div className="absolute h-[173.714px] left-0 top-[0.18px] w-[344.374px]" data-node-id="61:437" data-name="Image">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
          </div>
          <div className="absolute h-[174.433px] left-0 top-[174.25px] w-[344.374px]" data-node-id="61:440" data-name="Image">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
          </div>
          <div className="absolute h-[174.433px] left-0 top-[348.33px] w-[344.374px]" data-node-id="61:443" data-name="Image">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
          </div>
          <div className="absolute h-[174.612px] left-[341.5px] top-[173.89px] w-[341.5px]" data-node-id="61:446" data-name="Image">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[100.84%]" src={imgImage7} />
            </div>
          </div>
          <div className="absolute h-[174.253px] left-[341.5px] top-0 w-[341.5px]" data-node-id="61:449" data-name="Image">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[100.84%]" src={imgImage8} />
            </div>
          </div>
          <div className="absolute h-[174.253px] left-[341.5px] top-[348.51px] w-[341.5px]" data-node-id="61:455" data-name="Image">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[100.84%]" src={imgImage9} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[220px] left-[1041px] top-[4933px] w-[190px]" data-node-id="61:475" data-name="Image frame">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[normal] left-[95.5px] text-[19.688px] text-black text-center top-[232px] w-[239px]" data-node-id="61:474" style={{ fontVariationSettings: '"wdth" 100' }}>
          kenangin kopi directory tree(1).png
        </p>
        <div className="absolute h-[220px] left-0 shadow-[0px_50px_14px_0px_rgba(0,0,0,0),0px_32px_13px_0px_rgba(0,0,0,0.02),0px_18px_11px_0px_rgba(0,0,0,0.07),0px_8px_8px_0px_rgba(0,0,0,0.12),0px_2px_4px_0px_rgba(0,0,0,0.14)] top-0 w-[190px]" data-node-id="61:469" data-name="Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[210.02%] left-0 max-w-none top-[-110.01%] w-full" src={imgImage3} />
          </div>
        </div>
      </div>
      <ul className="[word-break:break-word] absolute block font-['SF_Pro:Semibold'] font-[590] leading-[0] left-[49px] text-[58.219px] text-black top-[3595px] whitespace-nowrap" data-node-id="61:479" style={{ fontVariationSettings: '"wdth" 100' }}>
        <li className="list-disc ms-[87.3285px]">
          <span className="leading-[normal]">class project</span>
        </li>
      </ul>
      <ul className="[word-break:break-word] absolute block font-['SF_Pro:Semibold'] font-[590] leading-[0] left-[47px] text-[58.219px] text-black top-[9344px] whitespace-nowrap" data-node-id="111:128" style={{ fontVariationSettings: '"wdth" 100' }}>
        <li className="list-disc ms-[87.3285px]">
          <span className="leading-[normal]">community service</span>
        </li>
      </ul>
      <ul className="[word-break:break-word] absolute block font-['SF_Pro:Semibold'] font-[590] leading-[0] left-[49px] text-[58.219px] text-black top-[6578px] whitespace-nowrap" data-node-id="94:56" style={{ fontVariationSettings: '"wdth" 100' }}>
        <li className="list-disc ms-[87.3285px]">
          <span className="leading-[normal]">organization project</span>
        </li>
      </ul>
      <div className="absolute drop-shadow-[0px_368px_51.5px_rgba(0,0,0,0),0px_236px_47px_rgba(0,0,0,0.01),0px_133px_40px_rgba(0,0,0,0.05),0px_59px_29.5px_rgba(0,0,0,0.09),0px_15px_16px_rgba(0,0,0,0.1)] h-[535px] left-[49px] top-[5623px] w-[522px]" data-node-id="76:18" data-name="Image frame">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[normal] left-[261.5px] text-[19.688px] text-black text-center top-[544px] whitespace-nowrap" data-node-id="76:16" style={{ fontVariationSettings: '"wdth" 100' }}>
          gy’oreal.png
        </p>
        <div className="absolute h-[535.017px] left-0 top-0 w-[522px]" data-node-id="75:11" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
        </div>
      </div>
      <div className="absolute h-[246px] left-[654px] top-[5623px] w-[383px]" data-node-id="82:10" data-name="Image frame">
        <div className="absolute h-[246px] left-px shadow-[0px_263px_74px_0px_rgba(0,0,0,0),0px_168px_67px_0px_rgba(0,0,0,0.01),0px_95px_57px_0px_rgba(0,0,0,0.05),0px_42px_42px_0px_rgba(0,0,0,0.09),0px_11px_23px_0px_rgba(0,0,0,0.1)] top-0 w-[382px]" data-node-id="76:20" data-name="Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[100.66%] left-[-0.22%] max-w-none top-[-0.34%] w-[100.22%]" src={imgImage11} />
          </div>
        </div>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[normal] left-[192.5px] text-[19.688px] text-black text-center top-[255px] whitespace-nowrap" data-node-id="82:11" style={{ fontVariationSettings: '"wdth" 100' }}>
          gy’oreal preview.png
        </p>
      </div>
      <div className="absolute h-[246px] left-[655px] top-[5911px] w-[382px]" data-node-id="82:14" data-name="Image frame">
        <div className="absolute h-[246px] left-0 shadow-[0px_263px_74px_0px_rgba(0,0,0,0),0px_168px_67px_0px_rgba(0,0,0,0.01),0px_95px_57px_0px_rgba(0,0,0,0.05),0px_42px_42px_0px_rgba(0,0,0,0.09),0px_11px_23px_0px_rgba(0,0,0,0.1)] top-0 w-[382px]" data-node-id="78:23" data-name="Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[102.52%] left-[-0.59%] max-w-none top-[-0.69%] w-[102.14%]" src={imgImage12} />
          </div>
        </div>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[normal] left-[192px] text-[19.688px] text-black text-center top-[255px] whitespace-nowrap" data-node-id="82:15" style={{ fontVariationSettings: '"wdth" 100' }}>
          gy’oreal preview(1).png
        </p>
      </div>
      <div className="absolute flex items-center justify-center left-[1104.36px] size-[68.248px] top-[3500.36px]" data-node-id="102:27">
        <div className="flex-none rotate-[12.9deg]">
          <div className="relative size-[56.969px]" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[135.58px] size-[66.232px] top-[3514.39px]" data-node-id="102:33">
        <div className="flex-none rotate-[-57.61deg]">
          <div className="relative size-[47.99px]" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer1} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[817px] size-[139.326px] top-[3610px]" data-node-id="102:39">
        <div className="flex-none rotate-[-57.61deg]">
          <div className="relative size-[100.953px]" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer2} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1024.86px] size-[114.28px] top-[4447.36px]" data-node-id="102:45">
        <div className="flex-none rotate-[-36.84deg]">
          <div className="relative size-[81.634px]" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer3} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[-83px] size-[192.958px] top-[5382px]" data-node-id="102:57">
        <div className="flex-none rotate-[-36.84deg]">
          <div className="relative size-[137.837px]" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer4} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1066px] size-[302.337px] top-[6457px]" data-node-id="102:75">
        <div className="flex-none rotate-[-36.84deg]">
          <div className="relative size-[215.971px]" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer5} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[-155px] size-[275.617px] top-[8294px]" data-node-id="151:105">
        <div className="flex-none rotate-[160.53deg]">
          <div className="relative size-[215.971px]" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer6} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[937px] size-[96.664px] top-[7905px]" data-node-id="151:135">
        <div className="flex-none rotate-[160.53deg]">
          <div className="relative size-[75.745px]" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer7} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[4.64px] size-[88.055px] top-[6495.64px]" data-node-id="102:81">
        <div className="flex-none rotate-[-14.33deg]">
          <div className="relative size-[72.39px]" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer8} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1149.64px] size-[88.055px] top-[7599.09px]" data-node-id="151:111">
        <div className="flex-none rotate-[165.67deg]">
          <div className="relative size-[72.39px]" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer9} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[999px] size-[92.741px] top-[11442px]" data-node-id="151:177">
        <div className="flex-none rotate-[-160.06deg]">
          <div className="relative size-[72.39px]" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer10} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[-67px] size-[195.904px] top-[11844px]" data-node-id="151:183">
        <div className="flex-none rotate-[165.67deg]">
          <div className="relative size-[161.053px]" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer11} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[567px] size-[118.058px] top-[8312px]" data-node-id="151:123">
        <div className="flex-none rotate-[-167.7deg]">
          <div className="relative size-[99.199px]" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer12} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1024px] size-[353.897px] top-[9167px]" data-node-id="151:141">
        <div className="flex-none rotate-[-167.7deg]">
          <div className="relative size-[297.362px]" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer13} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[287.2px] size-[91.937px] top-[10270.2px]" data-node-id="151:165">
        <div className="flex-none rotate-[150.62deg]">
          <div className="relative size-[67.503px]" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer14} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[542px] size-[129.788px] top-[6654px]" data-node-id="102:87">
        <div className="flex-none rotate-[21.53deg]">
          <div className="relative size-[100.055px]" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer15} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[353px] size-[129.788px] top-[7397px]" data-node-id="151:117">
        <div className="flex-none rotate-[-158.47deg]">
          <div className="relative size-[100.055px]" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer16} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1055px] size-[129.788px] top-[8412px]" data-node-id="151:129">
        <div className="flex-none rotate-[-158.47deg]">
          <div className="relative size-[100.055px]" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer16} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[-37px] size-[129.788px] top-[9381px]" data-node-id="151:147">
        <div className="flex-none rotate-[-158.47deg]">
          <div className="relative size-[100.055px]" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer16} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1101px] size-[129.788px] top-[10015px]" data-node-id="151:159">
        <div className="flex-none rotate-[-158.47deg]">
          <div className="relative size-[100.055px]" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer16} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[593px] size-[219.656px] top-[9672px]" data-node-id="151:153">
        <div className="flex-none rotate-[-158.47deg]">
          <div className="relative size-[169.334px]" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer17} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1030px] size-[212.471px] top-[10489px]" data-node-id="151:171">
        <div className="flex-none rotate-[162.47deg]">
          <div className="relative size-[169.334px]" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer18} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[668px] size-[212.471px] top-[11085px]" data-node-id="151:189">
        <div className="flex-none rotate-[162.47deg]">
          <div className="relative size-[169.334px]" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer18} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1093px] size-[108.679px] top-[11877px]" data-node-id="151:195">
        <div className="flex-none rotate-[162.47deg]">
          <div className="relative size-[86.615px]" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer19} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1136px] size-[103.255px] top-[5261px]" data-node-id="102:63">
        <div className="flex-none rotate-[-107.66deg]">
          <div className="relative size-[82.195px]" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer20} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1054.15px] size-[91.441px] top-[5559.8px]" data-node-id="102:69">
        <div className="-rotate-65 flex-none">
          <div className="relative size-[68.809px]" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer21} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[542px] size-[68.617px] top-[4529px]" data-node-id="102:51">
        <div className="flex-none rotate-[-36.84deg]">
          <div className="relative size-[49.016px]" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer22} />
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[normal] left-[49px] text-[58.219px] text-black top-[6706px] whitespace-nowrap" data-node-id="94:60" style={{ fontVariationSettings: '"wdth" 100' }}>
        (1) article design
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[normal] left-[49px] text-[58.219px] text-black top-[7527px] whitespace-nowrap" data-node-id="109:111" style={{ fontVariationSettings: '"wdth" 100' }}>
        (2) organizational structure design
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[normal] left-[47px] text-[58.219px] text-black top-[8488px] whitespace-nowrap" data-node-id="96:77" style={{ fontVariationSettings: '"wdth" 100' }}>
        (3) event design
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[normal] left-[47px] text-[58.219px] text-black top-[9472px] whitespace-nowrap" data-node-id="116:142" style={{ fontVariationSettings: '"wdth" 100' }}>
        (1) food distribution outreach
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[normal] left-[47px] text-[58.219px] text-black top-[10374px] whitespace-nowrap" data-node-id="118:12" style={{ fontVariationSettings: '"wdth" 100' }}>
        (2) orphanage outreach
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[normal] left-[47px] text-[58.219px] text-black top-[11211px] whitespace-nowrap" data-node-id="120:19" style={{ fontVariationSettings: '"wdth" 100' }}>
        (3) paud teacher training
      </p>
      <div className="absolute drop-shadow-[0px_384px_54px_rgba(0,0,0,0),0px_246px_49px_rgba(0,0,0,0.01),0px_138px_41.5px_rgba(0,0,0,0.05),0px_61px_30.5px_rgba(0,0,0,0.09),0px_15px_17px_rgba(0,0,0,0.1)] h-[359px] left-[49px] top-[6798px] w-[558.125px]" data-node-id="94:69" data-name="Image Container">
        <div className="absolute h-[359px] left-0 top-0 w-[558.007px]" data-node-id="94:63" data-name="Instagram Post">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgInstagramPost} />
        </div>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[normal] left-[calc(50%+0.41px)] text-[19.69px] text-black text-center top-[calc(50%+186.2px)] whitespace-nowrap" data-node-id="94:70" style={{ fontVariationSettings: '"wdth" 100' }}>
          himsisfo_binus intagram.png
        </p>
      </div>
      <div className="absolute drop-shadow-[0px_398px_56px_rgba(0,0,0,0),0px_255px_51px_rgba(0,0,0,0.01),0px_143px_43px_rgba(0,0,0,0.05),0px_64px_32px_rgba(0,0,0,0.09),0px_16px_17.5px_rgba(0,0,0,0.1)] h-[359px] left-[648px] top-[6798px] w-[579.187px]" data-node-id="94:72" data-name="Image Container">
        <div className="absolute h-[359.308px] left-[-0.96px] top-0 w-[579.647px]" data-node-id="94:68" data-name="article himsis 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArticleHimsis1} />
        </div>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[normal] left-[calc(50%+1.26px)] text-[18.847px] text-black text-center top-[calc(50%+186.2px)] whitespace-nowrap" data-node-id="94:73" style={{ fontVariationSettings: '"wdth" 100' }}>
          article design draft.png
        </p>
      </div>
      <div className="absolute bg-[#7a7a7a] drop-shadow-[0px_384px_53.5px_rgba(0,0,0,0),0px_246px_49px_rgba(0,0,0,0.01),0px_138px_41.5px_rgba(0,0,0,0.05),0px_61px_30.5px_rgba(0,0,0,0.09),0px_15px_17px_rgba(0,0,0,0.1)] h-[408.342px] left-[47px] top-[8585px] w-[558px]" data-node-id="97:89" data-name="Image Container">
        <div className="absolute contents left-[31.15px] top-[39.28px]" data-node-id="97:88" data-name="Logo Container">
          <div className="absolute bg-[#2e2e2e] left-[31.15px] overflow-clip size-[165.233px] top-[39.28px]" data-node-id="97:79" data-name="logo balon">
            <div className="absolute h-[163.065px] left-0 top-0 w-[165.233px]" data-node-id="97:78" data-name="logo balon 2 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoBalon21} />
            </div>
          </div>
          <div className="absolute bg-white left-[196.38px] overflow-clip size-[165.233px] top-[39.28px]" data-node-id="97:84" data-name="logo wp">
            <div className="absolute left-0 size-[165.233px] top-0" data-node-id="97:83" data-name="logo wp 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoWp1} />
            </div>
          </div>
          <div className="absolute bg-white left-[113.77px] overflow-clip size-[165.233px] top-[204.51px]" data-node-id="97:85" data-name="logo bridge">
            <div className="absolute left-[-0.05px] size-[165.233px] top-0" data-node-id="97:80" data-name="logo bridge 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoBridge1} />
            </div>
          </div>
          <div className="absolute bg-white left-[361.62px] overflow-clip size-[165.233px] top-[39.28px]" data-node-id="97:86" data-name="logo gerak">
            <div className="absolute left-0 size-[165.233px] top-0" data-node-id="97:81" data-name="Logo gerak 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoGerak1} />
            </div>
          </div>
          <div className="absolute bg-white left-[279px] overflow-clip size-[165.233px] top-[204.51px]" data-node-id="97:87" data-name="logo ldkcp">
            <div className="absolute left-0 size-[165.233px] top-0" data-node-id="97:82" data-name="logo ldkcp 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoLdkcp1} />
            </div>
          </div>
        </div>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[normal] left-[calc(50%+1.12px)] text-[19.69px] text-black text-center top-[calc(50%+214.57px)] whitespace-nowrap" data-node-id="97:90" style={{ fontVariationSettings: '"wdth" 100' }}>{`what logo i've made.png`}</p>
      </div>
      <div className="absolute drop-shadow-[0px_295px_41.5px_rgba(0,0,0,0),0px_189px_38px_rgba(0,0,0,0.01),0px_106px_32px_rgba(0,0,0,0.05),0px_47px_23.5px_rgba(0,0,0,0.09),0px_12px_13px_rgba(0,0,0,0.1)] h-[408px] left-[699px] top-[8585px] w-[429.195px]" data-node-id="109:110" data-name="Image Container">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[normal] left-[calc(50%+0.4px)] text-[19.69px] text-black text-center top-[calc(50%+215px)] whitespace-nowrap" data-node-id="104:100" style={{ fontVariationSettings: '"wdth" 100' }}>
          what design i’ve made.png
        </p>
        <div className="absolute aspect-[2940/2080] left-0 right-[-0.81px] top-0" data-node-id="105:102" data-name="buklet fpyb 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBukletFpyb1} />
        </div>
        <div className="absolute h-[104px] left-0 top-[304px] w-[73px]" data-node-id="98:100" data-name="Sticker Pack Gerak 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStickerPackGerak1} />
        </div>
        <div className="absolute h-[104px] left-[73px] top-[304px] w-[59px]" data-node-id="98:101" data-name="bingo wp 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBingoWp1} />
        </div>
        <div className="absolute h-[104px] left-[190px] top-[304px] w-[73px]" data-node-id="98:102" data-name="POSTER BRIDGE 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPosterBridge1} />
        </div>
        <div className="absolute h-[104px] left-[131px] top-[304px] w-[59px]" data-node-id="99:103" data-name="igs 7 days to go balon 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIgs7DaysToGoBalon1} />
        </div>
        <div className="absolute h-[104px] left-[263px] top-[304px] w-[83px]" data-node-id="105:105" data-name="Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[100.44%] left-0 max-w-none top-[-0.44%] w-full" src={imgImage13} />
          </div>
        </div>
        <div className="absolute h-[104px] left-[346px] top-[304px] w-[84px]" data-node-id="109:108" data-name="poster  workshop 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPosterWorkshop1} />
        </div>
      </div>
      <div className="absolute bg-white drop-shadow-[0px_450px_63px_rgba(0,0,0,0),0px_288px_57.5px_rgba(0,0,0,0.01),0px_162px_48.5px_rgba(0,0,0,0.05),0px_72px_36px_rgba(0,0,0,0.09),0px_18px_20px_rgba(0,0,0,0.1)] h-[446.339px] left-[47px] top-[7649px] w-[654px]" data-node-id="111:123" data-name="Image Container">
        <div className="absolute h-[446.339px] left-0 overflow-clip top-0 w-[654px]" data-node-id="111:124" data-name="Image Container">
          <div className="absolute h-[472.629px] left-0 top-[-26.29px] w-[218px]" data-node-id="110:113" data-name="Image">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage14} />
          </div>
          <div className="absolute h-[472.629px] left-[218px] top-[-26.29px] w-[218px]" data-node-id="111:116" data-name="Image">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage15} />
          </div>
          <div className="absolute h-[472.629px] left-[436px] top-[-26.29px] w-[218px]" data-node-id="111:119" data-name="Image">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage16} />
          </div>
        </div>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[normal] left-[calc(50%+0.5px)] text-[19.69px] text-black text-center top-[calc(50%+238.83px)] whitespace-nowrap" data-node-id="111:125" style={{ fontVariationSettings: '"wdth" 100' }}>
          himsisfo_binus ig feeds.png
        </p>
      </div>
      <div className="absolute drop-shadow-[0px_338px_47.5px_rgba(0,0,0,0),0px_216px_43px_rgba(0,0,0,0.01),0px_122px_36.5px_rgba(0,0,0,0.05),0px_54px_27px_rgba(0,0,0,0.09),0px_14px_15px_rgba(0,0,0,0.1)] h-[491px] left-[48px] top-[9569px] w-[367px]" data-node-id="116:144" data-name="Image Container">
        <div className="absolute h-[491px] left-[-1px] top-0 w-[368px]" data-node-id="116:131" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage17} />
        </div>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[normal] left-[calc(50%-0.5px)] text-[19.69px] text-black text-center top-[calc(50%+253.5px)] whitespace-nowrap" data-node-id="116:143" style={{ fontVariationSettings: '"wdth" 100' }}>
          activity dump.png
        </p>
      </div>
      <div className="absolute drop-shadow-[0px_391px_54.5px_rgba(0,0,0,0),0px_250px_50px_rgba(0,0,0,0.01),0px_141px_42px_rgba(0,0,0,0.05),0px_63px_31.5px_rgba(0,0,0,0.09),0px_16px_17px_rgba(0,0,0,0.1)] h-[426px] left-[307px] top-[10471px] w-[568px]" data-node-id="118:17" data-name="Image Container">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[normal] left-1/2 text-[19.69px] text-black text-center top-[calc(50%+223px)] whitespace-nowrap" data-node-id="118:15" style={{ fontVariationSettings: '"wdth" 100' }}>
          activity dump(2).png
        </p>
        <div className="absolute h-[425.979px] left-[0.03px] top-[0.07px] w-[567.972px]" data-node-id="116:140" data-name="WhatsApp Image 2026-09-26 at 23.06.58 (1) 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhatsAppImage20260926At23065811} />
        </div>
      </div>
      <div className="absolute drop-shadow-[0px_293px_41px_rgba(0,0,0,0),0px_188px_37.5px_rgba(0,0,0,0.01),0px_106px_31.5px_rgba(0,0,0,0.05),0px_47px_23.5px_rgba(0,0,0,0.09),0px_12px_13px_rgba(0,0,0,0.1)] h-[426px] left-[48px] top-[10471px] w-[241px]" data-node-id="118:18" data-name="Image Container">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[normal] left-[calc(50%-0.5px)] text-[19.69px] text-black text-center top-[calc(50%+223px)] whitespace-nowrap" data-node-id="118:14" style={{ fontVariationSettings: '"wdth" 100' }}>
          activity dump(1).png
        </p>
        <div className="absolute h-[425.919px] left-0 top-0 w-[240.644px]" data-node-id="116:137" data-name="WhatsApp Image 2026-09-26 at 23.06.58 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhatsAppImage20260926At2306581} />
        </div>
      </div>
      <div className="absolute drop-shadow-[0px_438px_61.5px_rgba(0,0,0,0),0px_280px_56px_rgba(0,0,0,0.01),0px_158px_47.5px_rgba(0,0,0,0.05),0px_70px_35px_rgba(0,0,0,0.09),0px_18px_19.5px_rgba(0,0,0,0.1)] h-[357px] left-[47px] top-[11309px] w-[636px]" data-node-id="121:22" data-name="Image Container">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[normal] left-[calc(50%+0.5px)] text-[19.69px] text-black text-center top-[calc(50%+189.5px)] whitespace-nowrap" data-node-id="121:21" style={{ fontVariationSettings: '"wdth" 100' }}>
          activity dump(3).png
        </p>
        <div className="absolute h-[358px] left-0 top-[-1px] w-[637px]" data-node-id="116:134" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage18} />
        </div>
      </div>
      <div className="absolute contents left-[295px] top-[11974px]" data-node-id="146:26" data-name="Section Header">
        <div className="absolute bg-[rgba(0,111,255,0.27)] h-[79px] left-[732px] top-[11992px] w-[256px]" data-node-id="146:22" data-name="Section Header Background" />
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold'] font-[590] h-[72px] justify-center leading-[0] left-[640px] text-[96px] text-black text-center top-[12010px] w-[690px]" data-node-id="146:15" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p>
            <span className="leading-[23.189px]">{`where i’ve `}</span>
            <span className="[word-break:break-word] font-['PP_Mondwest:Regular'] leading-[23.189px] not-italic">grown</span>
          </p>
        </div>
        <div className="absolute flex h-[96px] items-center justify-center left-[988px] top-[11992px] w-0" data-node-id="146:23">
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[96px]">
              <div className="absolute inset-[-6.49px_-6.76%_-6.49px_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine3} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[97px] items-center justify-center left-[732px] top-[11974px] w-0" data-node-id="146:24">
          <div className="-rotate-90 -scale-y-100 flex-none">
            <div className="h-0 relative w-[97px]">
              <div className="absolute inset-[-6.49px_-6.69%_-6.49px_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine4} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-white h-[2090px] left-[calc(50%-232.5px)] overflow-clip rounded-[29.435px] shadow-[0px_485.681px_135.557px_0px_rgba(0,0,0,0),0px_310.619px_123.938px_0px_rgba(0,0,0,0.02),0px_175.062px_104.573px_0px_rgba(0,0,0,0.07),0px_77.461px_77.461px_0px_rgba(0,0,0,0.12),0px_19.365px_42.604px_0px_rgba(0,0,0,0.14)] top-[12141px] w-[719px]" data-node-id="146:27" data-name="Folder Container">
        <div className="absolute bg-[#e6e6e6] h-[53px] left-0 top-0 w-[878px]" data-node-id="146:28" data-name="Navigation Container">
          <div className="absolute inset-[32.14%_83.03%_35.71%_12.98%]" data-node-id="146:29" data-name="Navigation Icon Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNavigationIconContainer2} />
          </div>
          <div className="absolute inset-[32.14%_58.57%_35.72%_39.49%]" data-node-id="146:32" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector15} />
          </div>
          <div className="absolute inset-[32.14%_53.4%_35.72%_44.66%]" data-node-id="146:33" data-name="Vector">
            <div className="absolute inset-[-3.32%]">
              <img alt="" className="block max-w-none size-full" src={imgVector16} />
            </div>
          </div>
          <div className="absolute inset-[32.14%_20.96%_35.72%_77.1%]" data-node-id="146:34" data-name="Vector">
            <div className="absolute inset-[-3.32%]">
              <img alt="" className="block max-w-none size-full" src={imgVector17} />
            </div>
          </div>
          <div className="absolute inset-[32.14%_48.23%_35.72%_49.83%]" data-node-id="146:35" data-name="Vector">
            <div className="absolute inset-[-3.32%]">
              <img alt="" className="block max-w-none size-full" src={imgVector18} />
            </div>
          </div>
          <div className="absolute inset-[32.14%_43.5%_35.72%_55.01%]" data-node-id="146:36" data-name="Vector">
            <div className="absolute inset-[-3.32%_-4.32%]">
              <img alt="" className="block max-w-none size-full" src={imgVector19} />
            </div>
          </div>
          <div className="absolute content-stretch flex gap-[6.972px] inset-[35.71%_88.79%_39.29%_3.88%] items-center pr-[6.197px]" data-node-id="146:37" data-name="Window Controls/Standard">
            <div className="bg-[#ff5c60] border-[0.387px] border-[rgba(0,0,0,0.12)] border-solid relative rounded-[100px] shrink-0 size-[10.845px]" data-node-id="I146:37;177:9888" data-name="Close" />
            <div className="bg-[#fac800] border-[0.387px] border-[rgba(0,0,0,0.12)] border-solid relative rounded-[77.461px] shrink-0 size-[10.845px]" data-node-id="I146:37;177:9889" data-name="Minimize" />
            <div className="bg-[#35c759] border-[0.387px] border-[rgba(0,0,0,0.12)] border-solid relative rounded-[77.461px] shrink-0 size-[10.845px]" data-node-id="I146:37;177:9890" data-name="Zoom" />
          </div>
          <div className="absolute inset-[32.14%_35.18%_35.72%_60.89%]" data-node-id="146:38" data-name="Navigation Icon Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNavigationIconContainer3} />
          </div>
          <div className="absolute inset-[32.14%_30.14%_35.52%_68.11%]" data-node-id="146:41" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector20} />
          </div>
          <div className="absolute bottom-[35.72%] left-[73.06%] right-1/4 top-[32.14%]" data-node-id="146:42" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector21} />
          </div>
        </div>
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro_Display:Regular'] justify-center leading-[0] left-[51px] not-italic text-[51.69px] text-black top-[252px] tracking-[-1.5507px] whitespace-nowrap" data-node-id="147:87">
          <p className="leading-[0.804]">2025</p>
        </div>
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro_Display:Regular'] justify-center leading-[0] left-[51px] not-italic text-[51.69px] text-black top-[1089px] tracking-[-1.5507px] whitespace-nowrap" data-node-id="148:89">
          <p className="leading-[0.804]">2026</p>
        </div>
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro_Display:Regular'] justify-center leading-[0] left-[90px] not-italic text-[32px] text-black top-[648px] tracking-[-0.96px] w-[577px]" data-node-id="147:88">
          <ul className="mb-0">
            <li className="list-disc ms-[48px]">
              <span className="leading-[normal]">active member of information commision</span>
            </li>
          </ul>
          <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
          <ul className="mb-0">
            <li className="list-disc ms-[48px]">
              <span className="leading-[normal]">staff of event division - COMPANY VISIT HIMSISFO 2025: ADIWIDIA</span>
            </li>
          </ul>
          <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
          <ul className="mb-0">
            <li className="list-disc ms-[48px]">
              <span className="leading-[normal]">{`coordinator of publications& documentation division - EXPO & WELCOMING PARTY HIMSISFO 2025: VENTURE`}</span>
            </li>
          </ul>
          <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
          <ul className="mb-0">
            <li className="list-disc ms-[48px]">
              <span className="leading-[normal]">{`coordinator of logistics & equipment division - SELCAVIS HIMSISFO 2025: PRODIGI`}</span>
            </li>
          </ul>
          <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
          <ul className="mb-0">
            <li className="list-disc ms-[48px]">
              <span className="leading-[normal]">vice coordinator of support division - IMMERSION HIMSISFO 2025: NEXT</span>
            </li>
          </ul>
          <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
          <ul>
            <li className="list-disc ms-[48px]">
              <span className="leading-[normal]">{`staff of publications & documentation division - FPYB HIMSISFO 2026: FILM`}</span>
            </li>
          </ul>
        </div>
        <div className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[0] left-[90px] not-italic text-[32px] text-black top-[1124px] tracking-[-0.96px] w-[577px]" data-node-id="148:90">
          <ul className="mb-0">
            <li className="list-disc ms-[48px]">
              <span className="leading-[normal]">coordinator of information commision</span>
            </li>
          </ul>
          <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
          <ul className="mb-0">
            <li className="list-disc ms-[48px]">
              <span className="leading-[normal]">vice coordinator of publication and documentation division - GERAK HIMSISFO 2026: VIBEZ</span>
            </li>
          </ul>
          <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
          <ul className="mb-0">
            <li className="list-disc ms-[48px] whitespace-pre-wrap">
              <span className="leading-[normal]">{`coordinator of publication and documentation  division - LDKCP HIMSISFO 2026: LUNAR`}</span>
            </li>
          </ul>
          <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
          <ul className="mb-0">
            <li className="list-disc ms-[48px]">
              <span className="leading-[normal]">coordinator of publication and documentation division - BALON HIMSISFO 2026: NOVA</span>
            </li>
          </ul>
          <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
          <ul className="mb-0">
            <li className="list-disc ms-[48px]">
              <span className="leading-[normal]">vice coordinator of publication and documentation division - BRIDGE HIMSISFO 2026: ENSO</span>
            </li>
          </ul>
          <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
          <ul className="mb-0">
            <li className="list-disc ms-[48px]">
              <span className="leading-[normal]">advisory board of SELCAVIS HIMSISFO 2026: EVOLVE</span>
            </li>
          </ul>
          <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
          <ul>
            <li className="list-disc ms-[48px]">
              <span className="leading-[normal]">advisory board of FPYB HIMSISFO 2027: ARCHIVE</span>
            </li>
          </ul>
        </div>
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Medium'] font-[510] justify-center leading-[0] left-[calc(50%-261.5px)] text-[66.933px] text-black top-[132px] tracking-[-2.008px] whitespace-nowrap" data-node-id="149:91" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">organizational roles</p>
        </div>
      </div>
      <div className="absolute flex h-[254px] items-center justify-center left-[812px] top-[12194px] w-[412.588px]" data-node-id="149:92">
        <div className="flex-none rotate-[4.59deg]">
          <div className="h-[223px] relative rounded-[8px] shadow-[0px_4px_11.8px_0px_rgba(0,0,0,0.54)] w-[396px]" data-name="DSCF3026 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgDscf30261} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[198.331px] items-center justify-center left-[840.27px] top-[12401px] w-[343.99px]" data-node-id="149:93">
        <div className="flex-none rotate-[-1.17deg]">
          <div className="h-[191.416px] relative rounded-[8px] shadow-[0px_4px_11.8px_0px_rgba(0,0,0,0.54)] w-[340.148px]" data-name="DSCF3026 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgDscf30262} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[223.222px] items-center justify-center left-[818.83px] top-[12587px] w-[394.235px]" data-node-id="149:94">
        <div className="flex-none rotate-[-0.29deg]">
          <div className="h-[221.222px] relative rounded-[8px] shadow-[0px_4px_11.8px_0px_rgba(0,0,0,0.54)] w-[393.113px]" data-name="DSCF3026 3">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgDscf30263} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[207.845px] items-center justify-center left-[834px] top-[12782.86px] w-[350.134px]" data-node-id="149:95">
        <div className="flex-none rotate-[2.65deg]">
          <div className="h-[192.233px] relative rounded-[8px] shadow-[0px_4px_11.8px_0px_rgba(0,0,0,0.54)] w-[341.599px]" data-name="DSCF3026 4">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgDscf30264} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[225.096px] items-center justify-center left-[810px] top-[12968.86px] w-[397.192px]" data-node-id="149:96">
        <div className="flex-none rotate-[-0.33deg]">
          <div className="h-[222.789px] relative rounded-[8px] shadow-[0px_4px_11.8px_0px_rgba(0,0,0,0.54)] w-[395.898px]" data-name="DSCF3026 5">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgDscf30265} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[228.71px] items-center justify-center left-[819px] top-[13163px] w-[377.933px]" data-node-id="150:97">
        <div className="flex-none rotate-[3.68deg]">
          <div className="h-[205.675px] relative rounded-[8px] shadow-[0px_4px_11.8px_0px_rgba(0,0,0,0.54)] w-[365.485px]" data-name="DSCF3026 6">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgDscf30266} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[248.26px] items-center justify-center left-[793px] top-[13350.98px] w-[419.901px]" data-node-id="151:103">
        <div className="flex-none rotate-[-2.44deg]">
          <div className="h-[231px] relative rounded-[8px] shadow-[0px_4px_11.8px_0px_rgba(0,0,0,0.54)] w-[410.442px]" data-name="DSCF3026 9">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgDscf30269} />
          </div>
        </div>
      </div>
      <div className="absolute h-[205px] left-[827px] rounded-[8px] shadow-[0px_4px_11.8px_0px_rgba(0,0,0,0.54)] top-[13572px] w-[364.286px]" data-node-id="150:98" data-name="DSCF3026 7">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgDscf30267} />
      </div>
      <div className="absolute flex h-[249.853px] items-center justify-center left-[796.31px] top-[13738.42px] w-[421.981px]" data-node-id="151:102">
        <div className="flex-none rotate-[-2.52deg]">
          <div className="h-[231.951px] relative rounded-[8px] shadow-[0px_4px_11.8px_0px_rgba(0,0,0,0.54)] w-[412.179px]" data-name="DSCF3026 8">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgDscf30268} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[235.99px] items-center justify-center left-[816px] top-[13960px] w-[395.768px]" data-node-id="151:104">
        <div className="flex-none rotate-[2.89deg]">
          <div className="h-[216.84px] relative rounded-[8px] shadow-[0px_4px_11.8px_0px_rgba(0,0,0,0.54)] w-[385.327px]" data-name="DSCF3026 10">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgDscf302610} />
          </div>
        </div>
      </div>
      <div className="absolute left-[1159px] size-[53px] top-[490px]" data-node-id="151:205" data-name="image 25 [Vectorized]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgImage25Vectorized} />
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular'] font-normal justify-center leading-[0] left-[978px] text-[#323234] text-[35.89px] top-[518.5px] tracking-[-1.0767px] whitespace-nowrap" data-node-id="151:204" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[0.804]">@kellvinn.__</p>
      </div>
      <div className="[text-shadow:0px_8px_16px_rgba(8,28,80,0.32)] [word-break:break-word] absolute contents font-['SF_Pro:Semibold'] font-[590] leading-[normal] left-[308px] text-[#084bcf] text-[121.234px] top-[14592px] whitespace-nowrap" data-node-id="166:19" data-name="Header Frame">
        <p className="absolute left-[308px] top-[14592px]" data-node-id="164:16" style={{ fontVariationSettings: '"wdth" 100' }}>
          get in
        </p>
        <p className="absolute left-[526.47px] top-[14708.18px]" data-node-id="164:18" style={{ fontVariationSettings: '"wdth" 100' }}>
          ( touch )
        </p>
      </div>
      <div className="absolute bg-white h-[482.874px] left-[812px] overflow-clip rounded-[25.162px] shadow-[0px_4px_20.2px_0px_rgba(0,0,0,0.27)] top-[14993px] w-[399px]" data-node-id="171:30" data-name="Photo Share Container">
        <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[normal] left-[153px] text-[26.777px] text-black top-[25px] whitespace-nowrap" data-node-id="171:31" style={{ fontVariationSettings: '"wdth" 100' }}>
          AirDrop
        </p>
        <div className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[0] left-[199.5px] text-[18.088px] text-black text-center top-[71px] whitespace-nowrap" data-node-id="172:32" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal] mb-0">“kellvin” would like to share</p>
          <p className="leading-[normal]">a photo</p>
        </div>
        <div className="absolute bg-[#ff0909] h-[276px] left-0 overflow-clip top-[129px] w-[399px]" data-node-id="172:33" data-name="Shared Photo">
          <div className="absolute h-[696px] left-[-17px] top-[-243px] w-[463.887px]" data-node-id="172:39" data-name="WhatsApp Image 2026-09-29 at 15.54.07 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhatsAppImage20260929At1554071} />
          </div>
        </div>
        <div className="[word-break:break-word] absolute contents leading-[normal] left-[62px] text-[26.777px] top-[429px] whitespace-nowrap" data-node-id="172:36" data-name="Response Container">
          <p className="absolute font-['SF_Pro:Regular'] font-normal left-[62px] text-[#5186ba] top-[429px]" data-node-id="172:34" style={{ fontVariationSettings: '"wdth" 100' }}>
            Decline
          </p>
          <p className="absolute font-['SF_Pro:Semibold'] font-[590] left-[250px] text-[#249af2] top-[429px]" data-node-id="172:35" style={{ fontVariationSettings: '"wdth" 100' }}>
            Accept
          </p>
        </div>
        <div className="-translate-x-1/2 absolute h-[79px] left-[calc(50%-0.5px)] top-[405px] w-0" data-node-id="172:37">
          <div className="absolute inset-[0_-0.5px]">
            <img alt="" className="block max-w-none size-full" src={imgVector22} />
          </div>
        </div>
      </div>
      <div className="[text-shadow:0px_5px_10px_rgba(8,28,80,0.28)] [word-break:break-word] absolute contents font-['SF_Pro:Semibold'] font-[590] left-[87px] text-[#084bcf] text-[48.713px] top-[15061px] whitespace-nowrap" data-node-id="177:22" data-name="Contact Info">
        <p className="absolute leading-[normal] left-[87px] top-[15061px]" data-node-id="172:41" style={{ fontVariationSettings: '"wdth" 100' }}>
          kellvin1793@gmail.com
        </p>
        <p className="absolute leading-[normal] left-[87px] top-[15152.04px]" data-node-id="172:42" style={{ fontVariationSettings: '"wdth" 100' }}>
          +6282246356568
        </p>
        <p className="absolute leading-[normal] left-[87px] top-[15334.13px]" data-node-id="177:21" style={{ fontVariationSettings: '"wdth" 100' }}>
          @kellvinn__
        </p>
        <a className="absolute block leading-[0] left-[87px] top-[15243.09px]" href="https://www.linkedin.com/in/kellvinn/" data-node-id="177:20" style={{ fontVariationSettings: '"wdth" 100' }} target="_blank">
          <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[normal] underline">linkedin.com/in/kellvinn/</p>
        </a>
      </div>
    </div>
  );
}

export default function App() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => setScale(window.innerWidth / CANVAS_WIDTH);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div
      className="flex w-full justify-center overflow-x-hidden bg-[#fefff2]"
      style={{ minHeight: "100dvh" }}
    >
      {/* Use CSS `zoom` rather than `transform: scale()`. Scaling this
          1280×15632px canvas via transform rasterizes it into a single GPU
          layer that, at 2× DPR, exceeds the max texture size and gets
          downsampled — making every image and glyph look soft. `zoom` reflows
          and re-rasterizes at the target size, so content stays crisp. */}
      <div style={{ zoom: scale, width: CANVAS_WIDTH }}>
        <Canvas />
      </div>
    </div>
  );
}

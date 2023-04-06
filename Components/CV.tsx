import React, {FunctionComponent, useEffect, useRef, useState} from 'react';
import {Page, pdfjs, Document as PDF} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

interface OwnProps {}

type Props = OwnProps;

const CV: FunctionComponent<Props> = (props) => {
    const [windowSize, setWindowSize] = useState(window.innerWidth
    );

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });
    function handleWidthOfPdf(width: number){
        console.log(width)
        if(width <= 540) {
            return 0.8 * width;
        }else if(width <= 768) {
            return 540;
        }else if(width <= 1024) {
            return 740;
        }else if(width <= 1280) {
            return 840;
        }else{
            return undefined;
        }
    }

    return (
      <div className={"w-screen flex justify-center"}>
          <div className={"container "}>
              <PDF file={'/cv/CV_julian.pdf'} className={"flex justify-center 2xl:flex-row flex-col"}>
                      <Page pageNumber={1} className={"border-2 border-black 2xl:mr-5 mr-0 2xl:mb-0 mb-5 self-center"} width={handleWidthOfPdf(windowSize)}/>
                      <Page pageNumber={2} className={"border-2 border-black 2xl:ml-5 ml-0 2xl:mt-0 mt-5 self-center"} width={handleWidthOfPdf(windowSize)}/>
              </PDF>
          </div>
      </div>);
};

export default CV;

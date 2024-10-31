import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { PlanCard } from './components/PlanCard';
import { PlanForm } from './components/PlanForm';
import html2canvas from 'html2canvas';
import type { PlanDetails } from './components/PlanCard';

const defaultPlanDetails: PlanDetails = {
  phoneNumber: "050786787",
  planName: "Freedom Data Plan 500 Flexi",
  localData: "Unlimited",
  speed: "Full Speed",
  speedOriginal: "Up to 20Mbps",
  speedDuration: "12 months",
  flexiMinutes: "1500",
  roamingData: "10GB",
  promotionTitle: "Exclusive Promotion",
  promotionOffer1: "25% off for 6 months**",
  promotionOffer2: "Choose your own gift*",
  price: "500",
  vatText: "5% VAT excluded",
  commitmentText: "12-month commitment",
  goldNumberLabel: "Gold number",
  localDataLabel: "Local Data",
  speedLabel: "Speed",
  flexiMinutesLabel: "Flexi minutes",
  roamingDataLabel: "Roaming Data",
  numberType: "gold"
};

function App() {
  const [planDetails, setPlanDetails] = useState<PlanDetails>(defaultPlanDetails);
  const posterRef = useRef<HTMLDivElement>(null);

  const downloadPoster = async () => {
    if (posterRef.current) {
      try {
        // Wait for images to load
        const images = posterRef.current.getElementsByTagName('img');
        await Promise.all(Array.from(images).map(img => {
          if (img.complete) return Promise.resolve();
          return new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
          });
        }));

        // Capture the poster
        const canvas = await html2canvas(posterRef.current, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: null,
          imageTimeout: 0,
          logging: false,
          onclone: (clonedDoc) => {
            const element = clonedDoc.querySelector('[data-html2canvas-ignore]');
            if (element) {
              element.remove();
            }
          }
        });
        
        // Convert and download
        const image = canvas.toDataURL('image/png', 1.0);
        const link = document.createElement('a');
        link.href = image;
        link.download = 'plan-poster.png';
        link.click();
      } catch (error) {
        console.error('Error generating poster:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-50 via-gray-100 to-gray-200 py-4 px-2">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 items-start justify-center">
          <div className="w-full lg:w-auto">
            <PlanForm 
              details={planDetails} 
              onChange={setPlanDetails} 
            />
            <div className="mt-4 flex justify-center">
              <Button 
                onClick={downloadPoster}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Download Poster
              </Button>
            </div>
          </div>
          
          <div ref={posterRef} className="flex items-center justify-center p-4">
            <PlanCard details={planDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
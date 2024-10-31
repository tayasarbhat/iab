import { useState, useRef } from 'react';
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
        // Preload the logo image
        await new Promise((resolve) => {
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.onload = resolve;
          img.src = "https://backup.xadtechnologies.com/wp-content/uploads/2022/10/Eti-New-logo.png";
        });

        const canvas = await html2canvas(posterRef.current, {
          scale: 2,
          backgroundColor: null,
          useCORS: true,
          allowTaint: true,
          imageTimeout: 0,
          logging: false,
          onclone: (clonedDoc) => {
            // Ensure gradients and effects are preserved
            const styles = document.createElement('style');
            styles.innerHTML = `
              .bg-gradient-to-r { background: linear-gradient(to right, var(--tw-gradient-stops)); }
              .bg-gradient-to-br { background: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
              .bg-gradient-to-b { background: linear-gradient(to bottom, var(--tw-gradient-stops)); }
              .blur-2xl { filter: blur(40px); }
              .backdrop-blur-xl { backdrop-filter: blur(24px); }
              .backdrop-blur-sm { backdrop-filter: blur(4px); }
            `;
            clonedDoc.head.appendChild(styles);
          }
        });
        
        // Convert and download with maximum quality
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
              <button 
                onClick={downloadPoster}
                className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Download Poster
              </button>
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

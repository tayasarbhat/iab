import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { 
  Globe, 
  Gift, 
  Sparkles,
  Clock,
  Wifi,
  PhoneCall,
  Globe2
} from "lucide-react";

export type NumberType = 'gold' | 'silver';

export type PlanDetails = {
  phoneNumber: string;
  planName: string;
  localData: string;
  speed: string;
  speedOriginal: string;
  speedDuration: string;
  flexiMinutes: string;
  roamingData: string;
  promotionTitle: string;
  promotionOffer1: string;
  promotionOffer2: string;
  price: string;
  vatText: string;
  commitmentText: string;
  goldNumberLabel: string;
  localDataLabel: string;
  speedLabel: string;
  flexiMinutesLabel: string;
  roamingDataLabel: string;
  numberType: NumberType;
};

const numberTypeStyles = {
  gold: {
    badge: "from-amber-100 to-amber-200 text-amber-700 hover:from-amber-200 hover:to-amber-300",
    icon: "text-amber-600"
  },
  silver: {
    badge: "from-gray-100 to-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300",
    icon: "text-gray-600"
  }
};

function PlanFeature({ label, value, icon: Icon }: { label: string; value: string; icon: any }) {
  if (!value || !label) return null;
  
  return (
    <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-emerald-50 to-blue-50 p-2 transition-all hover:shadow-md h-[72px]">
      <div className="space-y-0.5">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Icon className="h-3.5 w-3.5 text-emerald-600" />
          <p className="text-xs font-medium">{label}</p>
        </div>
        <p className="text-base font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
          {value}
        </p>
      </div>
    </div>
  );
}

export function PlanCard({ details }: { details: PlanDetails }) {
  const typeStyles = numberTypeStyles[details.numberType];
  
  return (
    <div className="relative w-full max-w-[380px]">
      <div className="absolute -inset-1.5 bg-gradient-to-r from-red-500 to-amber-500 opacity-20 blur-2xl -z-10" />
      <div className="absolute -inset-1.5 bg-gradient-to-b from-blue-500 to-purple-500 opacity-20 blur-2xl -z-10 animate-pulse" />
      
      <div className="relative rounded-xl p-[2px] bg-gradient-to-br from-red-500 via-amber-500 to-red-500">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/90 to-white/40 backdrop-blur-xl" />
        <Card className="relative border-0 shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm bg-white/95">
          <CardHeader className="space-y-2 pb-2">
            {details.phoneNumber && (
              <div className="flex items-center justify-between gap-2 animate-fade-in">
                <div className="flex flex-col gap-1 flex-shrink">
                  <Badge variant="secondary" className={`bg-gradient-to-r ${typeStyles.badge} transition-all duration-300 shadow-sm text-center w-fit text-xs px-2 py-0.5`}>
                    {details.goldNumberLabel}
                  </Badge>
                  <Badge variant="secondary" className={`bg-gradient-to-r ${typeStyles.badge} transition-all duration-300 shadow-sm text-center w-fit`}>
                    <span className="text-2xl font-bold font-display">{details.phoneNumber}</span>
                  </Badge>
                </div>
                <div className="w-50 h-20 flex items-center justify-end flex-shrink-0 -mr-2">
                  <img 
                    src="https://backup.xadtechnologies.com/wp-content/uploads/2022/10/Eti-New-logo.png" 
                    alt="Etisalat Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            )}
            {details.planName && (
              <h2 className="text-lg font-bold tracking-tight bg-gradient-to-br from-gray-900 via-gray-700 to-gray-800 bg-clip-text text-transparent">
                {details.planName}
              </h2>
            )}
          </CardHeader>

          <CardContent className="space-y-3">
            <div className="grid gap-2">
              <div className="grid grid-cols-2 gap-2">
                {details.localData && (
                  <PlanFeature 
                    label={details.localDataLabel}
                    value={details.localData}
                    icon={Wifi}
                  />
                )}
                {details.speed && (
                  <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-emerald-50 to-blue-50 p-2 transition-all hover:shadow-md h-[72px]">
                    <div className="flex flex-col justify-between h-full">
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Globe2 className="h-3.5 w-3.5 text-emerald-600" />
                        <p className="text-xs font-medium">{details.speedLabel}</p>
                      </div>
                      <div className="space-y-0">
                        {details.speedOriginal && (
                          <p className="text-[10px] line-through text-gray-400 -mb-0.5">{details.speedOriginal}</p>
                        )}
                        <p className="text-base font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
                          {details.speed}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-2">
                {details.flexiMinutes && (
                  <PlanFeature 
                    label={details.flexiMinutesLabel}
                    value={details.flexiMinutes}
                    icon={PhoneCall}
                  />
                )}
                {details.roamingData && (
                  <PlanFeature 
                    label={details.roamingDataLabel}
                    value={details.roamingData}
                    icon={Globe}
                  />
                )}
              </div>
            </div>

            {(details.promotionTitle || details.promotionOffer1 || details.promotionOffer2) && (
              <div className="rounded-lg bg-gradient-to-br from-red-500 via-red-600 to-red-700 p-3 text-white space-y-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                {details.promotionTitle && (
                  <p className="text-sm font-bold flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4" />
                    {details.promotionTitle}
                  </p>
                )}
                <div className="space-y-1.5">
                  {details.promotionOffer1 && (
                    <p className="text-xs flex items-center gap-1.5 bg-white/10 p-1.5 rounded-md backdrop-blur-sm">
                      <Gift className="h-3.5 w-3.5" />
                      {details.promotionOffer1}
                    </p>
                  )}
                  {details.promotionOffer2 && (
                    <p className="text-xs flex items-center gap-1.5 bg-white/10 p-1.5 rounded-md backdrop-blur-sm">
                      <Gift className="h-3.5 w-3.5" />
                      {details.promotionOffer2}
                    </p>
                  )}
                </div>
              </div>
            )}

            {(details.price || details.commitmentText || details.vatText) && (
              <div className="space-y-1 p-2 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100">
                {details.commitmentText && (
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-gray-600" />
                    <span className="text-xs font-medium text-gray-600">{details.commitmentText}</span>
                  </div>
                )}
                {details.price && (
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 bg-clip-text text-transparent">
                      AED {details.price}
                    </span>
                    <span className="text-sm text-gray-600">/month</span>
                  </div>
                )}
                {details.vatText && (
                  <p className="text-[10px] text-gray-500">{details.vatText}</p>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { PlanDetails, NumberType } from "./PlanCard";

type PlanFormProps = {
  details: PlanDetails;
  onChange: (details: PlanDetails) => void;
};

export function PlanForm({ details, onChange }: PlanFormProps) {
  const handleChange = (field: keyof PlanDetails) => (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...details,
      [field]: e.target.value,
    });
  };

  const handleNumberTypeChange = (value: NumberType) => {
    onChange({
      ...details,
      numberType: value,
    });
  };

  return (
    <Card className="w-full max-w-[400px]">
      <CardHeader>
        <CardTitle>Edit Plan Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Number Type</Label>
          <Select value={details.numberType} onValueChange={handleNumberTypeChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select number type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gold">Gold Number</SelectItem>
              <SelectItem value="silver">Silver Number</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            id="phoneNumber"
            value={details.phoneNumber}
            onChange={handleChange("phoneNumber")}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="planName">Plan Name</Label>
          <Input
            id="planName"
            value={details.planName}
            onChange={handleChange("planName")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="localDataLabel">Local Data Label</Label>
          <Input
            id="localDataLabel"
            value={details.localDataLabel}
            onChange={handleChange("localDataLabel")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="localData">Local Data Value</Label>
          <Input
            id="localData"
            value={details.localData}
            onChange={handleChange("localData")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="speedLabel">Speed Label</Label>
          <Input
            id="speedLabel"
            value={details.speedLabel}
            onChange={handleChange("speedLabel")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="speedOriginal">Original Speed</Label>
          <Input
            id="speedOriginal"
            value={details.speedOriginal}
            onChange={handleChange("speedOriginal")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="speed">New Speed</Label>
          <Input
            id="speed"
            value={details.speed}
            onChange={handleChange("speed")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="speedDuration">Speed Duration</Label>
          <Input
            id="speedDuration"
            value={details.speedDuration}
            onChange={handleChange("speedDuration")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="flexiMinutesLabel">Flexi Minutes Label</Label>
          <Input
            id="flexiMinutesLabel"
            value={details.flexiMinutesLabel}
            onChange={handleChange("flexiMinutesLabel")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="flexiMinutes">Flexi Minutes Value</Label>
          <Input
            id="flexiMinutes"
            value={details.flexiMinutes}
            onChange={handleChange("flexiMinutes")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="roamingDataLabel">Roaming Data Label</Label>
          <Input
            id="roamingDataLabel"
            value={details.roamingDataLabel}
            onChange={handleChange("roamingDataLabel")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="roamingData">Roaming Data Value</Label>
          <Input
            id="roamingData"
            value={details.roamingData}
            onChange={handleChange("roamingData")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="promotionTitle">Promotion Title</Label>
          <Input
            id="promotionTitle"
            value={details.promotionTitle}
            onChange={handleChange("promotionTitle")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="promotionOffer1">Promotion Offer 1</Label>
          <Input
            id="promotionOffer1"
            value={details.promotionOffer1}
            onChange={handleChange("promotionOffer1")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="promotionOffer2">Promotion Offer 2</Label>
          <Input
            id="promotionOffer2"
            value={details.promotionOffer2}
            onChange={handleChange("promotionOffer2")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="commitmentText">Commitment Text</Label>
          <Input
            id="commitmentText"
            value={details.commitmentText}
            onChange={handleChange("commitmentText")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            value={details.price}
            onChange={handleChange("price")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="vatText">VAT Text</Label>
          <Input
            id="vatText"
            value={details.vatText}
            onChange={handleChange("vatText")}
          />
        </div>
      </CardContent>
    </Card>
  );
}
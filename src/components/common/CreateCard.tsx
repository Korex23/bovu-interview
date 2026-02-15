import { Card } from "../ui/card";
import { Plus } from "lucide-react";

const CreateCard = () => {
  return (
    <>
      <Card className="w-50 h-32 bg-[#F0EDFE] border-2 border-dashed border-gray-400 flex items-center justify-center">
        <div className="flex flex-col text-sm items-center justify-center gap-2 text-gray-400 font-semibold">
          <Plus />
          <span>Add New Card</span>
        </div>
      </Card>
    </>
  );
};

export default CreateCard;

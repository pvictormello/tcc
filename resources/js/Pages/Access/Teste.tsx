import { PDFViewer } from "@react-pdf/renderer";
import Report from "./Report";
import { IAccess, Role } from "@/types";

const Contact = () => {
  const access: IAccess = {
    id: 0,
    sample: "string",
    species: "string",
    variety: "string",
    country: "string",
    color: "string",
    generation: "string",
    producer_name: "string",
    coordinates: "string",
    location: "string",
    phone: "string",
    collection_date: new Date(),
    observation: "string",
    created_by: { id: 0, name: "asddas" },
    owner: { id: 0, name: "asddas" },
    public: 0,
  };

  return (
    <PDFViewer className="h-screen w-screen">
      <Report access={access} />
    </PDFViewer>
  );
};

export default Contact;

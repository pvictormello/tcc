import { PDFViewer } from "@react-pdf/renderer";
import ReportAll from "./ReportAll";
import { Role } from "@/types";

const Contact = () => {
  const users = [
    {
      id: 1,
      name: "Matheus Riguette",
      email: "matheus.f.riguette@gmail.com",
      city: "Uberlândia",
      country: "Brasil",
      state: "MG",
      password: "123",
      location: "Universidade",
      role: "Admin" as Role,
      parent_id: null,
    },
    {
      id: 27,
      name: "Pesquisador",
      email: "pesquisador@gmail.com",
      city: "Uberlândia",
      country: "Brasil",
      state: "MG",
      password: "123",
      location: "Universidade",
      role: "Researcher" as Role,
      parent_id: null,
    },
    {
      id: 28,
      name: "Aluno",
      email: "aluno@gmail.com",
      city: null,
      country: null,
      state: null,
      password: "123",
      location: null,
      role: "Student" as Role,
      parent_id: 27,
    },
  ];

  return (
    <PDFViewer className="h-screen w-screen">
      <ReportAll users={users} />
    </PDFViewer>
  );
};

export default Contact;

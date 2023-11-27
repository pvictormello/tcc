import { useTranslation } from "react-i18next";
import { IAccessImage } from "@/types";

const AccessImages = ({ images }: { images: IAccessImage[] }) => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto mt-8 w-2/3 overflow-hidden rounded-lg bg-white shadow">
      {images.length > 0 && (
        <table className="w-full">
          <thead className="border-b-2 border-slate-200 bg-white text-left text-xs font-medium uppercase tracking-wide text-slate-400">
            <tr>
              <th className="px-6 py-4">{t("Name")}</th>
              <th className="px-6 py-4 text-right">{t("Image")}</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {images.map((image) => (
              <tr className="border-t border-slate-200">
                <td className="px-6 py-4 text-slate-600">{image.name}</td>
                <td className="px-6 py-4 text-slate-600">
                  <div className="flex justify-end">
                    <img className="w-48" src={`/images/uploads/${image.name}`} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AccessImages;

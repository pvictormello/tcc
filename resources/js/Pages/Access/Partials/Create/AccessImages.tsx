import { PhotoIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { ChangeEventHandler, useState } from "react";
import { IAccessFormProps } from "@/types";
import Button from "@/Components/Button";
import ButtonGroup, { ButtonGroupItem } from "@/Components/ButtonGroup";

const AccessImages = ({ data, setData }: IAccessFormProps) => {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  const changeImage: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files) {
      setInputValue(e.target.value);
      setImage(e.target.files[0]);
    }
  };

  const uploadImage = () => {
    if (image) {
      let formData = new FormData();
      formData.append("image", image);

      axios.post("/acessos/imagens", formData).then((res) => {
        setInputValue("");
        setImage(null);
        setData("images", [...data.images, res.data.image]);
      });
    }
  };

  const deleteImage = (image: string) => {
    axios.delete("/acessos/imagens", { data: { image } }).then(() => {
      setData(
        "images",
        data.images.filter((item) => item !== image),
      );
    });
  };

  return (
    <div className="inline-flex flex-col lg:flex-row w-full gap-0 lg:gap-12">
      <div className="mx-auto mt-8 h-full w-full lg:w-1/2 xl:w-1/3 overflow-hidden rounded-lg bg-white p-6 shadow">
        <div className="flex flex-col gap-6">
          <div className="flex h-40 w-full flex-col items-center justify-center gap-4 rounded-lg border-4 border-dashed border-slate-200">
            <PhotoIcon className="h-12 w-12 text-slate-300" />

            <input
              className="block cursor-pointer bg-white text-sm text-slate-600 file:mr-2 file:rounded-lg file:border-0 file:bg-blue-50 file:px-2 file:py-1 file:text-xs file:font-semibold file:text-blue-800 hover:file:bg-blue-100"
              type="file"
              name="image"
              value={inputValue}
              onChange={changeImage}
            />
          </div>

          <Button size="full" onClick={() => uploadImage()}>
            {t("Upload")}
          </Button>
        </div>
      </div>

      {data.images.length > 0 && (
        <div className="mt-8 h-full w-full lg:w-1/2 xl:w-2/3 overflow-hidden rounded-lg bg-white shadow">
          <table className="w-full">
            <thead className="border-b-2 border-slate-200 bg-white text-left text-xs font-medium uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-6 py-4">{t("Name")}</th>
                <th className="px-6 py-4">{t("Image")}</th>
                <th className="px-6 py-4 text-right">{t("Actions")}</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {data.images.map((image) => (
                <tr className="border-t border-slate-200">
                  <td className="px-6 py-4 text-slate-600">{image}</td>
                  <td className="px-6 py-4 text-slate-600">
                    <img className="w-1/3" src={`/images/uploads/${image}`} />
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    <div className="flex justify-end">
                      <ButtonGroup>
                        <ButtonGroupItem label={t("Delete")} onClick={() => deleteImage(image)}>
                          <TrashIcon className="h-5 w-5 text-blue-600" />
                        </ButtonGroupItem>
                      </ButtonGroup>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AccessImages;

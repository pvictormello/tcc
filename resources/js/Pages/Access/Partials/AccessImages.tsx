import { PhotoIcon, TrashIcon } from "@heroicons/react/24/solid";
import { t } from "i18next";
import axios from "axios";
import { ChangeEventHandler, useState } from "react";
import { AccessFormProps } from "@/types";
import Button from "@/Components/Button";
import ButtonGroup, { ButtonGroupItem } from "@/Components/ButtonGroup";

const AccessImages = ({ data, setData }: AccessFormProps) => {
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
    setData(
      "images",
      data.images.filter((item) => item !== image),
    );
  };

  return (
    <div className="flex border-b border-gray-200 pb-8 gap-12">
      <div className="w-1/3">
        <div className="flex flex-col gap-6">
          <div className="flex h-40 w-full flex-col items-center justify-center gap-4 rounded-lg border-4 border-dashed border-gray-200">
            <PhotoIcon className="h-12 w-12 text-gray-300" />

            <input
              className="block cursor-pointer bg-white text-sm text-gray-600 file:mr-2 file:rounded-lg file:border-0 file:bg-blue-50 file:px-2 file:py-1 file:text-xs file:font-semibold file:text-blue-800 hover:file:bg-blue-100"
              type="file"
              name="image"
              value={inputValue}
              onChange={changeImage}
            />
          </div>

          <Button size="full" onClick={() => uploadImage()}>
            Enviar
          </Button>
        </div>
      </div>

      <div className="w-2/3">
        {data.images.length === 0 && (
          <div className="w-full rounded-md bg-blue-50 p-4 text-sm font-medium text-blue-800">
            Faça o upload das imagens ao lado
          </div>
        )}
        {data.images.length > 0 && (
          <table className="w-full">
            <thead className="border-b-2 border-gray-200 text-left text-sm font-semibold">
              <tr>
                <th className="px-3 py-4">Nome</th>
                <th className="px-3 py-4">Imagem</th>
                <th className="py-4 pl-3">Ações</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {data.images.map((image) => (
                <tr className="border-t border-gray-200">
                  <td className="px-3 py-4 text-gray-500">{image}</td>
                  <td className="px-3 py-4 text-gray-500">
                    <img className="w-32" src={`/images/uploads/${image}`} />
                  </td>
                  <td className="py-4 pl-3 text-gray-500">
                    <ButtonGroup>
                      <ButtonGroupItem label={t("Delete")} onClick={() => deleteImage(image)}>
                        <TrashIcon className="h-5 w-5 text-blue-600" />
                      </ButtonGroupItem>
                    </ButtonGroup>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AccessImages;

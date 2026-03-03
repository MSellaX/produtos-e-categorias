import createMulter from "../config/upload.multer.js";

const uploadImage = createMulter({
    pasta: "imagens",
    tiposPermitidos: ["image/jpeg", "image/png"],
    tamanhoArquivo: 10 * 1024 * 1024 //10MB
}).single('image');

export default uploadImage;
import axios from "axios";

const api = axios.create({
    baseURL: "https://67852c161ec630ca33a78e42.mockapi.io/",
});

export const obterVideos = async () => {
    try {
        const resposta = await api.get("/video");
        return resposta.data;
    } catch (error) {
        console.error("Erro ao buscar videos", error);
        throw new Error("Video(s) não obtido(s). Tente de novo");
    }
};

export const salvarVideos = async (video) => {
    try {
        const resposta = await api.post("/video", video);
        return resposta.data;
    } catch (error) {
        console.error("Não foi possivel criar vídeo", error);
        throw error;
    }
};

export const deletarVideo = async (videoId) => {
    try {
        const resposta = await api.delete(`/video/${videoId}`);
        return resposta.data;
    } catch (error) {
        console.error("Error ao deletar vídeo", error);
        throw error;
    }
};

export const atualizarVideo = async (videoId, updatedVideo) => {
    try {
        const resposta = await api.put(`/video/${videoId}`, updatedVideo);
        return resposta.data;
    } catch (error) {
        console.error("Erro ao atualizar vídeo", error);
        throw error;
    }
};

export default api;
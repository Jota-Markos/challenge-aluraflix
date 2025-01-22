import { createContext, useContext, useEffect, useState } from "react";

import {
  obterVideos,
  salvarVideos,
  deletarVideo,
  atualizarVideo,
} from "../Api/api";


const VideoContexto = createContext();

export const useVideoContexto = () => {
  return useContext(VideoContexto);
};

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videoDados = await obterVideos();
        setVideos(videoDados);
        setCarregando(false);
      } catch (error) {
        console.error("Error ao buscar videos", error);
        setCarregando(false);
      }
    };
    fetchVideos();
  }, []);

  const addVideo = async (videoNovo) => {
    try {
      const videosAdicionados = await salvarVideos(videoNovo);
      setVideos((prevVideos) => [...prevVideos, videosAdicionados]);
    } catch (error) {
      console.error("Erro ao adicionar vídeo", error);
    }
  };

  const delVideo = async (videoId) => {
    try {
      await deletarVideo(videoId);
      setVideos((prevVideos) =>
        prevVideos.filter((video) => video.id !== videoId)
      );
    } catch (error) {
      console.error("Erro ao deletar video", error);
    }
  };

  const upVideo = async (videoId, updatedVideo) => {
    try {
      const updatedData = await atualizarVideo(videoId, updatedVideo);
      setVideos((prevVideos) =>
        prevVideos.map((video) =>
          video.id === videoId ? { ...video, ...updatedData } : video
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar vídeo", error);
    }
  };


  const videoCategoria = {};

  videos.forEach((video) => {
    const category = video.categoria;
    if (!videoCategoria[category]) {
      videoCategoria[category] = [];
    }
    videoCategoria[category].push(video);
  });

  return (
    <VideoContexto.Provider
      value={{
        videos,
        carregando,
        videoCategoria,
        addVideo,
        upVideo,
        delVideo,
      }}
    >
      {children}
    </VideoContexto.Provider>
  );
};
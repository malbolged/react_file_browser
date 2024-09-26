import axios from "axios";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { NavBar } from "../nav-bar";
import { ContentTable } from "../content-table";
import { FilesApiResponse, IFileSystemItem } from "../../types";

const FILES_API_BASE_URL = "http://localhost:3109/api/v1/files?path";

const FileBrowser: React.FC = () => {
  const location = useLocation();
  const [pathContent, setPathContent] = useState<IFileSystemItem | null>(null);

  useEffect(() => {
    axios
      .get<FilesApiResponse>(`${FILES_API_BASE_URL}=${location.pathname}`)
      .then((response) => {
        if (response.data.success && response.data.result) {
          setPathContent(response.data.result ?? null);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);

        setPathContent(null);
      });
  }, [location.pathname]);

  return (
    <div>
      <NavBar />

      <ContentTable pathContent={pathContent} baseUrl={FILES_API_BASE_URL} />
    </div>
  );
};

export { FileBrowser };

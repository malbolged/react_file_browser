import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./ContentTable.css";

import { IFileSystemItem, isFolder } from "../../types";

interface ContentTableProps {
  pathContent: IFileSystemItem | null;
  baseUrl: string;
}

const ContentTable: React.FC<ContentTableProps> = ({
  pathContent,
  baseUrl,
}) => {
  const location = useLocation();

  console.log(pathContent);

  return pathContent != null &&
    isFolder(pathContent) &&
    pathContent.content.length > 0 ? (
    <table>
      <tbody>
        <tr className="t-head">
          <th>Name</th>
          <th>Path</th>
        </tr>

        {isFolder(pathContent) &&
          pathContent?.content.map((item, index) => (
            <tr key={index}>
              <td>
                {isFolder(item) ? (
                  <Link
                    to={`${location.pathname === "/" ? "" : location.pathname}/${item.name}`}
                  >
                    📁 {item.name}
                  </Link>
                ) : (
                  <a href={baseUrl + "=" + item.path} target="_blank">
                    📄 {item.name}
                  </a>
                )}
              </td>
              <td>{item.path}</td>
            </tr>
          ))}
      </tbody>
    </table>
  ) : (
    <div>This Folder is empty</div>
  );
};

export { ContentTable };

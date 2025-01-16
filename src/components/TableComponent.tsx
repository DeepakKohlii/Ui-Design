import React from "react";
import {
  FaLinkedin,
  FaExclamationTriangle,
} from "react-icons/fa"; // Import icons

import inputColumn from "../assets/input-column.svg";
import actionColumn from "../assets/action-column.svg";
import enrichColumn from "../assets/enrich-column.svg";
import plusSign from "../assets/plus.svg";
import logoMark from "../assets/Logomark.svg";
import bmwLogo from "../assets/bmw.svg";
import googleLogo from "../assets/google.svg";
import appleLogo from "../assets/apple.svg";
import figmaLogo from "../assets/figma.svg";
import playLogo from "../assets/play.svg";
import alertTriangle from "../assets/alert-triangle.svg";
import loading from "../assets/loading.svg";

const TableComponent = () => {
  const rows = [
    {
      date: "Oct 12, 2024 at 14:08 PM",
      action: "Bitscale Evaluation - Account relevance",
      company: "Bitscale Evaluation - Account relevance",
      note: "",
    },
    {
      date: "Oct 12, 2024 at 14:08 PM",
      action: "cell data size exceeds limit",
      company: "BMW Evaluation - Relevancy check",
      note: "",
      isWarning: true,
    },
    {
      date: "Oct 12, 2024 at 14:08 PM",
      action: "https://www.linkedin.com/bitScale.ai/sample?_l=en_US",
      company: "Google Evaluation - Liveancy check",
      note: "",
      isLink: true,
    },
    {
      date: "Oct 12, 2024 at 14:08 PM",
      action: "Loading data, Please wait",
      company: "Apple Evaluation - Olvancy check",
      note: "",
    },
    {
      date: "Oct 12, 2024 at 14:08 PM",
      action: "Loading data, Please wait",
      company: "Figma Evaluation - Evancy check",
      note: "",
    },
  ];

  interface Row {
    date: string;
    action: string;
    company: string;
    note: string;
    isWarning?: boolean;
    isLink?: boolean;
  }


  const truncateText = (text: string, length: number): string => {
    if (text.length > length) {
      return text.substring(0, length) + "...";
    }
    return text;
  };

  const getIcon = (company: string) => {
    switch (company) {
      case "Bitscale Evaluation - Account relevance":
        return (
          <img
            src={logoMark}
            alt="input column"
            className="inline-block mr-2"
          />
        );
      case "BMW Evaluation - Relevancy check":
        return (
          <img src={bmwLogo} alt="input column" className="inline-block mr-2" />
        );
      case "Google Evaluation - Liveancy check":
        return (
          <img
            src={googleLogo}
            alt="input column"
            className="inline-block mr-2"
          />
        );
      case "Apple Evaluation - Olvancy check":
        return (
          <img
            src={appleLogo}
            alt="input column"
            className="inline-block mr-2"
          />
        );
      case "Figma Evaluation - Evancy check":
        return (
          <img
            src={figmaLogo}
            alt="input column"
            className="inline-block mr-2"
          />
        );
    }
  };


  const getActionIcon = (action: string) => {
    if (action.includes("https://www.linkedin.com/bitScale.ai/sample?_l=en_US")) {
      return <FaLinkedin className="inline-block mr-2 text-blue-500" />;
    } else if (action.includes("exceeds limit")) {
      return (
        <img src={alertTriangle} alt="alert" className="inline-block mr-2" />
      );
    } else if (action.includes("Loading data")) {
      return <img src={loading} alt="loading" className="inline-block mr-2" />;
    }
    return null;
  };

  return (
    <div className="overflow-auto">
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left bg-[#F6F6F6]"></th>
            <th className="border border-gray-300 px-4 py-2 text-left bg-[#F6F6F6]"></th>
            <th className="border border-gray-300 px-4 py-2 text-left bg-[#FEF2C7]">
              <img
                src={inputColumn}
                alt="input column"
                className="inline-block mr-2"
              />
              Input Column
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left bg-[#F6F6F6]">
              <img
                src={actionColumn}
                alt="input column"
                className="inline-block mr-2"
              />
              Action Column
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left bg-[#F6F6F6]">
              <img
                src={enrichColumn}
                alt="input column"
                className="inline-block mr-2 w-4 h-4"
              />
              Enrich Company
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left bg-[#F6F6F6]">
              <img
                src={plusSign}
                alt="input column"
                className="inline-block mr-2 w-6 h-6"
              />
              Add Column
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td className="border border-gray-300 py-2 text-center">
                {index + 1}
              </td>
              <td className="border border-gray-300 py-2 text-center">
                <img
                  src={playLogo}
                  alt="input column"
                  className="inline-block w-6 h-6"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">{row.date}</td>
              <td
                className={`border border-gray-300 px-4 py-2 ${
                  row.action.includes("Loading data") ||
                  row.action.includes("exceeds limit")
                    ? "italic text-[#374151]"
                    : ""
                }`}
              >
                {getActionIcon(row.action)}{" "}
                {row.isLink ? (
                  <a
                    href="https://www.linkedin.com/bitScale.ai/sample?_l=en_US"
                    className="text-blue-500 underline"
                  >
                    {truncateText(row.action, 36)} 
                  </a>
                ) : (
                  truncateText(row.action, 36) 
                )}
              </td>
              <td className="border border-gray-300 px-4 py-2 w-auto">
                {getIcon(row.company)} {truncateText(row.company, 36)}
              </td>
              <td className="border border-gray-300 px-4 py-2">{row.note}</td>
            </tr>
          ))}
          <tr>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2">
              <img
                src={plusSign}
                alt="input column"
                className="inline-block mr-2 w-6 h-6"
              />
              Add Row
            </td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;

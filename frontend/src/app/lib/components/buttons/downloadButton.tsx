import { DownloadButtonProps } from "./types";

const DownloadButton: React.FC<DownloadButtonProps> = ({ title, filePath }) => {
  return (
    <a href={filePath} download>
      <button>{title}</button>
    </a>
  );
};
  
  export default DownloadButton;
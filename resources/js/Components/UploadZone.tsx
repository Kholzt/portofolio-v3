import React, { useState, ChangeEvent, useId } from "react";

interface UploadZoneProps {
    accept?: string; // Accepted file types, e.g., "image/*"
    onFileChange?: (file: File | null) => void; // Callback when file changes
    className?: string; // Custom styles for the drop zone
}

interface FileWithPreview {
    file: File | null;
    preview: string | null;
    name: string | null;
}

const UploadZone: React.FC<UploadZoneProps> = ({
    accept = "image/*", // Only accept images by default
    onFileChange,
    className = "",
}) => {
    const [fileWithPreview, setFileWithPreview] = useState<FileWithPreview>({
        file: null,
        preview: null,
        name: null,
    });

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files || event.target.files.length === 0) {
          setFileWithPreview({ file: null, preview: null, name: null });
          if (onFileChange) {
            onFileChange(null);
          }
          return;
        }

        const selectedFile = event.target.files[0];

        const newFileWithPreview = {
            file: selectedFile,
            preview: URL.createObjectURL(selectedFile),
            name: selectedFile.name,
        };

        setFileWithPreview(newFileWithPreview);

        if (onFileChange) {
            onFileChange(selectedFile);
        }
    };

    const handleRemoveFile = () => {
        if (fileWithPreview.preview) {
            URL.revokeObjectURL(fileWithPreview.preview);
        }
        setFileWithPreview({ file: null, preview: null, name: null });
        if (onFileChange) {
            onFileChange(null);
        }
    };

    const inputId = useId();

    return (
        <div
            className={`flex flex-col items-center p-6 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 ${className}`}
        >
            <label
                htmlFor={inputId}
                className="cursor-pointer flex flex-col items-center justify-center w-full h-32 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
                <svg
                    className="w-10 h-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16V12M7 12V8M7 12H11M5 20H19C20.105 20 21 19.105 21 18V6C21 4.895 20.105 4 19 4H5C3.895 4 3 4.895 3 6V18C3 19.105 3.895 20 5 20Z"
                    ></path>
                </svg>
                <span className="text-gray-500 text-sm mt-2">
                    Drag & drop image here, or click to select
                </span>
                <input
                    id={inputId}
                    type="file"
                    accept={accept}
                    className="hidden"
                    onChange={handleFileChange}
                />
            </label>

            <div className="mt-4 w-full">
                {fileWithPreview.preview && (
                    <div className="flex items-center justify-between p-2 bg-white border border-gray-200 rounded-lg shadow-sm">
                        <div className="flex items-center space-x-4">
                            <img
                                src={fileWithPreview.preview}
                                className="w-12 h-12 object-cover rounded-lg"
                            />
                            <div>
                                <p className="text-sm font-medium text-gray-700">
                                    {fileWithPreview.name}
                                </p>
                                {fileWithPreview.file && (
                                  <p className="text-xs text-gray-500">
                                      {(
                                          fileWithPreview.file.size / 1024
                                      ).toFixed(2)}{" "}
                                      KB
                                  </p>
                                )}
                            </div>
                        </div>
                        <button
                            onClick={handleRemoveFile}
                            className="text-red-500 hover:text-red-700 focus:outline-none"
                        >
                            Remove
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UploadZone;

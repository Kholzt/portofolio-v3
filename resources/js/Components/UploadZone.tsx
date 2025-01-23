import React, { useState, ChangeEvent } from "react";

interface UploadZoneProps {
    accept?: string; // Accepted file types, e.g., "image/*"
    maxFiles?: number; // Maximum number of files
    onFilesChange?: (files: { file: File; name: string }[]) => void; // Callback when files change
    className?: string; // Custom styles for the drop zone
}

interface FileWithPreview {
    file: File;
    preview: string;
    name: string;
}

const UploadZone: React.FC<UploadZoneProps> = ({
    accept = "*/*",
    maxFiles = 5,
    onFilesChange,
    className = "",
}) => {
    const [files, setFiles] = useState<FileWithPreview[]>([]);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;

        const selectedFiles = Array.from(event.target.files).map((file) => ({
            file,
            preview: URL.createObjectURL(file),
            name: file.name,
        }));

        const newFiles = [...files, ...selectedFiles].slice(0, maxFiles);
        setFiles(newFiles);

        // Trigger the callback with the files and their names
        if (onFilesChange) {
            onFilesChange(newFiles.map(({ file, name }) => ({ file, name })));
        }
    };

    const handleRemoveFile = (index: number) => {
        setFiles((prevFiles) => {
            // Revoke URL for memory management
            URL.revokeObjectURL(prevFiles[index].preview);
            const updatedFiles = prevFiles.filter((_, i) => i !== index);

            // Trigger the callback with the updated files
            if (onFilesChange) {
                onFilesChange(
                    updatedFiles.map(({ file, name }) => ({ file, name }))
                );
            }

            return updatedFiles;
        });
    };

    return (
        <div
            className={`flex flex-col items-center p-6 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 ${className}`}
        >
            <label
                htmlFor="file-upload"
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
                    Drag & drop files here, or click to select
                </span>
            </label>
            <input
                id="file-upload"
                type="file"
                multiple
                accept={accept}
                className="hidden"
                onChange={handleFileChange}
            />

            <div className="mt-4 w-full">
                {files.length > 0 && (
                    <ul className="space-y-2">
                        {files.map((fileWithPreview, index) => (
                            <li
                                key={index}
                                className="flex items-center justify-between p-2 bg-white border border-gray-200 rounded-lg shadow-sm"
                            >
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={fileWithPreview.preview}
                                        alt={fileWithPreview.name}
                                        className="w-12 h-12 object-cover rounded-lg"
                                    />
                                    <div>
                                        <p className="text-sm font-medium text-gray-700">
                                            {fileWithPreview.name}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            {(
                                                fileWithPreview.file.size / 1024
                                            ).toFixed(2)}{" "}
                                            KB
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleRemoveFile(index)}
                                    className="text-red-500 hover:text-red-700 focus:outline-none"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default UploadZone;

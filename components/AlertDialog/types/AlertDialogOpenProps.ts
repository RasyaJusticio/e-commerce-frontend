import React from "react";

export type AlertDialogOpenProps = {
  title: string;
  description?: string;

  cancelLabel?:
    | ((
        setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
      ) => React.JSX.Element | React.ReactNode)
    | string;
  actionLabel?:
    | ((
        setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
      ) => React.JSX.Element | React.ReactNode)
    | string;

  onAction?: (setIsOpen: React.Dispatch<React.SetStateAction<boolean>>) => void;
};

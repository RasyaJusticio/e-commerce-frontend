import React, { createContext, useContext, useState } from "react";
import AlertDialog from "../components/AlertDialog";
import { AlertDialogOpenProps } from "../types/alertDialogOpenProps";

const AlertDialogContext = createContext<{
  open: (props: AlertDialogOpenProps) => void;
}>({} as any);

const useAlertDialog = () => useContext(AlertDialogContext);

const AlertDialogProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [props, setProps] = useState<AlertDialogOpenProps>();

  const open = (props: AlertDialogOpenProps) => {
    setIsOpen(true);

    setProps((_) => props);
  };

  return (
    <AlertDialogContext.Provider value={{ open }}>
      <AlertDialog isOpen={isOpen} setIsOpen={setIsOpen} props={props} />
      {children}
    </AlertDialogContext.Provider>
  );
};

export { useAlertDialog, AlertDialogProvider };
